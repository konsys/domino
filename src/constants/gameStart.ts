import { buildFichaSet } from '../helpers/buildFichaSet';

const getRandom = set => {
  return Math.floor(Math.random() * Math.floor(set.length));
};

const sortedFichas = () => {
  let fichaSet = buildFichaSet();
  let randomizedFichas = [];

  for (let i = 0; i < 55; i++) {
    randomizedFichas.push(...fichaSet.splice(getRandom(fichaSet), 1));
  }

  return randomizedFichas;
};

export default sortedFichas;
