<template>
	<div id="app">
		<div class="container">
			<nav class="navbar navbar-expand-lg navbar-dark bg-info">
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarText">
					<ul class="navbar-nav mr-auto">
						<li class="nav-item">
							<a class="nav-link" href="/">Dashboard <span class="sr-only">(current)</span></a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="/login">Login</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="/boards">Boards</a>
						</li>
					</ul>
				</div>
			</nav>
			<router-view>
				<!-- To view next -->
			</router-view>
		</div>
	</div>
</template>

<script>
// import Login from './pages/Login.vue'
// import DashBoard from './pages/Dashboard.vue'

export default {
	components: {
		// 'login-page': Login,
		// 'board-page': DashBoard
	}
}
</script>
	
<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
