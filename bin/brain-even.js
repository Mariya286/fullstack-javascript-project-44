#!/usr/bin/env node

import playGame from '../src/index.js'
import evenGame from '../src/games/even.js'
import { askName } from '../src/cli.js'

const name = askName()
const game = evenGame()
playGame(game, name)
