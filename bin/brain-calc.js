#!/usr/bin/env node

import playGame from '../src/index.js';
import calcGame from '../src/games/calc.js';
import greeting from '../src/cli.js';

const game = calcGame();
const name = greeting();
playGame(game, name);
