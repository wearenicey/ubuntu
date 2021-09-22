<template>
	<div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
		<a :href="record.path">
			<div class="flex-shrink-0">
				<g-image class="h-48 w-full object-cover" :src="require(`!!assets-loader!@img/${record.image}`)" alt="" />
			</div>
			<div class="flex-1 bg-white p-6 flex flex-col justify-between">
				<div class="flex-1">
					<p class="text-sm font-medium text-indigo-600">
						<a  class="hover:underline"> </a>
					</p>
					<a :href="record.node.path" class="block mt-2">
						<p class="text-xl font-semibold text-gray-900">
							{{ record.title }}
						</p>
						<p class="mt-3 text-base text-gray-500">
							{{ record.excerpt }}
						</p>
					</a>
				</div>
				<div class="mt-6 flex items-center">
					<div class="flex-shrink-0">
						<a>
							<span class="sr-only">{{ record.author.name }}</span>
							<img class="h-10 w-10 rounded-full" :src="require(`!!assets-loader!@img/${record.author.image}`)" alt="" />
						</a>
					</div>
					<div class="">
						<div class="flex space-x-1 text-sm text-gray-500">
							<time :datetime="record.datetime">
								{{ record.humanTime }}
							</time>
							<span aria-hidden="true"> &middot; </span>
							<span> {{ record.timeToRead }} min read </span>
						</div>
					</div>
				</div>
			</div>
		</a>
	</div>
</template>

<script>
export default {
	props: {
		record: {},
	},
};
</script>
