<template>
	<div>
		<navbar
			:pages="pages"
			:active-page="activePage"
			:change-active-page="(index) => (activePage = index)"></navbar>

		<!-- v-if can be used on any element works like an if statement, conditionally render based on value -->
		<!-- v-show can also be used to show or hide content, using CSS still in the DOM -->
		<page-viewer
			v-if="pages.length > 0"
			:page="pages[activePage]"></page-viewer>
	</div>
</template>

<script>
	import PageViewer from "./components/PageViewer.vue";
	import Navbar from "./components/Navbar.vue";

	export default {
		components: {
			PageViewer,
			Navbar,
		},
		// created is used as a hook in the vue lifecycle to fetch the data beforehand
		created() {
			this.getPages();
		},
		data() {
			return {
				activePage: 0,
				pages: [],
			};
		},
		// We can call async methods to fetch data before rendering
		methods: {
			async getPages() {
				let res = await fetch("pages.json");
				let data = await res.json();

				this.pages = data;
			},
		},
	};
</script>
