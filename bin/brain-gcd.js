#!/usr/bin/env node

import playGame from '../src/index.js';
import gcdGame from '../src/games/gcd.js';
import greeting from '../src/cli.js';

const game = gcdGame();
const name = greeting()
playGame(game, name);
