<template>
	<div :class="['todo-item',todo.completed?'completed':'']">
		<input type="checkbox" name="" class="tpggle" v-model="todo.completed">
		<label>{{todo.content}}</label>
		<button class="destory" @click="deleteTodo">delete</button>
	</div>
</template>

<script type="text/javascript">
	export default {
		props : {
			todo : {
				type:Object,
				required:true
			}
		},
		methods : {
			deleteTodo(){
				console.error("deleteTodo");
			}
		}
	}
</script>

<style>
	.todo-item{
		background-color: #ccc;
		height: 34px;
		border:1px solid red;
		margin-bottom: 10px;
	}
</style>