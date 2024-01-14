<template>
	<div class="container">
		<h1>{{ page.pageTitle }}</h1>
		<p>{{ page.content }}</p>
	</div>
</template>

<script>
	// another way to get around components being rendered with undefined data is to set default values
	export default {
		// props: ["pageTitle", "pageContent"], // changing this to an object
		props: {
			page: {
				type: Object,
				default(rawProps) {
					return {
						pageTitle: "",
						content: "",
					};
				},
			},
		},
	};
</script>
