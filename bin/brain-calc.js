#!/usr/bin/env node

import playGame from '../src/index.js';
import { description, getQuestionAndAnswerCalculate } from '../src/games/calc.js';

playGame(description, getQuestionAndAnswerCalculate);
