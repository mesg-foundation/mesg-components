<template>
  <div id="areachart"></div>
</template>

<script>
import chart from '../chart.mixin'
import Hightchart from 'highcharts'
export default {
  name: 'AreaChart',
  props: {
    categories: { type: Array },
    areaType: { type: String },
    yType: { type: String },
    yTitle: { type: String },
    noYLabel: { type: Boolean, default: false },
    xTitle: { type: String },
    noXLabel: { type: Boolean, default: false }
  },
  mixins: [chart],
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
    this.chart = new Hightchart.chart({
      chart: this.chartType('area', 'areachart'),
      title: this.titleOption(this.title, { color: this.titleColor, fontSize: this.titleSize }, this.optionsTitle),
      subtitle: this.subTitleOption(this.subTitle, { color: this.subColor, fontSize: this.subSize }, this.optionsSub),
      credits: this.creditsOption(this.credit),
      legend: this.legendOption(!this.noLegend, {
        align: 'right',
        verticalAlign: 'middle',
        layout: 'vertical'
      }),
      xAxis: {
        categories: this.categories,
        title: {
          text: this.xTitle
        },
        min: 0,
        labels: {
          enabled: !this.noXLabel
        }
      },
      yAxis: {
        tickmarkPlacement: 'on',
        title: {
          text: this.yTitle
        },
        labels: {
          enabled: !this.noYLabel
        }
      },
      tooltip: {
        enabled: !this.noTooltip,
        split: true
      },
      plotOptions: {
        area: {
          stacking: this.areaType,
          showInLegend: !this.noLegend
        }
      },
      series: this.items,
      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 500
            },
            chartOptions: {
              legend: {
                align: 'center',
                verticalAlign: 'bottom',
                layout: 'horizontal'
              }
            }
          }
        ]
      }
    })
    window.onresize = this.debounce(this.onResize.bind(this), 30)
  }
}
</script>

<style  scoped>
</style>