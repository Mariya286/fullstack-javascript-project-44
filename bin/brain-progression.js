#!/usr/bin/env node

import progressGame from '../src/games/progres.js';
import playGame from '../src/index.js';

const game = progressGame();
playGame(game);
