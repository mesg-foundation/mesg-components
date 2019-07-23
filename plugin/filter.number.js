import Vue from 'vue'
import numeral from 'numeral'

Vue.filter('number', (value, format) => numeral(value).format(format))
