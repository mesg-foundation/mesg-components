import { Doughnut, mixins } from 'vue-chartjs'

Chart.pluginService.register({
  beforeDraw: function(chart) {
    let width = chart.chart.width
    let height = chart.chart.height
    let ctx = chart.chart.ctx
    ctx.restore()
    let fontSize = (height / 114).toFixed(2)
    ctx.font = fontSize + 'em sans-serif'
    ctx.textBaseline = 'middle'
    ctx.fillStyle = chart.config.options.centercolor
    const text = chart.config.options.elements.center.text,
      textX = Math.round((width - ctx.measureText(text).width) / 2),
      textY = height / 2
    ctx.fillText(text, textX, textY)
    ctx.save()
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
