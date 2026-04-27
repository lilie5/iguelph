
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
    'index.csr.html': {size: 1181, hash: '8e8f5fb02c1175e1f923ebdf13a7cd748136b1b4a7723d6f250cec8d77602bf0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1538, hash: '7e0ad7b713ba197879644357afb4d4e92284b564450d3eb4127f556d13947239', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'sponsors/index.html': {size: 48856, hash: 'e1ab738eb8c04241a3b272bd44e99b5c6325e918333e88270e957985b97c8fd5', text: () => import('./assets-chunks/sponsors_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 97389, hash: '2505d85d0d9ce54af6b22ae9937ce3b272ae62869c4999e19ef56d39423e2515', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 88289, hash: '6d21480693afefb32d2cb80d78bc20a6a8a36943d08a931cad7c8ac9edb4c832', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'index.html': {size: 99676, hash: 'd95617ff864485975fd10414b114b72f5ccb5ad53e75b6434392dc453aa2ffe7', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'recruitment/index.html': {size: 124920, hash: '7b3036ace13f416226c037091835adddb4bc5878c7e278af5172c238806e18a7', text: () => import('./assets-chunks/recruitment_index_html.mjs').then(m => m.default)},
    'styles-P7RFJIQM.css': {size: 7401, hash: '9HXNwc73a5M', text: () => import('./assets-chunks/styles-P7RFJIQM_css.mjs').then(m => m.default)}
  },
};
