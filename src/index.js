import Vue from 'vue'
import App from './app.vue'

const root = document.createElement('div');
document.body.appendChild(root);

import './assets/timg.jpg'
import './styles/index.less'

new Vue({
	render: function(h){
		return h(App);
	}
}).$amount(root)

/*new Vue({
	el : "#app",
	template : '<App/>',
	components : {
		App : App
	}
})*/