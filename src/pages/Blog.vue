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
				<div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
					<div v-for="post in $static.sviPostovi.edges" :key="post.node.id">
					<div  class="flex flex-col rounded-lg shadow-lg overflow-hidden">
						<a  :href="post.node.path">
							<div class="flex-shrink-0">
								<g-image class="h-48 w-full object-cover" :src="require(`!!assets-loader!@img/${post.node.image}`)" alt="" />
							</div>
							<div class="flex-1 bg-white p-6 flex flex-col justify-between">
								<div class="flex-1">
									<p class="text-sm font-medium text-indigo-600">
										<a v-reload :href="post.node.path" class="hover:underline"> </a>
									</p>
									<a v-reload :href="post.node.path" class="block mt-2">
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
						</a>
					</div>
				</div>
				</div>
			</div>
		</div>
	</Layout>
</template>

<static-query>
query {
  sviPostovi:  allPost  {
 
  edges {
    node {
			category {
					title
					id
					path
			}

       title
       path
       excerpt
      image
      pocetna  
			timeToRead
      featured
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
  

</static-query>

<script>
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
	components: {},
};
</script>
