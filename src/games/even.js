import { cons } from 'hexlet-pairs';

import getRandomInt from '../utils';
import startGame from '../game-engine';

const isEven = n => n % 2 === 0;

const playStepGenerator = () => {
  const question = getRandomInt();

  return cons(question, isEven(question) ? 'yes' : 'no');
};

export default () => startGame('Answer "yes" if number even otherwise answer "no".', playStepGenerator);
