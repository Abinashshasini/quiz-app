export const shuffleAray = (aray: any[]) =>
  [...aray].sort(() => Math.random() - 0.5);
