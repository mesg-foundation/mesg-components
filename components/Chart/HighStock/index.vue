<template>
  <div></div>
</template>

<script>
import Highcharts from 'highcharts/highstock'
import chart from '../chart.mixin'
export default {
  props: {
    rangeSelectorOption: { type: Object },
    yAxisOption: { type: Object | Array },
    optionLegend: { type: Object },
    optionsTooltip: { type: Object }
  },
  mixins: [chart],
  data() {
    return {
      chart: undefined
    }
  },
  mounted() {
    this.chart = new Highcharts.stockChart(this.$el, {
      rangeSelector: this.rangeSelectorOption,
      yAxis: this.yAxisOption,
      legend: this.legendOption(!this.noLegend, this.optionLegend || {}),
      tooltip: this.tooltipOption(!this.noTooltip, this.optionsTooltip || { valueDecimals: 2, split: true }),
      credits: this.creditsOption(this.credit),
      series: this.items
    })
  }
}
</script>

<style scoped>
</style>