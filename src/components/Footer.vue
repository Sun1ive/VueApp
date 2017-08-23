<template>
<div class="footer">
	<div class="footer-logo">
		<img src="src/img/logo.png" alt="logo">
		<span>Hosting</span>
	</div>
	<div class="footer-menu">
		<nav>
			<ul>
				<h2>Quick links</h2>
				<li><a href="#">Home</a></li>
				<li><a href="#about">About us</a></li>
				<li><a href="#">Service</a></li>
				<li><a href="#">Domains</a></li>
				<li><a href="#contact">Contact us</a></li>
			</ul>
			<ul>
				<h2>Quick links</h2>
				<li><a href="#">Home</a></li>
				<li><a href="#about">About us</a></li>
				<li><a href="#">Service</a></li>
				<li><a href="#">Domains</a></li>
				<li><a href="#contact">Contact us</a></li>
			</ul>
			<ul class="socials">
				<li><a href="#"><i class="fa fa-twitter"></i></a></li>
				<li><a href="#about"><i class="fa fa-facebook"></i></a></li>
				<li><a href="#"><i class="fa fa-vk"></i></a></li>
				<li><a href="#"><i class="fa fa-google"></i></a></li>
				<li><a href="#contact"><i class="fa fa-github"></i></a></li>
			</ul>
		</nav>
	</div>
</div>
</template>

<script>
	export default {
		data(){
			return {
			}
		}
	}
</script>

<style lang="sass">
@import "../assets/font-awesome.css"

.socials
	display: flex
	width: 25%
	align-items: center
	justify-content: space-around
	a
		// margin: 0 15px
		font-size: 30px


footer
	max-width: 1280px;
	margin: 0 auto;
	min-height: 385px;
	background-color: #4c515b;
	ul
		padding: 0
		margin: 0
	.footer
		min-height: inherit;
		display: flex;
		align-items: center;
		justify-content: center;
		&-logo
			flex-basis: 30%;
			display: flex;
			justify-content: center;
			span
				text-transform: uppercase;
				font-size: 30px;
				margin-left: 20px;
		&-menu
			flex-basis: 70%;
			nav
				display: flex;
				justify-content: space-around;
			a
				text-transform: uppercase;
				color: #c0c0c0;
				transition: .3s;
				&:hover
					color: #000;
			li
				padding: 7px 0;
			h2
				color: #c0c0c0;
				font-family: Arial, sans-serif;
</style>