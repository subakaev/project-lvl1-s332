import { cons } from 'hexlet-pairs';

import { getRandomInt, isEven } from '../utils';
import startGame from '../game-engine';

const playStepGenerator = () => {
  const question = getRandomInt();

  return cons(question, isEven(question) ? 'yes' : 'no');
};

export default () => startGame('Answer "yes" if number even otherwise answer "no".', playStepGenerator);
