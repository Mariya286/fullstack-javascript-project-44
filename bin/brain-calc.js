#!/usr/bin/env node

import playGame from '../src/index.js';
import calcGame from '../src/games/calc.js';

const game = calcGame();
playGame(game);
