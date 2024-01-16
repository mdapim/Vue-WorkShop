import { createRouter, createWebHashHistory } from "vue-router";
import PageViewer from "./views/PageViewer.vue";
import CreatePageComposite from "./views/CreatePageComposite.vue";
import Pages from "./views/Pages.vue";
import PageList from "./views/PagesList.vue";
import PageEdit from "./views/PageEdit.vue";

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
				{ path: "create", component: CreatePageComposite },
				{ path: ":index/edit", component: PageEdit, props: true },
			],
		},
	],
});

// export default router;
