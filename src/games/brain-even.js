import getName from '..';
import readlineSync from 'readline-sync';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const getCorrectAnswer = number => (number % 2 === 0 ? 'yes' : 'no');

const playGame = () => {
  const playingStep = (counter) => {
    if (counter >= 3) {
      return true;
    }

    const number = getRandomInt(0, 99);

    console.log(`Question: ${number}`);

    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = getCorrectAnswer(number);

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

  const gameResult = playGame(name);

  if (gameResult) {
    console.log(`\nCongratulations, ${name}!`);
  } else {
    console.log(`\nLet's try again, ${name}!`);
  }
};
