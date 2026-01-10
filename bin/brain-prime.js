#!/usr/bin/env node

import playGame from '../src/index.js';
import primeGame from '../src/games/prime.js';
import greeting from '../src/cli.js';

greeting();
const game = primeGame();
playGame(game);
