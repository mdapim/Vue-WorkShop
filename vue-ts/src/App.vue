<template>
	<div>
		<div>hello</div>
		<p>{{ name }} - {{ age }}</p>
		<button @click="changeName('Mike')">press here</button>
		<button @click="changeAge(26)">press here</button>
		<router-view></router-view>
	</div>
</template>

<script lang="ts">
	import { defineComponent, reactive, ref, toRefs } from "vue";

	// using typescript with composite API
	export default defineComponent({
		name: "App",
		components: {},
		setup() {
			// const state = reactive({
			// 	name: "Link",
			// 	age: 25 as string | number,
			// });

			// // to access have to use state.name

			// return { ...toRefs(state) };

			const name = ref("Linker");
			// use a generic to pass through the type to override default infer type
			const age = ref<number | string>(25);

			return { name, age };
		},
		methods: {
			changeName(name: string): string {
				this.name = name;
				return name;
			},

			changeAge(age: number | string) {
				this.age = age;
				return age;
			},
		},
	});

	// using typescript with options api

	// 	export default defineComponent({
	// 	name: "App",
	// 	components: {},
	// 	data() {
	// 		return {
	// 			name: "link",
	// 			// using a union type and type assertion as
	// 			age: 25 as number | string,
	// 		};
	// 	},
	// 	methods: {
	// 		changeName(name: string): string {
	// 			this.name = name;
	// 			return name;
	// 		},
	// 		changeAge(age: number | string) {
	// 			this.age = age;
	// 			return age;
	// 		},
	// 	},
	// });
</script>

<style></style>
