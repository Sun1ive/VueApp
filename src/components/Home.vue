<template>
	<main>
	<section class="domain">
		<div class="banner">
			<span></span>
			<h3>Get</h3>
			<h2>Domain</h2>
		</div>
		<form>
			<input type="text" name="domainName" placeholder="Enter your domain name" required v-model="domain">
			<select name="selection">
				<option>Year(0-1 year)</option>
				<option>Year(1-2 years)</option>
				<option>Year(2-3 years)</option>
				<option>Year(3-4 years)</option>
			</select>
			<select name="dot">
				<option>.com</option>
				<option>.ru</option>
				<option>.net</option>
				<option>.com.ua</option>
			</select>
			<div class="button red" @click="submitForm">Submit</div>
		</form>
	</section>
	<section class="benefit">
		<div class="banner">
			<span></span>
			<h3>Get</h3>
			<h2>Domain</h2>
		</div>
		<div class="container">
			<div class="container-item">
				<h2>99.9% Uptime</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut hic sint officia tempora deserunt at. Rem sequi, laborum eaque vitae.</p>
			</div>
			<div class="container-item">
				<h2>99.9% Uptime</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut hic sint officia tempora deserunt at. Rem sequi, laborum eaque vitae.</p>
			</div>
			<div class="container-item">
				<h2>99.9% Uptime</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut hic sint officia tempora deserunt at. Rem sequi, laborum eaque vitae.</p>
			</div>
			<div class="container-item">
				<h2>99.9% Uptime</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut hic sint officia tempora deserunt at. Rem sequi, laborum eaque vitae.</p>
			</div>
			<div class="container-item">
				<h2>99.9% Uptime</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut hic sint officia tempora deserunt at. Rem sequi, laborum eaque vitae.</p>
			</div>
			<div class="container-item">
				<h2>99.9% Uptime</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut hic sint officia tempora deserunt at. Rem sequi, laborum eaque vitae.</p>
			</div>
		</div>
	</section>
	<section class="home">
		<div class="banner">
			<span></span>
			<h3>Our</h3>
			<h2>Hosting</h2>
		</div>
			<div class="container">
				<div class="box">
					<h3>$5 per month</h3>
					<div class="button" @click="click">Standart Plan</div>
					<ul>
						<li>10GB Disk Space</li>
						<li>1TB Bandwidth</li>
						<li>Free DDoS Protection</li>
						<li>Free Daily Backups</li>
						<li>Managed Hosting</li>
					</ul>
					<div class="button red" @click="click">SignUp</div>
				</div>
				<div class="box">
					<h3>$5 per month</h3>
					<div class="button" @click="click">Standart Plan</div>
					<ul>
						<li>10GB Disk Space</li>
						<li>1TB Bandwidth</li>
						<li>Free DDoS Protection</li>
						<li>Free Daily Backups</li>
						<li>Managed Hosting</li>
					</ul>
					<div class="button red" @click="click">SignUp</div>
				</div>
				<div class="box">
					<h3>$5 per month</h3>
					<div class="button" @click="click">Standart Plan</div>
					<ul>
						<li>10GB Disk Space</li>
						<li>1TB Bandwidth</li>
						<li>Free DDoS Protection</li>
						<li>Free Daily Backups</li>
						<li>Managed Hosting</li>
					</ul>
					<div class="button red" @click="click">SignUp</div>
				</div>
				<div class="box">
					<h3>$5 per month</h3>
					<div class="button" @click="click">Standart Plan</div>
					<ul>
						<li>10GB Disk Space</li>
						<li>1TB Bandwidth</li>
						<li>Free DDoS Protection</li>
						<li>Free Daily Backups</li>
						<li>Managed Hosting</li>
					</ul>
					<div class="button red" @click="click">SignUp</div>
				</div>
			</div>
		</section>
	<section class="subscribe">
		<div class="text">
			<h2>sign up your</h2>
			<p>newsletter</p>
		</div>
		<input type="text" name="" id="" placeholder="Enter your domain name">
		<div class="button red">Sign up now</div>
	</section>
	</main>
</template>

<script>
export default {
	data() {
		return {
			domain: "",
			duration: "Some data there",
			dot: "Some data there"
		}
	},
	methods: {
		click(){
			alert("clicked");
		},
		submitForm(){
			let data = `${this.domain} + ${this.dot}`
			console.log(data);
		}
	}
}
</script>

<style lang="sass">
ul
	padding: 0
	margin: 0

.home
	padding: 35px 0
	background-color: #fff

.banner
	margin: 25px 15px
	text-transform: uppercase
	h3
		color: #8da1a7
	h2
		color: #556b72
	span
		height: 2px
		width: 21px
		background-color: #fb6b45
		display: block
		margin-bottom: 10px;

.container
	display: flex

.box
	display: flex
	flex-flow: column wrap
	width: calc(100% / 3 - 80px)
	border: 1px solid #e1eff4
	margin: 10px
	text-align: center
	li
		padding: 15px 0
		width: 80%;
		margin: 0 auto;
		color: #d1d3d6
		font-weight: bold
		border-bottom: 1px solid #f0f4f7
		&:last-child
			border: none;
	ul
		width: 100%
	h3
		margin: 25px 0 5px 0
		color: #556b72;
		font-family: PT Sans;

.button
	text-transform: uppercase
	color: #fff
	font-weight: bolder
	background-color: #52cbf8
	padding: 10px 30px
	margin: 25px auto
	cursor: pointer

.red
	background-color: #ff8261


.domain
	background-color: #e7f4f8
	min-height: 200px
	.banner
		padding-top: 25px
		margin: 0 0 0 15px
	form
		display: flex
		justify-content: center
		align-items: center
		input
			width: 300px
		input, select
			font-size: 16px
			padding-left: 15px
			height: 40px
			margin: 0 5px;
		h1
			display: inline-block
			margin-right: 15px
			text-transform: uppercase
		.button
			display: inline-block
			margin: 0 5px

.benefit
	background-color: #fff
	min-height: 200px
	.container
		display: flex
		flex-wrap: wrap
		justify-content: center
		padding: 30px 0
		&-item
			margin: 5px 10px
			width: calc(100% / 3 - 80px)
			p
				width: 85%
				margin-top: 5px
			h2
				position: relative
				font-weight: bold
				text-transform: uppercase
				&:before
					margin-right: 10px
					content: "\2690"
					font-size: 60px
					color: orange

	.banner
		margin: 0 0 0 15px
		padding: 25px 0

.subscribe
	background-color: #e7f4f8
	min-height: 200px
	display: flex
	justify-content: center;
	align-items: center
	.text
		margin: 0 15px
		text-transform: uppercase
		h2
			font-size: 20px
		p
			margin: 0
			font-size: 30px
			margin-top: -7px
			font-weight: bold
	input
		height: 42px
		font-size: 14px
		padding-left: 20px
		width: 400px
	.button 
		margin: 0
</style>