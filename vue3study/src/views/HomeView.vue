<template>
	<h2>我是HelloWorld组件</h2>
	<h2>当前点击时鼠标的坐标为：x：{{point.x}}，y：{{point.y}}</h2>
	<button @click="usePoint.ceshi">点一下</button>
</template>

<script>
	import usePoint from '../hooks/usePoint'
	export default {
		name:'HelloWorld',
		setup(){
			const point =usePoint.points()

			// function ceshi(){
			// 	usePoint.ceshi()
			// }
			return {
				point,
				usePoint,

			}
		}
	}
</script>
