import readlineSync from 'readline-sync';

import getName from '..';

const numberOfQuestions = 3;

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const isEven = number => number % 2 === 0;

const getCorrectAnswer = question => (isEven(question) ? 'yes' : 'no');

const playGame = () => {
  const playingStep = (counter) => {
    if (counter >= numberOfQuestions) {
      return true;
    }

    const question = getRandomInt(0, 99);

    console.log(`Question: ${question}`);

    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = getCorrectAnswer(question);

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
