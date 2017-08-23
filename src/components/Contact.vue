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
					<h3>Our</h3>
					<h2>Hosting</h2>
				</div>
			</div>
			<div class="formContainer">
				<div class="banner">
					<span></span>
					<h3>Our</h3>
					<h2>Hosting</h2>
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
	export default {
		data(){
			return {
				name: "",
				email: "",
				subject: "",
				comment: "",
				data: ""
			}
		},
		methods: {
			contactFormSubmitted: function(){
				const fullData = `Name is : ${this.name} \nEmail is : ${this.email} \nSubject is :${this.subject} \nComments : ${this.comment}`;
				console.log(fullData);
			}
		},
	}
</script>

<style lang="sass">
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
	// min-height: 650px
	background-color: #fff
	display: flex

.infoContainer
	flex-basis: 50%
	.banner
		text-align: left
		span
			margin: 10px 0


.formContainer
	flex-basis: 50%
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