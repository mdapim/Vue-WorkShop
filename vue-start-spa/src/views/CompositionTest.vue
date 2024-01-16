<template>
	<!-- // changed to data counter due to reactive -->
	<p>{{ data.counter }}</p>
	<button @click.prevent="click">test me</button>
</template>

<script setup>
	import { ref, reactive } from "vue";

	// ref allows us to make a reactive value, can be primitive, etc.
	const counter = ref(0); // object with {value, 0}

	// this is not for primitive values only objects, e.g. arrays, functions, etc
	const data = reactive({ counter: 0 });

	function click() {
		// specify for ref
		//counter.value++;
		data.counter++;
	}

	// composition api gives us the ability to organize the code logically
	// export default {
	// 	data() {
	// 		return {
	// 			counter: 0,
	// 		};
	// 	},
	// 	methods: {
	// 		click() {
	// 			this.counter++;
	// 		},
	// 	},
	// };
</script>
