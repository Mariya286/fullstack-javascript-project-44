#!/usr/bin/env node

import playGame from '../src/index.js';
import calcGame from '../src/games/calc.js';
import greeting from '../src/cli.js';

const name = greeting();
const game = calcGame();
playGame(game, name);
