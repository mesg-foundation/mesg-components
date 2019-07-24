<template>
  <div id="piechart"></div>
</template>

<script>
import Highcharts from 'highcharts'
import Color from 'tinycolor2'
export default {
  name: 'PieChart',
  props: {
    items: { type: Array, required: true },
    noTooltip: { type: Boolean, default: false },
    noCredit: { type: Boolean, default: false },
    noLegend: { type: Boolean, default: false },
    title: { type: String },
    titleColor: { type: String },
    subTitle: { type: String },
    subColor: { type: String }
  },
  data() {
    return {
      chart: undefined
    }
  },
  mounted() {
    const highchartsOptions = {
      chart: {
        type: 'pie',
        renderTo: 'piechart'
      },
      credits: {
        enabled: !this.noCredit,
        href: 'https://mesg.com/',
        text: 'mesg.com'
      },
      tooltip: {
        headerFormat: '',
        pointFormat: '<span style="color:{point.color}">●</span> <b> {point.name}</b>: {point.y}%',
        enabled: !this.noTooltip
      },
      title: {
        text: this.title,
        style: {
          color: Color(this.titleColor).toString(),
          fontSize: '36px'
        },
        verticalAlign: 'middle',
        y: -25
      },
      subtitle: {
        text: this.subTitle,
        style: {
          color: Color(this.subColor).toString(),
          fontSize: '12px'
        },
        verticalAlign: 'middle',
        y: 10
      },
      plotOptions: {
        pie: {
          innerSize: '85%',
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false
          },
          showInLegend: !this.noLegend
        }
      },
      series: [{ data: this.items }]
    }
    this.chart = new Highcharts.chart(highchartsOptions)
  }
}
</script>