export const reconstructObject = (inputArray: any) => {
  const outputObject: any = {};
  inputArray.forEach((ficha: any) => {
    outputObject[ficha.fichaId] = ficha;
  });
  return outputObject;
};
