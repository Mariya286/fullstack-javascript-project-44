#!/usr/bin/env node

import progressGame from '../src/games/progres.js'
import playGame from '../src/index.js'
import { askName } from '../src/cli.js'

const name = askName()
const game = progressGame()
playGame(game, name)
