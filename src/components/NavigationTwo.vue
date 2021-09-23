<template>
	<header class="bg-white py-4 shadow-sm lg:static lg:overflow-y-visible">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="relative flex justify-between xl:grid xl:grid-cols-12 lg:gap-8">
				<div class="flex md:absolute md:left-0 md:inset-y-0 lg:static xl:col-span-2">
					<div class="flex-shrink-0 flex items-center">
						<a href="/">
							<img class="block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600" alt="Workflow" />
						</a>
					</div>
				</div>
				<div class="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6">
					<div class="flex items-center px-6 py-4 md:max-w-3xl md:mx-auto lg:max-w-none lg:mx-0 xl:px-0"></div>
				</div>

				<div class="lg:flex lg:items-center lg:justify-end xl:col-span-4">
					<a href="#" @click="onClick()" class="ml-6 inline-flex items-center px-4 py-2 border border-indigo text-sm font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
						Pišite nam
					</a>
					<a
						href="tel:+38158286883"
						class="
							ml-6
							inline-flex
							items-center
							px-4
							py-2
							border border-transparent
							text-sm
							font-medium
							rounded-md
							shadow-sm
							text-white
							bg-indigo-600
							hover:bg-indigo-700
							focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
						"
					>
						065 8286883
					</a>
				</div>
			</div>
		</div>
	</header>
</template>
<script>
export default {
	methods: {
		onClick() {
			let element = document.getElementById("scroll");
			element.scrollIntoView({ behavior: "smooth", block: "end" });
		},
	},
};
</script>
