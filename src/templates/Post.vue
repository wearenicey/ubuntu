<template>
	<Layout>
		<div class="container mx-auto">
			<div class="relative py-16 bg-white overflow-hidden">
				<div class="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full"></div>
				<div class="relative px-4 sm:px-6 lg:px-8">
					<div class="text-lg max-w-prose mx-auto">
						<h1>
							<span class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">{{ $page.post.title }}</span>
						</h1>
						<div>
							<!-- <p>{{ $page.post.excerpt }}</p> -->
						</div>
					</div>
					<div class="mt-6 container">
						<div class="prose mx-auto max-w-6xl text-left" v-html="$page.post.content"></div>
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
			category {
			title
	}
      image
      image_caption
      excerpt
    
      content
      humanTime : created(format:"DD.MMM.YYYY")
      datetime : created(format:"ddd MMM DD YYYY hh:mm:ss zZ")

      timeToRead
     
  }




  }
</page-query>

<script>
export default {
	metaInfo() {
		return {
			title: this.$page.post.title,
			titleTemplate: this.$page.post.title,

			meta: [{ name: "description", content: this.$page.post.excerpt }],

			// etc...
		};
	},
	components: {},
};
</script>
