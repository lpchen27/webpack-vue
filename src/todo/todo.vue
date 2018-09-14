<template>
	<section class="real-app">
		<input type="text" name="" class="add-input" autofocus="autofocus" placeholder="接下来要干什么" @keyup.enter="addToDo" v-model="input">
		<Item :todo="todo"></Item>
	</section>
</template>

<script type="text/javascript">
import Item from "./item.vue"
export default {
	components : {
		Item
	},
	data(){
		return {
			todoList : [],
			todo:{
				id:0,
				content:'this is todo',
				completed:false
			}
		}
	},
	methods : {
		addToDo(){
			console.error("to do what");
			let value = this.input;
		}
	}
}
</script>

<style lang="less" scoped>
	section{
		text-align:center;
	}
	input{
		height: 34px;
		line-height: 34px;
		width: 300px;
		margin: 0 auto;
		font-size:24px;
	}
</style>