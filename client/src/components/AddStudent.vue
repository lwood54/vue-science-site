<template>
	<div>
		<button @click="addName">Add Student</button>
		<h3>name:</h3>
		<input type="text" v-model="studentName" placeholder="Logan Wood">
		<h3>email:</h3>
		<input type="text" v-model="studentEmail" placeholder="abc@123.com">
	</div>
</template>

<script>
	export default {
		data() {
			return {
				studentName: "",
				studentEmail: "",
				quiz1_1: 100
			};
		},
		methods: {
			addName(name) {
				var url = "http://localhost:5000/api/students";
				var data = {
					name: this.studentName,
					email: this.studentEmail,
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
