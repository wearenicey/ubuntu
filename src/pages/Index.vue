<template>
	<Layout>
			<!-- Hero section -->
			<div class="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-48">
				<div class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
					<div>
						<div>
							<img class="h-11 w-auto" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=rose&shade=500" alt="Workflow" />
						</div>
						<div class="mt-20">
							<div>
								<a href="#" class="inline-flex space-x-4">
									<span class="rounded bg-rose-50 px-2.5 py-1 text-xs font-semibold text-rose-500 tracking-wide uppercase"> What's new </span>
									<span class="inline-flex items-center text-sm font-medium text-red-500 space-x-1">
										<span>Just shipped version 0.1.0</span>
										<!-- Heroicon name: solid/chevron-right -->
										<svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
											<path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
										</svg>
									</span>
								</a>
							</div>
							<div class="mt-6 sm:max-w-xl">
								<h1 class="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">Issue management for growing teams</h1>
								<p class="mt-6 text-xl text-gray-500">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.</p>
							</div>
							<form action="#" class="mt-12 sm:max-w-lg sm:w-full sm:flex">
								<div class="min-w-0 flex-1">
									<label for="hero-email" class="sr-only">Email address</label>
									<input
										id="hero-email"
										type="email"
										class="block w-full border border-gray-300 rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-red-500 focus:ring-red-500"
										placeholder="Enter your email"
									/>
								</div>
								<div class="mt-4 sm:mt-0 sm:ml-3">
									<button
										type="submit"
										class="block w-full rounded-md border border-transparent px-5 py-3 bg-red-500 text-base font-medium text-white shadow hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:px-10"
									>
										Notify me
									</button>
								</div>
							</form>
							<div class="mt-6">
								<div class="inline-flex items-center divide-x divide-gray-300">
									<div class="flex-shrink-0 flex pr-5">
										<!-- Heroicon name: solid/star -->
										<svg class="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
											<path
												d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
											/>
										</svg>
										<!-- Heroicon name: solid/star -->
										<svg class="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
											<path
												d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
											/>
										</svg>
										<!-- Heroicon name: solid/star -->
										<svg class="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
											<path
												d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
											/>
										</svg>
										<!-- Heroicon name: solid/star -->
										<svg class="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
											<path
												d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
											/>
										</svg>
										<!-- Heroicon name: solid/star -->
										<svg class="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
											<path
												d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
											/>
										</svg>
									</div>
									<div class="min-w-0 flex-1 pl-5 py-1 text-sm text-gray-500 sm:py-3">
										<span class="font-medium text-gray-900">Rated 5 stars</span>
										by over
										<span class="font-medium text-red-500">500 beta users</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="sm:mx-auto sm:max-w-3xl sm:px-6">
					<div class="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
						<div class="hidden sm:block">
							<div class="absolute inset-y-0 left-1/2 w-screen bg-gray-50 rounded-l-3xl lg:left-80 lg:right-0 lg:w-full"></div>
							<svg class="absolute top-8 right-1/2 -mr-3 lg:m-0 lg:left-0" width="404" height="392" fill="none" viewBox="0 0 404 392">
								<defs>
									<pattern id="837c3e70-6c3a-44e6-8854-cc48c737b659" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
										<rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
									</pattern>
								</defs>
								<rect width="404" height="392" fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)" />
							</svg>
						</div>
						<div class="relative pl-4 -mr-40 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full lg:pl-12">
							<img class="w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none" src="https://tailwindui.com/img/component-images/task-app-rose.jpg" alt="" />
						</div>
					</div>
				</div>
			</div>

			<!-- Testimonial/stats section -->
			<div class="relative mt-20">
				<div class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
					<div class="relative sm:py-16 lg:py-0">
						<div aria-hidden="true" class="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
							<div class="absolute inset-y-0 right-1/2 w-full bg-gray-50 rounded-r-3xl lg:right-72"></div>
							<svg class="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12" width="404" height="392" fill="none" viewBox="0 0 404 392">
								<defs>
									<pattern id="02f20b47-fd69-4224-a62a-4c9de5c763f7" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
										<rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
									</pattern>
								</defs>
								<rect width="404" height="392" fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" />
							</svg>
						</div>
						<div class="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
							<!-- Testimonial card-->
							<div class="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
								<img
									class="absolute inset-0 h-full w-full object-cover"
									src="https://images.unsplash.com/photo-1521510895919-46920266ddb3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&fp-x=0.5&fp-y=0.6&fp-z=3&width=1440&height=1440&sat=-100"
									alt=""
								/>
								<div class="absolute inset-0 bg-red-500 mix-blend-multiply"></div>
								<div class="absolute inset-0 bg-gradient-to-t from-red-600 via-red-600 opacity-90"></div>
								<div class="relative px-8">
									<div>
										<img class="h-12" src="https://tailwindui.com/img/logos/workcation.svg?color=white" alt="Workcation" />
									</div>
									<blockquote class="mt-8">
										<div class="relative text-lg font-medium text-white md:flex-grow">
											<svg class="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-red-400" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
												<path
													d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"
												/>
											</svg>
											<p class="relative">Tincidunt integer commodo, cursus etiam aliquam neque, et. Consectetur pretium in volutpat, diam. Montes, magna cursus nulla feugiat dignissim id lobortis amet.</p>
										</div>

										<footer class="mt-4">
											<p class="text-base font-semibold text-red-200">Sarah Williams, CEO at Workcation</p>
										</footer>
									</blockquote>
								</div>
							</div>
						</div>
					</div>

					<div class="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
						<!-- Content area -->
						<div class="pt-12 sm:pt-16 lg:pt-20">
							<h2 class="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">On a mission to empower teams</h2>
							<div class="mt-6 text-gray-500 space-y-6">
								<p class="text-lg">
									Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique pellentesque. Blandit amet, sed aenean erat arcu morbi. Cursus faucibus nunc nisl netus morbi vel porttitor vitae ut.
									Amet vitae fames senectus vitae.
								</p>
								<p class="text-base leading-7">
									Sollicitudin tristique eros erat odio sed vitae, consequat turpis elementum. Lorem nibh vel, eget pretium arcu vitae. Eros eu viverra donec ut volutpat donec laoreet quam urna. Sollicitudin tristique eros erat odio sed
									vitae, consequat turpis elementum. Lorem nibh vel, eget pretium arcu vitae. Eros eu viverra donec ut volutpat donec laoreet quam urna.
								</p>
								<p class="text-base leading-7">
									Rhoncus nisl, libero egestas diam fermentum dui. At quis tincidunt vel ultricies. Vulputate aliquet velit faucibus semper. Pellentesque in venenatis vestibulum consectetur nibh id. In id ut tempus egestas. Enim sit aliquam
									nec, a. Morbi enim fermentum lacus in. Viverra.
								</p>
							</div>
						</div>

						<!-- Stats section -->
						<div class="mt-10">
							<dl class="grid grid-cols-2 gap-x-4 gap-y-8">
								<div class="border-t-2 border-gray-100 pt-6">
									<dt class="text-base font-medium text-gray-500">Founded</dt>
									<dd class="text-3xl font-extrabold tracking-tight text-gray-900">2021</dd>
								</div>

								<div class="border-t-2 border-gray-100 pt-6">
									<dt class="text-base font-medium text-gray-500">Employees</dt>
									<dd class="text-3xl font-extrabold tracking-tight text-gray-900">5</dd>
								</div>

								<div class="border-t-2 border-gray-100 pt-6">
									<dt class="text-base font-medium text-gray-500">Beta Users</dt>
									<dd class="text-3xl font-extrabold tracking-tight text-gray-900">521</dd>
								</div>

								<div class="border-t-2 border-gray-100 pt-6">
									<dt class="text-base font-medium text-gray-500">Raised</dt>
									<dd class="text-3xl font-extrabold tracking-tight text-gray-900">$25M</dd>
								</div>
							</dl>
							<div class="mt-10">
								<a href="#" class="text-base font-medium text-red-500"> Learn more about how we're changing the  </a>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Testimonial -->

			<section class="bg-indigo-800 container mx-auto my-12 rounded-2xl">
				<div class="max-w-7xl mx-auto md:grid md:grid-cols-2 md:px-6 lg:px-8 rounded-r-3xl">
					<div class="py-12 px-4 sm:px-6 md:flex md:flex-col md:py-16 md:pl-0 md:pr-10 md:border-r md:border-indigo-900 lg:pr-16">
						<div class="md:flex-shrink-0">
							<img class="h-12" src="https://tailwindui.com/img/logos/tuple-logo-indigo-300.svg" alt="Tuple" />
						</div>
						<blockquote class="mt-6 md:flex-grow md:flex md:flex-col">
							<div class="relative text-lg font-medium text-white md:flex-grow">
								<svg class="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-indigo-600" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
									<path
										d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"
									/>
								</svg>
								<p class="relative">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.</p>
							</div>
							<footer class="mt-8">
								<div class="flex items-start">
									<div class="flex-shrink-0 inline-flex rounded-full border-2 border-white">
										<img class="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
									</div>
									<div class="ml-4">
										<div class="text-base font-medium text-white">Judith Black</div>
										<div class="text-base font-medium text-indigo-200">CEO, Tuple</div>
									</div>
								</div>
							</footer>
						</blockquote>
					</div>
					<div class="py-12 px-4 border-t-2 border-indigo-900 sm:px-6 md:py-16 md:pr-0 md:pl-10 md:border-t-0 md:border-l lg:pl-16">
						<div class="md:flex-shrink-0">
							<img class="h-12" src="https://tailwindui.com/img/logos/workcation-logo-indigo-300.svg" alt="Workcation" />
						</div>
						<blockquote class="mt-6 md:flex-grow md:flex md:flex-col">
							<div class="relative text-lg font-medium text-white md:flex-grow">
								<svg class="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-indigo-600" fill="currentColor" viewBox="0 0 32 32">
									<path
										d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"
									/>
								</svg>
								<p class="relative">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis. Nemo expedita voluptas culpa sapiente alias molestiae.
								</p>
							</div>
							<footer class="mt-8">
								<div class="flex items-start">
									<div class="flex-shrink-0 inline-flex rounded-full border-2 border-white">
										<img class="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
									</div>
									<div class="ml-4">
										<div class="text-base font-medium text-white">Joseph Rodriguez</div>
										<div class="text-base font-medium text-indigo-200">CEO, Workcation</div>
									</div>
								</div>
							</footer>
						</blockquote>
					</div>
				</div>
			</section>

			<!-- End testimonial -->

			<!-- Logo cloud section -->
			<div class="mt-32">
				<div class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
					<div class="lg:grid lg:grid-cols-2 lg:gap-24 lg:items-center">
						<div>
							<h2 class="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">Backed by world-renowned investors</h2>
							<p class="mt-6 max-w-3xl text-lg leading-7 text-gray-500">
								Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique pellentesque. Blandit amet, sed aenean erat arcu morbi. Cursus faucibus nunc nisl netus morbi vel porttitor vitae ut.
								Amet vitae fames senectus vitae.
							</p>
							<div class="mt-6">
								<a href="#" class="text-base font-medium text-red-500"> Meet our investors and </a>
							</div>
						</div>
						<div class="mt-12 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
							<div class="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
								<img class="max-h-12" src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg" alt="Transistor" />
							</div>

							<div class="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
								<img class="max-h-12" src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg" alt="Mirage" />
							</div>

							<div class="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
								<img class="max-h-12" src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg" alt="Tuple" />
							</div>

							<div class="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
								<img class="max-h-12" src="https://tailwindui.com/img/logos/laravel-logo-gray-400.svg" alt="Laravel" />
							</div>

							<div class="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
								<img class="max-h-12" src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg" alt="StaticKit" />
							</div>

							<div class="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
								<img class="max-h-12" src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg" alt="Workcation" />
							</div>
						</div>
					</div>
				</div>
			</div>
		

			<!-- end novo -->

			<!-- blog -->

			<!-- This example requires Tailwind CSS v2.0+ -->
	

			<!-- end blog -->

		
	</Layout>
</template>

<page-query>
	query {
  pocetna:  allPost (filter:{pocetna: {eq: true}}  limit: 3) {
 
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
export default {
	metaInfo: {
		title: "Hello, world!",
	},
};
</script>
