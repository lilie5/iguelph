
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
    'index.csr.html': {size: 1181, hash: '7f7f474fcd339fc9eb19e4ea6eb738a906202c90485078ad7f38fb3885b78da6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1538, hash: 'cd5b817df80d609669b5731c6277eb1925627b1c3a108b8e4fc52bfaa5870566', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'sponsors/index.html': {size: 47733, hash: '016e1e3a789a37001efda4afa39174f7a7d3227ea87d6d33e997ae8e154bff95', text: () => import('./assets-chunks/sponsors_index_html.mjs').then(m => m.default)},
    'index.html': {size: 97138, hash: '875a186a44f7b15a9e251d8d81fbb56ec2927797a8fd03e3d856e6b7f04d59bf', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 95202, hash: 'd83ddbb99bd4b2ce811d04e66b71c2efb6154241bd1334e1065c4dfb21c04965', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 86106, hash: '2642d5f1949c078960e1503ffc95371c03839ee40732f46006c65ac9cfb2e435', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'recruitment/index.html': {size: 122111, hash: '5c798467ba5afab4bca70ee3569d529b874e2036856bb7e00470391159fa2c83', text: () => import('./assets-chunks/recruitment_index_html.mjs').then(m => m.default)},
    'styles-P7RFJIQM.css': {size: 7401, hash: '9HXNwc73a5M', text: () => import('./assets-chunks/styles-P7RFJIQM_css.mjs').then(m => m.default)}
  },
};
