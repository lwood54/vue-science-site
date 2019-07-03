<template>
	<div>
		<h1>This is an about page</h1>
		<h3>{{phrase}}</h3>
		<h3>title: {{teks_7_8.title}}</h3>
		<p>{{teks_7_8.standard}}</p>
		<p>{{teks_7_8.standard}}</p>
		<p>{{teks_7_8.standard}}</p>
		<p>{{teks_7_8.standard}}</p>
		<p>{{teks_7_8.standard}}</p>
		<p>{{teks_7_8.standard}}</p>
		<p>{{teks_7_8.standard}}</p>
		<p>{{teks_7_8.standard}}</p>
		<p>{{teks_7_8.standard}}</p>
		<p>{{teks_7_8.standard}}</p>
		<p>{{teks_7_8.standard}}</p>
		<p>{{teks_7_8.standard}}</p>
		<p>{{teks_7_8.standard}}</p>
		<p>{{teks_7_8.standard}}</p>
	</div>
</template>

<script>
	import teks_7_8B from "../content/teks/teks_7_8B.json";
	console.log(teks_7_8B[0]);

	export default {
		data() {
			return {
				phrase: "This is a message.",
				teks_7_8: teks_7_8B[0]
			};
		}
	};
</script>
