<template>
	<Layout>
		<div class="container mx-auto">
			<div class="relative py-16 bg-white overflow-hidden">
			<div class="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
			</div>
			<div class="relative px-4 sm:px-6 lg:px-8">
				<div class="text-lg max-w-prose mx-auto">
					<h1>
						<span class="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">Introducing</span>
						<span class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">{{ $page.post.title }}</span>
					</h1>
					<div>
						<p>{{ $page.post.excerpt }}</p>
					</div>
				</div>
				<div class="mt-6 container">
					<div class="prose mx-auto max-w-6xl text-justify" v-html="$page.post.content"></div>
				</div>
			</div>
		</div>
		</div>
		<div class="container">
			<div class="max-w-6xl prose mx-auto">
				<div id="related-posts" v-if="$page.post.related.length > 0">
					<posts-widget :posts="$page.post.related" />
				</div>
				<span v-else style="color: red">This post has no similar posts</span>
			</div>
		</div>
	</Layout>
</template>

<script>
import PostsWidget from "../components/PostsWidget";
export default {
	components: {
		PostsWidget,
	},
};
</script>
<page-query>
  query Post ($path: String!) {
  post: post (path: $path) {
      title
      image
      image_caption
      excerpt
      imageTwo {

      path
      alt

      }
      content
      humanTime : created(format:"DD.MMM.YYYY")
      datetime : created(format:"ddd MMM DD YYYY hh:mm:ss zZ")

      timeToRead
      tags {
        id
        title
      }

			related{
					    title
            path
            excerpt
            image
            tags {
              title
							path
            }
						timeToRead
          featured
          humanTime: created(format: "DD MMM YYYY")
          datetime: created
}
    }




  }


</page-query>
