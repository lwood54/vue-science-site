<template>
	<div>
		<h1>Home</h1>
		<add-student someData="this is data"/>
	</div>
</template>

<script>
	import addstudent from "../components/AddStudent";

	export default {
		components: {
			"add-student": addstudent
		}
	};
</script>
