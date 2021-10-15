<template>
	<Layout>
		<div class="pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
			<div class="mx-auto max-w-7xl lg:px-8">
				<div class="lg:grid lg:grid-cols-2 lg:gap-8">
					<div class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
						<div class="lg:py-24">
							<h1 class="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">Kako postati psihoterapeut? Ubuntu je pravi izbor</h1>
							<p class="text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl">Ubuntu savetovalište nudi mogućnost mladim kolegama da započnu svoju terapijsku praksu u pozitivnom i podsticajnom okruženju</p>
							<div class="mt-8 sm:mt-8">
								<div class="sm:max-w-xl sm:mx-auto lg:mx-0">
									<div class="sm:flex">
										<div class="mt-3 text-center">
											<a
												href="#"
												@click="onClick()"
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
												Popuni formular
											</a>
										</div>
									</div>
								</div>
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
					<h2 class="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">Zdrav kolektiv za zdrave ideje</h2>
					<p class="mt-5 max-w-prose mx-auto text-xl text-gray-500">Naša najveća vrednost su naši naši saradnici i tako se i odnosimo prema njimag</p>
				</div>
				<div class="mt-12 -mb-10 sm:-mb-24 lg:-mb-80">
					<g-image class="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5" src="~/assets/img/karijera-1.jpg" alt="" />
				</div>
			</div>
		</div>

		<!-- Feature section with grid -->
		<div class="relative bg-white py-16 sm:py-24 lg:py-32">
			<div class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
				<h2 class="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">Šta naše savetovalište nudi?</h2>
				<p class="mt-5 max-w-prose mx-auto text-xl text-gray-500">Možete očekivati sistemsku podršku, logistiku i ohrabrenje za ostvarivanje vaših ličnih ideja i ciljeva</p>
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
									<h3 class="mt-8 text-lg font-medium text-gray-900 tracking-tight">Rad sa klijentima</h3>
									<p class="mt-5 text-base text-gray-500">
										Kroz projekat, mladi psihoterapeuti imaju priliku da u bezbednom okruženju i kroz podršku starijih kolega započnu svoju psihoterapijsku karijeru. Nakon volonterskog programa, kolegama se nudi mogućnost rada sa klijentima
										u privatnoj praksi.
									</p>
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
									<h3 class="mt-8 text-lg font-medium text-gray-900 tracking-tight">Supervizija i intervizija</h3>
									<p class="mt-5 text-base text-gray-500">Za sve članove našeg savetovališta organizovani su redovni supervizijski i intervizijski sastanci koji su prostor za razmenu ideja, podršku i stručno usavršavanje.</p>
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
									<h3 class="mt-8 text-lg font-medium text-gray-900 tracking-tight">Literatura i psihoterapijski alati</h3>
									<p class="mt-5 text-base text-gray-500">Ubuntu savetovalište omogućava korišćenje bogate stručne literature i terapijskih alata za rad.</p>
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
									<h3 class="mt-8 text-lg font-medium text-gray-900 tracking-tight">Zarada</h3>
									<p class="mt-5 text-base text-gray-500">
										Ubuntu savetovalište nudi mogućnost zarade u vidu honorara za poziciju psihodijagnostičara (iako je pozicija volonterska) kao i mogućnost zarade u okviru drugih projekata savetovališta.
									</p>
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
									<h3 class="mt-8 text-lg font-medium text-gray-900 tracking-tight">Radionice</h3>
									<p class="mt-5 text-base text-gray-500">Naši volonteri mogu prisustvovati svim stručnim i edukativnim radionicama koje se organizuju u okviru Ubuntu savetovališta.</p>
								</div>
							</div>
						</div>

						<div class="pt-6">
							<div class="flow-root bg-gray-50 rounded-lg px-6 pb-8">
								<div class="mt-6">
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
									<h3 class="mt-8 text-lg font-medium text-gray-900 tracking-tight">Druženje</h3>
									<p class="mt-5 text-base text-gray-500">Svaki rad zaslužuje i odmor. Kroz neformalna druženja i okupljanja podstičemo razmenu i pozitivnu atmosferu.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Testimonial section -->

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
								<p class="mt-6 text-2xl font-medium text-white">
									Od prvog kontakta osetila sam se prihvaćeno i uvaženo. Ubuntu savetovalište unapredilo je moj put profesionalno i lično i doprineo tome da danas postanem topao, negujući terapeut. Jelena
								</p>
							</div>
							<footer class="mt-6">
								<p class="text-base font-medium text-white">Jelena</p>
								<p class="text-base font-medium text-cyan-100">Porodični sistemski psihoterapeut</p>
							</footer>
						</blockquote>
					</div>
				</div>
			</div>
		</div>

		<!-- Blog section -->
		<div class="relative bg-gray-50 py-16 sm:py-24 lg:py-32">
			<div>
				<card-item-karijera />
			</div>
		</div>
		<!--faq  -->
		<div class="bg-gray-50 py-14">
			<div class="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
				<div class="max-w-3xl mx-auto divide-y-2 divide-gray-200">
					<h2 class="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">Najčešća pitanja i odgovori</h2>
					<dl class="mt-6 space-y-6 divide-y divide-gray-200">
						<div x-data="{open: false}" class="pt-6">
							<dt class="text-lg">
								<!-- Expand/collapse question button -->
								<button x-on:click="open = !open" type="button" class="text-left w-full flex justify-between items-start text-gray-400" aria-controls="faq-0" aria-expanded="false">
									<span class="font-medium text-gray-900"> Koji je tip zaposlenja/saradnje? </span>
									<span class="ml-6 h-7 flex items-center">
										<!--
                  Expand/collapse icon, toggle classes based on question open state.

                  Heroicon name: outline/chevron-down

                  Open: "-rotate-180", Closed: "rotate-0"
                -->
										<svg x-bind:class="{ 'rotate-180': open }" class="rotate-0 h-6 w-6 transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
										</svg>
									</span>
								</button>
							</dt>
							<dd x-show="open" class="mt-2 pr-12" id="faq-0">
								<p class="text-base text-gray-500">Tip saradnje koji nudimo našim saradnicima je volonterski ili angažovanje po projektima.</p>
							</dd>
						</div>

						<div x-data="{open: false}" class="pt-6">
							<dt class="text-lg">
								<!-- Expand/collapse question button -->
								<button x-on:click="open = !open" type="button" class="text-left w-full flex justify-between items-start text-gray-400" aria-controls="faq-0" aria-expanded="false">
									<span class="font-medium text-gray-900"> Kolika je nadoknada za angažovanje u centru?</span>
									<span class="ml-6 h-7 flex items-center">
										<!--
                  Expand/collapse icon, toggle classes based on question open state.

                  Heroicon name: outline/chevron-down

                  Open: "-rotate-180", Closed: "rotate-0"
                -->
										<svg x-bind:class="{ 'rotate-180': open }" class="rotate-0 h-6 w-6 transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
										</svg>
									</span>
								</button>
							</dt>
							<dd x-show="open" class="mt-2 pr-12" id="faq-0">
								<p class="text-base text-gray-500">
									Ne postoji fiksna materijalna nadoknada. U odnosu na stepen angažovanja svojih saradnika, Centar ulaže u najvrednije kroz edukacije, literaturu, supervizije, ličnu terapiju ili kroz neku drugu vrednost.
								</p>
							</dd>
						</div>
						<div x-data="{open: false}" class="pt-6">
							<dt class="text-lg">
								<!-- Expand/collapse question button -->
								<button x-on:click="open = !open" type="button" class="text-left w-full flex justify-between items-start text-gray-400" aria-controls="faq-0" aria-expanded="false">
									<span class="font-medium text-gray-900"> Da li se radi puno radno vreme, parcijalno ili se radi od kuće sa brojem klijenata po želji? </span>
									<span class="ml-6 h-7 flex items-center">
										<!--
                  Expand/collapse icon, toggle classes based on question open state.

                  Heroicon name: outline/chevron-down

                  Open: "-rotate-180", Closed: "rotate-0"
                -->
										<svg x-bind:class="{ 'rotate-180': open }" class="rotate-0 h-6 w-6 transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
										</svg>
									</span>
								</button>
							</dt>
							<dd x-show="open" class="mt-2 pr-12" id="faq-0">
								<p class="text-base text-gray-500">Svaki saradnik bira koliko i na koji način želi da bude angažovan.</p>
							</dd>
						</div>
						<div x-data="{open: false}" class="pt-6">
							<dt class="text-lg">
								<!-- Expand/collapse question button -->
								<button x-on:click="open = !open" type="button" class="text-left w-full flex justify-between items-start text-gray-400" aria-controls="faq-0" aria-expanded="false">
									<span class="font-medium text-gray-900">Koji stepen angažovanja se zahteva?</span>
									<span class="ml-6 h-7 flex items-center">
										<!--
                  Expand/collapse icon, toggle classes based on question open state.

                  Heroicon name: outline/chevron-down

                  Open: "-rotate-180", Closed: "rotate-0"
                -->
										<svg x-bind:class="{ 'rotate-180': open }" class="rotate-0 h-6 w-6 transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
										</svg>
									</span>
								</button>
							</dt>
							<dd x-show="open" class="mt-2 pr-12" id="faq-0">
								<p class="text-base text-gray-500">Preporuka je minimum tri sata nedeljno ali ne i uslov.</p>
							</dd>
						</div>
						<div x-data="{open: false}" class="pt-6">
							<dt class="text-lg">
								<!-- Expand/collapse question button -->
								<button x-on:click="open = !open" type="button" class="text-left w-full flex justify-between items-start text-gray-400" aria-controls="faq-0" aria-expanded="false">
									<span class="font-medium text-gray-900"> Koji su preduslovi da bismo postali psihoterapeut?</span>
									<span class="ml-6 h-7 flex items-center">
										<!--
                  Expand/collapse icon, toggle classes based on question open state.

                  Heroicon name: outline/chevron-down

                  Open: "-rotate-180", Closed: "rotate-0"
                -->
										<svg x-bind:class="{ 'rotate-180': open }" class="rotate-0 h-6 w-6 transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
										</svg>
									</span>
								</button>
							</dt>
							<dd x-show="open" class="mt-2 pr-12" id="faq-0">
								<p class="text-base text-gray-500">
									Nužno je da završimo psihologiju ili medicinu, a ukoliko smo završili neke od srodnih humanističkih nauka, neophodno je da položimo diferencijalne ispite (propedevtika), što je preduslov da bismo upisali i završili neku od
									priznatih psihoterapijskih škola.
								</p>
							</dd>
						</div>
						<div x-data="{open: false}" class="pt-6">
							<dt class="text-lg">
								<!-- Expand/collapse question button -->
								<button x-on:click="open = !open" type="button" class="text-left w-full flex justify-between items-start text-gray-400" aria-controls="faq-0" aria-expanded="false">
									<span class="font-medium text-gray-900"> Kako započeti karijeru psihoterapeuta? </span>
									<span class="ml-6 h-7 flex items-center">
										<!--
                  Expand/collapse icon, toggle classes based on question open state.

                  Heroicon name: outline/chevron-down

                  Open: "-rotate-180", Closed: "rotate-0"
                -->
										<svg x-bind:class="{ 'rotate-180': open }" class="rotate-0 h-6 w-6 transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
										</svg>
									</span>
								</button>
							</dt>
							<dd x-show="open" class="mt-2 pr-12" id="faq-0">
								<p class="text-base text-gray-500">
									Na naprednim godinama psihoterapijske edukacije očekivano je da počnete da radite sa klijentima uz nadzor supervizora. Najbolje mesto za početak vaše karijere jeste u jednom od naših savetovališta.
								</p>
							</dd>
						</div>

						<div x-data="{open: false}" class="pt-6">
							<dt class="text-lg">
								<!-- Expand/collapse question button -->
								<button x-on:click="open = !open" type="button" class="text-left w-full flex justify-between items-start text-gray-400" aria-controls="faq-0" aria-expanded="false">
									<span class="font-medium text-gray-900"> Ko je i šta radi psiholog?</span>
									<span class="ml-6 h-7 flex items-center">
										<!--
                  Expand/collapse icon, toggle classes based on question open state.

                  Heroicon name: outline/chevron-down

                  Open: "-rotate-180", Closed: "rotate-0"
                -->
										<svg x-bind:class="{ 'rotate-180': open }" class="rotate-0 h-6 w-6 transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
										</svg>
									</span>
								</button>
							</dt>
							<dd x-show="open" class="mt-2 pr-12" id="faq-0">
								<p class="text-base text-gray-500">Psiholog je završio studije psihologije i osposobljen je da ispituje psihičke funkcije i da da stručan sud o njihovom stanju i razvoju.</p>
							</dd>
						</div>

						<div x-data="{open: false}" class="pt-6">
							<dt class="text-lg">
								<!-- Expand/collapse question button -->
								<button x-on:click="open = !open" type="button" class="text-left w-full flex justify-between items-start text-gray-400" aria-controls="faq-0" aria-expanded="false">
									<span class="font-medium text-gray-900"> Ko je i šta radi psihijatar?</span>
									<span class="ml-6 h-7 flex items-center">
										<!--
                  Expand/collapse icon, toggle classes based on question open state.

                  Heroicon name: outline/chevron-down

                  Open: "-rotate-180", Closed: "rotate-0"
                -->
										<svg x-bind:class="{ 'rotate-180': open }" class="rotate-0 h-6 w-6 transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
										</svg>
									</span>
								</button>
							</dt>
							<dd x-show="open" class="mt-2 pr-12" id="faq-0">
								<p class="text-base text-gray-500">Psihijatar je završio studije medicine, specijalizirao psihijatriju i osposobljen je da daje dijagnozu i prepisuje lekove.</p>
							</dd>
						</div>

						<div x-data="{open: false}" class="pt-6">
							<dt class="text-lg">
								<!-- Expand/collapse question button -->
								<button x-on:click="open = !open" type="button" class="text-left w-full flex justify-between items-start text-gray-400" aria-controls="faq-0" aria-expanded="false">
									<span class="font-medium text-gray-900">Ko je i šta radi psihoterapeut?</span>
									<span class="ml-6 h-7 flex items-center">
										<!--
                  Expand/collapse icon, toggle classes based on question open state.

                  Heroicon name: outline/chevron-down

                  Open: "-rotate-180", Closed: "rotate-0"
                -->
										<svg x-bind:class="{ 'rotate-180': open }" class="rotate-0 h-6 w-6 transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
										</svg>
									</span>
								</button>
							</dt>
							<dd x-show="open" class="mt-2 pr-12" id="faq-0">
								<p class="text-base text-gray-500">
									Psihoterapeut je stručanjak koji je pored humanistički usmerenog visokog obrazovanja završio i neki od priznatih psihoterapijskih pravaca. Terapeut kroz razgovor sa klijentom i kreativne vežbe pomaže klijentu da ostvari
									unapred dogovorene ciljeve, kako bi povećao kvalitet svog života.
								</p>
							</dd>
						</div>

						<!-- More questions... -->
					</dl>
				</div>
			</div>
		</div>

		<!-- CTA Section -->
		<div class="relative bg-gray-900">
			<div class="relative h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
				<g-image class="w-full h-full object-cover" src="~/assets/img/karijera-3.jpg" alt="" />
				<div aria-hidden="true" class="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-600 mix-blend-multiply"></div>
			</div>
			<div class="relative mx-auto max-w-md px-4 py-12 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32">
				<div class="md:ml-auto md:w-1/2 md:pl-10">
					<h2 class="text-base font-semibold uppercase tracking-wider text-gray-300">Kakve saradnike tražimo?</h2>
					<p class="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">Naši saradnici su vredni, proaktivni i spremni da rade na sebi.</p>
					<p class="mt-3 text-lg text-gray-300">
					Tražimo ljude koji ne rade naporno, već pametno, znaju da prepoznaju kad je vreme da više rade, a kada je vreme za pauzu i regrupisanje snaga. Naravno, stručnost nam je veoma važna, ali ne morate da budete eksperti, važno je da ste spremni da to postanete uz našu pomoć.
					</p>
					<div class="mt-8">
						<div class="inline-flex rounded-md shadow">
							<a href="/zasto-ubuntu" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50">
								Saznaj više o Ubuntu Savetovalištu
								<!-- Heroicon name: solid/external-link -->
							
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- contact -->
		<div class="" id="scroll">
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
							<h3 class="text-lg font-medium text-white">Kontakt informacije</h3>
							<p class="mt-6 text-base text-indigo-50 max-w-3xl">Prvi korak je za svakoga težak, dozvolite nam da vam pružimo punu podršku na vašem karijernom putu. Popunite formular ili nas kontaktirajte.</p>
					
							<p class="mt-6 text-base text-indigo-50 text-xl max-w-3xl">Novi Sad</p>
								<dl class="mt-6 space-y-6">
									<dt><span class="sr-only">Telefon</span></dt>
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
										<span class="ml-3"> <a href="tel:+381658286881">065 828 6881 </a></span>
									</dd>
									<dt><span class="sr-only">Email</span></dt>
									<dd class="flex text-base text-indigo-50">
										<!-- Heroicon name: outline/mail -->
										<svg class="flex-shrink-0 w-6 h-6 text-indigo-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
										</svg>
										<span class="ml-3"><a href="psihoterapija-ns@ubuntucentar.com">psihoterapija-ns@ubuntucentar.com</a> </span>
									</dd>
									<dt><span class="sr-only">Lokacija</span></dt>
									<dd class="flex text-base text-indigo-50">
										<!-- Heroicon name: outline/location -->
										<svg class="flex-shrink-0 w-6 h-6 text-indigo-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
											<path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
										</svg>
										<span class="ml-3"
											><a href="https://www.google.com/maps/place/An%C4%91e+Rankovi%C4%87+6,+Novi+Sad+402343/data=!4m2!3m1!1s0x475b11d01908aa3f:0x7beaf20e5cb47676?sa=X&ved=2ahUKEwjIg6uc68bzAhXegf0HHdKuDLoQ8gF6BAgSEAE" target="_blank"
												>Anđe Ranković 6/23</a
											>
										</span>
									</dd>
								</dl>

								<p class="mt-6 text-base text-indigo-50 text-xl max-w-3xl">Beograd</p>
								<dl class="mt-6 space-y-6">
									<dt><span class="sr-only">Telefon</span></dt>
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
										<span class="ml-3"> <a href="tel:+381658286883">065 828 6883</a></span>
									</dd>
									<dt><span class="sr-only">Email</span></dt>
									<dd class="flex text-base text-indigo-50">
										<!-- Heroicon name: outline/mail -->
										<svg class="flex-shrink-0 w-6 h-6 text-indigo-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
										</svg>
										<span class="ml-3"><a href="psihoterapija-bg@ubuntucentar.com">psihoterapija-bg@ubuntucentar.com</a> </span>
									</dd>
									<dt><span class="sr-only">Lokacija</span></dt>
									<dd class="flex text-base text-indigo-50">
										<!-- Heroicon name: outline/location -->
										<svg class="flex-shrink-0 w-6 h-6 text-indigo-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
											<path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
										</svg>
										<span class="ml-3"
											><a href="https://www.google.com/maps/place/Mar%C5%A1ala+Birjuzova+1,+Beograd/data=!4m2!3m1!1s0x475a7aad8998d9d3:0x743eedfc50ace4ef?sa=X&ved=2ahUKEwj4nLe36sbzAhVOhf0HHVQECLoQ8gF6BAgWEAE" target="_blank"
												>Maršala Birjuzova 1</a
											>
										</span>
									</dd>
									<dt><span class="sr-only">Lokacija</span></dt>
									<dd class="flex text-base text-indigo-50">
										<!-- Heroicon name: outline/location -->
										<svg class="flex-shrink-0 w-6 h-6 text-indigo-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
											<path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
										</svg>
										<span class="ml-3"
											><a href="https://www.google.com/maps/place/Narodnih+heroja+7,+Novi+Beograd+11080/@44.825036,20.4056883,17z/data=!3m1!4b1!4m5!3m4!1s0x475a6577912b0c61:0xb2e20d66e4f1163d!8m2!3d44.825036!4d20.407877" target="_blank"
												>Narodnih Heroja 7/11</a
											>
										</span>
									</dd>
								</dl>
								<ul role="list" class="mt-8 flex space-x-12">
									<li>
										<a class="text-indigo-200 hover:text-indigo-100" href="https://sr-rs.facebook.com/UBUNTUcentar/" target="_blank">
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
										<a class="text-indigo-200 hover:text-indigo-100" href="https://www.instagram.com/ubuntu_centar/?hl=en" target="_blank">
											<span class="sr-only">Instagram</span>
											<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
												<path
													fill-rule="evenodd"
													d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
													clip-rule="evenodd"
												/>
											</svg>
										</a>
									</li>
								</ul>
						</div>

						<!-- Contact form -->
						<div class="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
							<h3 class="text-lg font-medium text-gray-900">Pošaljite nam poruku</h3>
							<form @submit.prevent="submit" class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8" id="sign-up" name="sign-up" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
								<div>
									<input type="hidden" name="form-name" value="sign-up" />
									<p hidden>
										<label> Don’t fill this out: <input name="bot-field" /> </label>
									</p>
									<label for="name" class="block text-sm font-medium text-gray-900">Vaše Ime</label>
									<div class="mt-1">
										<input
											:class="{ 'form-group--error border border-red-500': $v.formData.name.$error }"
											class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
											type="text"
											name="name"
											id="name"
											:invalid="$v.formData.name.$error"
											v-model="$v.formData.name.$model"
										/>
										<div class="p-5">
											<p class="error text-red-500 text-xs italic" v-if="$v.formData.name.$error">Unesite Vaše Ime</p>
										</div>
									</div>
								</div>
								<div>
									<label for="last" class="block text-sm font-medium text-gray-900">Vaše Prezime</label>
									<div class="mt-1">
										<input
											:class="{ 'form-group--error border border-red-500': $v.formData.last.$error }"
											type="text"
											name="last"
											id="last"
											class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
											:invalid="$v.formData.last.$error"
											v-model="$v.formData.last.$model"
										/>
										<div class="p-5">
											<p class="error text-red-500 text-xs italic" v-if="$v.formData.last.$error">Unesite Vaše Prezime</p>
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
											class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
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
										<label for="phone" class="block text-sm font-medium text-gray-900">Broj telefona</label>
										<span id="phone-optional" class="text-sm text-gray-500">Opciono</span>
									</div>
									<div class="mt-1">
										<input
											v-model="formData.phone"
											type="text"
											name="phone"
											id="phone"
											autocomplete="tel"
											class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
											aria-describedby="phone-optional"
										/>
									</div>
								</div>
								<input type="hidden" id="city" name="city" v-model="formData.city" />

								<div class="sm:col-span-2">
									<label for="subject" class="block text-sm font-medium text-gray-900">Naslov</label>
									<div class="mt-1">
										<input
											:class="{ 'form-group--error border border-red-500': $v.formData.subject.$error }"
											type="text"
											name="subject"
											id="subject"
											class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
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
										<label for="message" class="block text-sm font-medium text-gray-900">Poruka</label>
										<span id="message-max" class="text-sm text-gray-500">Max. 500 karaktera</span>
									</div>
									<div class="mt-1">
										<textarea
											:class="{ 'form-group--error border border-red-500': $v.formData.message.$error }"
											id="message"
											name="message"
											rows="4"
											class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
											aria-describedby="message-max"
											:invalid="$v.formData.message.$error"
											v-model="$v.formData.message.$model"
										></textarea>
										<div class="p-5">
											<p class="error text-red-500 text-xs italic" v-if="$v.formData.message.$error">Unesite poruku</p>
										</div>
									</div>
								</div>
								<div class="sm:col-span-2">
									<label for="files" class="block text-sm font-medium text-gray-900"> Prikači svoj CV (10mb maksimalna veličina ) </label>
									<div class="mt-1">
										<input id="files" type="file" name="files" @change="processFile($event)" />
									</div>
								</div>
								<div class="sm:col-span-2 flex flex-wrap content-center sm:flex sm:justify-end">
									<div class="p-5">
										<p class="typo__p" v-if="formData.submitStatus === 'OK'">Poruka je poslata!</p>
										<p class="typo__p" v-if="formData.submitStatus === 'ERROR'">Popunite formu ispravno.</p>
										<p class="typo__p" v-if="formData.submitStatus === 'PENDING'">Šalje se...</p>
									</div>
									<button
										:disabled="formData.submitStatus === 'PENDING'"
										type="submit"
										class="
											flex
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
										Pošalji
									</button>
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
import CardItemKarijera from "../components/CardItemKarijera.vue";
import { required, email } from "vuelidate/lib/validators";

export default {
	metaInfo: {
		title: "Karijera | Ubuntu ",
	},

	data() {
		return {
			success: false,
			formData: {
				name: "",
				last: "",
				email: "",
				submitStatus: null,
				phone: "",
				message: "",
				subject: "",
				city: "Online",
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
			message: {
				required,
			},
			subject: {
				required,
			},
		},
	},

	methods: {
		onClick() {
			let element = document.getElementById("scroll");
			element.scrollIntoView({ behavior: "smooth", block: "start" });
		},
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
			this.$v.$touch();
			if (this.$v.formData.$invalid) {
				this.formData.submitStatus = "ERROR";
			} else {
				fetch("/", {
					method: "POST",
					body: this.encode({
						"form-name": e.target.getAttribute("name"),
						...this.formData,
					}),
				})
					.then(() => (this.formData.submitStatus = "OK"))
					.catch((error) => alert(error));
			}
		},
	},
	components: {
		CardItemKarijera,
	},
};
</script>
