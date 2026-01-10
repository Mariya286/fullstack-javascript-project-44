#!/usr/bin/env node

import playGame from '../src/index.js';
import gcdGame from '../src/games/gcd.js';
import greeting from '../src/cli.js';

greeting();
const game = gcdGame();
playGame(game);
