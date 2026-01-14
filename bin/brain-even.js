#!/usr/bin/env node

import playGame from '../src/index.js'
import evenGame from '../src/games/even.js'

const game = evenGame()
playGame(game)
