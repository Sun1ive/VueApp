<template>
	<main>
		<section class="getDomain">
			<div class="banner">
				<h3>Submit</h3>
				<h2>Domain</h2>
			</div>
			<form>
				<input type="text" name="domainName" placeholder="Enter your domain name" required v-model="domain">
				<select name="selection" v-model="duration">
					<option v-for="option in options">{{ option.text }}</option>
				</select>
				<select name="dot" v-model="dot">
					<option v-for="key in dotOptions">
						{{ key.text }}
					</option>
				</select>
				<div class="button red" @click="submitForm">Submit</div>
			</form>
		</section>
		<section class="benefit">
			<div class="banner">
				<span></span>
				<h3>Our</h3>
				<h2>Benefits</h2>
			</div>
			<div class="container">
				<div class="container-item">
					<h2>99.9% Uptime</h2>
					<p>{{ paraText }}</p>
				</div>
				<div class="container-item">
					<h2>99.9% Uptime</h2>
					<p>{{ paraText }}</p>
				</div>
				<div class="container-item">
					<h2>99.9% Uptime</h2>
					<p>{{ paraText }}</p>
				</div>
				<div class="container-item">
					<h2>99.9% Uptime</h2>
					<p>{{ paraText }}</p>
				</div>
				<div class="container-item">
					<h2>99.9% Uptime</h2>
					<p>{{ paraText }}</p>
				</div>
				<div class="container-item">
					<h2>99.9% Uptime</h2>
					<p>{{ paraText }}</p>
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
		<app-domain></app-domain>
			</section>
	</main>
</template>

<script>
import domainForm from "./Domain.vue"

export default {
	components: {
			"app-domain": domainForm
	},
	data() {
		return {
			domain: "",
			duration: "(0-1 year)",
			dot: ".com",
			data: "",
			paraText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut hic sint officia tempora deserunt at. Rem sequi, laborum eaque vitae.",
			options: [
			{ text: "(0-1 year)"},
			{ text: "(1-2 years)"},
			{ text: "(2-3 years)"},
			{ text: "(3-4 years)"}
			],
			dotOptions: [
			{ text: ".com" },
			{ text: ".ru" },
			{ text: ".net" },
			{ text: ".com.ua" }
			]
		}
	},
	methods: {
		click(){
			alert("clicked");
		},
		submitForm(){
			this.data = `${this.domain}${this.dot} for ${this.duration}`
			this.domain = "";
		},
		submitted(){
			if (this.domainName !== "") {
				alert(this.domainName);
			} else {
				alert("input correct value!")
			}
		}
	}
}
</script>

<style lang="sass">
@import "../assets/font-awesome.min.css"

ul
	padding: 0
	margin: 0

.home
	padding: 35px 0
	background-color: #fff

.banner
	margin: 25px auto
	text-align: center
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
		margin: 0 auto
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
	transition: .3s
	&:hover
		background-color: #52cbf8 - 50%

.red
	background-color: #ff8261
	&:hover
		background-color: #ff8261 - 50%


.getDomain
	background-color: #e7f4f8
	min-height: 200px
	display: flex
	justify-content: center
	p
		text-align: center
		margin: 0
	.banner
		display: flex
		flex-flow: column wrap
		align-items: center
		justify-content: center
		margin: 0
		h3
			position: relative
			&:before
				font-family: FontAwesome
				position: absolute
				top: -25px
				left: -35px
				content: "\f002"
				color: orange
				font-size: 30px
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
	border-bottom: 1px solid #c0c0c0
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
					font-family: FontAwesome
					content: "\f013"
					margin-right: 10px
					// content: "\2690"
					font-size: 40px
					color: orange

	.banner
		margin: -1px 0
		padding: 55px 0 25px 0

.subscribe
	background-color: #e7f4f8
	min-height: 230px
	display: flex
	justify-content: center;
	align-items: center
</style>