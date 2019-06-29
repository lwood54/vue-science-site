<template>
	<v-navigation-drawer class="blue lighten-3" dark permanent>
		<v-list class="nav-list">
			<v-list-tile v-for="item in items" :key="item.title">
				<router-link class="router-links" :to="item.destination ? item.destination : '/'">
					<v-list-tile-action>
						<v-icon>{{ item.icon }}</v-icon>
					</v-list-tile-action>
				</router-link>
				<router-link class="router-links" :to="item.destination ? item.destination : '/'">
					<v-list-tile-content>
						<v-list-tile-title>{{ item.title }}</v-list-tile-title>
					</v-list-tile-content>
				</router-link>
			</v-list-tile>
		</v-list>
	</v-navigation-drawer>
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
		text-decoration: none;
		color: inherit;
	}

	.nav-list {
		min-height: 100vh;
	}
</style>
