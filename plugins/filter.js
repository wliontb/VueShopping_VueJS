import Vue from 'vue'

Vue.filter('vnd', (val) =>
  val.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })
)

Vue.filter('img', (val) => 'http://127.0.0.1:8000' + val)
