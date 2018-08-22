import readlineSync from 'readline-sync';
import { cons, car, cdr } from 'hexlet-pairs';

import getName from '..';

const numberOfQuestions = 3;

const getRandomInt = (min = 0, max = 99) => Math.floor(Math.random() * (max - min)) + min;

const generateQuestionAndAnswer = () => {
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

const playGame = () => {
  const playingStep = (counter) => {
    if (counter >= numberOfQuestions) {
      return true;
    }

    const questionAndAnswer = generateQuestionAndAnswer();

    const question = car(questionAndAnswer);

    console.log(`Question: ${question}`);

    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = cdr(questionAndAnswer);

    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      return false;
    }

    console.log('Correct!');

    return playingStep(counter + 1);
  };

  return playingStep(0);
};

export default () => {
  const name = getName();

  console.log('\nAnswer "yes" if number even otherwise answer "no".\n');

  const gameResult = playGame();

  if (gameResult) {
    console.log(`\nCongratulations, ${name}!`);
  } else {
    console.log(`\nLet's try again, ${name}!`);
  }
};
