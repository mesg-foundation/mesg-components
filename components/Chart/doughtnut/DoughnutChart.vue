<template>
  <div>
    <DoughnutChart :chartData="{  datasets,labels }" :options="options" />
  </div>
</template>

<script>
import tinycolor from 'tinycolor2'
import DoughnutChart from './DoughnutChartConfig'

export default {
  name: 'Doughnut',
  components: { DoughnutChart },
  props: {
    items: { type: Array },
    'chart-color': { type: Array, default: () => [] },
    tooltips: { type: Boolean, default: false },
    'animate-rotate': { type: Boolean, default: false },
    responsive: { type: Boolean, default: false },
    maintainAspectRatio: { type: Boolean, default: false },
    legend: { type: Boolean, default: false }
  },
  computed: {
    options() {
      return {
        responsive: this.responsive,
        maintainAspectRatio: this.maintainAspectRatio,
        animation: {
          animateRotate: this.animateRotate
        },
        tooltips: {
          enabled: this.tooltips
        },
        elements: {
          center: {
            text: `MESG Token released from yesterday \\n traded volume`,
            textNumber: '7%'
          }
        },
        legend: {
          display: this.legend
        },
        centercolor: '#7e61ae',
        cutoutPercentage: 85
      }
    },
    labels() {
      return ['Wallets Sale', 'test']
    },
    datasets() {
      return [
        {
          backgroundColor: this.chartColor,
          data: this.items
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>