<template>
	<div class="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8 mt-12">
		<div class="text-center">
			<h2 class="text-3xl text-primary sm:text-4xl">Iz naše Blog radionice</h2>
			<p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">Aktuelni tekstovi na temu psihoterapije i psihologije, kao dodatak ličnom rastu i razvoju</p>
		</div>
		<div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-2 lg:max-w-none">
			<div v-for="post in $static.pocetna.edges" :key="post.node.id" class="flex flex-col rounded-lg shadow-lg overflow-hidden">
				<a :href="post.node.path">
					<div class="flex-shrink-0">
						<g-image class="h-64 w-full object-cover" :src="require(`!!assets-loader!@img/${post.node.image}`)" alt="" />
					</div>
					<div class="flex-1 bg-white p-6 flex flex-col justify-between">
						<div class="flex-1">
							<p class="text-sm font-medium text-indigo-600">
								<a :href="post.node.path" class="hover:underline"> </a>
							</p>
							<a :href="post.node.path" class="block mt-2">
								<p class="text-2xl font-semibold text-gray-900">
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
									<span> {{ post.node.timeToRead }} minuta čitanja</span>
								</div>
							</div>
						</div>
					</div>
				</a>
			</div>
		</div>

		<div class="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center gap-x-4">
				
						<div class="space-y-4 sm:space-y-0 sm:mx-auto sm:gap-5 justify-center flex">
							<a href="/blog/" @click="onClickTwo()"
								class="items-center justify-center px-5 py-4 border border-transparent text-lg font-medium rounded-full shadow-sm text-white bg-secondary hover:bg-gray-200 hover:text-secondary sm:px-8">
								Pročitajte još...
							</a>
						</div>

					</div>


	</div>

	


</template>
<!--GraphQl upit za  blog postove na pocetnoj stranici-->

<static-query>
	query {
  pocetna:  allPost ( filter:{pocetna: {eq: true}} limit: 6) {
 
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
