import c from '../constants';

function boardRenderHelper(fichas: any) {
  const { fichasGrid } = c;
  const fichasArrangement = Array(fichasGrid.length).fill(null);

  Object.values(fichas).forEach((ficha: any) => {
    fichasGrid.forEach((gridId, i) => {
      if (ficha.renderPos === gridId) {
        fichasArrangement[i] = ficha;
      }
    });
  });
  return fichasArrangement;
}

export function boardRenderHelperDisplay(fichas: any) {
  const { fichasGridDisplay } = c;
  const fichasArrangement = Array(fichasGridDisplay.length).fill(null);

  Object.values(fichas).forEach((ficha: any) => {
    fichasGridDisplay.forEach((gridId, i) => {
      if (ficha.renderPos === gridId) {
        fichasArrangement[i] = ficha;
      }
    });
  });
  return fichasArrangement;
}

export default boardRenderHelper;
