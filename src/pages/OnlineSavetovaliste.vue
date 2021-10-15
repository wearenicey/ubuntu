<template>
	<div>
		<back-to-top bottom="50px" right="50px" style="position: fixed; z-index: 99; width: 60px; height: 60px; padding: 10px 16px; border-radius: 50%; font-size: 22px; line-height: 22px">
			<button type="button" class="btn btn-info btn-to-top border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600">
				<svg class="icon" viewBox="0 0 16 16">
					<title>Go to top of page</title>
					<g stroke-width="1" stroke="currentColor"><polyline fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="15.5,11.5 8,4 0.5,11.5 "></polyline></g>
				</svg>
			</button>
		</back-to-top>
		<navigation-online></navigation-online>
		<main class="lg:relative flex items-center">
			<div class="mx-auto max-w-7xl w-full pt-16 sm:pb-20 text-center lg:py-48 lg:text-left">
				<div class="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
					<h1 class="text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
						<span class="block xl:inline">Treba vam psiholog ili psihoterapeut online? Ubuntu je pravi izbor</span>
					</h1>
					<p class="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">Od 2018. naše online savetovalište radi s ljudima iz cele Srbije, regiona i sveta.</p>
					<div class="mt-10 sm:flex sm:justify-center lg:justify-start">
						<div class="rounded-md shadow">
							<a href="tel:+381658286881" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
								Nazovi za besplatnu konsultaciju
							</a>
						</div>
					</div>
				</div>
			</div>
			<div class="relative lg:absolute lg:right-0 lg:w-1/2">
				<g-image src="~/assets/img/hero-8.png" class="relative" />
			</div>
		</main>

		<!-- nova sekcija -->
		<div class="py-16 overflow-hidden lg:py-24">
			<div class="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
				<svg class="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4" width="404" height="784" fill="none" viewBox="0 0 404 784" aria-hidden="true">
					<defs>
						<pattern id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
							<rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
						</pattern>
					</defs>
					<rect width="404" height="784" fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)" />
				</svg>

				<div class="relative">
					<h2 class="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Online savetovalište</h2>
					<p class="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
						Projekat pokrenut 2018 godine od strane Ubuntu centra za rast i razvoj ljudskog potencijala sa namerom da našoj lokalnoj zajednici pružimo lako dostupnu psihološku pomoć.
					</p>
				</div>

				<div class="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
					<div class="relative">
						<h3 class="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">Na koji način savetovalište funkcioniše?</h3>
						<p class="mt-3 text-lg text-gray-500">
							Projekat je samoodrživ, finansiran primarno od članarina klijenata i donacija građana. Projekat je pokrenut jer smo prepoznali potrebu za većom dostupnošću psihoterapije van velikih gradova, i kao podrška našim ljudima u
							inostranstvu. Pre nego što započnete rad sa psihoterapeutom putem interneta, proverite da li imate sve od neophodnog:
						</p>
						<dl class="mt-10 space-y-10">
							<div class="relative">
								<dt>
									<div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
										<!-- Heroicon name: outline/globe-alt -->
										<svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
											/>
										</svg>
									</div>
									<p class="ml-16 sm:pt-3 text-lg leading-6 font-medium text-gray-900">Laptop ili desktop računar koji ima kameru i mikrofon</p>
								</dt>
							</div>

							<div class="relative">
								<dt>
									<div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
										<!-- Heroicon name: outline/scale -->
										<svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
											/>
										</svg>
									</div>
									<p class="ml-16 text-lg sm:pt-3 leading-6 font-medium text-gray-900">Dobru internet konekciju koja može podržati video poz</p>
								</dt>
							</div>

							<div class="relative">
								<dt>
									<div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
										<!-- Heroicon name: outline/lightning-bolt -->
										<svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
										</svg>
									</div>
									<p class="ml-16 text-lg leading-6 font-medium text-gray-900">Prostoriju koja vam obezbeđuje privatnost, tišinu i intimnost koja je neophodna za rad.</p>
								</dt>
							</div>
						</dl>
					</div>

					<div class="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
						<svg class="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden" width="784" height="404" fill="none" viewBox="0 0 784 404">
							<defs>
								<pattern id="ca9667ae-9f92-4be7-abcb-9e3d727f2941" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
									<rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
								</pattern>
							</defs>
							<rect width="784" height="404" fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)" />
						</svg>
						<img class="relative mx-auto" width="490" src="https://tailwindui.com/img/features/feature-example-1.png" alt="" />
					</div>
				</div>

				<svg class="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12" width="404" height="784" fill="none" viewBox="0 0 404 784" aria-hidden="true">
					<defs>
						<pattern id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
							<rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
						</pattern>
					</defs>
					<rect width="404" height="784" fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
				</svg>

				<div class="relative mt-12 sm:mt-16 lg:mt-24">
					<div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
						<div class="lg:col-start-2">
							<h3 class="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">Koji su prvi koraci?</h3>
							<p class="mt-3 text-lg text-gray-500">
								Kako bismo unapredili rad savetovališta i usluge koje pružamo, uveli smo psihološku procenu ličnosti i motivacije za rad pre početka samog psihoterapijskog rada. Testiranje se odvija onlajn, traje do 90 minuta i neophodno je
								izdvojiti 2.000 rsd, koji predstavljaju svojevrsnu pristupnu članarinu.
							</p>
							<p class="mt-3 text-lg text-gray-500">
								Sledeći koraci obuhvataju povezivanje sa terapeutom i početak psihoterapije. U okviru Onlajn savetovališta, imate pravo na 12 seansi, koje su podeljene u 4 seanse kroz 3 meseca. Svakog meseca uplaćujete mesečnu članarinu
								koja iznosi 4.000 dinara i koja Vam obezbeđuje 4 jednočasovna, individualna sustreta sa vašim psihoterapeutom. Uplata članarine služi kao neophodan uslov za početak rada.
							</p>
							<a
								href="#"
								@click="onClickTwo()"
								class="
									text-center
									mt-4
									block
									rounded-md
									border border-transparent
									px-5
									py-3
									bg-indigo-500
									text-base
									font-medium
									text-white
									shadow
									hover:bg-indigo-600
									focus:outline-none focus:ring-2 focus:ring-indgio-500 focus:ring-offset-2
									sm:px-10
								"
							>
								Kontaktiraj nas za više informacija
							</a>
						</div>

						<div class="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
							<svg class="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden" width="784" height="404" fill="none" viewBox="0 0 784 404" aria-hidden="true">
								<defs>
									<pattern id="e80155a9-dfde-425a-b5ea-1f6fadd20131" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
										<rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
									</pattern>
								</defs>
								<rect width="784" height="404" fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)" />
							</svg>
							<img class="relative mx-auto" width="490" src="https://tailwindui.com/img/features/feature-example-2.png" alt="" />
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- end nova sekcija -->
		<!-- feature -->
		<div class="my-10 overflow-hidden">
			<div class="relative max-w-7xl mx-auto sm:py-48 px-4 sm:px-6 lg:px-8">
				<svg class="absolute top-0 left-full transform -translate-x-1/2 -translate-y-3/4 lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4" width="404" height="784" fill="none" viewBox="0 0 404 784" aria-hidden="true">
					<defs>
						<pattern id="8b1b5f72-e944-4457-af67-0c6d15a99f38" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
							<rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
						</pattern>
					</defs>
					<rect width="404" height="784" fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)" />
				</svg>

				<div class="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
					<div class="lg:col-span-1">
						<h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Psihoterapija dostupna svima</h2>
					</div>
					<dl class="mt-10 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:mt-0 lg:col-span-2">
						<div>
							<dt>
								<div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
									<!-- Heroicon name: outline/globe-alt -->
									<svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
										/>
									</svg>
								</div>
								<p class="mt-5 text-lg leading-6 font-medium text-gray-900">Izbor terapeuta</p>
							</dt>
							<dd class="mt-2 text-base text-gray-500">Nulti susret služi za procenu psihoterapijske motivacije, na osnovu čega naš tim efikasno odabere najboljeg terapeuta za vas.</dd>
						</div>

						<div>
							<dt>
								<div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
									<!-- Heroicon name: outline/scale -->
									<svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
										/>
									</svg>
								</div>
								<p class="mt-5 text-lg leading-6 font-medium text-gray-900">Finansijska pristupačnost</p>
							</dt>
							<dd class="mt-2 text-base text-gray-500">Novac koji je neophodno izdvojiti za susret je daleko ispod redovne cene psihoterapije.</dd>
						</div>

						<div>
							<dt>
								<div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
									<!-- Heroicon name: outline/lightning-bolt -->
									<svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
									</svg>
								</div>
								<p class="mt-5 text-lg leading-6 font-medium text-gray-900">Psihoterapijski pravci</p>
							</dt>
							<dd class="mt-2 text-base text-gray-500">Naši psihoterapeuti dolaze iz različitih psihoterapijskih pravaca.</dd>
						</div>

						<div>
							<dt>
								<div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
									<!-- Heroicon name: outline/mail -->
									<svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
									</svg>
								</div>
								<p class="mt-5 text-lg leading-6 font-medium text-gray-900">Dostupnost i fleksibilnost</p>
							</dt>
							<dd class="mt-2 text-base text-gray-500">Naš tim okuplja veliki broj saradnika, pa je zakazivanje susreta moguće u terminima koji vama odgovaraju.</dd>
						</div>
					</dl>
				</div>
			</div>
		</div>

		<!-- testemonial -->
		<div class="bg-white py-16 lg:py-24">
			<div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div class="relative py-24 px-8 bg-indigo-500 rounded-xl shadow-2xl overflow-hidden lg:px-16 lg:grid lg:grid-cols-2 lg:gap-x-8">
					<div class="absolute inset-0 opacity-50 filter saturate-0 mix-blend-multiply">
						<img src="https://images.unsplash.com/photo-1601381718415-a05fb0a261f3?ixid=MXwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8ODl8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1216&q=80" alt="" class="w-full h-full object-cover" />
					</div>
					<div class="relative lg:col-span-1">
						<!-- <img class="h-12 w-auto" src="https://tailwindui.com/img/logos/workcation-logo-white.svg" alt="" /> -->
						<h2 class="text-2xl font-medium sm:text-2xl text-white">Referenca</h2>
						<blockquote class="mt-6 text-white">
							<p class="text-xl font-medium sm:text-2xl">
								U radu s Janom mi se najviše svidelo to što u toku razgovora s njom nije bilo nelagoda, straha ili srama. Sve je prolazilo s lakoćom i opuštenošću, na veoma profesionalan, ali i prijateljski način. Još uvek pamtim njene
								savete, i trudim se da ih svakodnevno primenjujem. U svakom slučaju, toplo preporučujem rad s njom kao i s Ubuntu centrom 😊
							</p>
							<footer class="mt-6">
								<p class="flex flex-col font-medium">
									<span>Nađa, profesorka</span>
								</p>
							</footer>
						</blockquote>
					</div>
				</div>
			</div>
		</div>
		<!--faq  -->
		<div class="bg-gray-50 my-14">
			<div class="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
				<div class="max-w-3xl mx-auto divide-y-2 divide-gray-200">
					<h2 class="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">Vi pitate, psihoterapeut odgovara</h2>
					<dl class="mt-6 space-y-6 divide-y divide-gray-200">
						<div x-data="{open: false}" class="pt-6">
							<dt class="text-lg">
								<!-- Expand/collapse question button -->
								<button x-on:click="open = !open" type="button" class="text-left w-full flex justify-between items-start text-gray-400" aria-controls="faq-0" aria-expanded="false">
									<span class="font-medium text-gray-900"> Cena individualne psihoterapije</span>
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
								<p class="text-base text-gray-500">Za 60 minuta psihoterapije je neophodno izdvojiti minimum <span class="font-bold">1000 RSD</span>, kao donacije za rad savetovališta.</p>
							</dd>
						</div>

						<div x-data="{open: false}" class="pt-6">
							<dt class="text-lg">
								<!-- Expand/collapse question button -->
								<button x-on:click="open = !open" type="button" class="text-left w-full flex justify-between items-start text-gray-400" aria-controls="faq-0" aria-expanded="false">
									<span class="font-medium text-gray-900">Koji su uslovi za ulazak u naš program i započinjanje psihoterapijskog procesa?</span>
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
									Prvi i neophodni uslov za započinjanje procesa psihoterapije je <span class="font-bold">psihološka procena</span>. To je intervju u trajanju od 90 minuta koji ima za cilj upoznavanje Vas kao klijenta i odabir najpodesnijeg
									stručnog saradnika za rad. Za ovaj susret je neophodno izdvojiti <span class="font-bold">2000 RSD</span> donacije po osobi.
								</p>
							</dd>
						</div>

						<div x-data="{open: false}" class="pt-6">
							<dt class="text-lg">
								<!-- Expand/collapse question button -->
								<button x-on:click="open = !open" type="button" class="text-left w-full flex justify-between items-start text-gray-400" aria-controls="faq-0" aria-expanded="false">
									<span class="font-medium text-gray-900">Na koji način mogu izvršiti uplatu?</span>
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
								<p class="text-base text-gray-500"><a href="/donacije">Donacije</a> je moguće uplatiti <span class="font-bold">uživo</span> ili na <span class="font-bold">žiro račun</span> centra.</p>
							</dd>
						</div>

						<div x-data="{open: false}" class="pt-6">
							<dt class="text-lg">
								<!-- Expand/collapse question button -->
								<button x-on:click="open = !open" type="button" class="text-left w-full flex justify-between items-start text-gray-400" aria-controls="faq-0" aria-expanded="false">
									<span class="font-medium text-gray-900">Kako se vrši uplata iz inostranstva?</span>
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
								<p class="text-base text-gray-500">Putem <span class="font-bold">PayPal</span>-a.</p>
							</dd>
						</div>
						<div x-data="{open: false}" class="pt-6">
							<dt class="text-lg">
								<!-- Expand/collapse question button -->
								<button x-on:click="open = !open" type="button" class="text-left w-full flex justify-between items-start text-gray-400" aria-controls="faq-0" aria-expanded="false">
									<span class="font-medium text-gray-900">Da li studenti imaju popust?</span>
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
								<p class="text-base text-gray-500">Uslovi su isti za sve klijente na projektu.</p>
							</dd>
						</div>

						<div x-data="{open: false}" class="pt-6">
							<dt class="text-lg">
								<!-- Expand/collapse question button -->
								<button x-on:click="open = !open" type="button" class="text-left w-full flex justify-between items-start text-gray-400" aria-controls="faq-0" aria-expanded="false">
									<span class="font-medium text-gray-900">Radno vreme, da li mogu dolaziti vikendom?</span>
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
									Radno vreme centra je <span class="font-bold">svakim danom</span>, uključujući vikend, od <span class="font-bold">8-22h</span>, a dostupnost termina zavisi od vašeg izabranog psihoterapeuta.
								</p>
							</dd>
						</div>

						<div x-data="{open: false}" class="pt-6">
							<dt class="text-lg">
								<!-- Expand/collapse question button -->
								<button x-on:click="open = !open" type="button" class="text-left w-full flex justify-between items-start text-gray-400" aria-controls="faq-0" aria-expanded="false">
									<span class="font-medium text-gray-900">Koliko traje susret?</span>
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
								<p class="text-base text-gray-500">Individualni susret traje <span class="font-bold">60 minuta</span>, dok partnerski i porodični susreti traju <span class="font-bold">90 minuta</span>.</p>
							</dd>
						</div>

						<div x-data="{open: false}" class="pt-6">
							<dt class="text-lg">
								<!-- Expand/collapse question button -->
								<button x-on:click="open = !open" type="button" class="text-left w-full flex justify-between items-start text-gray-400" aria-controls="faq-0" aria-expanded="false">
									<span class="font-medium text-gray-900">Dinamika susreta, koliko se često održavaju?</span>
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
								<p class="text-base text-gray-500">Susreti se održavaju <span class="font-bold">jednom nedeljno.</span></p>
							</dd>
						</div>

						<!-- More questions... -->
					</dl>
				</div>
			</div>
		</div>

		<!-- contact -->
		<div class="sm:pt-24">
			<div>
				<div class="max-w-7xl mx-auto pb-10 px-4 sm:py-10 sm:px-6 lg:px-8">
					<div class="text-center">
						<h2 class="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">Zakažite još danas svoj prvi razgovor sa psihoterapeutom</h2>
						<p class="max-w-xl mt-5 mx-auto text-xl text-gray-500">Vaše je samo da nas pozovete a mi ćemo se pobrinuti za ostalo</p>
					</div>
				</div>
			</div>
			<div class="max-w-7xl mx-auto px-4 pb-20" id="scroll">
				<div class="relative bg-white shadow-xl">
					<h2 class="sr-only">Kontakt informacije</h2>

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
							<p class="mt-6 text-base text-indigo-50 max-w-3xl">
								Uočili smo da postoji velika potreba za psihološkom podrškom ljudi koji nisu u velikim gradovima ili su van svoje matične zemlje. Bez obzira na to gde se nalazite, mi se brinemo za to da dobijete psihološku podršku koja vam
								je potrebna.
							</p>
							<dl class="mt-8 space-y-6">
								<!-- <dt><span class="sr-only">Telefon</span></dt> -->
								<!-- <dd class="flex text-base text-indigo-50"> -->
								<!-- Heroicon name: outline/phone -->
								<!-- <svg class="flex-shrink-0 w-6 h-6 text-indigo-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
										/>
									</svg>
									<span class="ml-3"> <a href="tel:+381658286883">065 828 6883</a></span>
								</dd> -->
								<dt><span class="sr-only">Email</span></dt>
								<dd class="flex text-sm text-indigo-50">
									<!-- Heroicon name: outline/mail -->
									<svg class="flex-shrink-0 w-6 h-6 text-indigo-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
									</svg>
									<span class="ml-3"><a href="mailto:psihoterapija-onlajn@ubuntucentar.com">psihoterapija-onlajn@ubuntucentar.com</a></span>
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
							<form @submit.prevent="submit" class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8" name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
								<div>
									<input type="hidden" name="form-name" value="contact" />
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
										<div class="p-1">
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
										<div class="p-1">
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
										<div class="p-1">
											<p class="error text-red-500 text-xs italic" v-if="$v.formData.email.$error">Unesite isrpavnu email adresu</p>
										</div>
									</div>
								</div>
								<div>
									<div class="flex justify-between">
										<label for="phone" class="block text-sm font-medium text-gray-900">Telefon</label>
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
										<div class="p-1">
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
										<div class="p-1">
											<p class="error text-red-500 text-xs italic" v-if="$v.formData.message.$error">Unesite poruku</p>
										</div>
									</div>
								</div>
								<div class="sm:col-span-2 flex flex-wrap content-center sm:flex sm:justify-end">
									<div class="p-5">
										<p class="typo__p" v-if="formData.submitStatus === 'OK'">Poruka je poslata!</p>
										<p class="typo__p" v-if="formData.submitStatus === 'ERROR'">Popunite ispravno formu.</p>
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

		<footer-landing></footer-landing>
	</div>
</template>

<script>
import NavigationOnline from "../components/NavigationOnline.vue";
import FooterLanding from "../components/FooterLanding.vue";
import { required, email } from "vuelidate/lib/validators";

export default {
	metaInfo: {
		title: " Online savetovalište | Ubuntu",
		meta: [
			{
				name: "title",
				content: "Online savetovalište | Ubuntu",
			},
			{
				name: "description",
				content: "Savetovaliste je...",
			},
		],
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
		encode(data) {
			return Object.keys(data)
				.map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
				.join("&");
		},
		submit(e) {
			console.log("submit!");
			this.$v.$touch();
			if (this.$v.formData.$invalid) {
				this.formData.submitStatus = "ERROR";
			} else {
				fetch("/", {
					method: "POST",
					headers: { "Content-Type": "application/x-www-form-urlencoded" },
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
			}
		},
		onClickTwo() {
			let element = document.getElementById("scroll");
			element.scrollIntoView({ behavior: "smooth", block: "start" });
		},
	},

	components: {
		NavigationOnline,
		FooterLanding,
	},
};
</script>

<style scoped>
.btn-to-top {
	width: 60px;
	height: 60px;
	padding: 10px 16px;
	border-radius: 50%;
	font-size: 22px;
	line-height: 22px;
}
</style>
