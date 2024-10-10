<template>
	<Layout>
		<div class="modal-vue">
			<div class="overlay" v-if="showModal" @click="showModal = false">
				<button class="close p-2" @click="showModal = false">
					<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
						<rect width="64" height="64" rx="32" fill="#F0FDFA" />
						<path
							d="M41.3334 24.5467L39.4534 22.6667L32 30.12L24.5467 22.6667L22.6667 24.5467L30.12 32L22.6667 39.4533L24.5467 41.3333L32 33.88L39.4534 41.3333L41.3334 39.4533L33.88 32L41.3334 24.5467Z"
							fill="#323232" />
					</svg>
				</button>
			</div>

			<!-- <div class="modal" v-if="showModal">
				<video controls>
					<source src="/video-pocetna.mp4" type="video/mp4" />
					Your browser does not support the video tag.
				</video>
			</div> -->
		</div>

		<div class="bg-white">
			<div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
				<div class="text-center">
					<h1 class="text-base font-semibold text-support-100 tracking-wide uppercase font-sans">Psihološko
						savetovalište Ubuntu</h1>
					<h2 class="mt-1 text-4xl text-primary sm:text-5xl sm:tracking-tight lg:text-6xl">Negujmo mentalno zdravlje
					</h2>
					<p class="mt-5 mx-auto text-xl text-gray-500">Kroz psihološko savetovanje i psihoterapiju unapredite kvalitet
						Vašeg života</p>

					<div class="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center gap-x-4">
						<!-- <div class="space-y-4 sm:space-y-0 sm:mx-auto sm:gap-5 justify-center flex sm:mb-0 mb-5">
								<a href="#cenovnik" class="items-center justify-center px-5 py-4 border border-transparent text-lg font-medium rounded-full shadow-sm text-white bg-red-400 hover:bg-gray-200 hover:text-secondary sm:px-8">
									Pogledajte pakete
								</a>
							</div> -->
						<div class="space-y-4 sm:space-y-0 sm:mx-auto sm:gap-5 justify-center flex">
							<a href="#odabir_savetovalista" @click="onClickTwo()"
								class="items-center justify-center px-5 py-4 border border-transparent text-lg font-medium rounded-full shadow-sm text-white bg-secondary hover:bg-gray-200 hover:text-secondary sm:px-8">
								Kako započeti?
							</a>
						</div>

					</div>

					<div class="lg:mt-10 mt-5 flex block justify-center">

						<g-image immediate="true" class="h-full w-full object-cover" src="~/assets/img/hero.png"
							alt="psihoterapija Ubuntu Novi Sad" />
						<!-- 	<div class="inline-flex">
							<a href="/kontakt/" class="inline-flex items-center rounded-3xl justify-center px-5 py-3 border border-transparent text-base font-medium text-white bg-secondary"> Zakažite konsultaciju </a>
						</div>  -->
					</div>
					<!-- <div class="relative">
						<svg @click="showModal = true" class="absolute button-one pointer-events-auto" width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
							<rect width="68" height="68" rx="34" fill="#F0FDFA" />
							<path d="M52 34L25 49.5885L25 18.4115L52 34Z" fill="#10B981" />
						</svg>
						<g-image immediate="true" class="lg:mt-20 mt-10" src="~/assets/img/pocetna-1.jpg" alt="psihoterapeut savetuje"></g-image>
					</div> -->


				</div>
			</div>
		</div>

		<svg class="absolute hidden lg:block transform -translate-y-2/4" width="214" height="1086" viewBox="0 0 214 1086"
			fill="none" xmlns="http://www.w3.org/2000/svg">
			<circle cx="-329" cy="543" r="543" fill="#FEF2F2" />
		</svg>

		<div class="relative bg-primary mt-1 lg:mt-20">
			<div class="h-80 w-full absolute bottom-0 xl:inset-0 xl:h-full">
				<div class="h-full w-full xl:grid xl:grid-cols-2">
					<div class="h-full xl:relative xl:col-start-2">
						<g-image class="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0" src="~/assets/img/tim.jpg"
							alt="psihološko savetovalište u grupi" />
						<div aria-hidden="true"
							class="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-primary xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r">
						</div>
					</div>
				</div>
			</div>
			<div
				class="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8">
				<div class="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
					<div class="">
						<h2 class="text-3xl text-gray-50 sm:text-4xl">Lako dostupna pomoć psihoterapeuta</h2>
						<div class="mt-6 text-gray-300 space-y-6">
							<p class="text-lg">
								Ideja našeg <span class="font-bold">psihološkog savetovališta</span> jeste da na jednom mestu okupimo
								kvalifikovane psihoterapeute i psihoterapeute
								pod supervizijom.
							</p>
							<p class="text-base leading-7">
								Želeli smo da im damo siguran prostor za rad i kontinuiranu podršku u profesionalnom razvoju, kako bismo
								udruženim snagama vodili računa o mentalnom zdravlju građana naše lokalne zajednice, a i šire.
							</p>
						</div>
					</div>

					<div class="mt-10">
						<dl class="grid grid-cols-2 gap-x-4 gap-y-8">
							<div class="">
								<div class="border-t-2 border-support-100 pb-6 opacity-20"></div>
								<dt class="text-base font-medium text-support-100">Osnovani</dt>
								<dd class="text-3xl font-semibold text-white font-sans">2016.</dd>
							</div>

							<div class="">
								<div class="border-t-2 border-support-100 pb-6 opacity-20"></div>
								<dt class="text-base font-medium text-support-100">Stručni saradnici</dt>
								<dd class="text-3xl font-semibold text-white font-sans">80</dd>
							</div>

							<div class="">
								<div class="border-t-2 border-support-100 pb-6 opacity-20"></div>
								<dt class="text-base font-medium text-support-100 font-sans">Klijenti do sada</dt>
								<dd class="text-3xl font-semibold text-white font-sans">800+</dd>
							</div>

							<div class="">
								<div class="border-t-2 border-support-100 pb-6 opacity-20"></div>
								<dt class="text-base font-medium text-support-100">Broj projekata</dt>
								<dd class="text-3xl font-semibold text-white font-sans">10</dd>
							</div>
						</dl>
					</div>
				</div>
			</div>
		</div>

		<section class="container mx-auto my-12 rounded-2xl">
			<div class="max-w-7xl mx-auto md:grid md:grid-cols-2 md:px-6 lg:px-8 rounded-r-3xl">
				<div
					class="py-12 px-4 sm:px-6 md:flex md:flex-col md:py-16 md:pl-0 md:pr-10 md:border-r md:border-gray-200 lg:pr-16">
					<blockquote class="mt-6 md:flex-grow md:flex md:flex-col">
						<div class="relative text-lg font-medium text-gray-900 md:flex-grow">
							<svg class="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-red-100"
								fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
								<path
									d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
							</svg>
							<p class="relative">Pomoću terapije sam od života u kome kiša pada svaki dan postigao da živim u sunčanim
								krajevima. I dalje se smejem ili tugujem, dosađujem ili provodim, ali je sve sada prijatnije.</p>
						</div>
						<footer class="mt-8">
							<div class="flex items-start">
								<div class="flex-shrink-0 inline-flex rounded-full border-2 border-white">
									<g-image class="h-12 w-12 rounded-full" src="~/assets/img/covek.png" alt="zadovoljan čovek" />
								</div>
								<div class="ml-4">
									<div class="text-base font-medium text-gray-800">Marko</div>
									<div class="text-base font-medium text-gray-400">Menadžer</div>
								</div>
							</div>
						</footer>
					</blockquote>
				</div>
				<div
					class="py-12 px-4 border-t-2 border-gray-200 sm:px-6 md:py-16 md:pr-0 md:pl-10 md:border-t-0 md:border-l lg:pl-16">
					<blockquote class="mt-6 md:flex-grow md:flex md:flex-col">
						<div class="relative text-lg font-medium text-gray-900 md:flex-grow">
							<svg class="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-red-100"
								fill="currentColor" viewBox="0 0 32 32">
								<path
									d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
							</svg>
							<p class="relative">Milica mi je pomogla da osvestim, shvatim i prihvatim svoje postupke i ponašanje.
								Neprocenjivo je kada možeš da kažeš stvari koje nikome nisi izgovorio i da dobiješ razumevanje i
								podršku.</p>
						</div>
						<footer class="mt-8">
							<div class="flex items-start">
								<div class="flex-shrink-0 inline-flex rounded-full border-2 border-white">
									<g-image class="h-12 w-12 rounded-full" src="~/assets/img/zena.png" alt="zadovoljna žena" />
								</div>
								<div class="ml-4">
									<div class="text-base font-medium text-gray-800">Mirjana</div>
									<div class="text-base font-medium text-gray-400">Knjigovođa</div>
								</div>
							</div>
						</footer>
					</blockquote>
				</div>
			</div>
		</section>

		<div class="my-32">
			<div class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl z-50">
				<div class="lg:grid lg:grid-cols-2 lg:gap-24 lg:items-center">
					<div>
						<h2 class="text-3xl text-primary tracking-tight sm:text-5xl">Tim psihoterapeuta savetovališta, Vama na
							usluzi.</h2>
						<p class="mt-6 max-w-3xl text-lg leading-7 pb-4 text-gray-500">Trudimo se da naše psihološko savetovalište
							predstavlja sinonim za zadovoljne i stručne saradnike i kvalitetan sadržaj dostupan svima.</p>
						<div class="space-y-4">
							<a href="/savetovaliste-novi-sad/"
								class="inline-block items-center rounded-3xl justify-center px-5 py-3 border border-transparent text-base font-medium text-white bg-secondary">
								Psihoterapeuti Novi Sad </a>
						</div>
					</div>
					<div class="mt-12">
						<g-image class="w-full h-full" src="~/assets/img/terapeut-pacijent.jpg" alt="psihoterapija u grupi" />
					</div>
				</div>
			</div>
			<svg class="hidden lg:block absolute -right-0 transform -translate-y-2/4" style="z-index: -1" width="499"
				height="1086" viewBox="0 0 499 1086" fill="none" xmlns="http://www.w3.org/2000/svg">
				<circle cx="543" cy="543" r="543" fill="#FEF2F2" />
			</svg>
		</div>

		<div class="mt-20" id="odabir_savetovalista">
			<div class="relative pb-32 bg-gray-800">
				<div class="absolute inset-0">
					<g-image class="w-full h-full object-cover" src="~/assets/img/home-prvi-korak.jpg"
						alt="prvi koraci u psihoterapiji" />
					<div class="absolute inset-0 bg-secondary mix-blend-multiply" aria-hidden="true"></div>
				</div>
				<div class="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
					<h2 class="text-4xl tracking-tight text-white md:text-5xl lg:text-6xl">Prvi korak ka ličnom rastu i razvoju
						ste već napravili. Da li ste spremni za sledeći?</h2>
					<p class="mt-6 max-w-3xl text-xl text-white">
						Na raspolaganju su vam <span class="font-bold">psihološka savetovališta</span> u Novom Sadu i Beogradu.
						Takođe, postoji mogućnost i za <span class="font-bold">psihoterapiju online</span>.
					</p>
				</div>
			</div>

			<section class="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8"
				aria-labelledby="contact-heading">
				<h2 class="sr-only" id="contact-heading">Kontaktirajte nas</h2>
				<div class="grid grid-cols-1 gap-y-8 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
					<div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
						<div class="flex-shrink-0">
							<g-image class="h-48 w-full object-cover" src="~/assets/img/novisad.jpg"
								alt="psihološko savetovalište novi sad" />
						</div>
						<div class="flex-1 bg-white p-6 flex flex-col justify-between">
							<div class="flex-1">
								<a href="/savetovaliste-novi-sad/" class="block mt-2">
									<h3 class="text-xl font-sans font-medium text-gray-900">Psihološko savetovalište u Novom Sadu</h3>
									<p class="mt-3 text-base text-gray-500">Projekat "Novosadsko savetovalište Ubuntu" je pokrenut 2016.
										godine, sa namerom da našoj lokalnoj zajednici pružimo lako dostupnu psihološku pomoć u Novom Sadu.
									</p>
								</a>
							</div>
						</div>
						<div class="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
							<a href="/savetovaliste-novi-sad/" class="text-base font-medium text-secondary">Saznajte više<span
									aria-hidden="true"> &rarr;</span></a>
						</div>
					</div>

					<div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
						<div class="flex-shrink-0">
							<g-image class="h-48 w-full object-cover" src="~/assets/img/beograd.jpg"
								alt="psihološko savetovalište beograd" />
						</div>
						<div class="flex-1 bg-white p-6 flex flex-col justify-between">
							<div class="flex-1">
								<a href="/savetovaliste-beograd/" class="block mt-2">
									<h3 class="text-xl font-sans font-medium text-gray-900">Psihološko savetovalište u Beogradu</h3>
									<p class="mt-3 text-base text-gray-500">3 godine kasnije, usled velikog interesovanja i uspeha,
										pokrenut je i projekat "Beogradsko savetovalište Ubuntu", trenutno na 3 adrese.</p>
								</a>
							</div>
						</div>
						<div class="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
							<a href="/savetovaliste-beograd/" class="text-base font-medium text-secondary">Saznajte više<span
									aria-hidden="true"> &rarr;</span></a>
						</div>
					</div>

					<div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
						<div class="flex-shrink-0">
							<g-image class="h-48 w-full object-cover" src="~/assets/img/onilne.jpg" alt="online psihoterapija" />
						</div>
						<div class="flex-1 bg-white p-6 flex flex-col justify-between">
							<div class="flex-1">
								<a href="/online-savetovaliste/" class="block mt-2">
									<h3 class="text-xl font-sans font-medium text-gray-900">Online psihoterapija</h3>
									<p class="mt-3 text-base text-gray-500">Kako bismo unapredili rad savetovališta i usluge koje pružamo,
										od sada je moguće zakazati rad sa psihoterapeutom online.</p>
								</a>
							</div>
						</div>
						<div class="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
							<a href="/online-savetovaliste/" class="text-base font-medium text-secondary">Saznajte više<span
									aria-hidden="true"> &rarr;</span></a>
						</div>
					</div>
				</div>
			</section>
		</div>

		<div>
			<CardItem />
		</div>

		<svg class="absolute -right-0 transform -translate-y-3/4" style="z-index: -1" width="264" height="1086"
			viewBox="0 0 264 1086" fill="none" xmlns="http://www.w3.org/2000/svg">
			<circle cx="543" cy="543" r="543" fill="#FEF2F2" />
		</svg>

		<section class="py-12 overflow-hidden md:py-20 lg:py-44">
			<div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<svg class="hidden lg:block absolute top-full right-full transform translate-x-1/2 -translate-y-1/4" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
					<circle cx="13" cy="13" r="11.5" stroke="#F59E0B" stroke-width="3" />
				</svg>

				<svg class="hidden lg:block absolute transform translate-x-96 -top-24" width="33" height="34" viewBox="0 0 33 34" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M10.6804 2.9889C10.5364 2.54577 10.4645 2.3242 10.4801 2.1259C10.5009 1.8615 10.6259 1.6162 10.8275 1.44395C10.9788 1.31477 11.2004 1.24278 11.6435 1.09879C12.0866 0.95481 12.3082 0.882819 12.5065 0.898425C12.7709 0.919233 13.0162 1.04422 13.1884 1.24589C13.3176 1.39715 13.3896 1.61872 13.5336 2.06185L16.7783 12.0479L13.9251 12.975L10.6804 2.9889ZM11.357 18.0153L1.37086 21.26C0.92772 21.404 0.706152 21.4759 0.554897 21.6051C0.353225 21.7774 0.228237 22.0227 0.207428 22.2871C0.191822 22.4854 0.263813 22.7069 0.407798 23.1501C0.551782 23.5932 0.623773 23.8148 0.752956 23.966C0.925201 24.1677 1.1705 24.2927 1.4349 24.3135C1.6332 24.3291 1.85477 24.2571 2.29791 24.1131L12.284 20.8685L11.357 18.0153ZM17.0153 22.4856L20.26 32.4717C20.4039 32.9148 20.4759 33.1364 20.6051 33.2876C20.7774 33.4893 21.0227 33.6143 21.2871 33.6351C21.4854 33.6507 21.7069 33.5787 22.1501 33.4347C22.5932 33.2907 22.8148 33.2187 22.966 33.0896C23.1677 32.9173 23.2927 32.672 23.3135 32.4076C23.3291 32.2093 23.2571 31.9877 23.1131 31.5446L19.8684 21.5585L17.0153 22.4856ZM21.7946 17.7783L31.7807 14.5336C32.2238 14.3896 32.4454 14.3176 32.5966 14.1885C32.7983 14.0162 32.9233 13.7709 32.9441 13.5065C32.9597 13.3082 32.8877 13.0866 32.7437 12.6435C32.5997 12.2004 32.5277 11.9788 32.3986 11.8275C32.2263 11.6259 31.981 11.5009 31.7166 11.4801C31.5183 11.4645 31.2967 11.5365 30.8536 11.6804L20.8675 14.9251L21.7946 17.7783Z"
						fill="#F59E0B"
					/>
				</svg>
				<svg class="hidden lg:block absolute left-full transform -translate-x-1 -right-24" width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
					<circle cx="32.5" cy="32.5" r="31" stroke="#F59E0B" stroke-width="3" />
				</svg>
				<svg class="hidden lg:block absolute -top-12 right-96" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
					<circle cx="9.5" cy="9.5" r="8" stroke="#F59E0B" stroke-width="3" />
				</svg>

				<svg class="hidden lg:block absolute top-44 left-2/4" width="61" height="131" viewBox="0 0 61 131" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M8.25879 128.445C8.25879 128.445 33.3891 106.201 46.0405 71.9757C58.6919 37.7506 51.8965 1.72754 51.8965 1.72754" stroke="#F59E0B" stroke-width="2" stroke-linecap="square" />
					<path d="M8.08008 129.125C8.08008 129.125 16.8082 125.157 23.5219 124.888C30.2355 124.62 34.0371 127.63 34.0371 127.63" stroke="#F59E0B" stroke-width="2" stroke-linecap="square" />
					<path d="M8.49023 128.594C8.49023 128.594 10.9036 118.318 10.6236 113.455C10.3436 108.592 8.64905 102.541 8.64905 102.541" stroke="#F59E0B" stroke-width="2" stroke-linecap="square" />
				</svg>

				<div class="relative">
					<blockquote class="mt-10">
						<div class="max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900">
							<p>&ldquo;Nadahnjujuće mi je da gledam saradnike okupljene oko ideje zajedništva kako velikodušno daju delove sebe za viši cilj, a još mi je draže kad vidim kako im se vraća uloženi trud. &rdquo;</p>
						</div>
						<footer class="mt-8">
							<div class="md:flex md:items-center md:justify-center">
								<div class="md:flex-shrink-0">
									<g-image class="mx-auto h-10 w-10 rounded-full" src="~/assets/img/stefan.jpg" alt="" />
								</div>
								<div class="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
									<div class="text-base font-medium text-gray-900">Stefan Mitrović Jokanović</div>

									<svg class="hidden md:block mx-1 h-5 w-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
										<path d="M11 0h3L9 20H6l5-20z" />
									</svg>

									<div class="text-base font-medium text-gray-500">Generalni direktor</div>
								</div>
							</div>
						</footer>
					</blockquote>
				</div>
			</div>
		</section>

		<div class="relative py-16 bg-white">
			<div class="hidden absolute top-0 inset-x-0 h-1/2 lg:block" aria-hidden="true"></div>
			<div class="max-w-7xl mx-auto bg-secondary lg:bg-transparent lg:px-8">
				<div class="lg:grid lg:grid-cols-12">
					<div class="relative z-10 lg:col-start-1 lg:row-start-1 lg:col-span-4 lg:py-16 lg:bg-transparent">
						<div class="absolute inset-x-0 h-1/2 bg-white lg:hidden" aria-hidden="true"></div>
						<div class="max-w-md mx-auto px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0">
							<div class="aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1">
								<g-image class="object-cover object-center rounded-3xl shadow-2xl" src="~/assets/img/zasto-ubuntu.jpg" alt="" />
							</div>
						</div>
					</div>

					<div class="relative bg-primary lg:col-start-3 lg:row-start-1 lg:col-span-10 lg:rounded-3xl lg:grid lg:grid-cols-10 lg:items-center">
						<div class="hidden absolute inset-0 overflow-hidden rounded-3xl lg:block" aria-hidden="true">
							<svg class="absolute bottom-full left-full transform translate-y-1/3 -translate-x-2/3 xl:bottom-auto xl:top-0 xl:translate-y-0" width="42" height="31" viewBox="0 0 42 31" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M10.9614 -33.171L59.642 7.91296L0.200058 30.1334L10.9614 -33.171Z" fill="#F1F58F" />
							</svg>

							<svg class="absolute left-3/4 top-10" width="108" height="108" viewBox="0 0 108 108" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M35.9614 3.52831C46.6436 -0.250264 58.2477 -0.550111 69.1107 2.67175V2.67175C79.9737 5.89361 89.5379 12.4718 96.4325 21.4634V21.4634C103.327 30.4551 107.198 41.3986 107.491 52.7256V52.7256C107.784 64.0525 104.483 75.1814 98.0618 84.5171V84.5171C91.6408 93.8528 82.4291 100.916 71.7469 104.695V104.695C61.0648 108.473 49.4607 108.773 38.5977 105.551V105.551C27.7347 102.329 18.1705 95.7513 11.2759 86.7596V86.7596C4.38126 77.768 0.510216 66.8244 0.217533 55.4975V55.4975C-0.0751496 44.1705 3.22556 33.0417 9.64658 23.7059V23.7059C16.0676 14.3702 25.2793 7.30689 35.9614 3.52831V3.52831Z"
									fill="#FE6600"
								/>
							</svg>

							<svg class="absolute left-full transform -translate-x-20 translate-y-32" width="73" height="87" viewBox="0 0 73 87" fill="none" xmlns="http://www.w3.org/2000/svg">
								<rect width="47.8991" height="92.966" rx="23.9496" transform="matrix(0.829246 0.558884 -0.548292 0.836287 41.9727 -9.11035)" fill="#11A858" />
							</svg>

							<svg class="absolute top-3/4 left-full transform translate-y-1/3 -translate-x-full" width="75" height="103" viewBox="0 0 75 103" fill="none" xmlns="http://www.w3.org/2000/svg">
								<rect width="59.4361" height="115.358" rx="29.718" transform="matrix(0.970418 -0.241432 0.253756 0.967268 -6.2959 8.5144)" fill="#A377FF" />
							</svg>

							<svg class="absolute left-3/4 top-80" width="112" height="104" viewBox="0 0 112 104" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M0.919511 15.5038L111.126 0.432697L70.417 103.496L0.919511 15.5038Z" fill="#7DD3FC" />
							</svg>

							<svg class="absolute left-3/4 -bottom-1" width="83" height="41" viewBox="0 0 83 41" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M3.87677 25.3803C7.19301 17.4018 12.9499 10.678 20.3225 6.17247C27.695 1.66697 36.3047 -0.388888 44.9174 0.299551C53.5302 0.987993 61.704 4.38539 68.2672 10.0048C74.8304 15.6242 79.4462 23.1772 81.4529 31.5812C83.4597 39.9851 82.7544 48.8087 79.4381 56.7872C76.1219 64.7657 70.365 71.4895 62.9924 75.995C55.6199 80.5005 47.0103 82.5564 38.3975 81.868C29.7847 81.1795 21.611 77.7821 15.0477 72.1627C8.48451 66.5433 3.86874 58.9903 1.86199 50.5863C-0.144757 42.1824 0.560531 33.3588 3.87677 25.3803Z"
									fill="#EC4899"
								/>
							</svg>
						</div>
						<div class="relative max-w-md mx-auto py-12 px-4 space-y-6 sm:max-w-3xl sm:py-16 sm:px-6 lg:max-w-none lg:p-0 lg:col-start-4 lg:col-span-6">
							<h2 class="text-3xl text-white" id="join-heading">Pridruži se našem timu</h2>
							<p class="text-lg text-white">Ukoliko ste zainteresovani za rad sa nama, posetite našu stranice za karijeru i dodatno se informišite.</p>
							<a class="block w-full py-3 px-5 text-center bg-white border border-transparent rounded-md shadow-md text-base font-medium text-green-800 hover:bg-gray-50 sm:inline-block sm:w-auto" href="/karijera/">Konkurišite za posao</a>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="py-16 overflow-hidden lg:py-24">
			<div class="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
				<div class="relative mt-12 lg:mt-12 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center" id="zasto-ubuntu">
					<div class="relative">
						<h1 class="text-3xl text-primary tracking-tight sm:text-5xl">Šta Ubuntu čini drugačijim?</h1>
						<p class="mt-6 text-lg text-gray-500">
							Misija Ubuntu centra je da svima omogući lako dostupnu psihološku pomoć i lični rast i razvoj. Uz pomoć motivisanih i visokokvalifikovanih stručnjaka iz oblasti mentalnog zdravlja kroz savetovanje, psihoterapiju, radionice i
							treninge zajedno podižemo kvalitet života naših klijenata.
						</p>

						<div class="mt-10 flex text-base max-w-prose mx-auto lg:max-w-none">
							<!-- <div>
								<a href="/kontakt/" class="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-3xl text-white bg-secondary "> Kontaktirajte nas </a>
							</div> -->
						</div>
					</div>

					<div class="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
						<g-image class="relative mx-auto" width="490" src="~/assets/img/zasto-ubuntu-1.png" alt="" />
					</div>
				</div>

				<div class="relative mt-12 sm:mt-16 lg:mt-32">
					<div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
						<div class="lg:col-start-2">
							<p class="mt-3 text-lg text-gray-500">
								Kroz sistemsku podršku, redovnu superviziju, stručno usavršavanje i neformalna druženja vodimo brigu o našim saradnicima jer nam je iskustvo pokazalo da to rezultira kvalitetnim odnosima sa klijentima i uspešnom saradnjom.
							</p>
							<p class="mt-3 text-lg text-gray-500">Naša vizija je društvo u kome mentalno zdravlje, lični rast i razvoj i odlazak na psihoterapiju nisu tabu tema, već normalna svakodnevica.</p>
						</div>

						<div class="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
							<g-image class="relative mx-auto" width="490" src="~/assets/img/zasto-ubuntu-2.png" alt="" />
						</div>
					</div>
				</div>

				<div class="relative mt-12 lg:mt-32 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
					<div class="relative">
						<h2 class="text-3xl text-primary tracking-tight sm:text-4xl">Mi smo tu da Vam pomognemo</h2>
						<p class="mt-6 text-lg text-gray-500">Želeli bismo da psihoterapiju i naš ostali edukativni materijal učinimo dostupnim svim ljudima kojima su neophodni.</p>
						<p class="mt-6 text-lg text-gray-500">Predano radimo na tome da naš Centar bude sinonim za zadovoljne i stručne saradnike i kvalitetan sadržaj dostupan svima.</p>

						<div class="mt-10 flex text-base max-w-prose mx-auto lg:max-w-none">
							<!-- <div>
								<a href="/kontakt/" class="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-3xl text-white bg-secondary "> Kontaktirajte nas </a>
							</div> -->
						</div>
					</div>

					<div class="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
						<g-image class="relative mx-auto" width="490" src="~/assets/img/zasto-ubuntu-3.png" alt="" />
					</div>
				</div>
			</div>
		</div>

	
		<div class="relative mt-24 sm:mt-32 sm:py-16">
			<div class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
				<div aria-hidden="true" class="hidden sm:block">
					<svg class="absolute -top-10 ml-10 left-3/4" style="" width="327" height="189" viewBox="0 0 327 189"
						fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd"
							d="M125.487 188.274H80.906C79.4363 188.274 78.3721 186.655 78.767 185.019L85.0621 158.933C85.3305 157.824 86.2052 157.057 87.2019 157.057H131.783C133.253 157.057 134.317 158.676 133.922 160.311L127.626 186.397C127.358 187.506 126.484 188.274 125.487 188.274Z"
							fill="#57B9A2" />
						<path fill-rule="evenodd" clip-rule="evenodd"
							d="M292.01 116.92H214.605C212.053 116.92 210.206 114.487 210.89 112.03L221.822 72.8458C222.288 71.1798 223.806 70.0273 225.537 70.0273H302.942C305.493 70.0273 307.341 72.4588 306.656 74.9163L295.724 114.101C295.259 115.767 293.741 116.92 292.01 116.92Z"
							fill="#57B9A2" />
						<path fill-rule="evenodd" clip-rule="evenodd"
							d="M97.1714 166.417C99.8724 164.89 109.299 161.306 112.384 164.55C116.883 169.283 107.975 169.76 107.561 168.218C107.237 167.015 115.793 166.074 116.105 166.057C119.626 165.864 128.251 165.392 129.467 170.136C127.312 168.131 127.871 166.967 131.144 166.641C131.688 166.471 132.231 166.301 132.774 166.13C135.534 165.39 138.275 165.384 141.079 165.72C141.894 165.817 141.888 164.538 141.079 164.442C137.533 164.017 120.547 165.621 126.716 172.707C126.864 172.876 127.13 172.927 127.338 172.871C134.915 170.809 128.732 166.005 124.257 165.188C121.697 164.72 104.768 163.6 105.536 169.218C106.039 172.898 115.194 169.955 115.19 166.598C115.178 158.825 99.7444 163.494 96.5251 165.314C95.809 165.719 96.453 166.823 97.1714 166.417Z"
							fill="#4F266A" />
						<path fill-rule="evenodd" clip-rule="evenodd"
							d="M91.9323 176.447C94.6333 174.92 104.06 171.336 107.145 174.579C111.644 179.312 102.736 179.79 102.322 178.247C101.998 177.045 110.554 176.104 110.866 176.087C114.387 175.894 123.012 175.422 124.228 180.165C122.073 178.161 122.631 176.996 125.905 176.671C126.449 176.5 126.991 176.33 127.535 176.16C130.295 175.42 133.036 175.414 135.84 175.749C136.655 175.847 136.648 174.568 135.84 174.471C132.294 174.047 115.307 175.651 121.477 182.737C121.625 182.906 121.891 182.957 122.099 182.901C129.676 180.839 123.493 176.034 119.017 175.217C116.458 174.749 99.5285 173.63 100.297 179.247C100.799 182.927 109.955 179.985 109.951 176.628C109.939 168.855 94.5053 173.523 91.2868 175.343C90.5707 175.748 91.214 176.853 91.9323 176.447Z"
							fill="#4F266A" />
						<path fill-rule="evenodd" clip-rule="evenodd"
							d="M54.0984 87.0402H2.56883C0.869885 87.0402 -0.359857 85.421 0.0955464 83.7857L7.37433 57.6996C7.6833 56.5908 8.69377 55.8237 9.84608 55.8237H61.3756C63.0746 55.8237 64.3051 57.4429 63.8489 59.0782L56.5717 85.1643C56.2612 86.2731 55.2507 87.0402 54.0984 87.0402Z"
							fill="#57B9A2" />
						<path fill-rule="evenodd" clip-rule="evenodd"
							d="M136.52 78.6351H80.6554C78.813 78.6351 77.4798 76.019 77.9751 73.3768L85.8641 31.23C86.1999 29.4376 87.2955 28.1978 88.5452 28.1978H144.409C146.25 28.1978 147.585 30.8139 147.09 33.4561L139.2 75.6029C138.865 77.396 137.769 78.6351 136.52 78.6351Z"
							fill="#57B9A2" />
						<path fill-rule="evenodd" clip-rule="evenodd"
							d="M33.0237 46.4403C32.9631 46.4403 32.901 46.4349 32.8397 46.4242C32.2831 46.323 31.9151 45.7897 32.017 45.2349C32.0761 44.91 38.283 12.6996 68.5558 3.21984C98.7803 -6.24617 116.054 8.11262 116.776 8.72948C117.205 9.09654 117.254 9.74022 116.889 10.1701C116.522 10.6 115.877 10.6513 115.446 10.2851C115.278 10.141 98.2559 -3.9381 69.1669 5.17159C40.0617 14.2859 34.0863 45.2893 34.0295 45.6004C33.9391 46.0947 33.509 46.4403 33.0237 46.4403Z"
							fill="#1B1C1C" />
						<path fill-rule="evenodd" clip-rule="evenodd"
							d="M114.458 13.2167L121.867 14.5914L119.666 7.09937L114.458 13.2167ZM123.318 16.9241C123.255 16.9241 123.193 16.9188 123.131 16.9073L112.345 14.9065C111.986 14.8398 111.689 14.587 111.568 14.2429C111.446 13.8996 111.515 13.5164 111.752 13.2383L119.335 4.33242C119.579 4.04583 119.96 3.91939 120.328 3.99526C120.696 4.07342 120.991 4.34698 121.097 4.70791L124.3 15.6138C124.4 15.954 124.315 16.3234 124.077 16.5862C123.881 16.8046 123.604 16.9241 123.318 16.9241Z"
							fill="#1B1C1C" />
						<path fill-rule="evenodd" clip-rule="evenodd"
							d="M11.6785 67.3745C14.3795 65.8473 23.8057 62.2634 26.8908 65.5071C31.3904 70.2405 22.4824 70.7179 22.0677 69.1753C21.7441 67.973 30.3002 67.032 30.6122 67.0144C34.1328 66.822 42.7579 66.35 43.9738 71.0934C41.8187 69.0887 42.3783 67.9247 45.6513 67.5983C46.1948 67.4282 46.7376 67.2581 47.2812 67.0879C50.0412 66.3477 52.7821 66.3416 55.5866 66.6772C56.4015 66.7745 56.3946 65.4956 55.5866 65.399C52.0399 64.9745 35.0543 66.5784 41.223 73.6643C41.3709 73.8336 41.637 73.885 41.8455 73.829C49.4233 71.7669 43.2393 66.9623 38.7635 66.1454C36.2043 65.6772 19.2747 64.5576 20.0429 70.1753C20.5458 73.8551 29.7014 70.9125 29.6968 67.5554C29.6853 59.7829 14.2515 64.4511 11.033 66.2711C10.3169 66.6764 10.9601 67.7807 11.6785 67.3745Z"
							fill="#4F266A" />
						<path fill-rule="evenodd" clip-rule="evenodd"
							d="M6.43996 77.4033C9.14095 75.8761 18.5672 72.2922 21.6523 75.5359C26.1519 80.2685 17.2447 80.7467 16.8291 79.2034C16.5056 78.0018 25.0617 77.0608 25.3737 77.0432C28.8935 76.8501 37.5193 76.3788 38.7352 81.1214C36.5801 79.1175 37.1398 77.9528 40.4127 77.6271C40.9563 77.4562 41.4991 77.2869 42.0427 77.1168C44.8027 76.3765 47.5435 76.3704 50.348 76.706C51.163 76.8033 51.1561 75.5236 50.348 75.4271C46.8014 75.0033 29.8158 76.6064 35.9844 83.6931C36.1324 83.8617 36.3984 83.9138 36.607 83.8571C44.1848 81.7957 38.0008 76.9911 33.5249 76.1734C30.9658 75.706 14.0361 74.5857 14.8044 80.2041C15.3073 83.8839 24.4629 80.9406 24.4575 77.5842C24.4468 69.8117 9.01291 74.4799 5.79366 76.2999C5.07758 76.7045 5.72159 77.8095 6.43996 77.4033Z"
							fill="#4F266A" />
						<path fill-rule="evenodd" clip-rule="evenodd"
							d="M100.265 38.147C100.216 39.3785 100.166 40.6076 100.033 41.8344C99.9563 43.5709 99.6052 45.2414 98.9796 46.8452C99.0417 48.3502 98.4782 48.7839 97.2875 48.1433C94.6272 48.1648 97.9231 46.4245 98.5579 45.9594C99.632 45.1739 100.701 44.4621 101.864 43.8191C103.2 43.0804 105.312 41.7065 106.857 41.6038C107.37 41.4452 107.884 41.2873 108.396 41.1287C108.732 43.59 109.068 46.0506 109.406 48.5119C109.591 47.5709 109.777 46.6284 109.962 45.6866C110.375 45.354 110.787 45.0222 111.2 44.6896C111.968 43.7969 113.05 43.0636 113.899 42.2398C115.476 40.7111 117.2 38.5049 119.233 37.626C124.386 35.3999 124.576 42.259 123.949 45.7433C123.86 46.2291 123.727 47.2322 123.149 47.1916C123.571 47.2222 125.313 45.1686 125.682 44.8375C126.464 44.1356 128.069 42.3701 129.134 42C130.531 40.4536 131.411 41.1578 131.776 44.1134C133.435 45.3195 133.823 46.5579 132.945 47.8284C132.591 48.5671 133.694 49.2161 134.049 48.4736C135.332 45.7839 136.519 38.2696 131.614 39.1769C128.601 39.7333 125.565 43.1617 123.499 45.0981C121.34 47.1242 119.565 48.7541 120.239 51.8315C120.328 52.2392 120.837 52.4123 121.179 52.2131C124.196 50.456 125.72 46.2981 125.751 42.8835C125.772 40.6383 124.711 36.0144 122.149 35.3355C118.961 34.4911 114.87 39.5179 112.995 41.3356C109.994 44.2452 106.788 45.6697 107.95 50.1978C108.078 50.6997 108.663 50.7732 109.019 50.4797C111.533 48.4085 115.758 42.3425 111.083 39.9003C107.072 37.8053 98.3647 43.9371 95.8094 46.482C94.4141 47.8721 93.5193 51.2767 96.4289 51.3955C101.434 51.5993 101.432 40.9287 101.545 38.147C101.578 37.324 100.298 37.3256 100.265 38.147Z"
							fill="#4F266A" />
						<path fill-rule="evenodd" clip-rule="evenodd"
							d="M92.826 64.4592C95.2088 62.04 97.9757 60.0553 101.243 59.0131C103.621 58.2537 104.604 57.5595 105.54 60.0139C106.428 62.3465 105.077 63.5174 103.317 65.076C102.26 66.0124 100.942 66.7665 99.6908 67.4201C98.8237 67.7971 97.9566 68.1749 97.0902 68.5519C98.0317 67.6309 98.9739 66.7098 99.9146 65.7879C101.253 64.9917 103.284 64.7642 104.76 64.3159C105.406 64.1205 106.052 63.9243 106.698 63.7274C108.675 62.7756 109.333 64.109 108.673 67.7297C109.007 67.9872 109.343 68.2454 109.677 68.5037C111.487 66.099 113.569 64.3527 116.328 63.204C117.208 62.7626 118.133 62.4561 119.102 62.2829C123.163 64.1243 123.984 65.7887 121.562 67.2784C121.927 67.4293 122.291 67.5795 122.654 67.7305C124.291 66.3695 126.079 65.8232 128.019 66.0929C128.843 66.122 128.842 64.8431 128.019 64.8147C125.676 64.7312 121.631 64.6362 121.375 67.7305C121.327 68.3213 122.088 68.5221 122.467 68.1818C125.149 65.7841 126.66 61.7794 121.942 60.807C116.871 59.7626 111.338 64.1825 108.573 67.8584C108.111 68.4722 109.063 69.0738 109.578 68.6332C111.208 67.2354 113.492 64.699 111.444 62.5978C109.69 60.7986 106.205 62.5411 104.42 63.0837C102.174 63.7664 96.8449 64.3603 95.5722 66.9213C94.919 68.2355 94.9267 69.5382 96.5213 69.9543C100.189 70.9106 110.251 62.24 108.397 58.1756C107.601 56.4292 104.62 56.9357 103.22 57.1671C98.8221 57.8966 94.9888 60.4423 91.9213 63.5542C91.3425 64.1412 92.2471 65.0461 92.826 64.4592Z"
							fill="#4F266A" />
						<path fill-rule="evenodd" clip-rule="evenodd"
							d="M227.731 89.4561C229.371 86.6592 231.637 84.6277 234.836 83.7319C236.567 83.2377 238.315 83.1725 240.077 83.5381C241.154 86.073 240.904 88.24 239.327 90.0408C239.717 90.0914 240.106 90.1427 240.496 90.1933C239.973 88.6216 244.941 86.3189 246.105 86.0737C248.694 85.5266 256.6 84.1664 252.027 92.4025C252.417 92.5665 252.807 92.7297 253.196 92.8945C254.132 89.5059 256.275 87.0599 259.335 85.3473C260.541 84.6722 261.84 84.0806 263.159 83.6622C263.891 83.3902 264.647 83.2178 265.43 83.145C268.367 82.1158 270.302 83.7764 271.235 88.1251C271.624 88.2891 272.014 88.4531 272.404 88.617C273.391 85.4469 275.314 83.5097 278.314 82.2116C279.692 81.5181 281.165 81.1511 282.733 81.112C284.624 80.633 285.881 81.5173 286.504 83.7634L287.126 84.8323C288.914 83.0859 294.524 79.9986 297.117 82.1948L297.895 84.84C298.362 83.7235 299.105 82.9312 300.126 82.4653C301.534 81.5633 303.358 81.0576 304.944 80.5955C311.667 78.6323 318.725 78.5403 325.579 79.7802C326.384 79.925 326.729 78.6936 325.919 78.5472C317.322 76.9924 299.153 76.0445 295.212 86.2699C295.044 86.7029 295.562 87.2285 295.998 87.0553C298.405 86.1051 303.019 84.2216 299.367 81.8055C295.197 79.0461 289.517 80.7081 286.222 83.9273C285.772 84.3664 286.229 85.1864 286.844 84.9963C290.264 83.9396 288.277 80.4706 285.609 79.8974C279.525 78.5893 272.967 82.5074 271.17 88.2776C270.951 88.9826 271.966 89.378 272.339 88.7695C275.326 83.9044 269.471 81.1219 265.327 81.7764C259.388 82.7135 253.599 86.6293 251.963 92.555C251.772 93.2455 252.775 93.6884 253.132 93.0478C260.632 79.5395 237.165 84.2346 239.262 90.5328C239.439 91.0646 240.125 91.1542 240.431 90.6853C242.853 86.9848 244.808 82.7411 238.937 82.079C233.808 81.5005 229.133 84.535 226.627 88.8109C226.21 89.522 227.314 90.1665 227.731 89.4561Z"
							fill="#4F266A" />
						<path fill-rule="evenodd" clip-rule="evenodd"
							d="M226.904 102.422C230.558 98.3816 235.445 95.6107 240.974 95.3142C244.106 95.1456 249.326 96.6199 244.713 99.8506C242.732 101.238 240.543 101.984 238.203 102.458C238.444 102.771 238.685 103.084 238.926 103.396C241.625 99.2031 246.073 97.5249 250.725 96.4912C252.901 96.0077 255.14 95.6536 257.352 95.4084C258.493 95.282 259.637 95.1862 260.783 95.1188C260.037 97.3533 258.652 98.5495 256.629 98.7081C256.869 99.0215 257.11 99.3341 257.35 99.6476C259.648 96.0375 264.269 94.6605 268.223 93.8467C270 93.4804 274.619 91.9126 274.55 95.6751C274.528 96.8621 270.867 98.4475 269.934 98.9525C270.227 99.2437 270.518 99.5349 270.81 99.8261C272.294 96.5165 277.528 95.7479 280.659 95.3494C282.136 95.1601 283.558 95.0375 285.046 95.0988C286.463 95.1586 295.026 95.613 287.864 99.8407C288.155 100.133 288.446 100.424 288.739 100.715C291.597 96.2927 298.17 94.7203 303.18 95.341C305.846 95.6713 307.708 97.5303 310.442 97.5855C311.266 97.6023 311.266 96.3241 310.442 96.308C307.916 96.2559 305.917 94.3096 303.45 93.9846C301.625 93.7456 299.622 94.1318 297.808 94.4007C293.578 95.0299 290.012 96.3908 287.634 100.071C287.281 100.616 287.973 101.261 288.509 100.944C292.811 98.4054 293.1 94.7586 287.815 94.0276C282.715 93.3226 272.222 93.5686 269.705 99.1816C269.451 99.7464 269.981 100.381 270.58 100.056C272.819 98.8429 280.134 93.9073 274.428 92.1057C269.05 90.4076 259.249 94.285 256.245 99.0016C255.932 99.4943 256.449 100.061 256.968 99.941C260.209 99.1954 266.991 93.7073 259.925 93.9019C252.233 94.1126 242.285 95.8169 237.821 102.752C237.499 103.252 238.029 103.795 238.544 103.691C241.541 103.083 253.116 98.3226 246.571 94.7985C239.921 91.2168 230.354 96.7019 226 101.518C225.449 102.127 226.351 103.035 226.904 102.422Z"
							fill="#4F266A" />
					</svg>
				</div>
				<div class="relative rounded-2xl px-6 py-10 bg-primary overflow-hidden shadow-xl sm:px-12 sm:py-20">
					<div aria-hidden="true" class="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0">
						<svg class="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice"
							xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1463 360">
							<path class="text-purple-500 text-opacity-20" fill="currentColor"
								d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z" />
							<path class="text-purple-600 text-opacity-40" fill="currentColor"
								d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z" />
						</svg>
					</div>
					<div class="relative">
						<div class="text-center">
							<h2 class="text-3xl text-white tracking-tight sm:text-4xl">Saveti za psihološki razvoj</h2>
							<p class="mt-6 mx-auto max-w-2xl text-lg text-white">Želite da budete u toku sa našim objavama? Obećavamo
								da nećemo slati više od jednog mejla nedeljno 😊</p>
						</div>
						<form @submit.prevent="submit" class="mt-12 sm:mx-auto sm:max-w-lg sm:flex" id="newsletter"
							name="newsletter" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
							<div class="min-w-0 flex-1">
								<input type="hidden" name="form-name" value="newsletter" />
								<p hidden>
									<label> Don’t fill this out: <input name="bot-field" /> </label>
								</p>
								<label for="cta-email" class="sr-only">Unesite imejl adresu</label>
								<input :class="{ 'form-group--error border border-red-500': $v.formData.email.$error }" id="email"
									name="email" type="email"
									class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
									:invalid="$v.formData.email.$error" v-model="$v.formData.email.$model"
									placeholder="Upišite Vašu Email adresu" />
							</div>
							<div class="mt-4 sm:mt-0 sm:ml-3">
								<button :disabled="formData.submitStatus === 'PENDING'" type="submit"
									class="block w-full rounded border border-transparent px-5 py-3 bg-secondary text-base font-medium text-white shadow focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-green-500 sm:px-10">
									Prijavite se
								</button>
								<div class="mt-3 rounded-full px-5 py-3 text-center text-base text-green-900 bg-green-100"
									v-if="formData.submitStatus === 'OK'">
									<p class="typo__p">Poruka je poslata!</p>
								</div>
								<div class="mt-3 rounded-full px-5 py-3 text-center text-base text-red-900 bg-red-100"
									v-if="formData.submitStatus === 'ERROR'">
									<p class="typo__p">Popunite ispravno formu.</p>
								</div>
								<div class="mt-3 rounded-full px-5 py-3 text-center text-base text-blue-900 bg-blue-100"
									v-if="formData.submitStatus === 'PENDING'">
									<p class="typo__p">Poruka se šalje...</p>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</Layout>
</template>

<script>
	//importovane komponente
	import CardItem from "../components/CardItem.vue";
	import {
		required,
		email
	} from "vuelidate/lib/validators";

	const hobbyFeatures = [
		"✓ Stručna psihološka procena, koja služi kako biste dobili najboljeg psihoterapeuta (pod supervizijom) baš za vašu problematiku",
		"✓ Motivisani saradnici na početku edukacijskog puta koji rade pod supervizijom",
		"✓ Dostupni su Vam saradnici koji dolaze iz različitih psihoterapijskih škola",
		"✓ Ovaj projekat je namenjen učenicima i aktivnim studentima između 16 i 25 godina starosti",
		"✓ Seanse se održavaju radnim danima i vikendom od 9 do 14 časova",
		"✓ Dostupni su Vam saradnici koji dolaze iz različitih psihoterapijskih škola",
		"✓ Ovaj projekat je namenjen učenicima i aktivnim studentima između 16 i 25 godina starosti",
		"✓ Seanse se održavaju radnim danima i vikendom od 9 do 14 časova",
	];
	const growthFeatures = [
		"✓ Iskusniji savetnici koji rade pod supervizijom i psihoterapeuti",
		" ✓ Dostupni su savetnici i psihoterapeuti iz različitih psihoterapijskih škola",
		"✓ Kvalitetna psihoterapijska podrška",
		" ✓ Kontakt psihoterapeuta dobija se u roku od 48 časova",
		"✓ Kontinuirana podrška u periodu od godinu dana po fiksnoj ceni",
	];



	// meta deskripcija
	export default {
		metaInfo: {
			title: "Psihološko savetovalište Ubuntu Beograd Novi Sad Online",
			titleTemplate: "Psihološko savetovalište Ubuntu Beograd Novi Sad Online",

			meta: [{
					name: "title",
					content: "Psihološko savetovalište Ubuntu Beograd Novi Sad Online",
				},
				{
					name: "description",
					content: "Lako dostupna pomoć psihoterapeuta. Beograd Novi Sad i Online. Zakaži razgovor sa psihoterapeutom. Psihološko savetovalište Ubuntu",
				},

				{
					key: "og:title",
					name: "og:title",
					content: "Psihološko savetovalište Ubuntu Beograd Novi Sad Online",
				},

				{
					key: "og:description",
					name: "og:description",
					content: "Lako dostupna pomoć psihoterapeuta. Beograd Novi Sad i Online. Zakaži razgovor sa psihoterapeutom. Psihološko savetovalište Ubuntu",
				},
				{
					key: "og:image",
					property: "og:image",
					content: "https://ubuntucentar.com/assets/static/pocenta-1.9e5588a.23e905e0f6067f80bfb7474777de8892.jpg",
				},
				{
					key: "twitter:title",
					name: "twitter:title",
					content: "Psihološko savetovalište Ubuntu Beograd Novi Sad Online",
				},
				{
					key: "twitter:description",
					name: "twitter:description",
					content: "Lako dostupna pomoć psihoterapeuta. Beograd Novi Sad i Online. Zakaži razgovor sa psihoterapeutom. Psihološko savetovalište Ubuntu",
				},
				{
					key: "twitter:image",
					property: "twitter:image",
					content: "https://ubuntucentar.com/assets/static/pocenta-1.9e5588a.23e905e0f6067f80bfb7474777de8892.jpg",
				},
			],
		},
		//definisane komponente untar stranice

		data() {
			//povratni novi objekti
			return {
				hobbyFeatures,
				growthFeatures,
				formData: {
					email: "",
					submitStatus: null,
				},
				showModal: false,
			};
		},
		// validacija formi

		validations: {
			formData: {
				email: {
					required,
					email,
				},
			},
		},
		methods: {

			onClickTwo() {
				let element = document.getElementById("scroll");
				element.scrollIntoView({
					behavior: "smooth",
					block: "start",
				});
			},

			//javascript objekat se pretvara u string radi dalje obrade
			encode(data) {
				return Object.keys(data)
					.map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
					.join("&");
			},

			// slanje poruke
			submit(e) {
				console.log("submit!");
				this.$v.$touch();

				// neispravno popunjena forma dobijanje greske
				if (this.$v.formData.$invalid) {
					this.formData.submitStatus = "ERROR";
				} else {
					// skupljeni podaci se salju  POST metodom
					fetch("/", {
							method: "POST",
							headers: {
								"Content-Type": "application/x-www-form-urlencoded",
							},
							body: this.encode({
								"form-name": e.target.getAttribute("name"),
								...this.formData,
							}),
						})
						// dobijanje odgovora sa servera
						.then(
							() => (this.formData.submitStatus = "PENDING"),

							setTimeout(() => {
								this.formData.submitStatus = "OK";
							}, 500)
						)
						.catch((error) => alert(error));
				}
			},

			//funkcija click za scrollovanje do elementa
		
		},
		mount() {
			this.show();
		},
		// pozivanje komponente
		components: {
			CardItem,
		},
	};
</script>



<style scoped>
	.button-one {
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}

	.modal-vue .overlay {
		position: fixed;
		z-index: 9998;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
	}

	.modal-vue .modal {
		position: fixed;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		width: 820px;
		height: auto;
		z-index: 9999;
		margin: 0 auto;
		background-color: #fff;
		top: 40%;
	}

	.modal-vue .close {
		position: absolute;
		right: 0;
	}

	.video-container iframe {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

	@media screen and (max-width: 600px) {
		.modal-vue .modal {
			width: 360px;
			height: auto;
		}
	}
</style>