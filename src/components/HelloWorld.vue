<template>
	<div class="hello">
		<div class="slide">
			<mt-swipe :auto="4000">
				<mt-swipe-item>
					<router-link to="/lazyload"><img src="../assets/logo.png" /></router-link>
				</mt-swipe-item>
				<mt-swipe-item>
					<router-link to="/form"><img src="../assets/logo.png" /></router-link>
				</mt-swipe-item>
				<mt-swipe-item><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522081815076&di=515fff22c9af03cfc2fc6f890e59609c&imgtype=0&src=http%3A%2F%2Fimg2.donews.com%2F2014%2F1117%2F75136433.jpg" /></mt-swipe-item>
			</mt-swipe>
		</div>

	</div>
</template>

<script>
	export default {
		name: 'HelloWorld',
		data() {
			return {
				msg: 'xxxx'
			}
		},

	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	.slide {
		height: 200px;
	}
	
	img {
		width: 100%;
		height: 100%;
	}
</style>