
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
    'index.csr.html': {size: 1181, hash: 'f3592b849dc4626f99dfcc21a5b63790ad92f65247c282b83835ce010e40742e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1538, hash: 'cac8a831c5a3cc988eeaaec907cbbd32d37619dffb6997f8508defc214a1bec5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'sponsors/index.html': {size: 47733, hash: '2065edf0968e7496d4310dc7a0584b3f3f4afe37f5bec59338780a49a6a675a8', text: () => import('./assets-chunks/sponsors_index_html.mjs').then(m => m.default)},
    'index.html': {size: 97138, hash: '871274a36a012c00ec29c51fe66b85880fc02baabbe7a783ca01bf7601ab89e5', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 86106, hash: '17a349c1808451dd11bcfc90ae22155fc4e79aa6daa115acad6a75c5620551bd', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 95202, hash: '06f8c3b2e2244dffc7284dc3105542feea37b943106748b9c7e76a9c7216e894', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'recruitment/index.html': {size: 120322, hash: '43a428e6326e874df5dadf3255d9d936f4b30c9c55c76d0734eb8cb37c41010a', text: () => import('./assets-chunks/recruitment_index_html.mjs').then(m => m.default)},
    'styles-P7RFJIQM.css': {size: 7401, hash: '9HXNwc73a5M', text: () => import('./assets-chunks/styles-P7RFJIQM_css.mjs').then(m => m.default)}
  },
};
