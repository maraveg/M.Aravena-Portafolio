import { home } from './view/templateHome.js';
import { about } from './view/templateAbout.js';
import { works } from './view/templateWorks.js';
import { contact } from './view/templateContact.js';
import { nav } from './view/templateNav.js';

export const changeRoute = (hash) => {
  if (hash === '#/') {
    return showTemplate(hash);
  } if (hash === '#/about') {
    return showTemplate(hash);
  } if (hash === '#/works') {
    return showTemplate(hash);
  } if (hash === '#/contact') {
    return showTemplate(hash);
  } if (hash === '#/nav') {
    return showTemplate(hash);
  }
  return showTemplate(hash);
};

const showTemplate = (hash) => {
  const containerRoot = document.getElementById('root');
  switch (hash) {
    case '':
      containerRoot.appendChild(nav());
      containerRoot.appendChild(home());
      break;
    case '#/':
      containerRoot.appendChild(nav());
      containerRoot.appendChild(home());
      break;
    case '#/about':
      containerRoot.appendChild(nav());
      containerRoot.appendChild(about());
      break;
    case '#/works':
      containerRoot.appendChild(nav());
      containerRoot.appendChild(works());
      break;
    case '#/contact':
      containerRoot.appendChild(nav());
      containerRoot.appendChild(contact());
      break;
    default:
      containerRoot.innerHTML = '<h2>No existe :c</h2>';
  }
};
