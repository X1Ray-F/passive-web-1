#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { marked } = require('marked');
const mkdirp = require('mkdirp');
const slugify = require('slugify');

const ROOT = process.cwd();
const CONTENT = path.join(ROOT, 'content');
const PUBLIC = path.join(ROOT, 'public');
const TPL = path.join(ROOT, 'templates');

function read(p){return fs.readFileSync(p, 'utf8')}
function write(p, s){mkdirp.sync(path.dirname(p)); fs.writeFileSync(p, s)}

function makeBreadcrumbs(fm, slug){
  const title = fm.title || slug || 'Page';
  const section = fm.section ? ` / <span>${fm.section}</span>` : '';
  return `<nav class="breadcrumbs"><a href="/">Home</a>${section} / <span>${title}</span></nav>`;
}

function guessCategory(fm, slug){
  const s = ((fm.section || fm.title || slug || '').toLowerCase());
  const tests = [
    {cat:'eSIM', keys:['esim','apn','carrier','travel']},
    {cat:'Freelance Templates', keys:['invoice','calendar','crm','planner','quote','project','template']},
    {cat:'3D Printing', keys:['ender','print','nozzle','bed','pla','petg','abs','bridge','warp','string','slicer']},
  ];
  for (const t of tests){
    if (t.keys.some(k=>s.includes(k))) return t.cat;
  }
  return 'General';
}

function renderSidebar(latest){
  const list = latest.map(p=>`<li><a href="/${p.url}">${p.title}</a></li>`).join('');
  return `<div class="sidebar-block"><h3>Latest</h3><ul>${list}</ul></div>
  <div class="sidebar-block"><h3>Popular</h3><ul>${list}</ul></div>`;
}

function layout(html, fm, baseHref='/', breadcrumbs='', sidebar=''){
  const lay = read(path.join(TPL, 'layout.html'));
  const header = read(path.join(TPL, 'partials', 'header.html'));
  const footer = read(path.join(TPL, 'partials', 'footer.html'));
  const crumbTplPath = path.join(TPL, 'partials', 'breadcrumbs.html');
  const crumbTpl = fs.existsSync(crumbTplPath) ? read(crumbTplPath) : '{{CRUMBS}}';
  const crumbHtml = crumbTpl.replace('{{CRUMBS}}', breadcrumbs);
  const sidebarTplPath = path.join(TPL, 'partials', 'sidebar.html');
  const sidebarTpl = fs.existsSync(sidebarTplPath) ? read(sidebarTplPath) : '{{SIDEBAR}}';
  const hasSidebar = sidebar && sidebar.trim().length>0;
  const sidebarHtml = hasSidebar ? sidebarTpl.replace('{{SIDEBAR}}', sidebar) : '';
  const layoutClass = hasSidebar ? '' : 'no-sidebar';
  let out = lay
    .replace('{{TITLE}}', fm.title || 'Passive Web')
    .replace('{{DESCRIPTION}}', fm.description || '')
    .replace('{{HEADER}}', header)
    .replace('{{BREADCRUMBS}}', crumbHtml)
    .replace('{{LAYOUT_CLASS}}', layoutClass)
    .replace('{{SIDEBAR}}', sidebarHtml)
    .replace('{{FOOTER}}', footer)
    .replace('{{CONTENT}}', html)
    .replace(/\{\{BASE\}\}/g, baseHref);
  return out;
}

function buildIndex(posts){
  // controls (hero + search + category chips)
  const controls = `
  <section class="home-hero">
    <h1>Useful guides and templates</h1>
    <p>3D printing, eSIM travel, and freelancer templates. Quick, practical, free to read.</p>
    <div class="home-cta">
      <a class="btn" href="/products/">View Products</a>
      <a class="btn btn-ghost" href="/about/">About</a>
    </div>
    <div class="home-filters">
      <input id="q" type="search" placeholder="Search articles…" />
      <div class="chips">
        <button data-cat="all" class="chip active">All</button>
        <button data-cat="3D Printing" class="chip">3D Printing</button>
        <button data-cat="eSIM" class="chip">eSIM</button>
        <button data-cat="Freelance Templates" class="chip">Freelance</button>
      </div>
    </div>
  </section>`;

  // try infer simple categories from URL
  const withCat = posts.map(p=>{
    const u = (p.url||'').toLowerCase();
    let category = 'General';
    if (u.includes('esim')) category = 'eSIM';
    else if (u.includes('ender') || u.includes('pla') || u.includes('petg') || u.includes('print')) category = '3D Printing';
    else if (u.includes('template') || u.includes('crm') || u.includes('planner') || u.includes('invoice') || u.includes('quote')) category = 'Freelance Templates';
    return {...p, category};
  });

  const cards = withCat.map(p=>`
    <article class="card" data-cat="${p.category}">
      <div class="card-body">
        <h2 class="card-title"><a href="/${p.url}">${p.title}</a></h2>
        <p class="card-desc">${p.description||''}</p>
      </div>
      <div class="card-footer"><span class="badge">${p.category}</span></div>
    </article>
  `).join('\n');

  const script = `
  <script>
    (function(){
      const q = document.getElementById('q');
      const chips = document.querySelectorAll('.chip');
      let cat='all';
      function apply(){
        const term=(q&&q.value||'').toLowerCase();
        document.querySelectorAll('.card').forEach(el=>{
          const text=(el.textContent||'').toLowerCase();
          const okText = !term || text.includes(term);
          const okCat = cat==='all' || el.getAttribute('data-cat')===cat;
          el.style.display = (okText && okCat)? 'block':'none';
        });
      }
      q && q.addEventListener('input', apply);
      chips.forEach(c=>c.addEventListener('click', function(){
        chips.forEach(x=>x.classList.remove('active'));
        this.classList.add('active');
        cat=this.getAttribute('data-cat');
        apply();
      }));
      apply();
    })();
  </script>`;

  const pagerScript = `
  <script>
    (function(){
      const cards=[...document.querySelectorAll('.card')];
      const pageSize=30;
      if(cards.length<=pageSize) return;
      let shown=pageSize;
      cards.forEach((c,i)=>{ if(i>=shown) c.style.display='none';});
      const btn=document.createElement('button');
      btn.textContent='Show more';
      btn.className='btn';
      btn.onclick=()=>{shown+=pageSize; cards.forEach((c,i)=>{ if(i<shown) c.style.display='';}); if(shown>=cards.length) btn.remove();};
      const pager=document.createElement('div');
      pager.className='pager';
      pager.appendChild(btn);
      document.querySelector('.grid').after(pager);
    })();
  </script>`;

  const html = `${controls}<section class="grid">${cards}</section>${script}${pagerScript}`;
  const breadcrumbs = makeBreadcrumbs({title:'Home'}, '');
  const sidebar = renderSidebar(posts.slice(0,6));
  write(path.join(PUBLIC, 'index.html'), layout(html, {title:'Home', description:'Guides for 3D printing, eSIM travel, and freelancer templates'}, '/', breadcrumbs, sidebar));
}

function buildSitemap(posts){
  const urls = ['<url><loc>{{BASE}}/</loc></url>'].concat(posts.map(p=>`<url><loc>{{BASE}}/${p.url}</loc></url>`)).join('');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;
  write(path.join(PUBLIC, 'sitemap.xml'), xml);
}

function writeRobots(){
  const robots = `User-agent: *\nAllow: /\nSitemap: https://cosmic-fox-d599ef.netlify.app/sitemap.xml\n`;
  write(path.join(PUBLIC, 'robots.txt'), robots);
}

function processAll(){
  const posts = [];
  if (!fs.existsSync(CONTENT)) mkdirp.sync(CONTENT);
  const files = fs.readdirSync(CONTENT).filter(f=>f.endsWith('.md'));
  files.sort((a,b)=>fs.statSync(path.join(CONTENT,b)).mtimeMs - fs.statSync(path.join(CONTENT,a)).mtimeMs);
  for (const f of files){
    const md = read(path.join(CONTENT, f));
    const {data, content} = matter(md);
    const slug = data.slug || slugify((data.title||f).toString(), {lower:true, strict:true});
    const html = marked.parse(content);
    const category = data.category || guessCategory(data, slug);
    const badge = `<span class="badge category">${category}</span>`;
    const crumbs = makeBreadcrumbs(data, slug);
    const latestSidebar = renderSidebar(files.slice(0,6).map(ff=>{
      const md2 = read(path.join(CONTENT, ff));
      const {data: d2} = matter(md2);
      const s2 = d2.slug || slugify((d2.title||ff).toString(), {lower:true, strict:true});
      return {title:d2.title||s2, url:`${s2}/`};
    }));
    const pageHtml = `<article><h1>${data.title||''}</h1>${badge}${html}<p><a class="btn" href="https://paypal.me/FlaviusEduard98" target="_blank" rel="noopener">Cumpară / Donează</a></p></article>`;
    const allowSidebar = data.sidebar !== false && slug !== 'products' && slug !== 'about';
    const page = layout(
      pageHtml,
      data,
      '/',
      crumbs,
      allowSidebar ? latestSidebar : ''
    );
    const outPath = path.join(PUBLIC, slug, 'index.html');
    write(outPath, page);
    posts.push({title:data.title||slug, description:data.description||'', url: `${slug}/`, category, mtime: fs.statSync(path.join(CONTENT,f)).mtimeMs});
  }
  buildIndex(posts);
  buildSitemap(posts);
  writeRobots();
  // copy assets
  if (fs.existsSync(path.join(ROOT,'assets'))){
    fs.cpSync(path.join(ROOT,'assets'), path.join(PUBLIC,'assets'), {recursive:true});
  }
}

function watch(){
  console.log('Watching content/ and templates/ ...');
  fs.watch(CONTENT, {recursive:true}, debounce(processAll, 200));
  fs.watch(TPL, {recursive:true}, debounce(processAll, 200));
}

function debounce(fn, ms){let t; return (...a)=>{clearTimeout(t); t=setTimeout(()=>fn(...a), ms);}};

processAll();
if (process.argv.includes('--watch')) watch();
