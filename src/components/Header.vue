<template>
	<div x-data="{ mobileMenuOpen: false }" class="relative bg-white">
		<div class="flex justify-between max-w-7xl mx-auto items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10" id="position">
			<div>
				<a href="/" class="flex">
					<span class="sr-only">Workflow</span>
					<g-image class="block h-16 w-auto sm:h-20" src="~/assets/img/ubuntu-logo.png" alt="Workflow"  />
				</a>
			</div>
			<div class="-mr-2 -my-2 md:hidden">
				<button
					x-on:click="mobileMenuOpen = true"
					type="button"
					class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
					aria-expanded="false"
				>
					<span class="sr-only">Open menu</span>
					<!-- Heroicon name: outline/menu -->
					<svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
					</svg>
				</button>
			</div>
			<div class="hidden md:flex-1 md:flex md:items-center md:justify-between">
				<nav class="flex space-x-10">
					<div class="relative" x-description="Flyout menu, show/hide based on flyout menu state." x-on:click.away="flyoutMenuOpen = false" x-data="{ flyoutMenuOpen: false }">
						<!-- Item active: "text-gray-900", Item inactive: "text-gray-500" -->
						<button
							x-on:click="flyoutMenuOpen = !flyoutMenuOpen"
							type="button"
							class="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
							aria-expanded="false"
						>
							<span>Naše lokacije</span>
							<!--
              Heroicon name: solid/chevron-down

              Item active: "text-gray-600", Item inactive: "text-gray-400"
            -->
							<svg class="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
								<path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
							</svg>
						</button>

						<!--
            'Solutions' flyout menu, show/hide based on flyout menu state.

            Entering: "transition ease-out duration-200"
              From: "opacity-0 translate-y-1"
              To: "opacity-100 translate-y-0"
            Leaving: "transition ease-in duration-150"
              From: "opacity-100 translate-y-0"
              To: "opacity-0 translate-y-1"
          -->
						<div
							class="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0"
							x-show="flyoutMenuOpen"
							x-transition:enter="transition ease-out duration-200"
							x-transition:enter-start="opacity-0 translate-y-1"
							x-transition:enter-end="opacity-100 translate-y-0"
							x-transition:leave="transition ease-in duration-150"
							x-transition:leave-start="opacity-100 translate-y-0"
							x-transition:leave-end="opacity-0 translate-y-1"
						>
							<div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
								<div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
									<a href="/savetovaliste-novi-sad/" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
										<!-- Heroicon name: outline/chart-bar -->
										<svg class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
											/>
										</svg>
										<div class="ml-4">
											<p class="text-base font-medium text-gray-900">Novi Sad</p>
											<p class="mt-1 text-sm text-gray-500">Get a better understanding of where your traffic is coming from.</p>
										</div>
									</a>

									<a href="/savetovaliste-beograd/" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
										<!-- Heroicon name: outline/cursor-click -->
										<svg class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
										</svg>
										<div class="ml-4">
											<p class="text-base font-medium text-gray-900">Beograd</p>
											<p class="mt-1 text-sm text-gray-500">Speak directly to your customers in a more meaningful way.</p>
										</div>
									</a>

									<a href="/online-savetovaliste/" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
										<!-- Heroicon name: outline/shield-check -->
										<svg class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
											/>
										</svg>
										<div class="ml-4">
											<p class="text-base font-medium text-gray-900">Online</p>
											<p class="mt-1 text-sm text-gray-500">Your customers&#039; data will be safe and secure.</p>
										</div>
									</a>
								</div>
								<div class="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
									<div class="flow-root">
										<a href="/kontakt/" class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">
											<!-- Heroicon name: outline/phone -->
											<svg class="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
												/>
											</svg>
											<span class="ml-3">Kontaktiraj nas</span>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="relative" x-description="Flyout menu, show/hide based on flyout menu state." x-on:click.away="flyoutMenuOpen = false" x-data="{ flyoutMenuOpen: false }">
						<!-- Item active: "text-gray-900", Item inactive: "text-gray-500" -->
						<button
							x-on:click="flyoutMenuOpen = !flyoutMenuOpen"
							type="button"
							class="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
							aria-expanded="false"
						>
							<span>O nama</span>
							<!--
              Heroicon name: solid/chevron-down

              Item active: "text-gray-600", Item inactive: "text-gray-400"
            -->
							<svg class="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
								<path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
							</svg>
						</button>

						<!--
            'Solutions' flyout menu, show/hide based on flyout menu state.

            Entering: "transition ease-out duration-200"
              From: "opacity-0 translate-y-1"
              To: "opacity-100 translate-y-0"
            Leaving: "transition ease-in duration-150"
              From: "opacity-100 translate-y-0"
              To: "opacity-0 translate-y-1"
          -->
						<div
							class="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0"
							x-show="flyoutMenuOpen"
							x-transition:enter="transition ease-out duration-200"
							x-transition:enter-start="opacity-0 translate-y-1"
							x-transition:enter-end="opacity-100 translate-y-0"
							x-transition:leave="transition ease-in duration-150"
							x-transition:leave-start="opacity-100 translate-y-0"
							x-transition:leave-end="opacity-0 translate-y-1"
						>
							<div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
								<div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
									<a href="/zasto-ubuntu/" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
										<!-- Heroicon name: outline/chart-bar -->
										<svg class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
											/>
										</svg>
										<div class="ml-4">
											<p class="text-base font-medium text-gray-900">Zašto Ubuntu?</p>
											<p class="mt-1 text-sm text-gray-500">Get a better understanding of where your traffic is coming from.</p>
										</div>
									</a>

									<a href="/karijera/" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
										<!-- Heroicon name: outline/cursor-click -->
										<svg class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
										</svg>
										<div class="ml-4">
											<p class="text-base font-medium text-gray-900">Karijera</p>
											<p class="mt-1 text-sm text-gray-500">Speak directly to your customers in a more meaningful way.</p>
										</div>
									</a>

									<a href="#" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
										<!-- Heroicon name: outline/shield-check -->
										<svg class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
											/>
										</svg>
										<div class="ml-4">
											<p class="text-base font-medium text-gray-900">Edukacije</p>
											<p class="mt-1 text-sm text-gray-500">Your customers&#039; data will be safe and secure.</p>
										</div>
									</a>
								</div>
							</div>
						</div>
					</div>

					<div class="relative" x-description="Flyout menu, show/hide based on flyout menu state." x-on:click.away="flyoutMenuOpen = false" x-data="{ flyoutMenuOpen: false }">
						<!-- Item active: "text-gray-900", Item inactive: "text-gray-500" -->
						<button
							x-on:click="flyoutMenuOpen = !flyoutMenuOpen"
							type="button"
							class="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
							aria-expanded="false"
						>
							<span>Blog</span>
							<!--
              Heroicon name: solid/chevron-down

              Item active: "text-gray-600", Item inactive: "text-gray-400"
            -->
							<svg class="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
								<path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
							</svg>
						</button>

						<div
							class="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0"
							x-show="flyoutMenuOpen"
							x-transition:enter="transition ease-out duration-200"
							x-transition:enter-start="opacity-0 translate-y-1"
							x-transition:enter-end="opacity-100 translate-y-0"
							x-transition:leave="transition ease-in duration-150"
							x-transition:leave-start="opacity-100 translate-y-0"
							x-transition:leave-end="opacity-0 translate-y-1"
						>
							<div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
								<div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
									<div v-for="category in $static.category.edges" :key="category.node.id">
										<g-link :to="category.node.id" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
											<!-- Heroicon name: outline/support -->
											<svg class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
												/>
											</svg>
											<div class="ml-4">
												<p class="text-base font-medium text-gray-900">{{ category.node.title }}</p>
												<p class="mt-1 text-sm text-gray-500">{{ category.node.desc }}</p>
											</div>
										</g-link>
									</div>
								</div>
								<div class="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
									<div>
										<h3 class="text-sm tracking-wide font-medium text-gray-500 uppercase">Poslednje objave</h3>
										<ul role="list" class="mt-4 space-y-4">
											<li v-for="post in $static.blogs.edges" :key="post.node.id" class="text-base truncate">
												<g-link :to="post.node.path" class="font-medium text-gray-900 hover:text-gray-700">
													{{ post.node.title }}
												</g-link>
											</li>
										</ul>
									</div>
									<div class="mt-5 text-sm">
										<a href="/blog" class="font-medium text-indigo-600 hover:text-indigo-500"> Pogledaj sve tekstove <span aria-hidden="true">&rarr;</span></a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- <a
            href="#"
            class="text-base font-medium text-gray-500 hover:text-gray-900"
          >
            Docs
          </a> -->
				</nav>
				<div class="flex items-center md:ml-12">
					<a href="/donacije/" class="text-base font-medium text-gray-500 hover:text-gray-900"> Donacije </a>
					<a href="/kontakt/" class="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"> Kontaktirajte nas </a>
				</div>
			</div>
		</div>

		<!--
    Mobile menu, show/hide based on mobile menu state.

    Entering: "duration-200 ease-out"
      From: "opacity-0 scale-95"
      To: "opacity-100 scale-100"
    Leaving: "duration-100 ease-in"
      From: "opacity-100 scale-100"
      To: "opacity-0 scale-95"
  -->
		<div
			class="z-30 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
			x-description="Mobile menu, show/hide based on mobile menu state."
			x-show="mobileMenuOpen"
			x-transition:enter="duration-200 ease-out"
			x-transition:enter-start="opacity-0 scale-95"
			x-transition:enter-end="opacity-100 scale-100"
			x-transition:leave="duration-100 ease-in"
			x-transition:leave-start="opacity-100 scale-100"
			x-transition:leave-end="opacity-0 scale-95"
		>
			<div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
				<div class="pt-5 pb-6 px-5">
					<div class="flex items-center justify-between">
						<div>
							<g-image class="block h-14 w-auto sm:h-10" src="~/assets/img/ubuntu-logo.png" alt="Workflow"  />
						</div>
						<div class="-mr-2">
							<button
								x-on:click="mobileMenuOpen = false"
								type="button"
								class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
							>
								<span class="sr-only">Close menu</span>
								<!-- Heroicon name: outline/x -->
								<svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
								</svg>
							</button>
						</div>
					</div>
					<div class="mt-6">
						<nav class="grid gap-y-8">
							<a href="/savetovaliste-beograd/" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
								<!-- Heroicon name: outline/chart-bar -->
								<svg class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
									/>
								</svg>
								<span class="ml-3 text-base font-medium text-gray-900"> Savetovalište Beograd </span>
							</a>

							<a href="/savetovaliste-novi-sad/" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
								<!-- Heroicon name: outline/cursor-click -->
								<svg class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
								</svg>
								<span class="ml-3 text-base font-medium text-gray-900"> Savetovalište Novi Sad </span>
							</a>

							<a href="/online-savetovaliste/" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
								<!-- Heroicon name: outline/shield-check -->
								<svg class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
									/>
								</svg>
								<span class="ml-3 text-base font-medium text-gray-900"> Online savetovalište </span>
							</a>

							<a href="/blog" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
								<!-- Heroicon name: outline/view-grid -->
								<svg class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
									/>
								</svg>
								<span class="ml-3 text-base font-medium text-gray-900"> Blog </span>
							</a>
						</nav>
					</div>
				</div>
				<div class="py-6 px-5 space-y-6">
					<div class="grid grid-cols-2 gap-y-4 gap-x-8">
						<a href="/zasto-ubuntu/" class="text-base font-medium text-gray-900 hover:text-gray-700"> Zašto Ubuntu? </a>

						<a href="/karijera/" class="text-base font-medium text-gray-900 hover:text-gray-700"> Karijera </a>

						<a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700"> Edukacije </a>

						<a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700"> Tim </a>
					</div>
					<div>
						<a href="/kontakt/" class="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"> Kontaktirajte nas </a>
						<p class="mt-6 text-center text-base font-medium text-gray-500">
							Želite da pomognete?
							<a href="/donacije/" class="text-indigo-600 hover:text-indigo-500"> Donirajte </a>
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<static-query>
query {
 blogs:  allPost (sortBy: "created",  limit: 3) {
  edges {
    node {
      id
      path
      title
      excerpt
      image
      created
    }
  }
}

category:   allCategory ( filter:{nav: {eq: true}} limit: 6) {
    edges {
      node {
        id
        title
				desc
      }
    }
  }
}
</static-query>

<script>
export default {
	name: "Header",

	data() {
		return {};
	},
};
</script>
