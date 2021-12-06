<template>
		<div class="relative max-w-7xl mx-auto px-6 mt-20 sm:px-0">
		<div class="text-center">
			<h1 class="text-3xl text-gray-800 sm:text-4xl">Ubuntu Blog</h1>
			<p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">Naši terapeuti pišu za vas</p>
		</div>
		<div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
			<div v-for="post in $static.sviPostovi.edges" :key="post.node.id" class="flex flex-col rounded-lg shadow-lg overflow-hidden">
				<a :href="post.node.path">
					<div class="flex-shrink-0">
						<img class="h-48 w-full object-cover" :src="post.node.image" alt="" />
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
