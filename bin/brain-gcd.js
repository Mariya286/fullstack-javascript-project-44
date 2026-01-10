#!/usr/bin/env node

import playGame from '../src/index.js'
import gcdGame from '../src/games/gcd.js'
import { askName } from '../src/cli.js'

const name = askName()
const game = gcdGame()
playGame(game, name)
