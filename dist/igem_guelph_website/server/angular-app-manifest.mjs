
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
    'index.csr.html': {size: 1181, hash: 'e50ad17975c89006392cc98e86a600e1c2979e6ee9d142775df4adc1c33bd42e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1538, hash: 'e41600bc0d659bb69fd5a14807154bcf2116e087259d8903f95a6c11aa2afc06', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 95202, hash: '1e7f7c07798442c63ffc5c12703f2096795f57ffe9b174edccab93f55071fecb', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 86106, hash: '8c5ebbf96bdc145d57b66efe1fef71a81a6c3041d717df19cfbbbf97492f86f6', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'sponsors/index.html': {size: 47733, hash: '6ba0376aae636a0b1978db27c6a945b5eef87d0a9835dc4d3a9eb337350ec4f5', text: () => import('./assets-chunks/sponsors_index_html.mjs').then(m => m.default)},
    'index.html': {size: 97138, hash: 'de39a22ee7b49ab10932cc29d0a89d3cb3e93495fc5ce5ba983d19b3ba0eccd0', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'recruitment/index.html': {size: 122109, hash: '6f297136962c6365e864b99616eaf12295d36eefb7b58f08c1bd7e1c5817c529', text: () => import('./assets-chunks/recruitment_index_html.mjs').then(m => m.default)},
    'styles-P7RFJIQM.css': {size: 7401, hash: '9HXNwc73a5M', text: () => import('./assets-chunks/styles-P7RFJIQM_css.mjs').then(m => m.default)}
  },
};
