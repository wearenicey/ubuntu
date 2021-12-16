<template>
	<Layout>
		<div>
			<div class="relative max-w-7xl mx-auto px-6 mt-20 sm:px-0">
				<div class="text-center">
					<h1 class="text-3xl text-gray-800 sm:text-4xl">Ubuntu Blog</h1>
					<p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">Naši terapeuti pišu za vas</p>
					<div class="mt-10"></div>
				</div>
				<div class="relative max-w-7xl mx-auto">
					<Scroll />
				</div>
				<div class="posts">
					<transition name="fade">
						<div class="mt-4 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
							<div v-for="blog of loadedPosts" :key="blog.node.id" class="flex flex-col rounded-lg shadow-lg overflow-hidden tst">
								<div class="flex-shrink-0">
									<a :href="blog.node.path">
										<g-image class="h-48 w-full object-cover" :src="require(`!!assets-loader!@img/${blog.node.image}`)" alt="" />
									</a>
								</div>
								<div class="flex-1 bg-white p-6 flex flex-col justify-between">
									<div class="flex-1">
										<p class="text-sm font-medium text-indigo-600">
											<a :href="blog.node.path" class="hover:underline"> </a>
										</p>
										<a :href="blog.node.path" class="block mt-2">
											<p class="text-xl font-semibold text-gray-900">
												{{ blog.node.title }}
											</p>
											<p class="mt-3 text-base text-gray-500">
												{{ blog.node.excerpt }}
											</p>
										</a>
									</div>
									<div class="mt-6 flex items-center">
										<div class="">
											<div class="flex space-x-1 text-sm text-gray-500">
												<time :datetime="blog.node.datetime">
													{{ blog.node.humanTime }}
												</time>
												<span aria-hidden="true"> &middot; </span>
												<span> {{ blog.node.timeToRead }} min čitanja </span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</transition>

					<ClientOnly>
						<infinite-loading @infinite="infiniteHandler" spinner="spiral">
							<div slot="no-more">Došli ste do kraja</div>
							<div slot="no-results">Sorry, no posts yet :(</div>
						</infinite-loading>
					</ClientOnly>
				</div>
			</div>
		</div>
	</Layout>
</template>
<page-query>
query ($page: Int) {
 sviPostovi:  allPost( sort: { by: "date", order: DESC }, perPage: 10, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
 
  edges {
    node {
			category {
					title
					id
					path
			}
			date
       title
       path
       excerpt
      image
			timeToRead
      humanTime: created(format: "DD.MM.YYYY")
      datetime: created
			author {
				name
				image
			}
    }
  }
}
}
  

</page-query>

<script>
import Scroll from "../components/Scroll.vue";
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
		Scroll,
	},
	data() {
		return {
			loadedPosts: [],
			currentPage: 1,
		};
	},
	created() {
		this.loadedPosts.push(...this.$page.sviPostovi.edges);
	},
	methods: {
		async infiniteHandler($state) {
			if (this.currentPage + 1 > this.$page.sviPostovi.pageInfo.totalPages) {
				$state.complete();
			} else {
				const { data } = await this.$fetch(`/blog/${this.currentPage + 1}`);
				if (data.sviPostovi.edges.length) {
					this.currentPage = data.sviPostovi.pageInfo.currentPage;
					this.loadedPosts.push(...data.sviPostovi.edges);
					$state.loaded();
				} else {
					$state.complete();
				}
			}
		},
	},
};
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
	transition: ease opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
	opacity: 0;
}
</style>
