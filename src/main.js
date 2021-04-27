import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import axios from 'axios'
import {request} from "./network/request";
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(ElementUI)

new Vue({
  render: h => h(App),
}).$mount('#app')

// axios({
// 	url: "http://httpbin.org/post",
// 	method: "post",
// }).then(res => {
// 	console.log(res)
// })

// request({
// 	url: '/get'
// }, res => {
// 	console.log(res);
// }, err => {
// 	console.log(err);
// })

request({
	url: '/crm/companies/'
}).then(res => {
	console.log(res.data);
}).catch(err => {
	console.log(err);
})