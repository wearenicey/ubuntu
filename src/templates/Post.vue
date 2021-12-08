<template>
	<Layout>
		<div class="container max-w-5xl mx-auto">
			<div class="relative py-16 bg-white overflow-hidden">
				<div class="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full"></div>
				<div class="relative px-4 sm:px-6 lg:px-8">
					<div class="text-lg max-w-prose mx-auto">
						<h1>
							<span class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">{{ $page.post.title }}</span>
							<div class="text-center space-x-1 text-md pt-6 text-gray-500">
								<time :datetime="$page.post.datetime">
									{{ $page.post.humanTime }}
								</time>
								<span aria-hidden="true"> &middot; </span>
								<span> {{ $page.post.timeToRead }} min </span>
							</div>
							<g-image class="mt-4 w-full object-cover" :src="require(`!!assets-loader!@img/${$page.post.image}`)" alt="" />
						</h1>

						<div>
							<!-- <p>{{ $page.post.excerpt }}</p> -->
						</div>
					</div>
					<div class="mt-6 container">
						<div class="prose mx-auto text-left" v-html="$page.post.content"></div>
				
					</div>
				</div>
			</div>
		</div>
	</Layout>
</template>

<page-query>
  query Post ($path: String!) {
  post: post (path: $path) {
			name
      title
			metaDesc
			category {
			title
	}
      image
      image_caption
      excerpt
			imageTwo {
          path
          alt
        }
      content
      humanTime: created(format: "DD.MM.YYYY")
      datetime: created

      timeToRead
     
  }




  }
</page-query>

<script>
export default {
	metaInfo() {
		return {
			title: this.$page.post.title + " | Ubuntu Blog",
			titleTemplate: this.$page.post.title + " | Ubuntu Blog",

			meta: [
				{ name: "description", content: this.$page.post.metaDesc },

				{
					key: "og:image",
					property: "og:image",
					content: process.env.GRIDSOME_BASE_PATH + this.$page.post.imageTwo.path,
				},
				{
					key: "og:title",
					name: "og:title",
					content: this.$page.post.title + " | Ubuntu Blog",
				},

				{
					key: "og:description",
					name: "og:description",
					content: this.$page.post.metaDesc,
				},
				{
					key: "twitter:title",
					name: "twitter:title",
					content: this.$page.post.title + " | Ubuntu Blog",
				},
				{
					key: "twitter:description",
					name: "twitter:description",
					content: this.$page.post.metaDesc,
				},
				{
					key: "twitter:image",
					property: "twitter:image",
					content: process.env.GRIDSOME_BASE_PATH + this.$page.post.imageTwo.path,
				},
			],

			// etc...
		};
	},
	components: {},
};
</script>
