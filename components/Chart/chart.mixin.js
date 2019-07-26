export default {
  props: {
    items: { type: Array | Object },
    noTooltip: { type: Boolean, default: false },
    credit: { type: Boolean, default: false },
    noLegend: { type: Boolean, default: false },
    title: { type: String },
    titleColor: { type: String },
    titleSize: { type: Number, default: 36 },
    optionsTitle: { type: Object },
    subTitle: { type: String },
    subColor: { type: String },
    subSize: { type: Number },
    optionsSub: { type: Object },
    dataName: { type: String }
  },
  methods: {
    chartType(type, renderTo, options) {
      return {
        type,
        renderTo,
        ...options
      }
    },
    titleOption(title, style, options) {
      return {
        text: title,
        style,
        ...options
      }
    },
    subTitleOption(subTitle, style, options) {
      return {
        text: subTitle,
        style,
        ...options
      }
    },
    legendOption(val, options) {
      return {
        enabled: val,
        ...options
      }
    },
    creditsOption(val, options) {
      return {
        enabled: val,
        ...options
      }
    },
    tooltipOption(val, options) {
      return {
        enabled: val,
        ...options
      }
    },
    seriesData(data, name = undefined) {
      // default name = 'Series'
      return [{ name, data }]
    }
  }
}
