#!/usr/bin/env node

import progressGame from '../src/games/progres.js';
import playGame from '../src/index.js';
import greeting from '../src/cli.js';

const game = progressGame();
const name = greeting();
playGame(game, name);
