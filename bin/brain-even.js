#!/usr/bin/env node

import playGame from '../src/index.js';
import evenGame from '../src/games/even.js';
import greeting from '../src/cli.js';

const game = evenGame()
const name = greeting()
playGame(game, name);

