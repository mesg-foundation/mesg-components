<template>
  <div id="piechart"></div>
</template>

<script>
import Highcharts from 'highcharts'
import chart from '../chart.mixin'
export default {
  name: 'PieChart',
  mixins: [chart],
  props: { innerSize: { type: String } },
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
          center: ['50%', '50%'],
          showInLegend: !this.noLegend
        }
      },
      chart: this.chartType('pie', 'piechart'),
      title: this.titleOption(this.title, { color: this.titleColor, fontSize: this.titleSize }, this.optionsTitle),
      subtitle: this.subTitleOption(this.subTitle, { color: this.subColor, fontSize: this.subSize }, this.optionsSub),
      series: this.seriesData(this.items, this.tooltipDescription),
      tooltip: this.tooltipOption(!this.noTooltip),
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

    window.onresize = this.onResize.bind(this)
  }
}
</script>