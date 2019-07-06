<template>
	<div>
		<button @click="addName">Add Student</button>
		<h3>name:</h3>
		<input type="text" v-model="studentName" placeholder="Logan Wood">
		<h3>email:</h3>
		<input type="text" v-model="studentEmail" placeholder="abc@123.com">
		<h4 v-if="addStudentSuccessMessage">{{addStudentSuccessMessage}}</h4>
		<h4 v-else-if="addStudentFailMessage">{{addStudentFailMessage}}</h4>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				studentName: "",
				studentEmail: "",
				addStudentSuccessMessage: "",
				addStudentFailMessage: "",
				quiz1_1: 100
			};
		},
		methods: {
			addName(name) {
				this.addStudentSuccessMessage = "";
				this.addStudentFailMessage = "";
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
					.then(response => {
						if (response.status !== 400) {
							this.addStudentSuccessMessage = `Student: ${
								response.name
							} and email: ${response.email} added successfully.`;
						} else if (response.status === 400) {
							let dupEmail;
							if (
								response.error.errmsg ===
								'E11000 duplicate key error index: science-site.students.$email_1 dup key: { : "abc@123.com" }'
							) {
								dupEmail =
									"There is already a user with that email address.";
							}
							this.addStudentFailMessage = `Error message: ${
								dupEmail
									? dupEmail
									: response.error.message
									? response.error.message
									: "There was an error processing your request. Please check your information and try again."
							}`;
							console.log(response.error);
						}
					})
					.catch(error => console.error("Error:", error));
			}
		}
	};
</script>

<style>
</style>
