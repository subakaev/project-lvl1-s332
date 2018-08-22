import { cons } from 'hexlet-pairs';

import { getRandomInt } from '../utils';
import startGame from '../game-engine';

const gcd = (a, b) => (b ? gcd(b, a % b) : a);

const playStepGenerator = () => {
  const a = getRandomInt();
  const b = getRandomInt();

  return cons(`${a} ${b}`, `${a >= b ? gcd(a, b) : gcd(b, a)}`);
};

export default () => startGame('Find the greatest common divisor of given numbers.', playStepGenerator);
