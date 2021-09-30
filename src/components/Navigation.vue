<template>
	<header class="bg-white py-4 shadow-sm lg:static lg:overflow-y-visible">
		<div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
			<div class="relative flex justify-between xl:grid xl:grid-cols-12 gap-2 lg:gap-8">
				<div class="flex md:absolute md:left-0 md:inset-y-0 lg:static xl:col-span-2">
					<div class="flex-shrink-0 flex items-center">
						<a href="/">
							<g-image class="block h-12 w-auto" src="~/assets/img/ubuntu_ns.png" alt="Workflow" />
						</a>
					</div>
				</div>
				<div class="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6">
					<div class="flex items-center px-6 py-4 md:max-w-3xl md:mx-auto lg:max-w-none lg:mx-0 xl:px-0"></div>
				</div>

				<div class="lg:flex lg:items-center lg:justify-end xl:col-span-4 ">
					<a href="#" @click="onClick()" class="ml-6 inline-flex items-center px-4 py-2 border border-indigo text-sm font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
						<svg class="flex-shrink-0 w-4 h-4 pr-1 text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
						</svg>
						Pišite nam
					</a>
					<a
						href="tel:+381658286881"
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
						<svg class="flex-shrink-0 w-4 h-4 pr-1 text-indigo-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
							/>
						</svg>
						065 8286881
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
			element.scrollIntoView({ behavior: "smooth", block: "start" });
		},
	},
};
</script>
