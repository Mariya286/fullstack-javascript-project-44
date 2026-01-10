#!/usr/bin/env node

import playGame from '../src/index.js'
import evenGame from '../src/games/even.js'
import { greeting, askName } from '../src/cli.js'

const greet = greeting()
const name = askName()
const game = evenGame()
playGame(game, name)
