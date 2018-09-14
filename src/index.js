import Vue from 'vue'
import App from './app.vue'

const root = document.createElement('div');
document.body.appendChild(root);

import './styles/global.less'

new Vue({
	render: function(h){
		return h(App);
	}
}).$mount(root)

/*new Vue({
	el : "#app",
	template : '<App/>',
	components : {
		App : App
	}
})*/