<template>
	<div>
		<button @click="addName">Add Student</button>
		<input type="text" v-model="studentName">
	</div>
</template>

<script>
	export default {
		data() {
			return {
				studentName: "Logan Wood",
				quiz1_1: 100
			};
		},
		methods: {
			addName(name) {
				var url = "http://localhost:5000/api/students";
				var data = {
					name: this.studentName,
					quiz1_1: this.quiz1_1
				};

				fetch(url, {
					method: "POST", // or 'PUT'
					body: JSON.stringify(data), // data can be `string` or {object}!
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(res => res.json())
					.then(response =>
						console.log("Success:", JSON.stringify(response))
					)
					.catch(error => console.error("Error:", error));
			}
		}
	};
</script>

<style>
</style>
