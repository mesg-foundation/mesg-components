<template>
  <div></div>
</template>

<script>
import Highcharts from 'highcharts/highstock'
import chart from '../chart.mixin'
export default {
  props: {},
  mixins: [chart],
  data() {
    return {
      chart: undefined
    }
  },
  mounted() {
    this.chart = new Highcharts.stockChart(this.$el, {
      rangeSelector: {
        selected: 3,
        buttons: [
          {
            type: 'month',
            count: 1,
            text: '1m'
          },
          {
            type: 'month',
            count: 3,
            text: '3m'
          },
          {
            type: 'month',
            count: 6,
            text: '6m'
          },
          {
            type: 'ytd',
            text: 'YTD'
          },
          ,
          {
            type: 'year',
            count: 1,
            text: '1y'
          },
          {
            type: 'all',
            text: 'All'
          }
        ]
      },
      yAxis: {
        plotLines: [
          {
            value: 0,
            width: 2,
            color: 'silver'
          }
        ]
      },
      plotOptions: {
        series: {
          compare: 'value'
        }
      },
      tooltip: {
        valueDecimals: 2,
        split: true
      },
      series: this.items
    })
  }
}
</script>

<style scoped>
</style>