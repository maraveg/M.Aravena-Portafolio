export const home = () => {
  const divHome = document.createElement('div');
  const viewHome = `
  <h1>Holap soy home</h1>
  `;
  divHome.innerHTML = viewHome;
  return divHome;
};
