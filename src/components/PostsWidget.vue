<template>

	<div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
		<div v-for="post in posts" class="flex flex-col rounded-lg shadow-lg overflow-hidden">
			<div class="flex-shrink-0">
				<g-image class="h-48 w-full object-cover" :src="require(`!!assets-loader!@img/${post.image}`)" alt="" />
			</div>
			<div class="flex-1 bg-white p-6 flex flex-col justify-between">
				<div class="flex-1">
					<div class="flex space-x-4">
						<!-- Tagovi -->
						<span v-for="(tag, index) in post.tags" :key="tag.id">
								<a :href="tag.path">
									<p class="text-sm font-medium text-indigo-600">
										{{ tag.title }}
									</p>
								</a>

							<!-- We will add a comma separator for the tags -->
						</span>
					</div>
					<p class="text-sm font-medium text-indigo-600">
						<a :href="post.tags.path" class="hover:underline">
							{{ post.tags.title }}
						</a>
					</p>
					<p class="text-sm font-medium text-indigo-600">
						<a :href="post.path" class="hover:underline"> </a>
					</p>
					<a :href="post.path" class="block mt-2">
						<p class="text-xl font-semibold text-gray-900">
							{{ post.title }}
						</p>
						<p class="mt-3 text-base text-gray-500">
							{{ post.excerpt }}
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
							<time :datetime="post.datetime">
								{{ post.humanTime }}
							</time>
							<span aria-hidden="true"> &middot; </span>
							<span> {{ post.timeToRead }} min read </span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "PostsWidget",
	props: ["posts"],
};
</script>

<style scoped></style>
