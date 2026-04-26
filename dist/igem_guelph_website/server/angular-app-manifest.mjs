
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/iguelph/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/iguelph"
  },
  {
    "renderMode": 2,
    "route": "/iguelph/about"
  },
  {
    "renderMode": 2,
    "route": "/iguelph/projects"
  },
  {
    "renderMode": 2,
    "route": "/iguelph/sponsors"
  },
  {
    "renderMode": 2,
    "route": "/iguelph/recruitment"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1216, hash: 'd78e2eb474952f3f3ede80ae370e1e66c9da5611c3628df93eb3b1a9c6e3c9c1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1564, hash: 'd8c24e93524ac91e0ada64e353d52a316980c699ba6fda96a1d356efb487e028', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'sponsors/index.html': {size: 48923, hash: '0b8749a951c5157974462cfa773421be224c0125df3ce926e6f3b3b8f9f50e34', text: () => import('./assets-chunks/sponsors_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 88388, hash: '4eb30321230e33597a1dcfdbcfb2e8070f8d783cdbd23491151774aa98a87aa5', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'index.html': {size: 99759, hash: 'd91e228e255b415dcb2dea116ade9cbc5caefc99f962d980304b604b6edf27d3', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 97456, hash: '34daba66d4e9632ab738d8418dc371b345a552d712e6fdbb163c5b51f04c0c89', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'recruitment/index.html': {size: 124983, hash: '96e7dfce7a0085f8fad4831ad3ba51f3ce7fe1861fc79911aef424d69c962782', text: () => import('./assets-chunks/recruitment_index_html.mjs').then(m => m.default)},
    'styles-P7RFJIQM.css': {size: 7401, hash: '9HXNwc73a5M', text: () => import('./assets-chunks/styles-P7RFJIQM_css.mjs').then(m => m.default)}
  },
};
