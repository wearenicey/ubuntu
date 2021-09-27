<template>
	<Layout>
		<div class="pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
			<div class="mx-auto max-w-7xl lg:px-8">
				<div class="lg:grid lg:grid-cols-2 lg:gap-8">
					<div class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
						<div class="lg:py-24">
							<a href="#" class="inline-flex items-center text-white bg-black rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200">
								<span class="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full">We're hiring</span>
								<span class="ml-4 text-sm">Visit our careers page</span>
								<!-- Heroicon name: solid/chevron-right -->
								<svg class="ml-2 w-5 h-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
									<path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
								</svg>
							</a>
							<h1 class="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
								<span class="block">A better way to</span>
								<span class="pb-3 block bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-cyan-400 sm:pb-5">ship web apps</span>
							</h1>
							<p class="text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat.</p>
							<div class="mt-10 sm:mt-12">
								<form action="#" class="sm:max-w-xl sm:mx-auto lg:mx-0">
									<div class="sm:flex">
										<div class="min-w-0 flex-1">
											<label for="email" class="sr-only">Email address</label>
											<input
												id="email"
												type="email"
												placeholder="Enter your email"
												class="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
											/>
										</div>
										<div class="mt-3 sm:mt-0 sm:ml-3">
											<button
												type="submit"
												class="
													block
													w-full
													py-3
													px-4
													rounded-md
													shadow
													bg-gradient-to-r
													from-teal-500
													to-cyan-600
													text-white
													font-medium
													hover:from-teal-600 hover:to-cyan-700
													focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900
												"
											>
												Start free trial
											</button>
										</div>
									</div>
									<p class="mt-3 text-sm text-gray-300 sm:mt-4">Start your free 14-day trial, no credit card necessary. By providing your email, you agree to our <a href="#" class="font-medium text-white">terms or service</a>.</p>
								</form>
							</div>
						</div>
					</div>
					<div class="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
						<div class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
							<!-- Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ -->
							<img class="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none" src="https://tailwindui.com/img/component-images/cloud-illustration-teal-cyan.svg" alt="" />
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Feature section with screenshot -->
		<div class="relative bg-gray-50 pt-16 sm:pt-24 lg:pt-32">
			<div class="mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
				<div>
					<h2 class="text-base font-semibold tracking-wider text-cyan-600 uppercase">Serverless</h2>
					<p class="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">No server? No problem.</p>
					<p class="mt-5 max-w-prose mx-auto text-xl text-gray-500">Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend condimentum id viverra nulla.</p>
				</div>
				<div class="mt-12 -mb-10 sm:-mb-24 lg:-mb-80">
					<img class="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5" src="https://tailwindui.com/img/component-images/green-project-app-screenshot.jpg" alt="" />
				</div>
			</div>
		</div>

		<!-- Feature section with grid -->
		<div class="relative bg-white py-16 sm:py-24 lg:py-32">
			<div class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
				<h2 class="text-base font-semibold tracking-wider text-cyan-600 uppercase">Deploy faster</h2>
				<p class="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">Everything you need to deploy your app</p>
				<p class="mt-5 max-w-prose mx-auto text-xl text-gray-500">Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend condimentum id viverra nulla.</p>
				<div class="mt-12">
					<div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
						<div class="pt-6">
							<div class="flow-root bg-gray-50 rounded-lg px-6 pb-8">
								<div class="-mt-6">
									<div>
										<span class="inline-flex items-center justify-center p-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-md shadow-lg">
											<!-- Heroicon name: outline/cloud-upload -->
											<svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
												<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
											</svg>
										</span>
									</div>
									<h3 class="mt-8 text-lg font-medium text-gray-900 tracking-tight">Push to Deploy</h3>
									<p class="mt-5 text-base text-gray-500">Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi vitae lobortis.</p>
								</div>
							</div>
						</div>

						<div class="pt-6">
							<div class="flow-root bg-gray-50 rounded-lg px-6 pb-8">
								<div class="-mt-6">
									<div>
										<span class="inline-flex items-center justify-center p-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-md shadow-lg">
											<!-- Heroicon name: outline/lock-closed -->
											<svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
												<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
											</svg>
										</span>
									</div>
									<h3 class="mt-8 text-lg font-medium text-gray-900 tracking-tight">SSL Certificates</h3>
									<p class="mt-5 text-base text-gray-500">Qui aut temporibus nesciunt vitae dicta repellat sit dolores pariatur. Temporibus qui illum aut.</p>
								</div>
							</div>
						</div>

						<div class="pt-6">
							<div class="flow-root bg-gray-50 rounded-lg px-6 pb-8">
								<div class="-mt-6">
									<div>
										<span class="inline-flex items-center justify-center p-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-md shadow-lg">
											<!-- Heroicon name: outline/refresh -->
											<svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
												<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
											</svg>
										</span>
									</div>
									<h3 class="mt-8 text-lg font-medium text-gray-900 tracking-tight">Simple Queues</h3>
									<p class="mt-5 text-base text-gray-500">Rerum quas incidunt deleniti quaerat suscipit mollitia. Amet repellendus ut odit dolores qui.</p>
								</div>
							</div>
						</div>

						<div class="pt-6">
							<div class="flow-root bg-gray-50 rounded-lg px-6 pb-8">
								<div class="-mt-6">
									<div>
										<span class="inline-flex items-center justify-center p-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-md shadow-lg">
											<!-- Heroicon name: outline/shield-check -->
											<svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
												/>
											</svg>
										</span>
									</div>
									<h3 class="mt-8 text-lg font-medium text-gray-900 tracking-tight">Advanced Security</h3>
									<p class="mt-5 text-base text-gray-500">Ullam laboriosam est voluptatem maxime ut mollitia commodi. Et dignissimos suscipit perspiciatis.</p>
								</div>
							</div>
						</div>

						<div class="pt-6">
							<div class="flow-root bg-gray-50 rounded-lg px-6 pb-8">
								<div class="-mt-6">
									<div>
										<span class="inline-flex items-center justify-center p-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-md shadow-lg">
											<!-- Heroicon name: outline/cog -->
											<svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
												/>
												<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
											</svg>
										</span>
									</div>
									<h3 class="mt-8 text-lg font-medium text-gray-900 tracking-tight">Powerful API</h3>
									<p class="mt-5 text-base text-gray-500">Ab a facere voluptatem in quia corrupti veritatis aliquam. Veritatis labore quaerat ipsum quaerat id.</p>
								</div>
							</div>
						</div>

						<div class="pt-6">
							<div class="flow-root bg-gray-50 rounded-lg px-6 pb-8">
								<div class="-mt-6">
									<div>
										<span class="inline-flex items-center justify-center p-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-md shadow-lg">
											<!-- Heroicon name: outline/server -->
											<svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
												/>
											</svg>
										</span>
									</div>
									<h3 class="mt-8 text-lg font-medium text-gray-900 tracking-tight">Database Backups</h3>
									<p class="mt-5 text-base text-gray-500">Quia qui et est officia cupiditate qui consectetur. Ratione similique et impedit ea ipsum et.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Testimonial section -->
		<div class="pb-16 bg-gradient-to-r from-teal-500 to-cyan-600 lg:pb-0 lg:z-10 lg:relative">
			<div class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8">
				<div class="relative lg:-my-8">
					<div aria-hidden="true" class="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden"></div>
					<div class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">
						<div class="aspect-w-10 aspect-h-6 rounded-xl shadow-xl overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
							<img class="object-cover lg:h-full lg:w-full" src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="" />
						</div>
					</div>
				</div>
				<div class="mt-12 lg:m-0 lg:col-span-2 lg:pl-8">
					<div class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">
						<blockquote>
							<div>
								<svg class="h-12 w-12 text-white opacity-25" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
									<path
										d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"
									/>
								</svg>
								<p class="mt-6 text-2xl font-medium text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.</p>
							</div>
							<footer class="mt-6">
								<p class="text-base font-medium text-white">Judith Black</p>
								<p class="text-base font-medium text-cyan-100">CEO at PureInsights</p>
							</footer>
						</blockquote>
					</div>
				</div>
			</div>
		</div>

		<!-- Blog section -->
		<div class="relative bg-gray-50 py-16 sm:py-24 lg:py-32">
			<div>
				<CardItem />
			</div>
		</div>

		<!-- CTA Section -->
		<div class="relative bg-gray-900">
			<div class="relative h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
				<img class="w-full h-full object-cover" src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&sat=-100" alt="" />
				<div aria-hidden="true" class="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-600 mix-blend-multiply"></div>
			</div>
			<div class="relative mx-auto max-w-md px-4 py-12 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32">
				<div class="md:ml-auto md:w-1/2 md:pl-10">
					<h2 class="text-base font-semibold uppercase tracking-wider text-gray-300">Award winning support</h2>
					<p class="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">We’re here to help</p>
					<p class="mt-3 text-lg text-gray-300">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat quisque ut interdum tincidunt duis.
					</p>
					<div class="mt-8">
						<div class="inline-flex rounded-md shadow">
							<a href="#" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50">
								Visit the help center
								<!-- Heroicon name: solid/external-link -->
								<svg class="-mr-1 ml-3 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
									<path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
									<path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
								</svg>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="bg-gray-100" id="scroll">
			<div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
				<div class="relative bg-white shadow-xl">
					<h2 class="sr-only">Contact us</h2>

					<div class="grid grid-cols-1 lg:grid-cols-3">
						<!-- Contact information -->
						<div class="relative overflow-hidden py-10 px-6 bg-indigo-700 sm:px-10 xl:p-12">
							<div class="absolute inset-0 pointer-events-none sm:hidden" aria-hidden="true">
								<svg class="absolute inset-0 w-full h-full" width="343" height="388" viewBox="0 0 343 388" fill="none" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
									<path d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z" fill="url(#linear1)" fill-opacity=".1" />
									<defs>
										<linearGradient id="linear1" x1="254.553" y1="107.554" x2="961.66" y2="814.66" gradientUnits="userSpaceOnUse">
											<stop stop-color="#fff"></stop>
											<stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
										</linearGradient>
									</defs>
								</svg>
							</div>
							<div class="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden" aria-hidden="true">
								<svg class="absolute inset-0 w-full h-full" width="359" height="339" viewBox="0 0 359 339" fill="none" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
									<path d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z" fill="url(#linear2)" fill-opacity=".1" />
									<defs>
										<linearGradient id="linear2" x1="192.553" y1="28.553" x2="899.66" y2="735.66" gradientUnits="userSpaceOnUse">
											<stop stop-color="#fff"></stop>
											<stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
										</linearGradient>
									</defs>
								</svg>
							</div>
							<div class="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block" aria-hidden="true">
								<svg class="absolute inset-0 w-full h-full" width="160" height="678" viewBox="0 0 160 678" fill="none" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
									<path d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z" fill="url(#linear3)" fill-opacity=".1" />
									<defs>
										<linearGradient id="linear3" x1="192.553" y1="325.553" x2="899.66" y2="1032.66" gradientUnits="userSpaceOnUse">
											<stop stop-color="#fff"></stop>
											<stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
										</linearGradient>
									</defs>
								</svg>
							</div>
							<h3 class="text-lg font-medium text-white">Contact information</h3>
							<p class="mt-6 text-base text-indigo-50 max-w-3xl">Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.</p>
							<dl class="mt-8 space-y-6">
								<dt><span class="sr-only">Phone number</span></dt>
								<dd class="flex text-base text-indigo-50">
									<!-- Heroicon name: outline/phone -->
									<svg class="flex-shrink-0 w-6 h-6 text-indigo-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
										/>
									</svg>
									<span class="ml-3">+1 (555) 123-4567</span>
								</dd>
								<dt><span class="sr-only">Email</span></dt>
								<dd class="flex text-base text-indigo-50">
									<!-- Heroicon name: outline/mail -->
									<svg class="flex-shrink-0 w-6 h-6 text-indigo-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
									</svg>
									<span class="ml-3">support@workcation.com</span>
								</dd>
							</dl>
							<ul role="list" class="mt-8 flex space-x-12">
								<li>
									<a class="text-indigo-200 hover:text-indigo-100" href="#">
										<span class="sr-only">Facebook</span>
										<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" aria-hidden="true">
											<path
												d="M22.258 1H2.242C1.556 1 1 1.556 1 2.242v20.016c0 .686.556 1.242 1.242 1.242h10.776v-8.713h-2.932V11.39h2.932V8.887c0-2.906 1.775-4.489 4.367-4.489 1.242 0 2.31.093 2.62.134v3.037l-1.797.001c-1.41 0-1.683.67-1.683 1.653v2.168h3.362l-.438 3.396h-2.924V23.5h5.733c.686 0 1.242-.556 1.242-1.242V2.242C23.5 1.556 22.944 1 22.258 1"
												fill="currentColor"
											/>
										</svg>
									</a>
								</li>
								<li>
									<a class="text-indigo-200 hover:text-indigo-100" href="#">
										<span class="sr-only">GitHub</span>
										<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" aria-hidden="true">
											<path
												d="M11.999 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.386.6.11.819-.26.819-.578 0-.284-.01-1.04-.017-2.04-3.337.724-4.042-1.61-4.042-1.61-.545-1.386-1.332-1.755-1.332-1.755-1.09-.744.082-.73.082-.73 1.205.086 1.838 1.238 1.838 1.238 1.07 1.833 2.81 1.304 3.493.996.109-.775.419-1.303.762-1.603C7.145 17 4.343 15.97 4.343 11.373c0-1.31.468-2.382 1.236-3.22-.124-.304-.536-1.524.118-3.176 0 0 1.007-.323 3.3 1.23.956-.266 1.983-.4 3.003-.404 1.02.005 2.046.138 3.005.404 2.29-1.553 3.296-1.23 3.296-1.23.655 1.652.243 2.872.12 3.176.77.838 1.233 1.91 1.233 3.22 0 4.61-2.806 5.624-5.478 5.921.43.37.814 1.103.814 2.223 0 1.603-.015 2.898-.015 3.291 0 .321.217.695.825.578C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12.001-12"
												fill="currentColor"
											/>
										</svg>
									</a>
								</li>
								<li>
									<a class="text-indigo-200 hover:text-indigo-100" href="#">
										<span class="sr-only">Twitter</span>
										<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" aria-hidden="true">
											<path
												d="M7.548 22.501c9.056 0 14.01-7.503 14.01-14.01 0-.213 0-.425-.015-.636A10.02 10.02 0 0024 5.305a9.828 9.828 0 01-2.828.776 4.94 4.94 0 002.165-2.724 9.867 9.867 0 01-3.127 1.195 4.929 4.929 0 00-8.391 4.491A13.98 13.98 0 011.67 3.9a4.928 4.928 0 001.525 6.573A4.887 4.887 0 01.96 9.855v.063a4.926 4.926 0 003.95 4.827 4.917 4.917 0 01-2.223.084 4.93 4.93 0 004.6 3.42A9.88 9.88 0 010 20.289a13.941 13.941 0 007.548 2.209"
												fill="currentColor"
											/>
										</svg>
									</a>
								</li>
							</ul>
						</div>
						<div class="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
							<h3 class="text-lg font-medium text-gray-900">Send us a message</h3>
							<form
								class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
								form
								id="sign-up"
								name="sign-up"
								method="POST"
								netlify-honeypot="bot-field"
								data-netlify="true"
								novalidate
								enctype="multipart/form-data"
								@submit.prevent="submit"
							>
								<div>
									<input type="hidden" name="form-name" value="contact" />
									<p hidden>
										<label> Don’t fill this out: <input name="bot-field" /> </label>
									</p>
									<label for="name" class="block text-sm font-medium text-gray-900">First name</label>
									<div class="mt-1">
										<input
											:class="{ 'form-group--error border border-red-500': $v.formData.name.$error }"
											class="form-group py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
											type="text"
											name="name"
											id="name"
											:invalid="$v.formData.name.$error"
											v-model="$v.formData.name.$model"
										/>
										<div class="p-5">
											<p class="error text-red-500 text-xs italic" v-if="$v.formData.name.$error">Name is required</p>
										</div>
									</div>
								</div>
								<div>
									<label for="last" class="block text-sm font-medium text-gray-900">Last name</label>
									<div class="mt-1">
										<input
											:class="{ 'form-group--error border border-red-500': $v.formData.last.$error }"
											type="text"
											name="last"
											id="last"
											class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
											:invalid="$v.formData.last.$error"
											v-model="$v.formData.last.$model"
										/>
										<div class="p-5">
											<p class="error text-red-500 text-xs italic" v-if="$v.formData.last.$error">Last Name is required</p>
										</div>
									</div>
								</div>
								<div>
									<label for="email" class="block text-sm font-medium text-gray-900">Email</label>
									<div class="mt-1">
										<input
											:class="{ 'form-group--error border border-red-500': $v.formData.email.$error }"
											id="email"
											name="email"
											type="email"
											class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
											:invalid="$v.formData.email.$error"
											v-model="$v.formData.email.$model"
										/>
										<div class="p-5">
											<p class="error text-red-500 text-xs italic" v-if="$v.formData.email.$error">Unesite isrpavnu email adresu</p>
										</div>
									</div>
								</div>
								<div>
									<div class="flex justify-between">
										<label for="phone" class="block text-sm font-medium text-gray-900">Phone</label>
										<span id="phone-optional" class="text-sm text-gray-500">Optional</span>
									</div>
									<div class="mt-1">
										<input
											v-model="formData.phone"
											type="text"
											name="phone"
											id="phone"
											autocomplete="tel"
											class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
											aria-describedby="phone-optional"
										/>
									</div>
								</div>
								<input type="hidden" id="city" name="city" v-model="formData.city" />

								<div class="sm:col-span-2">
									<label for="subject" class="block text-sm font-medium text-gray-900">Subject</label>
									<div class="mt-1">
										<input
											:class="{ 'form-group--error border border-red-500': $v.formData.subject.$error }"
											type="text"
											name="subject"
											id="subject"
											class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
											:invalid="$v.formData.subject.$error"
											v-model="$v.formData.subject.$model"
										/>
										<div class="p-5">
											<p class="error text-red-500 text-xs italic" v-if="$v.formData.subject.$error">Unesite naslov</p>
										</div>
									</div>
								</div>
								<div class="sm:col-span-2">
									<div class="flex justify-between">
										<label for="message" class="block text-sm font-medium text-gray-900">CV</label>
									</div>
									<div class="mt-1">
										<div class="max-w-lg flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
											<div class="space-y-1 text-center">
												<svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
													<path
														d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
														stroke-width="2"
														stroke-linecap="round"
														stroke-linejoin="round"
													/>
												</svg>
												<div class="flex text-sm text-gray-600">
													<label
														for="file-upload"
														class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
													>
														<span>Upload a file</span>
														<input id="files" type="file" name="files" @change="processFile($event)" class="sr-only" />
													</label>
													<p class="pl-1">or drag and drop</p>
												</div>
												<p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
											</div>
										</div>
									</div>
								</div>
								<div class="sm:col-span-2 flex flex-wrap content-center sm:flex sm:justify-end p-5">
									<div class="p-5">
										<p class="typo__p" v-if="formData.submitStatus === 'OK'">Thanks for your submission!</p>
										<p class="typo__p" v-if="formData.submitStatus === 'ERROR'">Please fill the form correctly.</p>
										<p class="typo__p" v-if="formData.submitStatus === 'PENDING'">Sending...</p>
									</div>
									<div>
										<button
											:disabled="formData.submitStatus === 'PENDING'"
											type="submit"
											class="
												mt-2
												w-full
												inline-flex
												items-center
												justify-center
												px-6
												py-3
												border border-transparent
												rounded-md
												shadow-sm
												text-base
												font-medium
												text-white
												bg-indigo-600
												hover:bg-indigo-700
												focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
												sm:w-auto
											"
										>
											Submit
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</Layout>
</template>
<script>
import CardItem from "../components/CardItem.vue";
import { required, email } from "vuelidate/lib/validators";

export default {
	metaInfo: {
		title: "Karijera | Ubuntu ",
	},

	data() {
		return {
			formData: {
				name: "",
				last: "",
				email: "",
				submitStatus: null,
				phone: "",
				files: {},
				subject: "",
			},
		};
	},

	validations: {
		formData: {
			name: {
				required,
			},
			last: {
				required,
			},
			email: {
				required,
				email,
			},
			files: {
				required,
			},
			subject: {
				required,
			},
		},
	},

	methods: {
		processFile() {
			this.formData.files = event.target.files;
		},

		encode(data) {
			const formData = new FormData();
			for (const key of Object.keys(data)) {
				if (key === "files") {
					formData.append(key, data[key][0]);
				} else {
					formData.append(key, data[key]);
				}
			}
			return formData;
		},

		submit(e) {
			fetch("/", {
				method: "POST",
				body: this.encode({
					"form-name": e.target.getAttribute("name"),
					...this.formData,
				}),
			})
				.then(
					() => (this.formData.submitStatus = "PENDING"),

					setTimeout(() => {
						this.formData.submitStatus = "OK";
					}, 500)
				)
				.catch((error) => alert(error));
		},
	},
	components: {
		CardItem,
	},
};
</script>
