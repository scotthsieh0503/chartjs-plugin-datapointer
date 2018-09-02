'use strict'

import defaults from './defaults'
import plugin from './plugin'

Chart.defaults.global.plugins.dataPointer = defaults
Chart.plugins.register(plugin)
