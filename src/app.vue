<template>
	<div id="app">
		<Header></Header>
		<Todo></Todo>
		<Footer></Footer>
		
	</div>
</template>


<script type="text/javascript">
import Header from "./todo/header.vue"
import Footer from "./todo/footer.jsx"
import Todo from "./todo/todo.vue"
export default{
	data(){
		return {
			text : "hello world !!!!啊哈哈哈!报公安部高hgapngoa"
		}
	},
	components : {
		Header,
		Footer,
		Todo,
	}
}
</script>

<style lang="stylus" scoped>
	#cover
		color red;
		font-size 34px;
		background-color #343434;
		margin-top 200px

</style>
