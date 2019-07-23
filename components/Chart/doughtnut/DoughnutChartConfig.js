import { Doughnut, mixins } from 'vue-chartjs'

Chart.pluginService.register({
  afterDatasetsDraw: function(chart) {
    const centerConfig = chart.config.options.elements.center
    const options = chart.config.options
    let width = chart.width
    let height = chart.height
    let ctx = chart.ctx
    ctx.save()

    // display percent text
    let fontSize = 60
    ctx.font = fontSize + 'px sans-serif'
    ctx.fillStyle = options.centercolor
    ctx.textBaseline = 'middle'
    const textNumber = centerConfig.textNumber
    const textNumberX = Math.round((width - ctx.measureText(textNumber).width) / 2)
    const textNumberY = height / 2.25
    ctx.fillText(textNumber, textNumberX, textNumberY)

    // display text
    const textArray = centerConfig.text.split('\\n')
    ctx.font = 17 + 'px sans-serif'
    let divineHeight = 0
    textArray.forEach(text => {
      const textX = Math.round((width - ctx.measureText(text.trim()).width) / 2)
      const textY = height / (1.75 - divineHeight)
      divineHeight = +0.15
      ctx.fillText(text.trim(), textX, textY)
    })
    ctx.restore()
  }
})

export default {
  extends: Doughnut,
  mixins: [mixins.reactiveProp],
  props: ['options'],
  mounted() {
    this.renderChart(this.chartData, this.options)
  }
}
