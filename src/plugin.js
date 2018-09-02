'use strict'

const plugin = {
  id: 'dataPointer',
  afterDraw: function (chart) {
    let ctx = chart.chart.ctx
    let options = chart.chart.config.options.plugins.dataPointer
    if (options.enable) {
      let data = options.data
      let fontSize = options.fontSize
      let fontFamily = options.fontFamily
      let pointer = options.pointer
      let color = options.color
      let defaultColor = options.defaultColor
      let font = String()
      font = font.concat(fontSize, 'px', ' ', fontFamily)

      let xaxis = chart.scales['x-axis-0']
      let yaxis = chart.scales['y-axis-0']
      ctx.save()

      // draw pointer
      data.forEach(function (element, index, array) {
        let centerX = xaxis.getPixelForValue(element)
        let centerY = yaxis.getPixelForTick(index) - (yaxis.options.barThickness / 2) - (fontSize / 2)

        if (Array.isArray(color) && typeof color[index] !== 'undefined') {
          ctx.fillStyle = color[index]
        } else {
          ctx.fillStyle = defaultColor
        }

        ctx.font = font
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillText(pointer, centerX, centerY)
      })

      ctx.restore()
    }
  }
}

export default plugin
