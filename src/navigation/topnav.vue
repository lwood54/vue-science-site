<template>
	<div class="topnav">
		<router-link
			v-for="item in items"
			:key="item.title"
			class="router-links router-links--topnav"
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

<style lang="scss" scoped>
	.topnav {
		height: 40px;
		background-color: yellow;
		text-align: center;
		display: flex;
	}

	.router-links {
		align-content: center;
		border-radius: 4px;
		color: #fff;
		display: flex;
		height: 40px;
		justify-content: center;
		line-height: 40px;
		margin-bottom: 5px;
		text-align: center;
		text-decoration: none;
		width: 33%;

		&:hover {
			transition: background-color 0.5s ease-in;
			background-color: blue;
		}
	}
</style>
