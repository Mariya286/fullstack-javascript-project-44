#!/usr/bin/env node

import playGame from '../src/index.js'
import primeGame from '../src/games/prime.js'
import { askName } from '../src/cli.js'

const name = askName()
const game = primeGame()
playGame(game, name)
