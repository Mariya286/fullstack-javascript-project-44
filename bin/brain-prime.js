#!/usr/bin/env node

import playGame from '../src/index.js';
import primeGame from '../src/games/prime.js';

const game = primeGame();
playGame(game);
