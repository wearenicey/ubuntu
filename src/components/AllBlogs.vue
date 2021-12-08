<template>
	<div>
		<div class="relative max-w-7xl mx-auto">
			<Scroll />
		</div>
		<div class="relative max-w-7xl mx-auto px-6 mt-20 sm:px-0">
			<div class="text-center">
				<h1 class="text-3xl text-gray-800 sm:text-4xl">Ubuntu Blog</h1>
				<p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">Naši terapeuti pišu za vas</p>
				<div class="mt-10"></div>
			</div>
			<div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
				<div v-for="blog in $static.sviPostovi.edges" :key="blog.node.id" class="flex flex-col rounded-lg shadow-lg overflow-hidden">
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
		</div>
	</div>
</template>

<static-query>
query {
 sviPostovi:  allPost( sort: { by: "date", order: DESC } )  {
 
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
  

</static-query>
<script>
// Depending on how you installed it, import it if required.
import Scroll from "./Scroll.vue";

export default {
	components: { Scroll },
	data() {
		return { items: [1, 2, 3] };
	},
};
</script>
