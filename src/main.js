import { home } from './lib/view/templateHome.js';
import { nav } from './lib/view/templateNav.js';
import { changeRoute } from './lib/router.js';

const init = () => {
  document.getElementById('root').appendChild(nav());
  document.getElementById('root').appendChild(home());
  // window.location.href=  "/#"
  window.addEventListener('hashchange', () => {
    changeRoute(window.location.hash);
  });
};

window.addEventListener('load', init);
