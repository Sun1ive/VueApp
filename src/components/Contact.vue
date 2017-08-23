<template>
	<main>
		<section class="head">
			<div class="head-name">
				<h1>Contact us</h1>
			</div>
			<div class="head-image">
				<img src="http://placehold.it/300x200" alt="image">
			</div>
				</section>
		<section class="contactForm">
			<div class="infoContainer">
				<div class="banner">
					<span></span>
					<h3>Info</h3>
					<h2>Contant Us</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro labore ab voluptatem. Ut obcaecati quasi ullam eaque deserunt itaque soluta, alias in voluptates adipisci nihil nostrum! Optio sapiente incidunt numquam.</p>
				</div>
				<div class="wrapperInfoBox">
					<div class="infobox">
						<div class="banner">
							<span></span>
							<h2>Address</h2>
						</div>
						<div class="text">
							<span>9987 Lipsum street Mavelikara</span>
							<span>pathirappally PO</span>
							<span>Alappuzha, 688521</span>
						</div>
					</div>
					<div class="infobox">
						<div class="banner">
							<span></span>
							<h2>Email address</h2>
						</div>
						<div class="text">
							<span>General: info@hosting.com</span>
							<span>Office: contact@hosting.com</span>
						</div>
					</div>
					<div class="infobox">
						<div class="banner">
							<span></span>
							<h2>Phone</h2>
						</div>
						<div class="text">
							<span>Landline : 37/5 77868 777 688</span>
							<span>Mobile : +87 66665 7785 7</span>
						</div>
					</div>
					<div class="infobox">
						<div class="banner">
							<span></span>
							<h2>Social media</h2>
						</div>
						<nav>
							<ul>
								<li><a href="#" class="fa fa-twitter"></a></li>
								<li><a href="#" class="fa fa-vk"></a></li>
								<li><a href="#" class="fa fa-facebook"></a></li>
								<li><a href="#" class="fa fa-google"></a></li>
								<li><a href="#" class="fa fa-git"></a></li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
			<div class="formContainer">
				<div class="banner">
					<span></span>
					<h3>Contact</h3>
					<h2>Form</h2>
				</div>
				<form action="" id="form" @submit.prevet="contactFormSubmitted">
					<input type="text" placeholder="Name*" required v-model="name"><br>
					<input type="email" placeholder="Email*" required v-model="email"><br>
					<input type="text" placeholder="Subject*" required v-model="subject"><br>
					<textarea id="" rows="10" placeholder="Comment*" required v-model="comment"></textarea>
					<input type="submit" value="Submit" class="button">
				</form>
			</div>
				</section>
	</main>
</template>

<script>
import axios from 'axios'
	export default {
		data(){
			return {
				name: "",
				email: "",
				subject: "",
				comment: "",
				data: "",
			}
		},
		methods: {
			contactFormSubmitted(){
				const fullData = `Name is : ${this.name}\nEmail is : ${this.email}\nSubject is :${this.subject}\nComments : ${this.comment}`;
				console.log(fullData);
			}
		},
	}
</script>

<style lang="sass">
ul
	margin: 0
	padding: 0

.banner
	padding: 30px 0
	margin: 0 auto
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

.head
	min-height: 260px
	background-color: #222836
	display: flex
	justify-content: space-around
	align-items: center
	&-name
		h1
			font-size: 40px
			text-transform: uppercase
			color: #fff


.contactForm
	background-color: #fff
	display: flex
	justify-content: space-between

.infoContainer
	padding: 25px 0
	flex-basis: 40%
	margin: 0 auto
	p
		text-transform: none
	.banner
		text-align: left
		span
			margin: 10px 0
	.infobox
		width: calc(100% / 2 - 40px)
		margin: 15px 0
		&:nth-child(2)
			margin-left: 80px
		&:nth-child(4)
			margin-left: 80px
		ul
			padding: 0
			display: flex
			li
				margin: 0 15px
				&:nth-child(1)
					margin-left: 0
				a
					font-size: 18px
					line-height: 24px;
					color: #a0a9b6;
					transition: .3s;
					&:hover
						color: #a0a9b6 - 50%
		.banner
			padding: 15px 0
		h2
			font-size: 18px
			font-weight: bold
		span
			display: block
			color: #a0a9b6;

.wrapperInfoBox
	display: flex
	flex-wrap: wrap


.formContainer
	padding: 25px 0
	flex-basis: 40%
	h2
		letter-spacing: 3px
	#form
		display: flex
		flex-flow: column wrap
		justify-content: center
		align-items: center
		width: 375px
		margin: 0 auto
		input
			height: 46px
			width: 355px
			border: 1px solid #dfecf0;
			padding-left: 15px
			font-size: 16px
			margin: 5px 0
		textarea
			margin: 5px 0
			padding-left: 15px
			border: 1px solid #dfecf0;
			width: 100%
			max-width: 355px
			font-size: 16px
		.button
			background-color: #fb6b45;
			text-transform: uppercase
			color: #Fff
			max-width: 150px
			padding: 0
			margin: 5px 0 35px auto
			text-align: center

</style>