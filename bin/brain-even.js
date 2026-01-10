#!/usr/bin/env node

import playGame from '../src/index.js';
import evenGame from '../src/games/even.js';
import greeting from '../src/cli.js';

const name = greeting();
const game = evenGame()
playGame(game, name);

