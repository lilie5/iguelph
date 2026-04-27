
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
    'index.csr.html': {size: 1181, hash: '25a85589214f29968ffe50dc1bfa0574abe203ea692c0e5cf1c48dbc9582bb2a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1538, hash: '2a41e134969e5b06da5b2d5542df0abc565272b8bdf26eca23993aedbcaa5c8f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'sponsors/index.html': {size: 48856, hash: '32f57c66a0c0425af27f01ed0a4cb37197f7afa5ffb5bcfddc75014e2781c213', text: () => import('./assets-chunks/sponsors_index_html.mjs').then(m => m.default)},
    'index.html': {size: 99676, hash: '2c53999b42c424192361a75c21ba218a5ea43a49b25ab8ea62e9155f96279891', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 88289, hash: '842629f819b7a6f4a05115f8839214316f13768a8ce3638cbcade5467809cae9', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 97389, hash: '179eccd524351f857040aa1c505c8b52d742fd2a3de3f100f4ccdbd6d784e59a', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'recruitment/index.html': {size: 124923, hash: '7819f0dffad7b0f9c6d22ad417063373d8bb73b47758817fff13e0a86894560b', text: () => import('./assets-chunks/recruitment_index_html.mjs').then(m => m.default)},
    'styles-P7RFJIQM.css': {size: 7401, hash: '9HXNwc73a5M', text: () => import('./assets-chunks/styles-P7RFJIQM_css.mjs').then(m => m.default)}
  },
};
