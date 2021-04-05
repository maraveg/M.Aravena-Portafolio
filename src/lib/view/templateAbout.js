export const about = () => {
  const divAbout = document.createElement('div');
  const viewAbout = `
  <h2>Holap soy about</h2>
  `;
  divAbout.innerHTML = viewAbout;
  return divAbout;
};
