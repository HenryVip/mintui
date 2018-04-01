<template>
	<div class="from">
		<div id="">
			<!--{{value}}-->
		</div>
		<mt-checklist title="复选框列表" v-model="value" :options="options" @change="showvalue">
		</mt-checklist>
	</div>
</template>

<script>
	export default {
		name: "from",
		data() {
			return {
				value: ['选中禁用的值'],
				options: [{
						label: '被禁用',
						value: '值F',
						disabled: true
					},
					{
						label: '选中禁用',
						value: '选中禁用的值',
						disabled: true
					},
					{
						label: '选项A',
						value: '值A'
					},
					{
						label: '选项B',
						value: '值B'
					}
				]
			}
		},
		methods: {
			showvalue: function() {
				console.log(this.value)
			}
		}
	}
</script>

<style>

</style>