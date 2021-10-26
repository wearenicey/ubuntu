<template>
	<div class="relative mx-auto max-w-6xl px-4 ">
		<div class="text-center">
			<h2 class="text-3xl text-purple-800 sm:text-4xl">Iz naše Blog radionice</h2>
			<p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">Aktuelni tekstovi na temu psihoterapije i psihologije, kao dodatak ličnom rastu i razvoju</p>
		</div>
		<div v-for="post in $static.pocetna.edges" :key="post.node.id">
			<div class="my-12 grid gap-2 pt-12 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12 items-center">
				<div>
					<div>
						<a :href="post.node.category" class="inline-block">
							<span class="inline-flex items-center rounded-full text-sm font-medium text-purple-800"> {{ post.node.category.title }} </span>
						</a>
					</div>
					<a href="#" class="block mt-4">
						<p class="text-xl font-semibold text-gray-900">{{ post.node.title }}</p>
						<p class="mt-3 text-base text-gray-500">{{ post.node.excerpt }}</p>
					</a>
					<div class="mt-6 flex items-center">
						<div class="flex-shrink-0">
							<a href="#">
								<span class="sr-only">{{ post.node.author.name }}</span>
								<img class="h-10 w-10 rounded-full" :src="post.node.author.image" alt="" />
							</a>
						</div>
						<div class="ml-3">
							<p class="text-sm font-medium text-gray-900">
								<a href="#"> {{ post.node.author.name }} </a>
							</p>
							<div class="flex space-x-1 text-sm text-gray-500">
								<time :datetime="post.node.datetime">
									{{ post.node.humanTime }}
								</time>
								<span aria-hidden="true"> &middot; </span>
								<span> {{ post.node.timeToRead }} min </span>
							</div>
						</div>
					</div>
					<a :href="post.node.path" class="block mt-8">
						<button class="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
							Pročitaj više
						</button>
					</a>
				</div>
				<g-image class="sm:h-96 w-full object-cover order-first md:order-last" :src="require(`!!assets-loader!@img/${post.node.image}`)" alt="" />
			</div>
		</div>
	</div>
</template>
<static-query>
	query {
  pocetna:  allPost ( filter:{pocetna: {eq: true}} limit: 3) {
 
  edges {
    node {
			category {
					title
					id
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
	props: {
		record: {},
	},
};
</script>
