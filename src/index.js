import readlineSync from 'readline-sync';

import runBalanceGame from './games/balance';
import runCalcGame from './games/calc';
import runEvenGame from './games/even';
import runGcdGame from './games/gcd';
import runPrimeGame from './games/prime';
import runProgressionGame from './games/progression';

const caption = `
  *****************************
  **      BRAIN GAMES        **
  *****************************
  ** List of available games **
  ** 1 - Even                **
  ** 2 - Calc                **
  ** 3 - GCD                 **
  ** 4 - Balance             **
  ** 5 - Progression         **
  ** 6 - Prime               **
  *****************************
`;

export default () => {
  console.log(caption);

  const gameNumber = readlineSync.question('Please, select the game for start [1-6] (or 0 for exit): ');

  console.log('');

  switch (gameNumber) {
    case '1':
      runEvenGame();
      break;
    case '2':
      runCalcGame();
      break;
    case '3':
      runGcdGame();
      break;
    case '4':
      runBalanceGame();
      break;
    case '5':
      runProgressionGame();
      break;
    case '6':
      runPrimeGame();
      break;
    default:
      console.log('Bye! Hope to see you soon!');
      break;
  }
};
