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

function layout(html, fm, baseHref='/', breadcrumbs=''){
  const lay = read(path.join(TPL, 'layout.html'));
  const header = read(path.join(TPL, 'partials', 'header.html'));
  const footer = read(path.join(TPL, 'partials', 'footer.html'));
  const crumbTplPath = path.join(TPL, 'partials', 'breadcrumbs.html');
  const crumbTpl = fs.existsSync(crumbTplPath) ? read(crumbTplPath) : '{{CRUMBS}}';
  const crumbHtml = crumbTpl.replace('{{CRUMBS}}', breadcrumbs);
  let out = lay
    .replace('{{TITLE}}', fm.title || 'Passive Web')
    .replace('{{DESCRIPTION}}', fm.description || '')
    .replace('{{HEADER}}', header)
    .replace('{{BREADCRUMBS}}', crumbHtml)
    .replace('{{FOOTER}}', footer)
    .replace('{{CONTENT}}', html)
    .replace(/\{\{BASE\}\}/g, baseHref);
  return out;
}

function buildIndex(posts){
  const items = posts.map(p=>`<li><a href="${p.url}">${p.title}</a> — ${p.description||''}</li>`).join('\n');
  const html = `<h1>Articles</h1><ul>${items}</ul>`;
  const breadcrumbs = makeBreadcrumbs({title:'Home'}, '');
  write(path.join(PUBLIC, 'index.html'), layout(html, {title:'Home', description:'Passive content site'}, '/', breadcrumbs));
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
  for (const f of files){
    const md = read(path.join(CONTENT, f));
    const {data, content} = matter(md);
    const slug = data.slug || slugify((data.title||f).toString(), {lower:true, strict:true});
    const html = marked.parse(content);
    const crumbs = makeBreadcrumbs(data, slug);
    const page = layout(
      `<article><h1>${data.title||''}</h1>${html}<p><a class="btn" href="https://paypal.me/FlaviusEduard98" target="_blank" rel="noopener">Cumpară / Donează</a></p></article>`,
      data,
      '/',
      crumbs
    );
    const outPath = path.join(PUBLIC, slug, 'index.html');
    write(outPath, page);
    posts.push({title:data.title||slug, description:data.description||'', url: `${slug}/`});
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
