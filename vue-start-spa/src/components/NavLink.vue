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

<!-- Add style elements CSS -->
<style>
	.emphasize {
		text-decoration: underline !important;
	}
</style>
