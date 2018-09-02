'use strict'

const plugin = {
  id: 'chartjs-data-pointer',
  beforeInit: function (chart, options) {
    if (!options.enable) {
      return null
    }
    console.log(options)
  },
  afterDraw: function (chart) {
    if (chart.chart.config.options.plugins.dataPointer) {
      let ctx = chart.chart.ctx
      let options = chart.chart.config.options.plugins.dataPointer
      let data = options.data
      let fontSize = options.fontSize
      let fontFamily = options.fontFamily
      let pointer = options.pointer
      let font = String()
      font = font.concat(fontSize, 'px', ' ', fontFamily)

      let xaxis = chart.scales['x-axis-0']
      let yaxis = chart.scales['y-axis-0']
      console.log(chart)
      ctx.save()

      data.forEach(function (element, index, array) {
        let centerX = xaxis.getPixelForValue(element)
        let centerY = yaxis.getPixelForTick(index) - yaxis.options.barThickness / 2 - fontSize / 2
        ctx.font = font
        ctx.fillText(pointer, centerX, centerY)
      })

      ctx.restore()
    }
  }
}

export default plugin
