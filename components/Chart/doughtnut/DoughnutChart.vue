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
    maintainAspectRatio: { type: Boolean, default: false }
  },
  computed: {
    options() {
      return {
        responsive: false,
        maintainAspectRatio: false,
        animation: {
          animateRotate: this.animateRotate
        },
        tooltips: {
          enabled: !this.tooltips
        },
        elements: {
          center: {
            text: '7%'
          }
        },
        centercolor: '#7e61ae'
      }
    },
    labels() {
      return []
    },
    datasets() {
      return [
        {
          backgroundColor: Array.isArray(this.chartColor)
            ? [tinycolor('#491e8c').toString(), 'red', 'rgb(255, 75, 9)', '#000']
            : tinycolor('#491e8c').toString(),
          data: this.items
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>