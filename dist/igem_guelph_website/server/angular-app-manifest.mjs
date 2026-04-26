
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/about"
  },
  {
    "renderMode": 2,
    "route": "/projects"
  },
  {
    "renderMode": 2,
    "route": "/sponsors"
  },
  {
    "renderMode": 2,
    "route": "/recruitment"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1182, hash: '16a66320742faeb9bf3fc82beec9dae358cfb35946c2e3a01f0fd89d269c7037', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1539, hash: 'db6996784b0de64679d060ae1faa1cf42d46f8b972e8aac6984bdae156d5b106', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'sponsors/index.html': {size: 49040, hash: '140a53f87f0496995c1600fad5803583ba94d59254890a0db99e01ad1536e2fc', text: () => import('./assets-chunks/sponsors_index_html.mjs').then(m => m.default)},
    'index.html': {size: 99860, hash: 'a49419c42d260319e0e1180500c370e1b9270c47fc338b1bc127994c9d8d8f02', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 88473, hash: '2f169be6d441a60039836ca535d66ce0ddaccbc6ce2af17e15433ceda772f128', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 97573, hash: 'b33eab18cd76e594510fd9f1261855f3b7bc98d61b411d34e0c2d1516cefa273', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'recruitment/index.html': {size: 125100, hash: '8ed6106930d0a6d035746b82162d5c7831dbfbbd97701471cbc15039ae4bbf8c', text: () => import('./assets-chunks/recruitment_index_html.mjs').then(m => m.default)},
    'styles-P7RFJIQM.css': {size: 7401, hash: '9HXNwc73a5M', text: () => import('./assets-chunks/styles-P7RFJIQM_css.mjs').then(m => m.default)}
  },
};
