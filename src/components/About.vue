<template>
	<main>
	<section class="about">
			<h1><span class="lg">about us</span>
				<span class="small">What we are</span></h1>
			</section>
	<section class="details">
			<div class="banner">
				<span></span>
				<h3>Our</h3>
				<h2>Details</h2>
			</div>
			<div class="container">
				<div class="wrapper">
					<img class="image" src="http://placehold.it/525x260" alt="image">
					<div class="block"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolor, facilis esse, voluptates dicta excepturi accusantium officiis voluptate velit non vel, possimus adipiscir, facilis esse, voluptates dicta excepturi accusantium officiis voluptate velit non vel, possimus adipisci soluta doloremque! Quis minus eius maxime inventore.</p>
					<blockquote>
						Started at 1980 Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.
						<img src="../img/quotes.png" alt="">
					</blockquote>
					</div>
				</div>
			</div>
			</section>
	<section class="team">
		<div class="banner">
				<span></span>
				<h3>Our</h3>
				<h2>Details</h2>
			</div>
			<div class="containerTeam">
				<div class="member">
					<img src="https://placehold.it/260x260" alt="image">
					<div class="info">
						<div class="name">
							<span class="userName">Sara Nair</span><span class="job">CEO</span>
						</div>
						<nav>
							<ul class="mySocials">
								<li><a href="#"><i class="fa fa-twitter"></i></a></li>
								<li><a href="#"><i class="fa fa-google"></i></a></li>
								<li><a href="#"><i class="fa fa-facebook"></i></a></li>
							</ul>
						</nav>
					</div>
				</div>
				<div class="member">
					<img src="https://placehold.it/260x260" alt="image">
					<div class="info">
						<div class="name">
							<span class="userName">Sara Nair</span><span class="job">CEO</span>
						</div>
						<nav>
							<ul class="mySocials">
								<li><a href="#"><i class="fa fa-twitter"></i></a></li>
								<li><a href="#"><i class="fa fa-google"></i></a></li>
								<li><a href="#"><i class="fa fa-facebook"></i></a></li>
							</ul>
						</nav>
					</div>
				</div>
				<div class="member">
					<img src="https://placehold.it/260x260" alt="image">
					<div class="info">
						<div class="name">
							<span class="userName">Sara Nair</span><span class="job">CEO</span>
						</div>
						<nav>
							<ul class="mySocials">
								<li><a href="#"><i class="fa fa-twitter"></i></a></li>
								<li><a href="#"><i class="fa fa-google"></i></a></li>
								<li><a href="#"><i class="fa fa-facebook"></i></a></li>
							</ul>
						</nav>
					</div>
				</div>
				<div class="member">
					<img src="https://placehold.it/260x260" alt="image">
					<div class="info">
						<div class="name">
							<span class="userName">Sara Nair</span><span class="job">CEO</span>
						</div>
						<nav>
							<ul class="mySocials">
								<li><a href="#"><i class="fa fa-twitter"></i></a></li>
								<li><a href="#"><i class="fa fa-google"></i></a></li>
								<li><a href="#"><i class="fa fa-facebook"></i></a></li>
							</ul>
						</nav>
					</div>
				</div>
				<div class="member">
					<img src="https://placehold.it/260x260" alt="image">
					<div class="info">
						<div class="name">
							<span class="userName">Sara Nair</span><span class="job">CEO</span>
						</div>
						<nav>
							<ul class="mySocials">
								<li><a href="#"><i class="fa fa-twitter"></i></a></li>
								<li><a href="#"><i class="fa fa-google"></i></a></li>
								<li><a href="#"><i class="fa fa-facebook"></i></a></li>
							</ul>
						</nav>
					</div>
				</div>
				<div class="member">
					<img src="https://placehold.it/260x260" alt="image">
					<div class="info">
						<div class="name">
							<span class="userName">Sara Nair</span><span class="job">CEO</span>
						</div>
						<nav>
							<ul class="mySocials">
								<li><a href="#"><i class="fa fa-twitter"></i></a></li>
								<li><a href="#"><i class="fa fa-google"></i></a></li>
								<li><a href="#"><i class="fa fa-facebook"></i></a></li>
							</ul>
						</nav>
					</div>
				</div>
				<div class="member">
					<img src="https://placehold.it/260x260" alt="image">
					<div class="info">
						<div class="name">
							<span class="userName">Sara Nair</span><span class="job">CEO</span>
						</div>
						<nav>
							<ul class="mySocials">
								<li><a href="#"><i class="fa fa-twitter"></i></a></li>
								<li><a href="#"><i class="fa fa-google"></i></a></li>
								<li><a href="#"><i class="fa fa-facebook"></i></a></li>
							</ul>
						</nav>
					</div>
				</div>
				<div class="member">
					<img src="https://placehold.it/260x260" alt="image">
					<div class="info">
						<div class="name">
							<span class="userName">Sara Nair</span><span class="job">CEO</span>
						</div>
						<nav>
							<ul class="mySocials">
								<li><a href="#"><i class="fa fa-twitter"></i></a></li>
								<li><a href="#"><i class="fa fa-google"></i></a></li>
								<li><a href="#"><i class="fa fa-facebook"></i></a></li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</section>
	<section class="domain">
			<app-domain></app-domain>
			</section>
	</main>
</template>

<script>
import domainForm from "./Domain.vue"

export default {
			data(){
				return {
			}
		},
		components: {
			"app-domain": domainForm
		}
	}
</script>

<style lang="sass">
@import "../assets/font-awesome.min.css"

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


.about
	min-height: 260px
	background-color: #222836
	display: flex
	justify-content: center;
	align-items: center
	text-transform: uppercase
	color: #fff
	.lg
		display: block;
		font-size: 40px
		font-weight: bold
	.small
		font-size: 20px
		font-weight: 400

.details
	min-height: 520px
	background-color: #fff
	padding: 40px 0
	.wrapper
		display: flex
		padding: 30px
		.image
			width: 100%
			height: 100%
		p
			display: inline-block
			flex-basis: 50%
			width: 88%
			margin: 5px 0 36px 40px
			color: #a0a9b6;

	blockquote
		display: inline-block
		position: relative
		padding: 20px 40px
		flex-basis: 50%
		border: 1px solid #dbeaee;
		font-style: italic
		color: #a0a9b6;
		img
			position: absolute
			top: -8px
			left: 25px

.domain
	display: flex
	justify-content: center
	align-items: center
	background-color: #e7f4f8
	min-height: 230px

.team
	min-height: 1020px
	background-color: #fff;
	.banner
		padding-top: 55px
		margin-top: 0

.containerTeam
	display: flex
	justify-content: space-around
	flex-wrap: wrap


	.member
		max-width: 260px
		height: 100%
		padding: 25px 0
		.name
			font-family: Arial
			margin-left: 5px
		.userName
			display: block
			color: #556b72;
			font-weight: bold
			text-transform: uppercase
		.job
			color: #a0a9b6;
	.info
		display: flex
		justify-content: space-between
		align-items: center
		margin-top: 10px
	ul
		padding: 0
		display: flex
	li
		display: flex
		align-items: center
		justify-content: center
		height: 31px
		width: 31px
		border: 1px solid #d8e6ea;
		margin-left: 5px
		a
			position: relative
			color: #8f9fa4;
			padding: 8px
			transition: .3s;
			&:hover
				color: #8f9fa4 - 50%


</style>