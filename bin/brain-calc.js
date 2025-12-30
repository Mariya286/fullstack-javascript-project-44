#!/usr/bin/env node

import playGame from '../src/index.js';
import getQuestionAndAnswerCalculate from '../src/games/calc.js';

playGame(getQuestionAndAnswerCalculate);
