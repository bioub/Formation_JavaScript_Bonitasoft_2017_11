export const getRandomInt = (min: number, max: number) : number => {
  console.log('getRandomInt');
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
};

export const getRandomIntInclusive = (min: number, max: number) : number => {
  console.log('getRandomIntInclusive');
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
};
