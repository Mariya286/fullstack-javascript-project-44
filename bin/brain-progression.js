#!/usr/bin/env node

import progressGame from '../src/games/progres.js';
import playGame from '../src/index.js';
import greeting from '../src/cli.js';

const name = greeting();
const game = progressGame();
playGame(game, name);
