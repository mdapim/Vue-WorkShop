import { createRouter, createWebHashHistory } from "vue-router";
import FirstTest from "./components/FirstTest.vue";
import TaskList from "./components/TaskList.vue";

export const router = createRouter({
	history: createWebHashHistory(),
	routes: [
		// setting props to true passes params as props
		{ path: "", component: FirstTest, props: true },
		{
			path: "/TaskList",
			component: TaskList,
			// can create nested routes as well /pages/create
			children: [{ path: "", component: TaskList }],
		},
	],
});

// export default router;
