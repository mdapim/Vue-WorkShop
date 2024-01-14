<template>
	<a
		class="nav-link"
		:class="activeClasses"
		v-bind:href="page.link.url"
		:title="`This link goes to the ${page.link.text}`"
		>{{ page.link.text }}
	</a>
</template>

<script>
	export default {
		props: ["page", "isActive"],
		computed: {
			activeClasses() {
				return {
					active: this.isActive,
					emphasize: this.isActive,
				};
			},
		},
	};
</script>

<!-- Add style elements CSS, this is applied to all files globally -->
<!-- Unless we add the style scoped attribute down below, this allows you to use the same class names -->
<style scoped>
	.emphasize {
		text-decoration: underline !important;
	}
</style>
