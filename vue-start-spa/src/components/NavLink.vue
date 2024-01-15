<template>
	<li>
		<!-- Click event bus below put in earlier to showcase using global bus to bubble events  -->
		<!-- not needed as we are using router to navigate and router link -->
		<!-- @click.prevent="$bus.$emit('navbarLinkActivated', index)" -->
		<router-link
			:to="`/${index}`"
			class="nav-link"
			active-class="active emphasize"
			:title="`This link goes to the ${page.link.text}`"
			>{{ page.link.text }}
		</router-link>
	</li>
</template>

<script>
	export default {
		props: ["page", "index"],
	};
</script>

<!-- Add style elements CSS, this is applied to all files globally -->
<!-- Unless we add the style scoped attribute down below, this allows you to use the same class names -->
<!-- scoped has been taken out to use this with create page <style scoped> -->
<style>
	.emphasize {
		text-decoration: underline !important;
	}
</style>

<!-- Previous implementation before controlling nav using vue router -->

<!-- <template>
	<li>
		Click event bus below put in earlier to showcase using global bus to bubble events 
		<not needed as we are using router to navigate and router link
		<@click.prevent="$bus.$emit('navbarLinkActivated', index)"
		<router-link
			:to="`/${index}`"
			class="nav-link"
			:class="activeClasses"
			:title="`This link goes to the ${page.link.text}`"
			>{{ page.link.text }}
		</router-link>
	</li>
</template>

<script>
	export default {
		props: ["page", "index", "isActive"],
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

 Add style elements CSS, this is applied to all files globally
Unless we add the style scoped attribute down below, this allows you to use the same class names
<style scoped>
	.emphasize {
		text-decoration: underline !important;
	}
</style> -->
