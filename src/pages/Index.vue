<template>
	<Layout>
		<div class="relative mt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
			<div class="relative max-w-7xl mx-auto">
				<div class="text-center">
					<h1 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Zdrava hrana</h1>
					<p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed.</p>
				</div>
				<div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
					<div v-for="post in $page.zdravaHrana.edges" :key="post.node.id" class="flex flex-col rounded-lg shadow-lg overflow-hidden">
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

		<div class="relative t-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
			<div class="relative max-w-7xl mx-auto">
				<div class="text-center">
					<h2 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Lifestyle & Wellness</h2>
					<p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed.</p>
				</div>
				<div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
					<div v-for="post in $page.lifestyle.edges" :key="post.node.id" class="flex flex-col rounded-lg shadow-lg overflow-hidden">
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

		<div class="relative t-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
			<div class="relative max-w-7xl mx-auto">
				<div class="text-center">
					<h2 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Mentalno zdravlje</h2>
					<p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed.</p>
				</div>
				<div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
					<div v-for="post in $page.mentalno.edges" :key="post.node.id" class="flex flex-col rounded-lg shadow-lg overflow-hidden">
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

		<div class="relative bg-white pt-16 pb-32 overflow-hidden">
			<div class="relative">
				<div class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
					<div class="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
						<div>
							<div>
								<span class="h-12 w-12 rounded-md flex items-center justify-center bg-indigo-600">
									<!-- Heroicon name: outline/inbox -->
									<svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
										/>
									</svg>
								</span>
							</div>
							<div class="mt-6">
								<h2 class="text-3xl font-extrabold tracking-tight text-gray-900">Online prodavnica zdrave ishrane</h2>
								<p class="mt-4 text-lg text-gray-500">
									Semper curabitur ullamcorper posuere nunc sed. Ornare iaculis bibendum malesuada faucibus lacinia porttitor. Pulvinar laoreet sagittis viverra duis. In venenatis sem arcu pretium pharetra at. Lectus viverra dui tellus
									ornare pharetra.
								</p>
								<div class="mt-6">
									<a href="/404" class="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"> Poseti prodavnicu </a>
								</div>
							</div>
						</div>
					</div>
					<div class="mt-12 sm:mt-16 lg:mt-0">
						<div class="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
							<g-image class="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none" src="~/assets/img/shop-pocetna.webp" alt="Inbox user interface" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</Layout>
</template>

<page-query>
query {
  zdravaHrana:  allPost (filter:{category: {eq: "ishrana"}, pocetna: {eq: true}}  limit: 6) {
 
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

 lifestyle:  allPost (filter:{category: {eq: "lifestyle"}, pocetna: {eq: true}}  limit: 6) {
 
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
  
   mentalno:  allPost (filter:{category: {eq: "mentalno-zdravlje"}, pocetna: {eq: true}}  limit: 6) {
 
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


</page-query>

<script>
import AllTags from "~/components/AllTags";
export default {
	metaInfo() {
		return {};
	},

	components: {
		AllTags,
	},
};
</script>

<style>
.home-links a {
	margin-right: 1rem;
}
</style>
