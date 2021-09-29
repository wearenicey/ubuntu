<template>
	<div class="relative max-w-7xl mx-auto">
		<div class="text-center">
			<h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">From the blog</h2>
			<p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed.</p>
		</div>
		<div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
			<div v-for="post in $static.pocetna.edges" :key="post.node.id">
				<div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
					<a :href="post.node.path">
						<div class="flex-shrink-0">
							<g-image class="h-48 w-full object-cover" :src="require(`!!assets-loader!@img/${post.node.image}`)" alt="" />
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
								<!-- <div class="flex-shrink-0">
                  <a :href="post.author.href">
                    <span class="sr-only">{{ post.author.name }}</span>
                    <img
                      class="h-10 w-10 rounded-full"
                      :src="post.author.imageUrl"
                      alt=""
                    />
                  </a>
                </div> -->
								<div class="">
									<div class="flex space-x-1 text-sm text-gray-500">
										<time :datetime="post.node.datetime">
											{{ post.node.humanTime }}
										</time>
										<span aria-hidden="true"> &middot; </span>
										<span> {{ post.node.timeToRead }} min read </span>
									</div>
								</div>
							</div>
						</div>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>
<static-query>
	query {
  pocetna:  allPost ( filter:{featured: {eq: true}} limit: 3) {
 
  edges {
    node {
       title
       path
       excerpt
      image
      pocetna  
			timeToRead
      featured
      humanTime: created(format: "DD.MM.YYYY")
      datetime: created
    }
  }
}
}

</static-query>

<script>
export default {
	props: {
		record: {},
	},
};
</script>
