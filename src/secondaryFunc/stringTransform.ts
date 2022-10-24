export const transformString = (str: string) => {
  return str
    .split(' ')
    .map((item) => {
      return `${item.slice(0, 1).toUpperCase()}` + `${item.slice(1)}`;
    })
    .join(' ');
};
