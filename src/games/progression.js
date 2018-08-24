import { cons } from 'hexlet-pairs';

import getRandomInt from '../utils';
import startGame from '../game-engine';

const progressionLength = 10;
const minProgressionStep = 1;
const maxProgressionStep = 11;

const generateProgression = (start, step, length) => {
  const iter = (result, counter) => {
    if (counter >= length) {
      return result;
    }

    const next = result[result.length - 1] + step;

    return iter([...result, next], counter + 1);
  };

  return iter([start], 0);
};

const generateQuestion = (progression, missingIndex) => progression.reduce((acc, current, index) => `${acc} ${index !== missingIndex ? current : '..'}`, '').trim();

const playStepGenerator = () => {
  const step = getRandomInt(minProgressionStep, maxProgressionStep);

  const progression = generateProgression(getRandomInt(), step, progressionLength);

  const missingIndex = getRandomInt(0, progression.length);

  const question = generateQuestion(progression, missingIndex);

  return cons(question, `${progression[missingIndex]}`);
};

export default () => startGame('What number is missing in this progression?', playStepGenerator);
