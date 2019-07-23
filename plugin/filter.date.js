import Vue from 'vue'

Vue.filter('date', date => date.toGMTString())
