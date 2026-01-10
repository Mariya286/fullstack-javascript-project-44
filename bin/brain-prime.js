#!/usr/bin/env node

import playGame from '../src/index.js';
import primeGame from '../src/games/prime.js';
import greeting from '../src/cli.js';

const game = primeGame();
const name = greeting();
playGame(game, name);
