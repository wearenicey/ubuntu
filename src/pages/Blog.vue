<template>
	<Layout>
		<div class="relative pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
			<div class="absolute inset-0">
				<div class="bg-white h-1/3 sm:h-2/3" />
			</div>
			<div class="relative max-w-7xl mx-auto">
				<div class="text-center">
					<h1 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl uppercase">Ubuntu Blog</h1>
					<div>
						<div>
							<p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">Naši terapeuti pišu za vas</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</Layout>
</template>

<script>
import AllBlogs from "../components/AllBlogs.vue";
export default {
	metaInfo() {
		return {
			title: "Blog | Ubuntu Centar",
			titleTemplate: "Blog | Ubuntu Centar",

			meta: [
				{ name: "description", content: "Blogovi o psihoterapiji" },

				// {
				// key:"og:image",
				// property: "og:image",
				// content: process.env.GRIDSOME_BASE_PATH + this.$page.post.imageTwo.path,
				// },
				{
					key: "og:title",
					name: "og:title",
					content: "Blog | Ubuntu Centar",
				},

				{
					key: "og:description",
					name: "og:description",
					content: "Blogovi o psihoterapiji",
				},
				{
					key: "twitter:title",
					name: "twitter:title",
					content: "Blog | Ubuntu Centar",
				},
				{
					key: "twitter:description",
					name: "twitter:description",
					content: "Blogovi o psihoterapiji",
				},
				// {
				// 	key:"twitter:image",
				// 	property: "twitter:image",
				// 	content: process.env.GRIDSOME_BASE_PATH + this.$page.post.imageTwo.path,
				// 	},
			],

			// etc...
		};
	},
	components: {
		AllBlogs,
	},
};
</script>
