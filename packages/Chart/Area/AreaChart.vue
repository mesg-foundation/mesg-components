<template>
  <div></div>
</template>

<script>
import chart from "../chart.mixin";
import Hightchart from "highcharts";
export default {
  name: "AreaChart",
  props: {
    categories: { type: Array },
    areaType: { type: String },
    yType: { type: String },
    yTitle: { type: String },
    noYLabel: { type: Boolean, default: false },
    xTitle: { type: String },
    noXLabel: { type: Boolean, default: false },
    optionLegend: { type: Object },
    optionsTooltip: { type: Object },
    chartStyleOption: { type: Object },
    fillColorOption: { type: Object },
    xAxisOptions: { type: Object },
    yAxisOptions: { type: Object },
    noMarker: { type: Boolean, default: false },
    markerOption: { type: Object },
    areaPlotOptions: { type: Object }
  },
  mixins: [chart],
  data() {
    return {
      chart: undefined
    };
  },
  methods: {
    onResize(e) {
      const { clientWidth, clientHeight } = this.$el;
      this.chart.setSize(clientWidth, clientHeight, false);
    }
  },
  mounted() {
    this.chart = new Hightchart.chart({
      chart: this.chartType(
        "area",
        this.$el,
        this.chartStyleOption || { backgroundColor: "#fff" }
      ),
      title: this.titleOption(
        this.title,
        { color: this.titleColor, fontSize: this.titleSize },
        this.optionsTitle
      ),
      subtitle: this.subTitleOption(
        this.subTitle,
        { color: this.subColor, fontSize: this.subSize },
        this.optionsSub
      ),
      credits: this.creditsOption(this.credit),
      legend: this.legendOption(
        !this.noLegend,
        this.optionLegend || {
          align: "right",
          verticalAlign: "middle",
          layout: "vertical"
        }
      ),
      xAxis: {
        categories: this.categories,
        title: {
          text: this.xTitle
        },
        labels: {
          enabled: !this.noXLabel
        },
        ...this.xAxisOptions
      },
      yAxis: {
        title: {
          text: this.yTitle
        },
        labels: {
          enabled: !this.noYLabel
        },
        ...this.yAxisOptions
      },
      tooltip: this.tooltipOption(
        !this.noTooltip,
        this.optionsTooltip || { split: true }
      ),
      plotOptions: {
        area: this.areaOption
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
                align: "center",
                verticalAlign: "bottom",
                layout: "horizontal"
              }
            }
          }
        ]
      }
    });
    window.onresize = this.debounce(this.onResize.bind(this), 30);
  },
  computed: {
    areaOption() {
      return {
        fillColor: this.fillColorOption || undefined,
        stacking: this.areaType,
        showInLegend: !this.noLegend,
        marker: {
          enabled: !this.noMarker,
          ...(this.markerOption || {})
        },
        ...(this.areaPlotOptions || {})
      };
    }
  }
};
</script>
