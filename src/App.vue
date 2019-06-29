<template>
	<div id="app">
		<div class="topnav-container">
			<topnav/>
		</div>
		<div class="sidebar-container">
			<sidebar/>
		</div>
		<div class="page-container">
			<transition name="page-change" mode="out-in">
				<router-view/>
			</transition>
		</div>
	</div>
</template>

<script>
	import sidebar from "./navigation/sidebar";
	import topnav from "./navigation/topnav";

	export default {
		components: {
			sidebar,
			topnav
		}
	};
</script>


<style lang="scss">
	#app {
		font-family: roboto, Helvetica, Arial, sans-serif;
		display: flex;
	}

	// Vue animations: class + -enter-active & class + -leave-active
	// this is what will happen while the transition is occuring
	.page-change-enter-active,
	.page-change-leave-active {
		transition: opacity 0.5s;
	}

	// VUE animations: class + -enter & class + -leave-to
	// v-enter (starting point) --> v-enter-active(actual transition) --> v-enter-to (ending point)
	// v-leave (starting point for el that is leaving) --> v-leave-active (actual transition) --> v-leave-to (ending point)
	.page-change-enter,
	.page-change-leave-to {
		opacity: 0;
	}

	// contains any pages the router will display
	// this does have transitions applied to it above
	.page-container {
		text-align: center;
		width: 100%;
		min-height: 100vh;
		margin: 0 auto;
		background-color: gray;
		padding-left: 300px;
		padding-top: 5px;
	}

	.sidebar-container {
		position: fixed; /* to allow movement of div off screen */
	}

	.topnav-container {
		position: fixed; /* to allow movement of div off screen*/
		width: 100%;
	}

	@keyframes slide-up {
		100% {
			transform: translateY(-75px);
		}
	}

	@keyframes slide-down {
		0% {
			// needs to start off screen when coming in
			transform: translateY(-75px);
		}
		100% {
			transform: translateY(0);
		}
	}

	@keyframes slide-left {
		100% {
			transform: translate(-400px);
		}
	}
	@keyframes slide-right {
		0% {
			// needs to start off screen when coming in
			transform: translateX(-400px);
		}
		100% {
			transform: translateX(0);
		}
	}

	// when screen moves smaller than this, the following styles/actions occur
	@media (max-width: 1050px) {
		.sidebar-container {
			animation: slide-left 1s ease-out forwards; // use forwards to make sure animation keeps its position when done
		}
		.topnav-container {
			animation: slide-down 1s ease-in forwards;
		}
		.page-container {
			transition: padding 1.1s ease-out;
			padding-left: 0;
			padding-top: 40px;
		}
	}

	// when screen moves larger than this, the following styles/actions occur
	@media (min-width: 1050px) {
		.sidebar-container {
			animation: slide-right 1s ease-in forwards;
		}
		.topnav-container {
			animation: slide-up 1s ease-out forwards;
		}
		.page-container {
			transition: padding 1.1s ease-in;
			padding-left: 300px;
		}
	}
</style>
