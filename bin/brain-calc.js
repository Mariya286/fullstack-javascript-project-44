#!/usr/bin/env node

import playGame from '../src/index.js'
import calcGame from '../src/games/calc.js'
import { askName } from '../src/cli.js'

const name = askName()
const game = calcGame()
playGame(game, name)
