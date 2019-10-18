<template>
  <div></div>
</template>

<script>
import Highcharts from 'highcharts'
import chart from '../chart.mixin'
export default {
  name: 'PieChart',
  mixins: [chart],
  props: {
    innerSize: { type: String | Number, default: 70 },
    animation: { type: Boolean, default: false },
    tooltipDescription: { type: String, default: undefined },
    optionsTooltip: { type: Object }
  },
  data() {
    return {
      chart: undefined
    }
  },
  methods: {
    onResize(e) {
      const { clientWidth, clientHeight } = this.$el
      this.chart.setSize(clientWidth, clientHeight, false)
    }
  },
  mounted() {
    this.chart = new Highcharts.chart({
      plotOptions: {
        pie: {
          innerSize: `${this.innerSize}%`,
          allowPointSelect: false,
          cursor: 'pointer',
          dataLabels: {
            enabled: false
          },
          animation: this.animation,
          center: ['50%', '50%'],
          showInLegend: !this.noLegend
        }
      },
      chart: this.chartType('pie', this.$el),
      title: this.titleOption(this.title, { color: this.titleColor, fontSize: this.titleSize }, this.optionsTitle),
      subtitle: this.subTitleOption(this.subTitle, { color: this.subColor, fontSize: this.subSize }, this.optionsSub),
      series: [{ name: this.tooltipDescription, data: this.items }],
      tooltip: this.tooltipOption(!this.noTooltip, this.optionsTooltip || {}),
      credits: this.creditsOption(this.credit),
      legend: this.legendOption(!this.noLegend, {
        layout: 'horizontal'
      }),
      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 400
            },
            chartOptions: {
              legend: this.legendOption(!this.noLegend, { align: 'center', verticalAlign: 'bottom', layout: 'vertical' })
            }
          }
        ]
      }
    })

    window.onresize = this.debounce(this.onResize.bind(this), 30)
  }
}
</script>