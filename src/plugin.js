const plugin = {
id: 'chartjs-data-pointer',
afterDraw: function (chart) {
        if (chart.chart.config.options.plugins.dataPointer) {
           let ctx = chart.chart.ctx;
           let options = chart.chart.config.options.plugins.dataPointer
           let data = options.data;
           let fontSize = options.fontSize;
           let fontFamily = options.fontFamily;
           let pointer = options.pointer;
           let font = new String();
           font = font.concat(fontSize, 'px', ' ', fontFamily);
          console.log(font);

        let xaxis = chart.scales['x-axis-0'];
        let yaxis = chart.scales['y-axis-0'];
        console.log(chart);
        ctx.save();

        data.forEach( function(element, index, array) {


          let centerX = xaxis.getPixelForValue(element);
          let centerY = yaxis.getPixelForTick(index)-yaxis.options.barThickness/2 - fontSize/2;
          ctx.font = font;
          ctx.fillText(pointer ,centerX, centerY);
            });

        ctx.restore();
        }


}
}



Chart.plugins.register(plugin);
