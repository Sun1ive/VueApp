<template>
<div>
	<div class="header">
		<div class="header-logo">
			<img src="src/img/logo.png" alt="Logo">
			<span>Hosting</span>
		</div>
		<div class="header-register">
			<div class="wrap">
				<span><b>Support</b>: info@webhosting.com</span>
				<span>Register</span>
				<span>Login</span>
			</div>
		</div>
	</div>
	<nav>
		<ul class="menu">
			<li><a  href="#">Home</a></li>
			<li><a href="#About">About</a></li>
			<li><a href="#Contact" >Contacts</a></li>
		</ul>
	</nav>
</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		}
	}
</script>

<style lang="sass">
header
	max-width: 1280px;
	margin: 0 auto;
	.header
		display: flex
		justify-content: space-between
		align-items: center
		min-height: 120px
		background-color: #fff
		&-register
			margin-right: 20px
			.wrap
				padding: 15px 0 15px 30px
				border-top: 1px solid #c0c0c0;
				border-bottom: 1px solid #c0c0c0;
				color: #a2aab5;
				span
					margin: 0 10px
		&-logo
			margin-left: 20px
			display: flex
			align-items: center
			span
				text-transform: uppercase
				font-weight: bold
				font-size: 20px
				margin-left: 10px
				font-family: Arial

.menu
	display: flex
	justify-content: space-around
	align-items: center
	padding: 0
	margin: 0
	min-height: 50px
	background-color: #ff8261
	a
		text-transform: uppercase
		color: #fff
		padding: 15px 45px
		transition: .3s
		&:hover
			background-color: #52cbf8;


</style>