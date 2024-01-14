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
				<div class="mb-3">
					<label for="" class="form-label"> Link URL </label>
					<input type="text" class="form-control" v-model="linkURL" />
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

<script>
	export default {
		// we can declare an event by using the emit option
		// can be set up as an array emits: ["pageCreated "] or as an object below
		emits: {
			pageCreated({ pageTitle, content, link, published }) {
				if (!pageTitle) return false;
				if (!content) return false;
				if (!link || !link.text || !link.url) return false;
				return true;
			},
		},
		computed: {
			isFormInvalid() {
				if (
					!this.pageTitle ||
					!this.pageContent ||
					!this.linkText ||
					!this.linkURL
				) {
					return true;
				}
			},
		},
		data() {
			return {
				pageTitle: "",
				pageContent: "",
				linkText: "",
				linkURL: "",
				published: false,
			};
		},
		methods: {
			submitForm() {
				if (
					!this.pageTitle ||
					!this.pageContent ||
					!this.linkText ||
					!this.linkURL
				) {
					alert("Please fill in all the fields.");
					return;
				}

				// $ states its a public property, camelCase for this
				// we are creating a custom event for this emits the event
				this.$emit("pageCreated", {
					pageTitle: this.pageTitle,
					content: this.pageContent,
					link: { text: this.linkText, url: this.linkURL },
					published: this.published,
				});

				this.pageTitle = "";
				this.pageContent = "";
				this.linkText = "";
				this.linkURL = "";
				this.published = false;
			},
		},
		// computed property return a value using existing data, it does not mutate
		// we use watchers to watch for property changes and gives us the ability to mutate our states
		watch: {
			pageTitle(newTitle, oldTitle) {
				if (this.linkText == oldTitle) {
					this.linkText = newTitle;
				}
			},
		},
	};
</script>
