<template>
	<div>
		<navbar :pages="pages" :active-page="activePage"></navbar>

		<!-- v-if can be used on any element works like an if statement, conditionally render based on value -->
		<!-- v-show can also be used to show or hide content, using CSS still in the DOM -->

		<!-- <page-viewer
			v-if="pages.length > 0"
			:page="pages[activePage]"></page-viewer> -->

		<!-- <create-page :page-created="pageCreated"></create-page> -->
		<!-- using @ specify we are setting up an event handler -->
		<create-page-custom-event
			@page-created="pageCreated"></create-page-custom-event>
	</div>
</template>

<script>
	import PageViewer from "./components/PageViewer.vue";
	import Navbar from "./components/Navbar.vue";
	import CreatePage from "./components/CreatePage.vue";
	import CreatePageCustomEvent from "./components/CreatePageCustomEvent.vue";

	export default {
		components: {
			PageViewer,
			Navbar,
			CreatePage,
			CreatePageCustomEvent,
		},
		// created is used as a hook in the vue lifecycle to fetch the data beforehand
		created() {
			this.getPages();
			this.$bus.$on("navbarLinkActivated", (index) => {
				this.activePage = index;
			});
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
			pageCreated(pageObj) {
				this.pages.push(pageObj);
			},
		},
	};
</script>
