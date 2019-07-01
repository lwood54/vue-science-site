<template>
	<div class="side-nav-container">
		<router-link
			v-for="item in items"
			:key="item.title"
			class="router-links"
			:to="item.destination ? item.destination : '/'"
		>{{item.title}}</router-link>
	</div>
</template>	

<script>
	export default {
		data() {
			return {
				items: [
					{ title: "Home", icon: "dashboard", destination: "/" },
					{ title: "About", icon: "account_box", destination: "/about" },
					{ title: "Admin", icon: "gavel" }
				]
			};
		}
	};
</script>

<style lang="scss">
	.router-links {
		align-content: center;
		border-radius: 4px;
		color: #fff;
		display: flex;
		height: 50px;
		justify-content: center;
		line-height: 50px;
		margin-bottom: 5px;
		text-align: center;
		text-decoration: none;
		width: 100%;

		&:hover {
			transition: background-color 0.5s ease-in;
			background-color: blue;
		}
	}

	.nav-list {
		min-height: 100vh;
	}

	.side-nav-container {
		background-color: rgb(83, 177, 106);
		min-height: 100vh;
		padding: 5px;
	}

	.side-bar-item {
		width: 100%;
		/* background-color: blue; */
		padding: 5px;
	}
</style>
