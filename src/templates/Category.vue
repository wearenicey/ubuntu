<template>
	<Layout>
		<div>
			<div class="relative max-w-7xl mx-auto px-6 mt-20 sm:px-0">
				<div class="text-center">
					<h1 class="text-3xl text-gray-800 sm:text-4xl">{{ $page.category.title }}</h1>
					<p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">{{ $page.category.desc }}</p>
					<div class="mt-10"></div>
				</div>
				<div class="relative max-w-7xl mx-auto">
					<Scroll />
				</div>
				<div class="mt-4 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
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
										<span> {{ post.node.timeToRead }} minuta čitanja </span>
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
<!--GraphQl upit za  blog postove po kategoriji-->

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
// importovanje komponete
import Scroll from "../components/Scroll.vue";

export default {
	//pozivanje komponente
	components: { Scroll },

	metaInfo() {
		//dinamicki meta desc
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
