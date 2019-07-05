<template>
	<div>
		<h1>Home</h1>
		<add-student/>
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
