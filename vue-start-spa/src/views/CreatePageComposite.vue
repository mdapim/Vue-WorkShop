<template>
	<form action="" class="container mb-3">
		<div class="row">
			<div class="col-md-8">
				<div class="mb-3">
					<label for="" class="form-label"> Page Title </label>
					<!-- can bind value to make page title the value, we then add a function to handle input -->
					<!-- this is a 2 way binding first for the value and then for input -->
					<input
						type="text"
						class="form-control"
						:value="pageTitle"
						@input="(e) => (pageTitle = e.target.value)" />
				</div>
				<div class="mb-3">
					<label for="" class="form-label"> Content </label>
					<!-- this can be done using another directive that sets up a 2 way binding -->
					<textarea
						type="text"
						class="form-control"
						rows="8"
						v-model="pageContent"></textarea>
				</div>
			</div>

			<div class="col">
				<div class="mb-3">
					<label for="" class="form-label"> Link Text </label>
					<input type="text" class="form-control" v-model="linkText" />
				</div>

				<div class="row mb-3">
					<div class="form-check">
						<input
							class="form-check-input"
							type="checkbox"
							v-model="published" />
						<label class="form-check-label" for="gridCheck1"> Published </label>
					</div>
				</div>
			</div>
		</div>

		<div class="mb-3">
			<button
				class="btn btn-secondary"
				:disabled="isFormInvalid"
				@click.prevent="submitForm">
				Create Page
			</button>
		</div>
	</form>
</template>

<script setup>
	import { ref, inject, computed, watch } from "vue";
	import { useRouter } from "vue-router";

	const router = useRouter();
	const bus = inject("$bus");
	const pages = inject("$pages");
	let pageTitle = ref("");
	let content = ref("");
	let linkText = ref("");
	let published = ref(true);

	function submitForm() {
		if (!pageTitle || !content || !linkText) {
			alert("Please fill in all the fields.");
			return;
		}

		// when using refs should have value
		let newPage = {
			pageTitle: pageTitle.value,
			content: content.value,
			link: { text: linkText.value },
			published,
		};

		pages.addPage(newPage);

		bus.$emit("page-created", newPage);

		router.push({ path: "/pages" });
	}

	const isFormInvalid = computed(() => !pageTitle || !content || !linkText);

	// value has to be reactive
	watch(pageTitle, (newTitle, oldTitle) => {
		if (linkText.value == oldTitle) {
			linkText.value = newTitle;
		}
	});
</script>
