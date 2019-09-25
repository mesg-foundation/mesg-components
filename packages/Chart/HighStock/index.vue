<template>
  <div class="highstock"></div>
</template>

<script>
import Highcharts from 'highcharts/highstock'
import chart from '../chart.mixin'
export default {
  props: {
    rangeSelectorOption: { type: Object },
    yAxisOption: { type: Object | Array },
    optionLegend: { type: Object },
    optionsTooltip: { type: Object },
    optionsPlot: { type: Object },
    chartOption: { type: Object },
    noNavigator: { type: Boolean, default: false }
  },
  mixins: [chart],
  data() {
    return {
      chart: undefined
    }
  },
  mounted() {
    this.chart = new Highcharts.stockChart(this.$el, {
      chart: this.chartOption || {},
      rangeSelector: this.rangeSelectorOption,
      yAxis: this.yAxisOption,
      legend: this.legendOption(!this.noLegend, this.optionLegend || {}),
      tooltip: this.tooltipOption(!this.noTooltip, this.optionsTooltip || { valueDecimals: 2, split: true }),
      credits: this.creditsOption(this.credit),
      navigator: { enabled: !this.noNavigator },
      plotOptions: this.optionsPlot || {},
      series: this.items
    })
  }
}
</script>

<style lang="scss" scoped>
@import '@mesg-components/theme/_variables.scss';

.highstock input {
  background: $White;
}
</style>