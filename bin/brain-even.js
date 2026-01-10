#!/usr/bin/env node

import playGame from '../src/index.js';
import evenGame from '../src/games/even.js';
import greeting from '../src/cli.js';

greeting();
const game = evenGame()
playGame(game);

