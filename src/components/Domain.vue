<template>
	<form @submit.prevent="submitted" class="domainForm">
		<div class="text">
			<h3>Sign up Your</h3>
			<h2>newsletter</h2>
		</div>
		<input type="text" class="subDomain" placeholder="Enter your domain name" v-model="domainName" required>
		<input type="submit" value="Sign up now">
	</form>
</template>

<script>
export default {
	data(){
		return {
			domainName: ""
		}
	},
	methods: {
		submitted(){
			// ajax request
			alert(this.domainName);
		}
	}
}

</script>

<style lang="sass">
	.domainForm
		display: flex
		height: 50px
		h3
			text-transform: uppercase
			font-size: 18px
			color: #859aa1;
			font-weight: 400
			line-height: 18px
		h2
			letter-spacing: -1px
			font-size: 30px
			color: #556b72;
			font-weight: bold
			text-transform: uppercase
		input[type="text"]
			margin-left: 35px
			min-width: 520px
			padding-left: 15px
			font-size: 14px
		input[type="submit"]
			border: none
			outline: none
			background-color: #ff8261;
			font-size: 14px
			text-transform: uppercase
			font-weight: bold
			padding: 0 50px
			max-width: 195px
			cursor: pointer
			color: #fff
			text-align: center
</style>