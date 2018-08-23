import { cons } from 'hexlet-pairs';

import { getRandomInt } from '../utils';
import startGame from '../game-engine';

const isPrime = (n) => {
  if (n <= 1) {
    return false;
  }

  for (let i = 2; i <= n / 2; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};

const playStepGenerator = () => {
  const question = getRandomInt();

  return cons(question, isPrime(question) ? 'yes' : 'no');
};

export default () => startGame('Is this number prime?', playStepGenerator);
