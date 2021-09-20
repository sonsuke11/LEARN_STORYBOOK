export const isEmpty = (object) => {
  const arrKey = Object.keys(object);
  return !Boolean(arrKey.length);
};
