import { cons } from 'hexlet-pairs';

import { getRandomInt, sortIntArray } from '../utils';
import startGame from '../game-engine';

const minRandomNum = 10;
const maxRandomNum = 1000;

const getArrayFromNumber = n => Array.from(n.toString()).map(Number);

const balanceNumber = (n) => {
  const iter = (arr) => {
    const min = arr[0];
    const max = arr[arr.length - 1];

    if (max - min <= 1) {
      return arr.join('');
    }

    return iter(sortIntArray([min + 1, ...arr.slice(1, arr.length - 1), max - 1]));
  };

  return iter(sortIntArray(getArrayFromNumber(n)));
};

const playStepGenerator = () => {
  const question = getRandomInt(minRandomNum, maxRandomNum);

  return cons(question, balanceNumber(question));
};

export default () => startGame('Balance the given number.', playStepGenerator);
