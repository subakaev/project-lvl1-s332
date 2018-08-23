import { cons } from 'hexlet-pairs';

import { getRandomInt } from '../utils';
import startGame from '../game-engine';

const progressionNumbersCount = 10;
const minProgressionStep = 1;
const maxProgressionStep = 11;

const generateProgression = () => {
  const step = getRandomInt(minProgressionStep, maxProgressionStep);

  const iter = (result, counter) => {
    if (counter >= progressionNumbersCount) {
      return result;
    }

    const next = result[result.length - 1] + step;

    return iter([...result, next], counter + 1);
  };

  return iter([getRandomInt()], 0);
};

const generateQuestion = (progression, missingIndex) => progression.reduce((acc, current, index) => `${acc} ${index !== missingIndex ? current : '..'}`, '').trim();

const playStepGenerator = () => {
  const progression = generateProgression();

  const missingIndex = getRandomInt(0, progression.length);

  return cons(generateQuestion(progression, missingIndex), `${progression[missingIndex]}`);
};

export default () => startGame('What number is missing in this progression?', playStepGenerator);
