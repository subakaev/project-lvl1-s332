import { cons } from 'hexlet-pairs';

import getRandomInt from '../utils';
import startGame from '../game-engine';

const playStepGenerator = () => {
  const term1 = getRandomInt();
  const term2 = getRandomInt();

  const actionIndex = getRandomInt(0, 3);

  switch (actionIndex) {
    case 0:
    default:
      return cons(`${term1} + ${term2}`, `${term1 + term2}`);
    case 1:
      return cons(`${term1} - ${term2}`, `${term1 - term2}`);
    case 2:
      return cons(`${term1} * ${term2}`, `${term1 * term2}`);
  }
};

export default () => startGame('What is the result of the expression?', playStepGenerator);
