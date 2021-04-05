export const nav = () => {
  const divNav = document.createElement('div');
  const viewNav = `
    <ul>
      <li>
        <a href="#/">Home</a>
      </li>
      <li>
        <a href="#/about">Sobre Mi</a>
      </li>
      <li>
        <a href="#/works">Proyectos</a>
      </li>
      <li>
        <a href="#/contact">Contacto</a>
      </li>
  </ul>
  `;
  divNav.innerHTML = viewNav;
  return divNav;
};
