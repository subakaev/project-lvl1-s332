export const getRandomInt = (min = 1, max = 100) => Math.floor(Math.random() * (max - min)) + min;

export const sortIntArray = arr => arr.sort((x, y) => x - y);
