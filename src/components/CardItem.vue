<template>
	<div class="relative mx-auto max-w-4xl px-4 mt-12">
		<div class="text-center">
			<h2 class="text-3xl text-purple-800 sm:text-4xl">Iz naše Blog radionice</h2>
			<p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">Aktuelni tekstovi na temu psihoterapije i psihologije, kao dodatak ličnom rastu i razvoju</p>
		</div>
		<div v-for="post in $static.pocetna.edges" :key="post.node.id">
			<div class="my-12 grid gap-2 pt-12 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12 items-center">
				<div>
					<div>
						<a :href="post.node.category.path" class="inline-block">
							<span class="inline-flex items-center rounded-full text-sm font-medium text-purple-800"> {{ post.node.category.title }} </span>
						</a>
					</div>
					<a href="#" class="block mt-4">
						<p class="text-2xl font-semibold text-gray-900">{{ post.node.title }}</p>
						<p class="mt-3 text-lg text-gray-700">{{ post.node.excerpt }}</p>
					</a>
					<div class="mt-6 flex items-center">
						<div class="">
							<div class="flex space-x-1 text-sm text-gray-500">
								<time :datetime="post.node.datetime">
									{{ post.node.humanTime }}
								</time>
								<span aria-hidden="true"> &middot; </span>
								<span> {{ post.node.timeToRead }} min čitanja</span>
							</div>
						</div>
					</div>
					<a :href="post.node.path" class="block mt-8">
						<button
							class="inline-flex items-center px-6 py-3 border shadow-sm text-sm font-medium rounded-full text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
						>
							Pročitajte više
						</button>
					</a>
				</div>
				<g-image class="sm:h-96 w-full object-cover order-first md:order-last rounded-md shadow-md" :src="require(`!!assets-loader!@img/${post.node.image}`)" alt="" />
			</div>
		</div>
	</div>
</template>
<!--GraphQl upit za  blog postove na pocetnoj stranici-->

<static-query>
	query {
  pocetna:  allPost ( filter:{pocetna: {eq: true}} limit: 3) {
 
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
	props: {
		record: {},
	},
};
</script>
