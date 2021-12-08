<template>
	<Layout>
		<div class="relative max-w-7xl mx-auto">
			<Scroll />
		</div>
		<div class="relative pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
			<div class="absolute inset-0">
				<div class="bg-white h-1/3 sm:h-2/3" />
			</div>
			<div class="relative max-w-7xl mx-auto">
				<div class="text-center">
					<h1 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl uppercase">
						{{ $page.category.title }}
					</h1>
					<div>
						<div>
							<p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
								{{ $page.category.desc }}
							</p>
						</div>
					</div>
				</div>
				<div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
					<div v-for="post in $page.category.belongsTo.edges" :key="post.node.id" class="flex flex-col rounded-lg shadow-lg overflow-hidden">
						<div class="flex-shrink-0">
							<a :href="post.node.path">
								<g-image class="h-48 w-full object-cover" :src="require(`!!assets-loader!@img/${post.node.image}`)" alt="" />
							</a>
						</div>
						<div class="flex-1 bg-white p-6 flex flex-col justify-between">
							<div class="flex-1">
								<p class="text-sm font-medium text-indigo-600">
									<a :href="post.node.path" class="hover:underline"> </a>
								</p>
								<a :href="post.node.path" class="block mt-2">
									<p class="text-xl font-semibold text-gray-900">
										{{ post.node.title }}
									</p>
									<p class="mt-3 text-base text-gray-500">
										{{ post.node.excerpt }}
									</p>
								</a>
							</div>
							<div class="mt-6 flex items-center">
								<div class="">
									<div class="flex space-x-1 text-sm text-gray-500">
										<time :datetime="post.node.datetime">
											{{ post.node.humanTime }}
										</time>
										<span aria-hidden="true"> &middot; </span>
										<span> {{ post.node.timeToRead }} min čitanja </span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</Layout>
</template>

<page-query>
query($id: ID!) {

  category(id: $id) {
		id
    title
		desc
		metaTitle
		metaDesc
    belongsTo  {
      totalCount
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          ...on Post {
            title
            path
            excerpt
            image
						timeToRead
          featured
          humanTime: created(format: "DD.MM.YYYY")
          datetime: created
          }
        }
      }
    }
  }




  }




</page-query>

<script>
import Scroll from "../components/Scroll.vue";

export default {
	components: { Scroll },

	metaInfo() {
		return {
			title: this.$page.category.metaTitle,
			titleTemplate: this.$page.category.metaTitle,

			meta: [{ name: "description", content: this.$page.category.metaDesc }],

			// etc...
		};
	},

	data() {
		return {};
	},
};
</script>
<style></style>
