
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
    'index.csr.html': {size: 1181, hash: '2e124cc37398794902811912869b9a73efad43de4024e71104b64c255b5891b9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1538, hash: 'e34845ef8a4373cdcef8d52a24bd5316a663e215b4f955b59d939f681d77aa0c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'sponsors/index.html': {size: 47733, hash: 'c92060c3da6203125b47b8ddbc6af1b0e04abdef7a419b94217479c35566aaa5', text: () => import('./assets-chunks/sponsors_index_html.mjs').then(m => m.default)},
    'index.html': {size: 97138, hash: 'ef6c7a7a3e0423b810aa7ec04b18691cb523d0284e21ac66c5798adcb2019f41', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 86106, hash: '7f98827de6c89569b4871c97fb6a505bcd9cb0e08f0571e91b264d2a04960134', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 95202, hash: '8d6d94c318a7af50052d0b155aacd77a7ad437a97fa5a7ba90dde74b339f4140', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'recruitment/index.html': {size: 120317, hash: '61594907fb2a81bb0e16ec1aacaca54e8bc7ebbde0b52b9ed5958e4b70b44962', text: () => import('./assets-chunks/recruitment_index_html.mjs').then(m => m.default)},
    'styles-P7RFJIQM.css': {size: 7401, hash: '9HXNwc73a5M', text: () => import('./assets-chunks/styles-P7RFJIQM_css.mjs').then(m => m.default)}
  },
};
