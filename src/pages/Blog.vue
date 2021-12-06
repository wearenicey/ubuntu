<template>
	<Layout>
		<AllBlogs/>
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
