<template>
	<div>
		<h1 id="text">{{text}}</h1>
	</div>
</template>


<script type="text/javascript">
	export default{
		data(){
			return {
				text : "hello world"
			}
		}
	}
</script>

<style lang="less" scoped>
	h1{
		color:red;
		font-size: 34px;
		background-color: #343434;
	}
</style>
