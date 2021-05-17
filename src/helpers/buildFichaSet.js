export const buildFichaSet = (dots = 9) => {
  let builtSet = [];
  for (let bottom = dots; bottom >= 0; bottom--) {
    for (let i = 0; i <= bottom; i++) {
      builtSet.push([i, bottom]);
    }
  }
  return builtSet;
};
