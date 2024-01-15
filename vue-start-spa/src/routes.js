import { createRouter, createWebHashHistory } from "vue-router";
import PageViewer from "./views/PageViewer.vue";
import CreatePage from "./views/CreatePage.vue";
import Pages from "./views/Pages.vue";
import PageList from "./views/PagesList.vue";

export const router = createRouter({
	history: createWebHashHistory(),
	routes: [
		// setting props to true passes params as props
		{ path: "/:index?", component: PageViewer, props: true },
		{
			path: "/pages",
			component: Pages,
			// can create nested routes as well /pages/create
			children: [
				{ path: "", component: PageList },
				{ path: "create", component: CreatePage },
			],
		},
	],
});

// export default router;
