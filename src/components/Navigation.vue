<template>
	<div x-data="{ mobileMenuOpen: false }" class="relative bg-white">
		<div class="absolute inset-0 shadow z-30 pointer-events-none" aria-hidden="true"></div>
		<div class="relative z-20">
			<div class="max-w-7xl mx-auto flex justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-8 md:justify-start md:space-x-10">
				<div>
					<a href="#" class="flex">
						<span class="sr-only">Workflow</span>
						<img class="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="" />
					</a>
				</div>
				<div class="-mr-2 -my-2 md:hidden">
					<button
						x-on:click="mobileMenuOpen = true"
						type="button"
						class="
							bg-white
							rounded-md
							p-2
							inline-flex
							items-center
							justify-center
							text-gray-400
							hover:text-gray-500
							hover:bg-gray-100
							focus:outline-none
							focus:ring-2 focus:ring-inset focus:ring-indigo-500
						"
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
						<div x-description="Flyout menu, show/hide based on flyout menu state." x-on:click.away="flyoutMenuOpen = false" x-data="{ flyoutMenuOpen: false }">
							<!-- Item active: "text-gray-900", Item inactive: "text-gray-500" -->
							<button
								type="button"
								x-on:click="flyoutMenuOpen = !flyoutMenuOpen"
								class="
									text-gray-500
									group
									bg-white
									rounded-md
									inline-flex
									items-center
									text-base
									font-medium
									hover:text-gray-900
									focus:outline-none
									focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
								"
								aria-expanded="false"
							>
								<span>Zdravlje</span>
							</button>

							<div
								x-show="flyoutMenuOpen"
								x-transition:enter="transition ease-out duration-200"
								x-transition:enter-start="opacity-0 translate-y-1"
								x-transition:enter-end="opacity-100 translate-y-0"
								x-transition:leave="transition ease-in duration-150"
								x-transition:leave-start="opacity-100 translate-y-0"
								x-transition:leave-end="opacity-0 translate-y-1"
							>
								<div class="hidden md:block absolute z-10 top-full inset-x-0 transform shadow-lg">
									<div class="absolute inset-0 flex">
										<div class="bg-white w-1/2"></div>
										<div class="bg-gray-50 w-1/2"></div>
									</div>
									<div class="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
										<nav class="grid gap-y-10 px-4 py-8 bg-white sm:grid-cols-2 sm:gap-x-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-12">
											<div>
												<ul role="list" class="mt-5 space-y-6">
													<li class="flow-root">
														<a
															href="/kategorija/kardiovaskularni"
															class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
														>
															<!-- Heroicon name: outline/information-circle -->
															<svg
																class="flex-shrink-0 h-6 w-6 text-gray-400"
																xmlns="http://www.w3.org/2000/svg"
																fill="none"
																viewBox="0 0 24 24"
																stroke="currentColor"
																aria-hidden="true"
															>
																<path
																	stroke-linecap="round"
																	stroke-linejoin="round"
																	stroke-width="2"
																	d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
																/>
															</svg>
															<span class="ml-4">Kardiovaskularni</span>
														</a>
													</li>

													<li class="flow-root">
														<a href="/kategorija/rak" class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">
															<!-- Heroicon name: outline/office-building -->
															<svg
																class="flex-shrink-0 h-6 w-6 text-gray-400"
																xmlns="http://www.w3.org/2000/svg"
																fill="none"
																viewBox="0 0 24 24"
																stroke="currentColor"
																aria-hidden="true"
															>
																<path
																	stroke-linecap="round"
																	stroke-linejoin="round"
																	stroke-width="2"
																	d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
																/>
															</svg>
															<span class="ml-4">Rak</span>
														</a>
													</li>

													<li class="flow-root">
														<a href="/kategorija/dijabetes" class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">
															<!-- Heroicon name: outline/newspaper -->
															<svg
																class="flex-shrink-0 h-6 w-6 text-gray-400"
																xmlns="http://www.w3.org/2000/svg"
																fill="none"
																viewBox="0 0 24 24"
																stroke="currentColor"
																aria-hidden="true"
															>
																<path
																	stroke-linecap="round"
																	stroke-linejoin="round"
																	stroke-width="2"
																	d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
																/>
															</svg>
															<span class="ml-4">Dijabetes</span>
														</a>
													</li>

													<li class="flow-root">
														<a
															href="/kategorija/osteoporoza"
															class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
														>
															<!-- Heroicon name: outline/briefcase -->
															<svg
																class="flex-shrink-0 h-6 w-6 text-gray-400"
																xmlns="http://www.w3.org/2000/svg"
																fill="none"
																viewBox="0 0 24 24"
																stroke="currentColor"
																aria-hidden="true"
															>
																<path
																	stroke-linecap="round"
																	stroke-linejoin="round"
																	stroke-width="2"
																	d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
																/>
															</svg>
															<span class="ml-4">Osteoporoza</span>
														</a>
													</li>

													<li class="flow-root">
														<a
															href="/kategorija/gastrodigestivni-trakt"
															class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
														>
															<!-- Heroicon name: outline/shield-check -->
															<svg
																class="flex-shrink-0 h-6 w-6 text-gray-400"
																xmlns="http://www.w3.org/2000/svg"
																fill="none"
																viewBox="0 0 24 24"
																stroke="currentColor"
																aria-hidden="true"
															>
																<path
																	stroke-linecap="round"
																	stroke-linejoin="round"
																	stroke-width="2"
																	d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
																/>
															</svg>
															<span class="ml-4">Gastrodigestivni trakt</span>
														</a>
													</li>
												</ul>
											</div>
											<div>
												<ul role="list" class="mt-5 space-y-6">
													<li class="flow-root">
														<a
															href="/kategorija/zdravlje-zena"
															class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
														>
															<!-- Heroicon name: outline/user-group -->
															<svg
																class="flex-shrink-0 h-6 w-6 text-gray-400"
																xmlns="http://www.w3.org/2000/svg"
																fill="none"
																viewBox="0 0 24 24"
																stroke="currentColor"
																aria-hidden="true"
															>
																<path
																	stroke-linecap="round"
																	stroke-linejoin="round"
																	stroke-width="2"
																	d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
																/>
															</svg>
															<span class="ml-4">Zdravlje žena</span>
														</a>
													</li>

													<li class="flow-root">
														<a
															href="/kategorija/ishrana-po-bolestima"
															class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
														>
															<!-- Heroicon name: outline/globe-alt -->
															<svg
																class="flex-shrink-0 h-6 w-6 text-gray-400"
																xmlns="http://www.w3.org/2000/svg"
																fill="none"
																viewBox="0 0 24 24"
																stroke="currentColor"
																aria-hidden="true"
															>
																<path
																	stroke-linecap="round"
																	stroke-linejoin="round"
																	stroke-width="2"
																	d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
																/>
															</svg>
															<span class="ml-4">Ishrana po bolestima</span>
														</a>
													</li>

													<li class="flow-root">
														<a href="/kategorija/detoks" class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">
															<!-- Heroicon name: outline/bookmark-alt -->
															<svg
																class="flex-shrink-0 h-6 w-6 text-gray-400"
																xmlns="http://www.w3.org/2000/svg"
																fill="none"
																viewBox="0 0 24 24"
																stroke="currentColor"
																aria-hidden="true"
															>
																<path
																	stroke-linecap="round"
																	stroke-linejoin="round"
																	stroke-width="2"
																	d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
																/>
															</svg>
															<span class="ml-4">Detoks</span>
														</a>
													</li>

													<li class="flow-root">
														<a href="/kategorija/suplementi" class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">
															<!-- Heroicon name: outline/desktop-computer -->
															<svg
																class="flex-shrink-0 h-6 w-6 text-gray-400"
																xmlns="http://www.w3.org/2000/svg"
																fill="none"
																viewBox="0 0 24 24"
																stroke="currentColor"
																aria-hidden="true"
															>
																<path
																	stroke-linecap="round"
																	stroke-linejoin="round"
																	stroke-width="2"
																	d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
																/>
															</svg>
															<span class="ml-4">Suplementi</span>
														</a>
													</li>
												</ul>
											</div>
										</nav>
										<div class="bg-gray-50 px-4 py-8 sm:py-12 sm:px-6 lg:px-8 xl:pl-12">
											<div>
												<h3 class="text-sm font-medium tracking-wide text-gray-500 uppercase">Zadnje objave</h3>
												<ul role="list" class="mt-6 space-y-6">
													<li v-for="zdravlje in $static.zdravlje.edges" :key="zdravlje.node.id" class="flow-root">
														<a href="#" class="-m-3 p-3 flex rounded-lg hover:bg-gray-100">
															<div class="hidden sm:block flex-shrink-0">
																<g-image class="w-32 h-20 object-cover rounded-md" :src="require(`!!assets-loader!@img/${zdravlje.node.image}`)" alt="" />
															</div>
															<div class="w-0 flex-1 sm:ml-8">
																<h4 class="text-base font-medium text-gray-900 truncate">
																	{{ zdravlje.node.title }}
																</h4>
																<p class="mt-1 text-sm text-gray-500">{{ zdravlje.node.excerpt }}</p>
															</div>
														</a>
													</li>
												</ul>
											</div>
											<div class="mt-6 text-sm font-medium">
												<a href="/zdravlje" class="text-indigo-600 hover:text-indigo-500"> Pogledaj sve <span aria-hidden="true">&rarr;</span></a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div x-description="Flyout menu, show/hide based on flyout menu state." x-on:click.away="flyoutMenuOpen = false" x-data="{ flyoutMenuOpen: false }">
							<!-- Item active: "text-gray-900", Item inactive: "text-gray-500" -->
							<button
								type="button"
								x-on:click="flyoutMenuOpen = !flyoutMenuOpen"
								class="
									text-gray-500
									group
									bg-white
									rounded-md
									inline-flex
									items-center
									text-base
									font-medium
									hover:text-gray-900
									focus:outline-none
									focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
								"
								aria-expanded="false"
							>
								<span>Ishrana</span>
							</button>

							<div
								x-show="flyoutMenuOpen"
								x-transition:enter="transition ease-out duration-200"
								x-transition:enter-start="opacity-0 translate-y-1"
								x-transition:enter-end="opacity-100 translate-y-0"
								x-transition:leave="transition ease-in duration-150"
								x-transition:leave-start="opacity-100 translate-y-0"
								x-transition:leave-end="opacity-0 translate-y-1"
							>
								<div class="hidden md:block absolute z-10 top-full inset-x-0 transform shadow-lg">
									<div class="absolute inset-0 flex">
										<div class="bg-white w-1/2"></div>
										<div class="bg-gray-50 w-1/2"></div>
									</div>
									<div class="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
										<nav class="grid gap-y-10 px-4 py-8 bg-white sm:grid-cols-2 sm:gap-x-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-12">
											<div>
												<ul role="list" class="mt-5 space-y-6">
													<li class="flow-root">
														<a
															href="/kategorija/zdrava-hrana"
															class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
														>
															<!-- Heroicon name: outline/information-circle -->
															<svg
																class="flex-shrink-0 h-6 w-6 text-gray-400"
																xmlns="http://www.w3.org/2000/svg"
																fill="none"
																viewBox="0 0 24 24"
																stroke="currentColor"
																aria-hidden="true"
															>
																<path
																	stroke-linecap="round"
																	stroke-linejoin="round"
																	stroke-width="2"
																	d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
																/>
															</svg>
															<span class="ml-4">Zdrava hrana</span>
														</a>
													</li>

													<li class="flow-root">
														<a
															href="/kategorija/super-hrana"
															class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
														>
															<!-- Heroicon name: outline/office-building -->
															<svg
																class="flex-shrink-0 h-6 w-6 text-gray-400"
																xmlns="http://www.w3.org/2000/svg"
																fill="none"
																viewBox="0 0 24 24"
																stroke="currentColor"
																aria-hidden="true"
															>
																<path
																	stroke-linecap="round"
																	stroke-linejoin="round"
																	stroke-width="2"
																	d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
																/>
															</svg>
															<span class="ml-4">Super hrana</span>
														</a>
													</li>

													<li class="flow-root">
														<a
															href="/kategorija/trendovi-u-ishrani"
															class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
														>
															<!-- Heroicon name: outline/newspaper -->
															<svg
																class="flex-shrink-0 h-6 w-6 text-gray-400"
																xmlns="http://www.w3.org/2000/svg"
																fill="none"
																viewBox="0 0 24 24"
																stroke="currentColor"
																aria-hidden="true"
															>
																<path
																	stroke-linecap="round"
																	stroke-linejoin="round"
																	stroke-width="2"
																	d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
																/>
															</svg>
															<span class="ml-4">Trendovi u ishrani</span>
														</a>
													</li>

													<li class="flow-root">
														<a href="/kategorija/recepti" class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">
															<!-- Heroicon name: outline/briefcase -->
															<svg
																class="flex-shrink-0 h-6 w-6 text-gray-400"
																xmlns="http://www.w3.org/2000/svg"
																fill="none"
																viewBox="0 0 24 24"
																stroke="currentColor"
																aria-hidden="true"
															>
																<path
																	stroke-linecap="round"
																	stroke-linejoin="round"
																	stroke-width="2"
																	d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
																/>
															</svg>
															<span class="ml-4">Recepti</span>
														</a>
													</li>
												</ul>
											</div>
											<div></div>
										</nav>
										<div class="bg-gray-50 px-4 py-8 sm:py-12 sm:px-6 lg:px-8 xl:pl-12">
											<div>
												<h3 class="text-sm font-medium tracking-wide text-gray-500 uppercase">Zadnje objave</h3>
												<ul role="list" class="mt-6 space-y-6">
													<li v-for="ishrana in $static.ishrana.edges" :key="ishrana.node.id" class="flow-root">
														<a href="#" class="-m-3 p-3 flex rounded-lg hover:bg-gray-100">
															<div class="hidden sm:block flex-shrink-0">
																<g-image class="w-32 h-20 object-cover rounded-md" :src="require(`!!assets-loader!@img/${ishrana.node.image}`)" alt="" />
															</div>
															<div class="w-0 flex-1 sm:ml-8">
																<h4 class="text-base font-medium text-gray-900 truncate">
																	{{ ishrana.node.title }}
																</h4>
																<p class="mt-1 text-sm text-gray-500">{{ ishrana.node.excerpt }}</p>
															</div>
														</a>
													</li>
												</ul>
											</div>
											<div class="mt-6 text-sm font-medium">
												<a href="/ishrana" class="text-indigo-600 hover:text-indigo-500">
													Pogledaj sve
													<span aria-hidden="true">&rarr;</span></a
												>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div x-description="Flyout menu, show/hide based on flyout menu state." x-on:click.away="flyoutMenuOpen = false" x-data="{ flyoutMenuOpen: false }">
							<!-- Item active: "text-gray-900", Item inactive: "text-gray-500" -->
							<button
								type="button"
								x-on:click="flyoutMenuOpen = !flyoutMenuOpen"
								class="
									text-gray-500
									group
									bg-white
									rounded-md
									inline-flex
									items-center
									text-base
									font-medium
									hover:text-gray-900
									focus:outline-none
									focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
								"
								aria-expanded="false"
							>
								<span>Mentalno zdravlje</span>
							</button>

							<div
								x-show="flyoutMenuOpen"
								x-transition:enter="transition ease-out duration-200"
								x-transition:enter-start="opacity-0 translate-y-1"
								x-transition:enter-end="opacity-100 translate-y-0"
								x-transition:leave="transition ease-in duration-150"
								x-transition:leave-start="opacity-100 translate-y-0"
								x-transition:leave-end="opacity-0 translate-y-1"
							>
								<div class="hidden md:block absolute z-10 top-full inset-x-0 transform shadow-lg">
									<div class="absolute inset-0 flex">
										<div class="bg-white w-1/2"></div>
										<div class="bg-gray-50 w-1/2"></div>
									</div>
									<div class="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
										<nav class="grid gap-y-10 px-4 py-8 bg-white sm:grid-cols-2 sm:gap-x-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-12">
											<div>
												<ul role="list" class="mt-5 space-y-6">
													<li class="flow-root">
														<a
															href="/kategorija/licni-razvoj"
															class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
														>
															<!-- Heroicon name: outline/information-circle -->
															<svg
																class="flex-shrink-0 h-6 w-6 text-gray-400"
																xmlns="http://www.w3.org/2000/svg"
																fill="none"
																viewBox="0 0 24 24"
																stroke="currentColor"
																aria-hidden="true"
															>
																<path
																	stroke-linecap="round"
																	stroke-linejoin="round"
																	stroke-width="2"
																	d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
																/>
															</svg>
															<span class="ml-4">Lični razvoj</span>
														</a>
													</li>

													<li class="flow-root">
														<a href="/kategorija/duhovnost" class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">
															<!-- Heroicon name: outline/office-building -->
															<svg
																class="flex-shrink-0 h-6 w-6 text-gray-400"
																xmlns="http://www.w3.org/2000/svg"
																fill="none"
																viewBox="0 0 24 24"
																stroke="currentColor"
																aria-hidden="true"
															>
																<path
																	stroke-linecap="round"
																	stroke-linejoin="round"
																	stroke-width="2"
																	d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
																/>
															</svg>
															<span class="ml-4">Duhovnost</span>
														</a>
													</li>

													<li class="flow-root">
														<a
															href="/kategorija/intimni-odnosi"
															class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
														>
															<!-- Heroicon name: outline/newspaper -->
															<svg
																class="flex-shrink-0 h-6 w-6 text-gray-400"
																xmlns="http://www.w3.org/2000/svg"
																fill="none"
																viewBox="0 0 24 24"
																stroke="currentColor"
																aria-hidden="true"
															>
																<path
																	stroke-linecap="round"
																	stroke-linejoin="round"
																	stroke-width="2"
																	d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
																/>
															</svg>
															<span class="ml-4">Intimni odnosi</span>
														</a>
													</li>

													<li class="flow-root">
														<a href="/kategorija/ljubav" class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">
															<!-- Heroicon name: outline/briefcase -->
															<svg
																class="flex-shrink-0 h-6 w-6 text-gray-400"
																xmlns="http://www.w3.org/2000/svg"
																fill="none"
																viewBox="0 0 24 24"
																stroke="currentColor"
																aria-hidden="true"
															>
																<path
																	stroke-linecap="round"
																	stroke-linejoin="round"
																	stroke-width="2"
																	d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
																/>
															</svg>
															<span class="ml-4">Ljubav</span>
														</a>
													</li>

													<li class="flow-root">
														<a
															href="/kategorija/prijateljstvo"
															class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
														>
															<!-- Heroicon name: outline/shield-check -->
															<svg
																class="flex-shrink-0 h-6 w-6 text-gray-400"
																xmlns="http://www.w3.org/2000/svg"
																fill="none"
																viewBox="0 0 24 24"
																stroke="currentColor"
																aria-hidden="true"
															>
																<path
																	stroke-linecap="round"
																	stroke-linejoin="round"
																	stroke-width="2"
																	d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
																/>
															</svg>
															<span class="ml-4">Prijateljstvo</span>
														</a>
													</li>
												</ul>
											</div>
											<div>
												<ul role="list" class="mt-5 space-y-6">
													<li class="flow-root">
														<a href="/kategorija/coaching" class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">
															<!-- Heroicon name: outline/user-group -->
															<svg
																class="flex-shrink-0 h-6 w-6 text-gray-400"
																xmlns="http://www.w3.org/2000/svg"
																fill="none"
																viewBox="0 0 24 24"
																stroke="currentColor"
																aria-hidden="true"
															>
																<path
																	stroke-linecap="round"
																	stroke-linejoin="round"
																	stroke-width="2"
																	d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
																/>
															</svg>
															<span class="ml-4">Coaching</span>
														</a>
													</li>
												</ul>
											</div>
										</nav>
										<div class="bg-gray-50 px-4 py-8 sm:py-12 sm:px-6 lg:px-8 xl:pl-12">
											<div>
												<h3 class="text-sm font-medium tracking-wide text-gray-500 uppercase">Zadnje objave</h3>
												<ul role="list" class="mt-6 space-y-6">
													<li v-for="mentalno in $static.mentalno.edges" :key="mentalno.node.id" class="flow-root">
														<a href="#" class="-m-3 p-3 flex rounded-lg hover:bg-gray-100">
															<div class="hidden sm:block flex-shrink-0">
																<g-image class="w-32 h-20 object-cover rounded-md" :src="require(`!!assets-loader!@img/${mentalno.node.image}`)" alt="" />
															</div>
															<div class="w-0 flex-1 sm:ml-8">
																<h4 class="text-base font-medium text-gray-900 truncate">
																	{{ mentalno.node.title }}
																</h4>
																<p class="mt-1 text-sm text-gray-500">{{ mentalno.node.excerpt }}</p>
															</div>
														</a>
													</li>
												</ul>
											</div>
											<div class="mt-6 text-sm font-medium">
												<a href="/mentalno-zdravlje" class="text-indigo-600 hover:text-indigo-500">
													Pogledaj sve
													<span aria-hidden="true">&rarr;</span></a
												>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div x-description="Flyout menu, show/hide based on flyout menu state." x-on:click.away="flyoutMenuOpen = false" x-data="{ flyoutMenuOpen: false }">
							<!-- Item active: "text-gray-900", Item inactive: "text-gray-500" -->
							<button
								type="button"
								x-on:click="flyoutMenuOpen = !flyoutMenuOpen"
								class="
									text-gray-500
									group
									bg-white
									rounded-md
									inline-flex
									items-center
									text-base
									font-medium
									hover:text-gray-900
									focus:outline-none
									focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
								"
								aria-expanded="false"
							>
								<span>Roditeljstvo</span>
							</button>

							<div
								x-show="flyoutMenuOpen"
								x-transition:enter="transition ease-out duration-200"
								x-transition:enter-start="opacity-0 translate-y-1"
								x-transition:enter-end="opacity-100 translate-y-0"
								x-transition:leave="transition ease-in duration-150"
								x-transition:leave-start="opacity-100 translate-y-0"
								x-transition:leave-end="opacity-0 translate-y-1"
							>
								<div class="hidden md:block absolute z-10 top-full inset-x-0 transform shadow-lg">
									<div class="absolute inset-0 flex">
										<div class="bg-white w-1/2"></div>
										<div class="bg-gray-50 w-1/2"></div>
									</div>
									<div class="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
										<nav class="grid gap-y-10 px-4 py-8 bg-white sm:grid-cols-2 sm:gap-x-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-12">
											<div>
												<ul role="list" class="mt-5 space-y-6">
													<li class="flow-root">
														<a href="/kategorija/trudnoca" class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">
															<!-- Heroicon name: outline/information-circle -->
															<svg
																class="flex-shrink-0 h-6 w-6 text-gray-400"
																xmlns="http://www.w3.org/2000/svg"
																fill="none"
																viewBox="0 0 24 24"
																stroke="currentColor"
																aria-hidden="true"
															>
																<path
																	stroke-linecap="round"
																	stroke-linejoin="round"
																	stroke-width="2"
																	d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
																/>
															</svg>
															<span class="ml-4">Trudnoća</span>
														</a>
													</li>

													<li class="flow-root">
														<a
															href="/kategorija/materinstvo"
															class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
														>
															<!-- Heroicon name: outline/office-building -->
															<svg
																class="flex-shrink-0 h-6 w-6 text-gray-400"
																xmlns="http://www.w3.org/2000/svg"
																fill="none"
																viewBox="0 0 24 24"
																stroke="currentColor"
																aria-hidden="true"
															>
																<path
																	stroke-linecap="round"
																	stroke-linejoin="round"
																	stroke-width="2"
																	d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
																/>
															</svg>
															<span class="ml-4">Materinstvo</span>
														</a>
													</li>

													<li class="flow-root">
														<a href="/kategorija/beba" class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">
															<!-- Heroicon name: outline/newspaper -->
															<svg
																class="flex-shrink-0 h-6 w-6 text-gray-400"
																xmlns="http://www.w3.org/2000/svg"
																fill="none"
																viewBox="0 0 24 24"
																stroke="currentColor"
																aria-hidden="true"
															>
																<path
																	stroke-linecap="round"
																	stroke-linejoin="round"
																	stroke-width="2"
																	d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
																/>
															</svg>
															<span class="ml-4">Beba</span>
														</a>
													</li>

													<li class="flow-root">
														<a
															href="/kategorija/mladja-deca"
															class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
														>
															<!-- Heroicon name: outline/briefcase -->
															<svg
																class="flex-shrink-0 h-6 w-6 text-gray-400"
																xmlns="http://www.w3.org/2000/svg"
																fill="none"
																viewBox="0 0 24 24"
																stroke="currentColor"
																aria-hidden="true"
															>
																<path
																	stroke-linecap="round"
																	stroke-linejoin="round"
																	stroke-width="2"
																	d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
																/>
															</svg>
															<span class="ml-4">Mlađa deca</span>
														</a>
													</li>

													<li class="flow-root">
														<a href="/kategorija/tinejdzeri" class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">
															<!-- Heroicon name: outline/shield-check -->
															<svg
																class="flex-shrink-0 h-6 w-6 text-gray-400"
																xmlns="http://www.w3.org/2000/svg"
																fill="none"
																viewBox="0 0 24 24"
																stroke="currentColor"
																aria-hidden="true"
															>
																<path
																	stroke-linecap="round"
																	stroke-linejoin="round"
																	stroke-width="2"
																	d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
																/>
															</svg>
															<span class="ml-4">Tinejdžeri</span>
														</a>
													</li>
												</ul>
											</div>
											<div></div>
										</nav>
										<div class="bg-gray-50 px-4 py-8 sm:py-12 sm:px-6 lg:px-8 xl:pl-12">
											<div>
												<h3 class="text-sm font-medium tracking-wide text-gray-500 uppercase">Zadnje objave</h3>
												<ul role="list" class="mt-6 space-y-6">
													<li v-for="roditeljstvo in $static.roditeljstvo.edges" :key="roditeljstvo.node.id" class="flow-root">
														<a href="#" class="-m-3 p-3 flex rounded-lg hover:bg-gray-100">
															<div class="hidden sm:block flex-shrink-0">
																<g-image class="w-32 h-20 object-cover rounded-md" :src="require(`!!assets-loader!@img/${roditeljstvo.node.image}`)" alt="" />
															</div>
															<div class="w-0 flex-1 sm:ml-8">
																<h4 class="text-base font-medium text-gray-900 truncate">
																	{{ roditeljstvo.node.title }}
																</h4>
																<p class="mt-1 text-sm text-gray-500">{{ roditeljstvo.node.excerpt }}</p>
															</div>
														</a>
													</li>
												</ul>
											</div>
											<div class="mt-6 text-sm font-medium">
												<a href="/roditeljstvo" class="text-indigo-600 hover:text-indigo-500"> Pogledaj sve <span aria-hidden="true">&rarr;</span></a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div x-description="Flyout menu, show/hide based on flyout menu state." x-on:click.away="flyoutMenuOpen = false" x-data="{ flyoutMenuOpen: false }">
							<!-- Item active: "text-gray-900", Item inactive: "text-gray-500" -->
							<button
								type="button"
								x-on:click="flyoutMenuOpen = !flyoutMenuOpen"
								class="
									text-gray-500
									group
									bg-white
									rounded-md
									inline-flex
									items-center
									text-base
									font-medium
									hover:text-gray-900
									focus:outline-none
									focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
								"
								aria-expanded="false"
							>
								<span>Lifestyle</span>
							</button>

							<div
								x-show="flyoutMenuOpen"
								x-transition:enter="transition ease-out duration-200"
								x-transition:enter-start="opacity-0 translate-y-1"
								x-transition:enter-end="opacity-100 translate-y-0"
								x-transition:leave="transition ease-in duration-150"
								x-transition:leave-start="opacity-100 translate-y-0"
								x-transition:leave-end="opacity-0 translate-y-1"
							>
								<div class="hidden md:block absolute z-10 top-full inset-x-0 transform shadow-lg">
									<div class="absolute inset-0 flex">
										<div class="bg-white w-1/2"></div>
										<div class="bg-gray-50 w-1/2"></div>
									</div>
									<div class="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
										<nav class="grid gap-y-10 px-4 py-8 bg-white sm:grid-cols-2 sm:gap-x-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-12">
											<div>
												<ul role="list" class="mt-5 space-y-6">
													<li class="flow-root">
														<a href="/kategorija/putovanja" class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">
															<!-- Heroicon name: outline/information-circle -->
															<svg
																class="flex-shrink-0 h-6 w-6 text-gray-400"
																xmlns="http://www.w3.org/2000/svg"
																fill="none"
																viewBox="0 0 24 24"
																stroke="currentColor"
																aria-hidden="true"
															>
																<path
																	stroke-linecap="round"
																	stroke-linejoin="round"
																	stroke-width="2"
																	d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
																/>
															</svg>
															<span class="ml-4">Putovanja</span>
														</a>
													</li>

													<li class="flow-root">
														<a href="/kategorija/dom" class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">
															<!-- Heroicon name: outline/office-building -->
															<svg
																class="flex-shrink-0 h-6 w-6 text-gray-400"
																xmlns="http://www.w3.org/2000/svg"
																fill="none"
																viewBox="0 0 24 24"
																stroke="currentColor"
																aria-hidden="true"
															>
																<path
																	stroke-linecap="round"
																	stroke-linejoin="round"
																	stroke-width="2"
																	d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
																/>
															</svg>
															<span class="ml-4">Dom</span>
														</a>
													</li>

													<li class="flow-root">
														<a
															href="/kategorija/kucni-budzet"
															class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
														>
															<!-- Heroicon name: outline/newspaper -->
															<svg
																class="flex-shrink-0 h-6 w-6 text-gray-400"
																xmlns="http://www.w3.org/2000/svg"
																fill="none"
																viewBox="0 0 24 24"
																stroke="currentColor"
																aria-hidden="true"
															>
																<path
																	stroke-linecap="round"
																	stroke-linejoin="round"
																	stroke-width="2"
																	d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
																/>
															</svg>
															<span class="ml-4">Kućni budžet </span>
														</a>
													</li>

													<li class="flow-root">
														<a href="/kategorija/praznici" class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">
															<!-- Heroicon name: outline/briefcase -->
															<svg
																class="flex-shrink-0 h-6 w-6 text-gray-400"
																xmlns="http://www.w3.org/2000/svg"
																fill="none"
																viewBox="0 0 24 24"
																stroke="currentColor"
																aria-hidden="true"
															>
																<path
																	stroke-linecap="round"
																	stroke-linejoin="round"
																	stroke-width="2"
																	d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
																/>
															</svg>
															<span class="ml-4">Praznici</span>
														</a>
													</li>

													<li class="flow-root">
														<a href="/kategorija/lepota" class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">
															<!-- Heroicon name: outline/shield-check -->
															<svg
																class="flex-shrink-0 h-6 w-6 text-gray-400"
																xmlns="http://www.w3.org/2000/svg"
																fill="none"
																viewBox="0 0 24 24"
																stroke="currentColor"
																aria-hidden="true"
															>
																<path
																	stroke-linecap="round"
																	stroke-linejoin="round"
																	stroke-width="2"
																	d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
																/>
															</svg>
															<span class="ml-4">Lepota</span>
														</a>
													</li>
												</ul>
											</div>
											<div>
												<ul role="list" class="mt-5 space-y-6">
													<li class="flow-root">
														<a href="/kategorija/fitness" class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">
															<!-- Heroicon name: outline/user-group -->
															<svg
																class="flex-shrink-0 h-6 w-6 text-gray-400"
																xmlns="http://www.w3.org/2000/svg"
																fill="none"
																viewBox="0 0 24 24"
																stroke="currentColor"
																aria-hidden="true"
															>
																<path
																	stroke-linecap="round"
																	stroke-linejoin="round"
																	stroke-width="2"
																	d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
																/>
															</svg>
															<span class="ml-4">Fitness</span>
														</a>
													</li>

													<li class="flow-root">
														<a href="/kategorija/pokloni" class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">
															<!-- Heroicon name: outline/globe-alt -->
															<svg
																class="flex-shrink-0 h-6 w-6 text-gray-400"
																xmlns="http://www.w3.org/2000/svg"
																fill="none"
																viewBox="0 0 24 24"
																stroke="currentColor"
																aria-hidden="true"
															>
																<path
																	stroke-linecap="round"
																	stroke-linejoin="round"
																	stroke-width="2"
																	d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
																/>
															</svg>
															<span class="ml-4">Pokloni</span>
														</a>
													</li>
												</ul>
											</div>
										</nav>
										<div class="bg-gray-50 px-4 py-8 sm:py-12 sm:px-6 lg:px-8 xl:pl-12">
											<div>
												<h3 class="text-sm font-medium tracking-wide text-gray-500 uppercase">Zadnje objave</h3>
												<ul role="list" class="mt-6 space-y-6">
													<li v-for="lifestyle in $static.lifestyle.edges" :key="lifestyle.node.id" class="flow-root">
														<a href="#" class="-m-3 p-3 flex rounded-lg hover:bg-gray-100">
															<div class="hidden sm:block flex-shrink-0">
																<g-image class="w-32 h-20 object-cover rounded-md" :src="require(`!!assets-loader!@img/${lifestyle.node.image}`)" alt="" />
															</div>
															<div class="w-0 flex-1 sm:ml-8">
																<h4 class="text-base font-medium text-gray-900 truncate">
																	{{ lifestyle.node.title }}
																</h4>
																<p class="mt-1 text-sm text-gray-500">{{ lifestyle.node.excerpt }}</p>
															</div>
														</a>
													</li>
												</ul>
											</div>
											<div class="mt-6 text-sm font-medium">
												<a href="/lifestyle" class="text-indigo-600 hover:text-indigo-500">
													Pogledaj sve
													<span aria-hidden="true">&rarr;</span></a
												>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div x-description="Flyout menu, show/hide based on flyout menu state." x-on:click.away="flyoutMenuOpen = false" x-data="{ flyoutMenuOpen: false }">
							<!-- Item active: "text-gray-900", Item inactive: "text-gray-500" -->
							<button
								type="button"
								x-on:click="flyoutMenuOpen = !flyoutMenuOpen"
								class="
									text-gray-500
									group
									bg-white
									rounded-md
									inline-flex
									items-center
									text-base
									font-medium
									hover:text-gray-900
									focus:outline-none
									focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
								"
								aria-expanded="false"
							>
								<span>Finansijski savetnik</span>
							</button>

							<div
								x-show="flyoutMenuOpen"
								x-transition:enter="transition ease-out duration-200"
								x-transition:enter-start="opacity-0 translate-y-1"
								x-transition:enter-end="opacity-100 translate-y-0"
								x-transition:leave="transition ease-in duration-150"
								x-transition:leave-start="opacity-100 translate-y-0"
								x-transition:leave-end="opacity-0 translate-y-1"
							>
								<div class="hidden md:block absolute z-10 top-full inset-x-0 transform shadow-lg">
									<div class="absolute inset-0 flex">
										<div class="bg-white w-1/2"></div>
										<div class="bg-gray-50 w-1/2"></div>
									</div>
									<div class="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
										<nav class="grid gap-y-10 px-4 py-8 bg-white sm:grid-cols-2 sm:gap-x-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-12">
											<div>
												<ul role="list" class="mt-5 space-y-6">
													<li class="flow-root">
														<a
															href="/kategorija/kucni-budzet"
															class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
														>
															<!-- Heroicon name: outline/information-circle -->
															<svg
																class="flex-shrink-0 h-6 w-6 text-gray-400"
																xmlns="http://www.w3.org/2000/svg"
																fill="none"
																viewBox="0 0 24 24"
																stroke="currentColor"
																aria-hidden="true"
															>
																<path
																	stroke-linecap="round"
																	stroke-linejoin="round"
																	stroke-width="2"
																	d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
																/>
															</svg>
															<span class="ml-4">Kućni budžet</span>
														</a>
													</li>

													<li class="flow-root">
														<a
															href="/kategorija/investicioni-fondovi"
															class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
														>
															<!-- Heroicon name: outline/office-building -->
															<svg
																class="flex-shrink-0 h-6 w-6 text-gray-400"
																xmlns="http://www.w3.org/2000/svg"
																fill="none"
																viewBox="0 0 24 24"
																stroke="currentColor"
																aria-hidden="true"
															>
																<path
																	stroke-linecap="round"
																	stroke-linejoin="round"
																	stroke-width="2"
																	d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
																/>
															</svg>
															<span class="ml-4">Investicioni fondovi</span>
														</a>
													</li>

													<li class="flow-root">
														<a href="/kategorija/stednja" class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">
															<!-- Heroicon name: outline/newspaper -->
															<svg
																class="flex-shrink-0 h-6 w-6 text-gray-400"
																xmlns="http://www.w3.org/2000/svg"
																fill="none"
																viewBox="0 0 24 24"
																stroke="currentColor"
																aria-hidden="true"
															>
																<path
																	stroke-linecap="round"
																	stroke-linejoin="round"
																	stroke-width="2"
																	d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
																/>
															</svg>
															<span class="ml-4">Štednja</span>
														</a>
													</li>

													<li class="flow-root">
														<a href="/kategorija/bitkoin" class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">
															<!-- Heroicon name: outline/briefcase -->
															<svg
																class="flex-shrink-0 h-6 w-6 text-gray-400"
																xmlns="http://www.w3.org/2000/svg"
																fill="none"
																viewBox="0 0 24 24"
																stroke="currentColor"
																aria-hidden="true"
															>
																<path
																	stroke-linecap="round"
																	stroke-linejoin="round"
																	stroke-width="2"
																	d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
																/>
															</svg>
															<span class="ml-4">Bitkoin</span>
														</a>
													</li>

													<li class="flow-root">
														<a href="/kategorija/nekretnine" class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">
															<!-- Heroicon name: outline/shield-check -->
															<svg
																class="flex-shrink-0 h-6 w-6 text-gray-400"
																xmlns="http://www.w3.org/2000/svg"
																fill="none"
																viewBox="0 0 24 24"
																stroke="currentColor"
																aria-hidden="true"
															>
																<path
																	stroke-linecap="round"
																	stroke-linejoin="round"
																	stroke-width="2"
																	d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
																/>
															</svg>
															<span class="ml-4">Nekretnine</span>
														</a>
													</li>
												</ul>
											</div>
										</nav>
										<div class="bg-gray-50 px-4 py-8 sm:py-12 sm:px-6 lg:px-8 xl:pl-12">
											<div>
												<h3 class="text-sm font-medium tracking-wide text-gray-500 uppercase">Zadnje objave</h3>
												<ul role="list" class="mt-6 space-y-6">
													<li v-for="finasijski in $static.finasijski.edges" :key="finasijski.node.id" class="flow-root">
														<a href="#" class="-m-3 p-3 flex rounded-lg hover:bg-gray-100">
															<div class="hidden sm:block flex-shrink-0">
																<g-image class="w-32 h-20 object-cover rounded-md" :src="require(`!!assets-loader!@img/${finasijski.node.image}`)" alt="" />
															</div>
															<div class="w-0 flex-1 sm:ml-8">
																<h4 class="text-base font-medium text-gray-900 truncate">
																	{{ finasijski.node.title }}
																</h4>
																<p class="mt-1 text-sm text-gray-500">{{ finasijski.node.excerpt }}</p>
															</div>
														</a>
													</li>
												</ul>
											</div>
											<div class="mt-6 text-sm font-medium">
												<a href="/finasijski-savetnik" class="text-indigo-600 hover:text-indigo-500">
													Pogledaj sve
													<span aria-hidden="true">&rarr;</span></a
												>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div x-description="Flyout menu, show/hide based on flyout menu state." x-on:click.away="flyoutMenuOpen = false" x-data="{ flyoutMenuOpen: false }">
							<!-- Item active: "text-gray-900", Item inactive: "text-gray-500" -->
							<button
								type="button"
								x-on:click="flyoutMenuOpen = !flyoutMenuOpen"
								class="
									text-gray-500
									group
									bg-white
									rounded-md
									inline-flex
									items-center
									text-base
									font-medium
									hover:text-gray-900
									focus:outline-none
									focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
								"
								aria-expanded="false"
							>
								<span>Poslovni kutak</span>
							</button>

							<div
								x-show="flyoutMenuOpen"
								x-transition:enter="transition ease-out duration-200"
								x-transition:enter-start="opacity-0 translate-y-1"
								x-transition:enter-end="opacity-100 translate-y-0"
								x-transition:leave="transition ease-in duration-150"
								x-transition:leave-start="opacity-100 translate-y-0"
								x-transition:leave-end="opacity-0 translate-y-1"
							>
								<div class="hidden md:block absolute z-10 top-full inset-x-0 transform shadow-lg">
									<div class="absolute inset-0 flex">
										<div class="bg-white w-1/2"></div>
										<div class="bg-gray-50 w-1/2"></div>
									</div>
									<div class="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
										<nav class="grid gap-y-10 px-4 py-8 bg-white sm:grid-cols-2 sm:gap-x-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-12">
											<div>
												<ul role="list" class="mt-5 space-y-6">
													<li class="flow-root">
														<a
															href="/kategorija/biznis-coaching"
															class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
														>
															<!-- Heroicon name: outline/information-circle -->
															<svg
																class="flex-shrink-0 h-6 w-6 text-gray-400"
																xmlns="http://www.w3.org/2000/svg"
																fill="none"
																viewBox="0 0 24 24"
																stroke="currentColor"
																aria-hidden="true"
															>
																<path
																	stroke-linecap="round"
																	stroke-linejoin="round"
																	stroke-width="2"
																	d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
																/>
															</svg>
															<span class="ml-4">Biznis coaching</span>
														</a>
													</li>

													<li class="flow-root">
														<a
															href="/kategorija/digitalni-marketing"
															class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
														>
															<!-- Heroicon name: outline/office-building -->
															<svg
																class="flex-shrink-0 h-6 w-6 text-gray-400"
																xmlns="http://www.w3.org/2000/svg"
																fill="none"
																viewBox="0 0 24 24"
																stroke="currentColor"
																aria-hidden="true"
															>
																<path
																	stroke-linecap="round"
																	stroke-linejoin="round"
																	stroke-width="2"
																	d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
																/>
															</svg>
															<span class="ml-4">Digitalni marketnig</span>
														</a>
													</li>

													<li class="flow-root">
														<a href="/kategorija/dizajn" class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">
															<!-- Heroicon name: outline/newspaper -->
															<svg
																class="flex-shrink-0 h-6 w-6 text-gray-400"
																xmlns="http://www.w3.org/2000/svg"
																fill="none"
																viewBox="0 0 24 24"
																stroke="currentColor"
																aria-hidden="true"
															>
																<path
																	stroke-linecap="round"
																	stroke-linejoin="round"
																	stroke-width="2"
																	d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
																/>
															</svg>
															<span class="ml-4">Dizajn</span>
														</a>
													</li>

													<li class="flow-root">
														<a href="/kategorija/zaposlenje" class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">
															<!-- Heroicon name: outline/briefcase -->
															<svg
																class="flex-shrink-0 h-6 w-6 text-gray-400"
																xmlns="http://www.w3.org/2000/svg"
																fill="none"
																viewBox="0 0 24 24"
																stroke="currentColor"
																aria-hidden="true"
															>
																<path
																	stroke-linecap="round"
																	stroke-linejoin="round"
																	stroke-width="2"
																	d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
																/>
															</svg>
															<span class="ml-4">Zaposlenje</span>
														</a>
													</li>

													<li class="flow-root">
														<a
															href="/kategorija/gradjenje-karijere"
															class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
														>
															<!-- Heroicon name: outline/shield-check -->
															<svg
																class="flex-shrink-0 h-6 w-6 text-gray-400"
																xmlns="http://www.w3.org/2000/svg"
																fill="none"
																viewBox="0 0 24 24"
																stroke="currentColor"
																aria-hidden="true"
															>
																<path
																	stroke-linecap="round"
																	stroke-linejoin="round"
																	stroke-width="2"
																	d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
																/>
															</svg>
															<span class="ml-4">Građenje karijere</span>
														</a>
													</li>
												</ul>
											</div>
											<div>
												<ul role="list" class="mt-5 space-y-6">
													<li class="flow-root">
														<a
															href="/kategorija/profesionalna-orijentacija"
															class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
														>
															<!-- Heroicon name: outline/user-group -->
															<svg
																class="flex-shrink-0 h-6 w-6 text-gray-400"
																xmlns="http://www.w3.org/2000/svg"
																fill="none"
																viewBox="0 0 24 24"
																stroke="currentColor"
																aria-hidden="true"
															>
																<path
																	stroke-linecap="round"
																	stroke-linejoin="round"
																	stroke-width="2"
																	d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
																/>
															</svg>
															<span class="ml-4">Profesionalna orijentacija</span>
														</a>
													</li>
													<li class="flow-root">
														<a
															href="/kategorija/komunikacija"
															class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
														>
															<!-- Heroicon name: outline/user-group -->
															<svg
																class="flex-shrink-0 h-6 w-6 text-gray-400"
																xmlns="http://www.w3.org/2000/svg"
																fill="none"
																viewBox="0 0 24 24"
																stroke="currentColor"
																aria-hidden="true"
															>
																<path
																	stroke-linecap="round"
																	stroke-linejoin="round"
																	stroke-width="2"
																	d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
																/>
															</svg>
															<span class="ml-4">Komunikacija</span>
														</a>
													</li>
												</ul>
											</div>
										</nav>
										<div class="bg-gray-50 px-4 py-8 sm:py-12 sm:px-6 lg:px-8 xl:pl-12">
											<div>
												<h3 class="text-sm font-medium tracking-wide text-gray-500 uppercase">Zadnje objave</h3>
												<ul role="list" class="mt-6 space-y-6">
													<li v-for="poslovni in $static.poslovni.edges" :key="poslovni.node.id" class="flow-root">
														<a href="#" class="-m-3 p-3 flex rounded-lg hover:bg-gray-100">
															<div class="hidden sm:block flex-shrink-0">
																<g-image class="w-32 h-20 object-cover rounded-md" :src="require(`!!assets-loader!@img/${poslovni.node.image}`)" alt="" />
															</div>
															<div class="w-0 flex-1 sm:ml-8">
																<h4 class="text-base font-medium text-gray-900 truncate">
																	{{ lifestyle.node.title }}
																</h4>
																<p class="mt-1 text-sm text-gray-500">{{ poslovni.node.excerpt }}</p>
															</div>
														</a>
													</li>
												</ul>
											</div>
											<div class="mt-6 text-sm font-medium">
												<a href="/poslovni-kutak" class="text-indigo-600 hover:text-indigo-500">
													Pogledaj sve
													<span aria-hidden="true">&rarr;</span></a
												>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div x-description="Flyout menu, show/hide based on flyout menu state." x-on:click.away="flyoutMenuOpen = false" x-data="{ flyoutMenuOpen: false }">
							<!-- Item active: "text-gray-900", Item inactive: "text-gray-500" -->
							<button
								type="button"
								x-on:click="flyoutMenuOpen = !flyoutMenuOpen"
								class="
									text-gray-500
									group
									bg-white
									rounded-md
									inline-flex
									items-center
									text-base
									font-medium
									hover:text-gray-900
									focus:outline-none
									focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
								"
								aria-expanded="false"
							>
								<span>Društvena odgovornost</span>
							</button>

							<div
								x-show="flyoutMenuOpen"
								x-transition:enter="transition ease-out duration-200"
								x-transition:enter-start="opacity-0 translate-y-1"
								x-transition:enter-end="opacity-100 translate-y-0"
								x-transition:leave="transition ease-in duration-150"
								x-transition:leave-start="opacity-100 translate-y-0"
								x-transition:leave-end="opacity-0 translate-y-1"
							>
								<div class="hidden md:block absolute z-10 top-full inset-x-0 transform shadow-lg">
									<div class="absolute inset-0 flex">
										<div class="bg-white w-1/2"></div>
										<div class="bg-gray-50 w-1/2"></div>
									</div>
									<div class="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
										<nav class="grid gap-y-10 px-4 py-8 bg-white sm:grid-cols-2 sm:gap-x-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-12">
											<div>
												<ul role="list" class="mt-5 space-y-6">
													<li class="flow-root">
														<a href="/kategorija/budi-human" class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">
															<!-- Heroicon name: outline/information-circle -->
															<svg
																class="flex-shrink-0 h-6 w-6 text-gray-400"
																xmlns="http://www.w3.org/2000/svg"
																fill="none"
																viewBox="0 0 24 24"
																stroke="currentColor"
																aria-hidden="true"
															>
																<path
																	stroke-linecap="round"
																	stroke-linejoin="round"
																	stroke-width="2"
																	d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
																/>
															</svg>
															<span class="ml-4">Budi human</span>
														</a>
													</li>

													<li class="flow-root">
														<a
															href="/kategorija/podeli-obrok"
															class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
														>
															<!-- Heroicon name: outline/office-building -->
															<svg
																class="flex-shrink-0 h-6 w-6 text-gray-400"
																xmlns="http://www.w3.org/2000/svg"
																fill="none"
																viewBox="0 0 24 24"
																stroke="currentColor"
																aria-hidden="true"
															>
																<path
																	stroke-linecap="round"
																	stroke-linejoin="round"
																	stroke-width="2"
																	d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
																/>
															</svg>
															<span class="ml-4">Podeli obrok</span>
														</a>
													</li>

													<li class="flow-root">
														<a
															href="/kategorija/akcije-prilozi"
															class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
														>
															<!-- Heroicon name: outline/newspaper -->
															<svg
																class="flex-shrink-0 h-6 w-6 text-gray-400"
																xmlns="http://www.w3.org/2000/svg"
																fill="none"
																viewBox="0 0 24 24"
																stroke="currentColor"
																aria-hidden="true"
															>
																<path
																	stroke-linecap="round"
																	stroke-linejoin="round"
																	stroke-width="2"
																	d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
																/>
															</svg>
															<span class="ml-4">Akcije - prilozi</span>
														</a>
													</li>

													<li class="flow-root">
														<a href="/kategorija/humanizam" class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">
															<!-- Heroicon name: outline/briefcase -->
															<svg
																class="flex-shrink-0 h-6 w-6 text-gray-400"
																xmlns="http://www.w3.org/2000/svg"
																fill="none"
																viewBox="0 0 24 24"
																stroke="currentColor"
																aria-hidden="true"
															>
																<path
																	stroke-linecap="round"
																	stroke-linejoin="round"
																	stroke-width="2"
																	d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
																/>
															</svg>
															<span class="ml-4">Humanizam</span>
														</a>
													</li>

													<li class="flow-root">
														<a
															href="/kategorija/sirenje-drustvene-svesti"
															class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
														>
															<!-- Heroicon name: outline/shield-check -->
															<svg
																class="flex-shrink-0 h-6 w-6 text-gray-400"
																xmlns="http://www.w3.org/2000/svg"
																fill="none"
																viewBox="0 0 24 24"
																stroke="currentColor"
																aria-hidden="true"
															>
																<path
																	stroke-linecap="round"
																	stroke-linejoin="round"
																	stroke-width="2"
																	d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
																/>
															</svg>
															<span class="ml-4">Širenje društvene svesti</span>
														</a>
													</li>
												</ul>
											</div>
										</nav>
										<div class="bg-gray-50 px-4 py-8 sm:py-12 sm:px-6 lg:px-8 xl:pl-12">
											<div>
												<h3 class="text-sm font-medium tracking-wide text-gray-500 uppercase">Zadnje objave</h3>
												<ul role="list" class="mt-6 space-y-6">
													<li v-for="drustvena in $static.drustvena.edges" :key="drustvena.node.id" class="flow-root">
														<a href="#" class="-m-3 p-3 flex rounded-lg hover:bg-gray-100">
															<div class="hidden sm:block flex-shrink-0">
																<g-image class="w-32 h-20 object-cover rounded-md" :src="require(`!!assets-loader!@img/${drustvena.node.image}`)" alt="" />
															</div>
															<div class="w-0 flex-1 sm:ml-8">
																<h4 class="text-base font-medium text-gray-900 truncate">
																	{{ drustvena.node.title }}
																</h4>
																<p class="mt-1 text-sm text-gray-500">{{ drustvena.node.excerpt }}</p>
															</div>
														</a>
													</li>
												</ul>
											</div>
											<div class="mt-6 text-sm font-medium">
												<a href="/drustvena-odgovornost" class="text-indigo-600 hover:text-indigo-500">
													Pogledaj sve
													<span aria-hidden="true">&rarr;</span></a
												>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</nav>
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
			x-description="Mobile menu, show/hide based on mobile menu state."
			x-show="mobileMenuOpen"
			x-transition:enter="duration-150 ease-out"
			x-transition:enter-start="opacity-0 scale-95"
			x-transition:enter-end="opacity-100 scale-100"
			x-transition:leave="duration-100 ease-in"
			x-transition:leave-start="opacity-100 scale-100"
			x-transition:leave-end="opacity-0 scale-95"
			class="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
		>
			<div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
				<div class="pt-5 pb-6 px-5 sm:pb-8">
					<div class="flex items-center justify-between">
						<div>
							<img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
						</div>
						<div class="-mr-2">
							<button
								x-on:click="mobileMenuOpen = false"
								type="button"
								class="
									bg-white
									rounded-md
									p-2
									inline-flex
									items-center
									justify-center
									text-gray-400
									hover:text-gray-500
									hover:bg-gray-100
									focus:outline-none
									focus:ring-2 focus:ring-inset focus:ring-indigo-500
								"
							>
								<span class="sr-only">Close menu</span>
								<!-- Heroicon name: outline/x -->
								<svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
								</svg>
							</button>
						</div>
					</div>
					<div class="mt-6 sm:mt-8">
						<div class="relative bg-white">
							<div class="max-w-7xl mx-auto px-8">
								<div class="grid grid-cols-1 gap-y-10 gap-x-6">
									<div v-for="tag in categories">
										<div>
										<p id="mobile-featured-heading-0" class="font-medium text-gray-900">{{tag.title}}</p>
										<ul role="list" aria-labelledby="mobile-featured-heading-0" class="mt-6 space-y-6">
											<li v-for="(zdravlje, index) in tag.kategorije" class="flex">
												<g-link :to="zdravlje.path" class="text-gray-700"> {{ zdravlje.name }} </g-link>
											</li>
										</ul>
										</div>
									</div>
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
 ishrana:  allPost (sortBy: "created", filter:{category: {eq: "ishrana"}}, limit: 2) {
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

zdravlje:  allPost (sortBy: "created", filter:{category: {eq: "zdravlje"}}, limit: 2) {
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

mentalno:  allPost (sortBy: "created", filter:{category: {eq: "mentalno-zdravlje"}}, limit: 2) {
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
roditeljstvo:  allPost (sortBy: "created", filter:{category: {eq: "roditeljstvo"}}, limit: 2) {
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
lifestyle:  allPost (sortBy: "created", filter:{category: {eq: "lifestyle"}}, limit: 2) {
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
finasijski:  allPost (sortBy: "created", filter:{category: {eq: "finasijski-savetnik"}}, limit: 2) {
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
poslovni:  allPost (sortBy: "created", filter:{category: {eq: "poslovni-kutak"}}, limit: 2) {
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
drustvena:  allPost (sortBy: "created", filter:{category: {eq: "drustvena-odgovornost"}}, limit: 2) {
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

}
</static-query>

<script>
const categories = [
	{
		title: "Zdravlje",
		kategorije: [
			{ name: "Kardiovaskularini", path: "/kategorija/kardiovaskularni" },
			{ name: "Rak", path: "/kategorija/rak" },
			{ name: "Dijabetes", path: "/kategorija/dijabetes" },
			{ name: "Osteoporoza", path: "/kategoirja/osteoporoza" },
			{ name: "Gastrodigestivni trakt", path: "/kategorija/gastrodigestivni-trakt" },
			{ name: "Zdravlje žena", path: "/kategorija/zdravlje-zena" },
			{ name: "Ishrana po bolestima", path: "/kategorija/ishrana-po-bolestima" },
			{ name: "Detoks", path: "/kategorija/detoks" },
			{ name: "Suplementi", path: "/kategorija/suplementi" },
		],
	},
	{
				title: "Ishrana",

		kategorije: [
			{ name: "Trendovi u ishrani", path: "/kategorija/trendovi-u-ishrani" },
			{ name: "Super hrana", path: "/kategorija/super-hrana" },
			{ name: "Zdrava hrana", path: "/kategorija/zdrava-hrana" },
			{ name: "Recepti", path: "/kategorija/recepti" },
		],
	},

	{
				title: "Mentalno zdravlje",

		kategorije: [
			{ name: "Lični razvoj", path: "/kategorija/licni-razvoj" },
			{ name: "Duhovnost", path: "/kategorija/duhovnost" },
			{ name: "Intimni odnosi", path: "/kategorija/intimni-odnosi" },
			{ name: "Ljubav", path: "/kategorija/ljubav" },
			{ name: "Prijateljstvo", path: "/kategorija/prijateljstvo" },
			{ name: "Coaching", path: "/kategorija/coaching" },
		],
	},

	{
				title: "Roditeljstvo",

		kategorije: [
			{ name: "Trudnoća", path: "/kategorija/trudnoca" },
			{ name: "Materinstvo", path: "/kategorija/materinstvo" },
			{ name: "Beba", path: "/kategorija/beba" },
			{ name: "Mlađa deca", path: "/kategorija/mladja-deca" },
			{ name: "Tinejdžeri", path: "/kategorija/tinejdzeri" },
		],
	},

	{		title: "Lifestyle",

		kategorije: [
			{ name: "Putovanja", path: "/kategorija/putovanja" },
			{ name: "Dom", path: "/kategorija/dom" },
			{ name: "Kucni budzet", path: "/kategorija/kucni-budzet" },
			{ name: "Praznici", path: "/kategorija/praznici" },
			{ name: "Lepota", path: "/kategorija/lepota" },
			{ name: "Fitness", path: "/kategorija/fitness" },
			{ name: "Pokloni", path: "/kategorija/pokloni" },
		],
	},
	{
				title: "Finasijski savetnik",

		kategorije: [
			{ name: "Kucni budzet", path: "/kategorija/kucni-budzet" },
			{ name: "Investicioni fondovi", path: "/kategorija/investicioni-fondovi" },
			{ name: "Stednja", path: "/kategorija/stednja" },
			{ name: "Bitkoin", path: "/kategorija/bitkoin" },
			{ name: "Nekretnine", path: "/kategorija/nekretnine" },
		],
	},
	{
				title: "Poslovni kutak",

		kategorije: [
			{ name: "Biznis coaching", path: "/kategorija/biznis-coaching" },
			{ name: "Digitalni marketing", path: "/kategorija/digitalni-marketing" },
			{ name: "Dizajn", path: "/kategorija/dizajn" },
			{ name: "Zaposlenje", path: "/kategorija/zaposlenje" },
			{ name: "Gradjenje karijere", path: "/kategorija/gradjenje-karijere" },
			{
				name: "Profesionalna orijentacija",
				path: "/kategorija/profesionalna-orijentacija",
			},
		],
	},

	{
						title: "Društvena odgovornost",

		kategorije: [
			{ name: "Budi Human", path: "/kategorija/budi-human" },
			{ name: "Podeli obrko", path: "/kategorija/podeli-obrok" },
			{ name: "Akcije - prilozi", path: "/kategorija/akcije-prilozi" },
			{ name: "Humanizam", path: "/kategorije/humanizam" },
			{ name: "Sirenje drustvene svesti", path: "/kategorija/sirenje-drustvene-svest" },
		],
	},
];
export default {
	name: "Navigation",

	data() {
		return {
			categories,
		};
	},
};
</script>

<style scoped>
</style>
