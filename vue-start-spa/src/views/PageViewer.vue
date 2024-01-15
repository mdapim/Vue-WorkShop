<template>
	<div v-if="page" class="container">
		<h1>{{ page.pageTitle }}</h1>
		<p>{{ page.content }}</p>
	</div>
</template>

<script>
	// another way to get around components being rendered with undefined data is to set default values
	// alternative to using v-if
	export default {
		props: ["index"],
		// props: ["pageTitle", "pageContent"], // changing this to an object
		// props: {
		// 	page: {
		// 		type: Object,
		// 		default(rawProps) {
		// 			return {
		// 				pageTitle: "",
		// 				content: "",
		// 			};
		// 		},
		// 	},
		// },
		// created is used as a hook in the vue lifecycle to fetch the data beforehand
		created() {
			console.log(this.$route.params);
			this.page = this.$pages.getSinglePage(this.index);

			// can use a watch method to watch the route param changes
			// another way to specifying props to true in routes and watching it
			// this.$watch(
			// 	() => this.$route.params,
			// 	(newParams, prevParams) => {
			// 		this.page = this.$pages.getSinglePage(newParams.index);
			// 	}
			// );
		},
		data() {
			return { page: null };
		},
		watch: {
			index(newIndex, oldIndex) {
				this.page = this.$pages.getSinglePage(newIndex);
			},
		},
	};
</script>
