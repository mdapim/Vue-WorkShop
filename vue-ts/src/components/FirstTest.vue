<template>
	<div>
		<!-- creating a button with a custom event that changes isVisible element -->
		<button @click="displayHiddenMessage">Press Button</button>
		<!-- using v-if as a conditional to display the element -->
		<h1 v-if="isVisible">Hidden Text</h1>
	</div>
</template>

<!-- Specify we want to use typescript -->
<script lang="ts">
	import { defineComponent } from "vue";

	export default defineComponent({
		// defining the data for isVisible
		data() {
			return {
				isVisible: false as boolean,
			};
		},
		// Creating a method for the custom event to change isVisible when pressed
		methods: {
			displayHiddenMessage(): void {
				this.isVisible = !this.isVisible;
			},
		},
	});
</script>
