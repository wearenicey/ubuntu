<template>
	<transition name="fade" appear>
		<div>
			<back-to-top bottom="50px" right="50px" style="position: fixed; z-index: 99; width: 60px; height: 60px; padding: 10px 16px; border-radius: 50%; font-size: 22px; line-height: 22px">
				<button type="button" class="btn btn-info btn-to-top border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600">
					<svg class="icon" viewBox="0 0 16 16">
						<title>Go to top of page</title>
						<g stroke-width="1" stroke="currentColor"><polyline fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="15.5,11.5 8,4 0.5,11.5 "></polyline></g>
					</svg>
				</button>
			</back-to-top>
			<navigation-ns></navigation-ns>

			<div class="bg-cover bg-bottom w-full mb-20" style="background-image: url(../novi-sad.png)">
				<div class="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-5">
					<div class="mt-10">
						<h2 class="text-4xl text-purple-800 sm:text-5xl">
							<span class="block">Novi Sad je vaš grad, sasa</span>
							<span class="block">treba vam psihoterapeut?</span>
						</h2>
						<p class="text-gray-700 text-xl pt-4">Naša Ubuntu priča počela je baš u ovom gradu 2016. godine.</p>
						<svg class="hidden lg:block absolute left-full transform -translate-x-96 -translate-y-1/8" width="121" height="106" viewBox="0 0 121 106" fill="none" xmlns="http://www.w3.org/2000/svg">
							<ellipse cx="60.1786" cy="52.7104" rx="52" ry="42" transform="rotate(13.1245 60.1786 52.7104)" fill="#FEF3C7" />
							<g clip-path="url(#clip0_60:179)">
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M88.5683 63.4854C66.6607 77.0314 40.9443 72.8334 27.7278 50.4561C27.2879 49.7111 26.3274 49.4636 25.587 49.8954C24.84 50.3388 24.5918 51.3003 25.0317 52.0454C39.1917 76.0416 66.7355 80.6653 90.2134 66.1539C90.9466 65.7025 91.1777 64.7309 90.7242 63.9934C90.2641 63.2674 89.3016 63.0341 88.5683 63.4854Z"
									fill="#F59E0B"
								/>
								<path
									d="M49.0881 51.5542C51.2706 52.8142 54.0612 52.0665 55.3213 49.8841C56.5813 47.7017 55.8335 44.911 53.6511 43.651C51.4686 42.391 48.678 43.1387 47.418 45.3211C46.158 47.5036 46.9057 50.2942 49.0881 51.5542Z"
									fill="#F59E0B"
								/>
								<path
									d="M67.874 56.7956C70.0138 58.031 72.7499 57.2979 73.9853 55.1581C75.2207 53.0184 74.4875 50.2823 72.3478 49.0469C70.208 47.8115 67.4719 48.5446 66.2365 50.6844C65.0011 52.8241 65.7343 55.5602 67.874 56.7956Z"
									fill="#F59E0B"
								/>
							</g>
							<defs>
								<clipPath id="clip0_60:179">
									<rect width="65" height="65" fill="white" transform="translate(45.5 15) rotate(30)" />
								</clipPath>
							</defs>
						</svg>
					</div>
					<div class="mt-10 flex block justify-center">
						<div class="inline-flex">
							<a href="tel:+381658286881" class="inline-flex items-center rounded-3xl justify-center px-5 py-3 border border-transparent text-base font-medium text-white bg-green-600 hover:bg-green-700">
								Nazovi za besplatnu konsultaciju
							</a>
						</div>
					</div>

					<div class="pt-20 md:pt-48 lg:pt-64 relative flex justify-center">
						<g-image src="~/assets/img/slika-1.png"></g-image>
					</div>
				</div>
			</div>

			<!-- nova sekcija -->
			<div class="py-16 overflow-hidden lg:py-24">
				<div>
					<svg class="hidden lg:block absolute mt-36" width="460" height="1086" viewBox="0 0 460 1086" fill="none" xmlns="http://www.w3.org/2000/svg">
						<circle cx="-83" cy="543" r="543" fill="#FEF2F2" />
					</svg>
					<svg class="hidden mt-96 lg:block absolute transform translate-y-96 translate-x-56" width="112" height="104" viewBox="0 0 112 104" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M0.919267 15.5038L111.126 0.432697L70.4167 103.496L0.919267 15.5038Z" fill="#7DD3FC" />
					</svg>
					<svg class="hidden lg:block absolute transform translate-y-96 translate-x-56" style="margin-top: 32rem" width="83" height="82" viewBox="0 0 83 82" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M3.87677 25.3803C7.19301 17.4018 12.9499 10.678 20.3225 6.17247C27.695 1.66697 36.3047 -0.388888 44.9174 0.299551C53.5302 0.987993 61.704 4.38539 68.2672 10.0048C74.8304 15.6242 79.4462 23.1772 81.4529 31.5812C83.4597 39.9851 82.7544 48.8087 79.4381 56.7872C76.1219 64.7657 70.365 71.4895 62.9924 75.995C55.6199 80.5005 47.0103 82.5564 38.3975 81.868C29.7847 81.1795 21.611 77.7821 15.0477 72.1627C8.48451 66.5433 3.86874 58.9903 1.86199 50.5863C-0.144757 42.1824 0.560531 33.3588 3.87677 25.3803Z"
							fill="#EC4899"
						/>
					</svg>
					<svg class="hidden lg:block absolute transform translate-y-96 translate-x-96 z-50" style="margin-top: 30rem" width="75" height="114" viewBox="0 0 75 114" fill="none" xmlns="http://www.w3.org/2000/svg">
						<rect width="59.4361" height="115.358" rx="29.718" transform="matrix(0.970418 -0.241432 0.253756 0.967268 -6.29614 8.51453)" fill="#A377FF" />
					</svg>
				</div>
				<div class="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
					<svg class="hidden lg:block absolute mt-96 z-50" width="108" height="108" style="margin-left: 70rem" viewBox="0 0 108 108" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M35.9614 3.52831C46.6436 -0.250264 58.2477 -0.550111 69.1107 2.67175C79.9737 5.89361 89.5379 12.4718 96.4325 21.4634C103.327 30.4551 107.198 41.3986 107.491 52.7256C107.784 64.0525 104.483 75.1814 98.0618 84.5171C91.6408 93.8528 82.4291 100.916 71.7469 104.695C61.0648 108.473 49.4607 108.773 38.5977 105.551C27.7347 102.329 18.1705 95.7513 11.2759 86.7596C4.38126 77.768 0.510216 66.8244 0.217533 55.4975C-0.0751496 44.1705 3.22556 33.0417 9.64658 23.7059C16.0676 14.3702 25.2793 7.30689 35.9614 3.52831Z"
							fill="#FE6600"
						/>
					</svg>
					<svg class="hidden lg:block absolute" width="60" height="65" viewBox="0 0 60 65" style="margin-left: 80rem; margin-top: 20rem" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M10.9614 0.828986L59.642 41.913L0.200058 64.1334L10.9614 0.828986Z" fill="#F1F58F" />
					</svg>
					<svg class="hidden lg:block absolute" style="margin-left: 80rem; margin-top: 30rem" width="73" height="87" viewBox="0 0 73 87" fill="none" xmlns="http://www.w3.org/2000/svg">
						<rect width="47.8991" height="92.966" rx="23.9496" transform="matrix(0.829246 0.558884 -0.548292 0.836287 41.9727 -9.11035)" fill="#11A858" />
					</svg>

					<div class="relative">
						<h2 class="text-center text-3xl leading-8 text-purple-800 sm:text-4xl">Novosadsko savetovalište Ubuntu</h2>
						<p class="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
							Projekat pokrenut 2016. godine od strane Ubuntu centra za rast i razvoj ljudskog potencijala sa namerom da našoj lokalnoj zajednici pružimo lako dostupnu psihološku pomoć.
						</p>
					</div>

					<div class="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
						<div class="relative">
							<h3 class="text-2xl text-gray-700 tracking-tight sm:text-3xl">Na koji način savetovalište funkcioniše?</h3>
							<p class="mt-3 text-lg text-gray-500">
								Projekat je samoodrživ i finansira se uz pomoć dobrovoljne donacije građana. Donacije se koriste isključivo u svrhu održavanja rada savetovališta i profesionalnog ulagaja u tim koji je angažovan u okviru projekta.
							</p>
						</div>

						<div class="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
							<g-image class="relative mx-auto" width="490" src="~/assets/img/novi-sad-1.jpg" alt="" />
						</div>
					</div>

					<div class="relative mt-12 sm:mt-16 lg:mt-24">
						<div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
							<div class="lg:col-start-2">
								<h3 class="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">Koji su prvi koraci?</h3>
								<p class="mt-3 text-lg text-gray-500">
									Pre početka samog psihoterapijskog rada vrši se psihološka procena ličnosti i motivacije za rad. Za ovaj prvi susret je nephodno odvojiti 2.000 dinara kao donaciju za rad savetovališta, dok je za ostalih 12 susreta, koliko
									je predviđeno ovim projektom, neophodno izdvojiti donaciju od minimum 1.000 dinara.
								</p>
								<a
									href="#"
									@click="onClickTwo()"
									class="
										text-center
										mt-4
										block
										rounded-3xl
										border border-transparent
										px-5
										py-3
										bg-green-600
										text-base
										font-medium
										text-white
										shadow
										hover:bg-indigo-700
										focus:outline-none focus:ring-2 focus:ring-indgio-500 focus:ring-offset-2
										sm:px-10
									"
								>
									Kontaktiraj nas za više informacija
								</a>
							</div>

							<div class="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
								<g-image class="relative mx-auto" width="490" src="~/assets/img/novi-sad-2.jpg" alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- end nova sekcija -->
			<!-- feature -->
			<div class="my-10 overflow-hidden">
				<div class="relative max-w-7xl mx-auto sm:py-48 px-4 sm:px-6 lg:px-8">
					<div class="text-center mb-20">
						<h2 class="text-3xl tracking-tight text-purple-800 sm:text-4xl">Psihoterapija dostupna svima</h2>
					</div>

					<div class="relative lg:grid lg:gap-x-8">
						<dl class="mt-10 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-4 sm:gap-x-8 sm:gap-y-10 lg:mt-0 lg:col-span-2">
							<div>
								<dt>
									<div class="flex items-center justify-center h-12 w-12">
										<!-- Heroicon name: outline/globe-alt -->
										<svg width="40" height="34" viewBox="0 0 40 34" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path
												d="M27.1997 0.364185C26.2317 0.436188 24.9037 0.772186 23.9397 1.18019C22.7557 1.68419 21.0077 2.76819 19.9437 3.65619C18.8317 4.58819 17.9397 5.43619 16.8397 6.60819C15.3317 8.20819 14.8477 8.91219 13.5798 11.3202C13.3398 11.7722 13.0478 12.3282 12.9278 12.5522L12.7118 12.9682L12.5718 12.7162C11.9998 11.6842 11.3638 11.1562 10.0678 10.6442C9.45575 10.4002 8.63176 10.3122 8.12376 10.4362C7.96776 10.4762 7.75976 10.4842 7.35176 10.4642C5.39576 10.3642 4.16776 10.5002 3.29176 10.9162C2.34376 11.3722 2.21976 11.7402 1.47976 16.3602C1.32376 17.3402 1.12776 18.5522 1.03976 19.0602C0.599764 21.6362 0.467765 23.5522 0.555764 26.1002C0.611764 27.7802 0.683764 28.4602 0.899764 29.3802C1.07976 30.1362 1.35976 30.7802 1.77176 31.3722C1.95176 31.6322 2.43176 32.0322 2.76376 32.2002C3.54776 32.6002 5.43576 33.0562 6.99976 33.2162C8.50376 33.3762 9.18375 33.3922 10.4558 33.3002C11.8678 33.1962 12.2278 33.0962 12.6118 32.7122C12.8438 32.4802 13.1798 31.8642 13.3798 31.3082C13.4398 31.1402 13.5037 31.0002 13.5157 31.0002C13.5317 31.0002 13.6158 31.0362 13.7037 31.0762C14.0037 31.2202 14.5477 31.3922 14.8397 31.4362C15.2157 31.4922 16.7237 31.6202 17.9797 31.7002C20.7797 31.8842 27.4157 31.8842 29.9597 31.7002C32.1037 31.5442 33.9677 31.2362 34.8197 30.9002C35.6717 30.5602 36.5117 29.8802 37.0317 29.1122C37.3037 28.7082 37.7157 27.9082 37.9317 27.3522C38.4797 25.9642 38.7357 24.9522 39.0997 22.7602C39.3677 21.1162 39.4957 20.1442 39.5997 18.9202C39.8197 16.2842 39.8037 14.9802 39.5357 14.0802C39.3837 13.5682 39.0357 13.0682 38.6077 12.7522C38.3397 12.5522 37.3197 12.0442 36.9597 11.9282C36.0797 11.6442 34.7477 11.4882 32.9357 11.4522C31.6797 11.4282 31.1197 11.4602 29.6997 11.6442C28.5357 11.7962 27.7597 11.8402 27.7597 11.7522C27.7597 11.6362 28.0557 10.7562 28.5837 9.30819C29.2677 7.43619 29.4037 7.01619 29.5997 6.22419C29.9317 4.87219 30.0597 3.87619 30.0277 2.87219C29.9917 1.59619 29.7517 1.12019 28.9357 0.692188C28.3157 0.372189 27.9677 0.304188 27.1997 0.364185ZM28.0397 2.62019C28.1437 2.68419 28.0117 3.79219 27.7797 4.80819C27.5997 5.59219 27.4077 6.21219 27.0037 7.35219C26.2797 9.38819 25.8357 10.8522 25.6997 11.6722C25.6117 12.1842 25.6517 12.4442 25.8877 12.8802C25.9757 13.0442 26.0997 13.2842 26.1677 13.4122C26.2357 13.5402 26.3637 13.7082 26.4557 13.7842C27.0557 14.2882 27.1597 14.3322 27.9037 14.4042C28.3837 14.4522 28.7677 14.4362 29.9997 14.3162C31.7357 14.1522 32.3317 14.1682 34.4837 14.4202C35.9917 14.6002 36.4757 14.7042 37.0917 14.9762L37.3077 15.0722L37.3317 15.3202C37.4957 16.8682 36.9597 22.3842 36.4437 24.5042C36.2877 25.1322 36.0077 25.9842 35.8277 26.3642C35.6077 26.8202 35.2477 27.3482 34.9317 27.6642C34.6277 27.9722 34.1037 28.3402 33.7477 28.4962C33.3557 28.6722 32.5037 28.8002 30.7997 28.9362C29.1077 29.0762 26.3837 29.1442 20.3997 29.2002C16.4157 29.2402 15.8077 29.2642 14.8197 29.4202C14.5997 29.4562 14.2797 29.5202 14.1037 29.5642C13.9317 29.6082 13.7837 29.6362 13.7717 29.6242C13.7638 29.6162 13.7917 29.2522 13.8357 28.8122C14.0797 26.4722 14.0877 24.6962 13.8797 21.9882C13.8357 21.4322 13.7557 20.3242 13.6997 19.5202C13.5798 17.7962 13.4678 16.5362 13.3558 15.6802C13.3118 15.3402 13.2678 14.9762 13.2517 14.8762C13.2318 14.7082 13.2398 14.6802 13.3278 14.6242C13.4478 14.5442 14.6237 13.2922 14.9437 12.9002C15.0677 12.7442 15.3277 12.4122 15.5197 12.1602C17.1117 10.0762 19.9077 7.19219 22.0797 5.39619C24.0477 3.76419 25.8397 2.78419 27.2197 2.58419C27.3957 2.56019 27.9837 2.58419 28.0397 2.62019ZM8.31976 12.0002L9.17976 12.0402L9.33575 12.2122C9.41975 12.3042 9.77575 12.7202 10.1238 13.1402C10.7118 13.8442 10.7678 13.9242 10.8838 14.2402C11.1918 15.0922 11.4678 16.7522 11.7038 19.1202C11.7598 19.6802 11.8758 20.8602 11.9598 21.7402C12.1878 24.0202 12.1958 24.1162 12.2398 25.1922C12.2878 26.3282 12.2478 27.3562 12.0958 29.0002C11.9638 30.4762 11.8838 30.8402 11.6158 31.1882C11.4118 31.4562 11.3878 31.4602 10.1198 31.4562C9.13175 31.4562 8.81976 31.4362 7.75976 31.3242C6.21976 31.1642 5.55176 31.0722 4.69976 30.9002C3.75976 30.7082 3.27576 30.5522 3.07976 30.3762C2.62376 29.9642 2.47976 29.0642 2.47976 26.6602C2.47976 23.9162 2.57576 22.6242 2.97976 19.8402C3.16776 18.5602 3.24376 17.9002 3.47976 15.6602C3.75976 12.9682 3.81576 12.5602 3.92776 12.4642C4.19976 12.2442 4.71176 12.0682 5.27976 12.0042C5.71176 11.9562 7.31976 11.9522 8.31976 12.0002Z"
												fill="#34D399"
											/>
										</svg>
									</div>
									<p class="mt-5 text-lg leading-6 font-medium text-gray-800">Izbor terapeuta</p>
								</dt>
								<dd class="mt-2 text-base text-gray-500">Nulti susret služi za procenu psihoterapijske motivacije, na osnovu čega naš tim efikasno odabere najboljeg terapeuta za vas.</dd>
							</div>

							<div>
								<dt>
									<div class="flex items-center justify-center h-12 w-12">
										<!-- Heroicon name: outline/scale -->
										<svg width="38" height="39" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path
												d="M22.9039 0.828152C22.8879 0.844151 22.7639 0.87215 22.6279 0.884151C22.3679 0.916149 21.7639 1.05215 21.6079 1.12015C21.5559 1.14415 21.4799 1.24015 21.4319 1.34415C21.2919 1.66815 21.3679 1.96415 21.7919 2.74015C22.0719 3.25615 22.1839 3.40015 22.4359 3.56815C22.5359 3.64015 22.6999 3.76015 22.7999 3.84415C22.9959 4.00415 23.5879 4.37615 24.8199 5.10015C26.8399 6.29215 29.0199 7.63615 28.9879 7.66415C28.9759 7.67615 28.6679 7.62015 28.2959 7.54415C27.0599 7.29215 26.1639 7.15615 24.7599 7.01215C23.8839 6.92415 21.3759 6.91215 20.5999 6.99215C19.8719 7.06815 18.2439 7.30415 17.4879 7.44415C15.7039 7.77215 12.7759 8.56015 11.4399 9.06815C8.79195 10.0761 6.86795 11.6441 4.93195 14.3801C3.71596 16.0961 2.91196 17.9562 2.29996 20.4562C1.61196 23.2761 1.26796 25.4482 1.03996 28.4202C0.863959 30.7402 0.863959 32.1882 1.03996 33.5082C1.15596 34.3722 1.24796 34.8442 1.51996 35.9002C1.65196 36.4042 1.79196 36.9922 1.83596 37.2042C1.92396 37.6482 2.06396 37.9522 2.24796 38.0962C2.36396 38.1842 2.38796 38.1922 2.45996 38.1442C2.56796 38.0722 2.66396 37.8922 2.76396 37.5562C2.84396 37.2962 2.84796 37.2122 2.82796 36.5442C2.81596 36.1482 2.76796 35.5402 2.72396 35.2002C2.46796 33.2242 2.51196 31.7282 2.89996 29.3802C3.25196 27.2522 3.58396 25.8442 4.37995 23.1202C5.20395 20.3001 5.39995 19.7281 5.81995 18.9321C6.35995 17.9081 7.28395 16.6481 8.39195 15.4282C9.61595 14.0801 11.1039 13.0521 12.8239 12.3681C13.9359 11.9241 16.4079 11.2321 18.0599 10.9001C19.8559 10.5401 20.9559 10.4281 22.6599 10.4241C25.0439 10.4201 27.3119 10.6601 30.0999 11.2001C30.9039 11.3561 32.1279 11.6402 32.1719 11.6761C32.1879 11.6921 31.6199 11.8841 30.9119 12.1001C27.7119 13.0681 26.7199 13.4441 25.9239 13.9761C24.8319 14.7041 23.6399 15.9562 23.1759 16.8601C22.9119 17.3721 22.8599 17.5361 22.9199 17.6801C22.9959 17.8641 23.1799 17.9002 24.0199 17.8961C24.8079 17.8921 25.3919 17.8242 26.3399 17.6362C27.4639 17.4161 27.9519 17.2561 28.9519 16.8041C29.1959 16.6922 30.2239 16.2481 31.2319 15.8201C33.2039 14.9761 34.7079 14.2521 35.4399 13.7961C35.9959 13.4481 36.5239 13.0441 36.6519 12.8681C36.7839 12.6922 37.1199 12.0041 37.1199 11.9121C37.1199 11.8721 37.1439 11.7961 37.1759 11.7481C37.3079 11.5441 37.4159 10.8441 37.3639 10.5681C37.3159 10.3321 37.1879 10.2121 36.5799 9.82815C35.5159 9.16415 34.6959 8.58015 34.1599 8.10015C33.2479 7.28815 32.9799 7.06415 31.8039 6.12015C30.2399 4.86815 26.8519 2.63615 25.1559 1.74415C23.9679 1.12015 23.2719 0.800152 23.0999 0.800152C23.0079 0.800152 22.9199 0.812149 22.9039 0.828152Z"
												fill="#34D399"
											/>
										</svg>
									</div>
									<p class="mt-5 text-lg leading-6 font-medium text-gray-800">Finansijska pristupačnost</p>
								</dt>
								<dd class="mt-2 text-base text-gray-500">Novac koji je neophodno izdvojiti za susret je daleko ispod redovne cene psihoterapije.</dd>
							</div>

							<div>
								<dt>
									<div class="flex items-center justify-center h-12 w-12">
										<!-- Heroicon name: outline/lightning-bolt -->
										<svg width="34" height="33" viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path
												d="M24.0196 0.624081C22.7516 0.71608 21.7316 0.880081 20.5876 1.16408C19.1116 1.53608 18.0356 1.94008 16.3596 2.75208C13.9876 3.90408 12.2476 5.06408 10.8036 6.45608C9.09163 8.11208 7.21163 10.8801 6.31963 13.0721C6.13163 13.5241 6.08763 13.6081 5.99963 13.6281C5.15563 13.8281 4.36363 14.1161 3.49963 14.5481C2.24363 15.1721 1.09563 15.9081 0.595633 16.4001C0.299633 16.7001 0.251633 16.8001 0.359633 16.9321C0.431633 17.0161 0.455633 17.0201 1.29963 17.0361C2.41963 17.0521 3.73963 16.9521 4.93163 16.7641L5.36363 16.6921L5.33163 16.9361C5.31563 17.0721 5.29963 17.5841 5.30363 18.0801C5.31163 19.3241 5.46763 20.3281 5.84363 21.5081C5.93163 21.7841 5.99963 22.0121 5.99163 22.0201C5.98363 22.0281 5.74763 22.1161 5.45963 22.2201C4.19563 22.6761 3.86763 22.8441 3.24763 23.3401C2.29963 24.1041 1.63563 24.9481 1.69563 25.3161C1.72363 25.5001 1.93163 25.6881 2.23563 25.8041C2.90763 26.0601 3.82763 26.2041 4.77963 26.2041C5.57563 26.2081 5.73963 26.1761 6.96763 25.7641L7.91163 25.4481L8.29563 25.9001C9.00763 26.7441 10.1476 27.7201 11.3796 28.5401C13.7516 30.1201 17.2436 31.4761 20.5356 32.1001C22.1596 32.4041 23.5516 32.5561 25.0796 32.5881C25.9636 32.6041 26.2836 32.5961 26.7116 32.5441C28.8356 32.2841 31.2276 31.5161 32.4636 30.6961C32.8676 30.4321 33.3876 29.9401 33.4236 29.7921C33.4636 29.6121 33.4236 29.5721 33.1316 29.5241C32.9836 29.4961 32.2756 29.3441 31.5596 29.1801C28.5036 28.4881 27.3556 28.3161 25.2316 28.2201C23.3516 28.1361 22.1916 28.0321 20.6196 27.8161C17.3596 27.3641 14.1676 26.3561 12.3596 25.2161C11.8956 24.9201 11.1076 24.3601 11.1276 24.3361C11.1356 24.3321 11.4636 24.2121 11.8596 24.0681C12.2556 23.9241 13.3796 23.5161 14.3596 23.1601C18.9516 21.4921 19.9836 21.1201 21.1396 20.7201C25.1756 19.3161 25.7916 19.0721 26.1276 18.7441C26.2676 18.6081 26.4396 18.2121 26.4396 18.0321C26.4396 17.9521 26.4076 17.9081 26.3116 17.8641C26.1516 17.7801 26.0516 17.7841 25.3156 17.8801C23.8156 18.0801 22.1076 18.3881 18.4596 19.1161C17.2516 19.3601 15.6196 19.6761 14.8396 19.8201C12.5476 20.2441 10.4676 20.7121 8.82763 21.1761L8.47963 21.2721L8.37963 21.1081C8.23563 20.8601 7.90363 20.0681 7.78363 19.6801C7.49963 18.7841 7.39163 18.0641 7.39563 17.1201C7.39963 16.7121 7.41163 16.3081 7.43163 16.2241L7.45963 16.0641L8.33963 15.7761C9.62763 15.3481 10.8236 14.9841 12.9596 14.3601C14.0036 14.0561 15.2756 13.6801 15.7796 13.5281C23.0996 11.3161 24.3756 10.9161 24.7956 10.7001C24.9076 10.6441 25.0316 10.6001 25.0716 10.6001C25.1236 10.6001 25.1676 10.5481 25.2156 10.4321C25.2716 10.2881 25.2716 10.2561 25.2236 10.2081C25.1396 10.1241 24.3676 10.2201 22.1116 10.6001C21.0716 10.7761 19.6276 11.0081 18.8996 11.1161C16.9356 11.4121 14.1596 11.8881 11.3796 12.4041C10.4036 12.5881 8.53563 12.9721 8.40763 13.0201C8.25563 13.0761 9.46763 11.0361 10.2156 9.98008C11.2956 8.46408 12.5796 7.14408 14.0276 6.07208C15.6636 4.86008 18.3276 3.34808 19.9796 2.70008C21.4276 2.12808 23.1116 1.71608 24.6996 1.54408C25.9196 1.41208 28.4156 1.32008 28.6596 1.40008C28.7956 1.44408 28.8196 1.44408 28.8676 1.37608C28.8996 1.33208 28.9196 1.25608 28.9116 1.20408C28.8996 1.12008 28.8516 1.09608 28.4996 0.99608C27.7076 0.772079 26.5556 0.644081 25.1796 0.624081C24.6516 0.616081 24.1316 0.616081 24.0196 0.624081Z"
												fill="#34D399"
											/>
										</svg>
									</div>
									<p class="mt-5 text-lg leading-6 font-medium text-gray-800">Psihoterapijski pravci</p>
								</dt>
								<dd class="mt-2 text-base text-gray-500">Naši psihoterapeuti dolaze iz različitih psihoterapijskih pravaca.</dd>
							</div>

							<div>
								<dt>
									<div class="flex items-center justify-center h-12 w-12">
										<!-- Heroicon name: outline/mail -->
										<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path
												d="M23.3601 0.0439911C23.1801 0.0879898 22.5881 0.231991 22.3801 0.287991C22.1041 0.355991 22.0241 0.415989 21.9201 0.619991C21.7081 1.04799 21.8761 1.71199 22.3961 2.49999C22.4561 2.58799 22.5281 2.71999 22.5561 2.79199C22.6041 2.90799 22.6841 2.95999 23.1361 3.18799C23.8041 3.52399 24.2521 3.69599 24.6801 3.77999C27.1281 4.26399 30.0281 5.57199 32.1721 7.15199C33.9601 8.47599 36.0161 10.904 36.8601 12.692C37.7081 14.492 38.2401 16.428 38.4481 18.48C38.5121 19.128 38.5121 21.036 38.4481 21.68C37.9801 26.216 36.1601 30.136 33.1201 33.156C30.6761 35.58 27.3041 37.448 24.2601 38.06C20.7281 38.772 16.4841 38.168 12.9721 36.456C12.0121 35.988 10.6121 35.1 9.74009 34.404C6.90009 32.14 4.7201 29.044 3.6001 25.68C2.9241 23.66 2.6441 21.832 2.6921 19.784C2.7921 15.504 4.2721 11.824 7.23209 8.50399C9.87609 5.54399 13.6881 3.27599 17.2321 2.56399C17.5441 2.49999 17.8281 2.42799 17.8561 2.40399C17.8841 2.37999 17.9401 2.28399 17.9761 2.19199C18.0161 2.09599 18.0681 1.98399 18.0881 1.94399C18.1121 1.89999 18.1401 1.75199 18.1521 1.61999L18.1681 1.37199L17.9841 1.28399C17.7761 1.17999 17.8161 1.17999 16.8401 1.36799C13.2041 2.06799 10.2121 3.39599 7.64009 5.45999C5.95209 6.81599 4.4401 8.55599 3.2761 10.484C2.8881 11.128 2.2041 12.508 1.9241 13.208C0.420101 16.96 0.172101 21.104 1.2001 25.268C1.6761 27.188 2.2761 28.704 3.3201 30.604C4.5961 32.928 5.64409 34.308 7.46409 36.04C8.50409 37.032 10.1201 38.26 11.3401 38.988C13.8241 40.468 16.5961 41.328 19.6481 41.564C20.4681 41.624 22.5881 41.592 23.3001 41.504C27.1801 41.02 30.5361 39.556 33.6201 36.996C34.1201 36.58 35.4721 35.236 35.9281 34.7C38.8441 31.276 40.7881 26.676 41.2481 22.1C41.3281 21.296 41.3161 18.588 41.2281 17.8C40.7601 13.624 39.3441 10.252 36.7241 7.07999C36.2401 6.48799 34.9521 5.20399 34.3601 4.71199C32.8921 3.49999 31.8281 2.84399 29.6521 1.81599C28.5921 1.31599 27.2281 0.855991 25.8601 0.539989C25.5081 0.459991 25.1401 0.367989 25.0401 0.339989C24.1161 0.0639915 23.6321 -0.0240097 23.3601 0.0439911Z"
												fill="#34D399"
											/>
											<path
												d="M20.6241 6.74788C20.1961 6.87588 19.7721 7.46388 19.5041 8.28788C19.2921 8.93988 19.2921 8.97188 19.3401 11.3639C19.3641 12.6359 19.3601 13.3999 19.3201 14.3639C19.2521 15.9639 19.2481 17.4919 19.3161 18.1799C19.3441 18.4639 19.4201 19.0959 19.4881 19.5799C19.5721 20.1959 19.6121 20.6639 19.6201 21.1399C19.6321 21.8879 19.6721 22.0519 19.9321 22.4639C20.0041 22.5799 20.1641 22.8479 20.2961 23.0639C21.1281 24.4679 21.4401 24.8359 23.8401 27.2599C25.5281 28.9599 25.8161 29.2599 26.8961 30.4599C27.9681 31.6479 28.0281 31.7079 28.9761 32.4119C29.4881 32.7959 30.3401 33.1039 30.7721 33.0639C31.0721 33.0359 31.1401 32.9919 31.2441 32.7919C31.3161 32.6479 31.3281 32.5799 31.3081 32.3199C31.2481 31.5199 30.5761 29.7999 30.0441 29.0879C29.6001 28.4959 27.6641 26.6719 26.1001 25.3679C23.9601 23.5879 23.6641 23.3239 22.5561 22.1999C21.8681 21.4959 21.6961 21.3439 21.5081 21.2599C21.3841 21.2079 21.2801 21.1439 21.2801 21.1279C21.2801 21.1079 21.3161 20.9239 21.3561 20.7159C21.4721 20.1679 21.5121 19.6959 21.5801 18.2039C21.6121 17.4719 21.6921 16.2359 21.7601 15.4639C21.9481 13.2279 21.9721 12.7399 21.9481 11.4319C21.9281 10.1519 21.8561 9.33588 21.7161 8.78788C21.6721 8.61588 21.5121 8.12388 21.3601 7.69588C21.2041 7.26788 21.0801 6.86388 21.0801 6.79988C21.0801 6.69188 21.0681 6.67988 20.9521 6.68388C20.8801 6.68388 20.7321 6.71188 20.6241 6.74788Z"
												fill="#34D399"
											/>
										</svg>
									</div>
									<p class="mt-5 text-lg leading-6 font-medium text-gray-800">Dostupnost i fleksibilnost</p>
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
					<div class="relative py-24 px-8 bg-green-500 rounded-xl shadow-2xl overflow-hidden lg:px-16 lg:grid lg:grid-cols-2 lg:gap-x-8">
						<div class="absolute inset-0 opacity-50 filter saturate-0 mix-blend-multiply">
							<img src="https://images.unsplash.com/photo-1601381718415-a05fb0a261f3?ixid=MXwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8ODl8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1216&q=80" alt="" class="w-full h-full object-cover" />
						</div>
						<div class="relative lg:col-span-1">
							<!-- <img class="h-12 w-auto" src="https://tailwindui.com/img/logos/workcation-logo-white.svg" alt="" /> -->
							<h2 class="text-2xl font-medium sm:text-2xl text-white">Referenca</h2>
							<blockquote class="mt-6 text-white">
								<p class="text-xl font-medium sm:text-2xl">
									Mesto koje otvara mogućnost toplog ali snažnog transformisanja sebe, uz puno razumevanja i terapeutovog prihvatanja. Volela bih da sam se na ovo putovanje sa divnom Ninom odlučila ranije.
								</p>
								<footer class="mt-6">
									<p class="flex flex-col font-medium">
										<span>Marina (preduzetnica)</span>
									</p>
								</footer>
							</blockquote>
						</div>
					</div>
				</div>
			</div>
			<!--faq  -->
			<div class="my-14">
				<div class="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
					<div class="max-w-3xl mx-auto">
						<h2 class="text-center text-3xl text-purple-800 sm:text-4xl">Vi pitate, psihoterapeut odgovara</h2>
						<dl class="mt-6 space-y-6">
							<div x-data="{open: false}" class="p-6 rounded-md border">
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

							<div x-data="{open: false}" class="p-6 rounded-md border">
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
										Prvi i neophodni uslov za započinjanje procesa psihoterapije je <span class="font-bold">psihološka procena</span>. To je intervju u trajanju od 90 minuta koji ima za cilj upoznavanje Vas kao klijenta i odabir
										najpodesnijeg stručnog saradnika za rad. Za ovaj susret je neophodno izdvojiti <span class="font-bold">2000 RSD</span> donacije po osobi.
									</p>
								</dd>
							</div>

							<div x-data="{open: false}" class="p-6 rounded-md border">
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

							<div x-data="{open: false}" class="p-6 rounded-md border">
								<dt class="text-lg">
									<!-- Expand/collapse question button -->
									<button x-on:click="open = !open" type="button" class="text-left w-full flex justify-between items-start text-gray-400" aria-controls="faq-0" aria-expanded="false">
										<span class="font-medium text-gray-800">Kako se vrši uplata iz inostranstva?</span>
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
							<div x-data="{open: false}" class="p-6 rounded-md border">
								<dt class="text-lg">
									<!-- Expand/collapse question button -->
									<button x-on:click="open = !open" type="button" class="text-left w-full flex justify-between items-start text-gray-400" aria-controls="faq-0" aria-expanded="false">
										<span class="font-medium text-gray-800">Da li studenti imaju popust?</span>
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

							<div x-data="{open: false}" class="p-6 rounded-md border">
								<dt class="text-lg">
									<!-- Expand/collapse question button -->
									<button x-on:click="open = !open" type="button" class="text-left w-full flex justify-between items-start text-gray-400" aria-controls="faq-0" aria-expanded="false">
										<span class="font-medium text-gray-800">Radno vreme, da li mogu dolaziti vikendom?</span>
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

							<div x-data="{open: false}" class="p-6 rounded-md border">
								<dt class="text-lg">
									<!-- Expand/collapse question button -->
									<button x-on:click="open = !open" type="button" class="text-left w-full flex justify-between items-start text-gray-400" aria-controls="faq-0" aria-expanded="false">
										<span class="font-medium text-gray-800">Koliko traje susret?</span>
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

							<div x-data="{open: false}" class="p-6 rounded-md border">
								<dt class="text-lg">
									<!-- Expand/collapse question button -->
									<button x-on:click="open = !open" type="button" class="text-left w-full flex justify-between items-start text-gray-400" aria-controls="faq-0" aria-expanded="false">
										<span class="font-medium text-gray-800">Dinamika susreta, koliko se često održavaju?</span>
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
							<p class="mt-1 text-4xl font-extrabold text-gray-800 sm:text-5xl sm:tracking-tight lg:text-6xl">Zakažite još danas svoj prvi razgovor sa psihoterapeutom</p>
							<p class="max-w-xl mt-5 mx-auto text-xl text-gray-500">Vaše je samo da nas pozovete a mi ćemo se pobrinuti za ostalo</p>
						</div>
					</div>
				</div>
				<div class="max-w-7xl mx-auto px-4 pb-20" id="scroll">
					<div class="relative bg-white">
						<h2 class="sr-only">Kontakt informacije</h2>

						<div class="grid grid-cols-1 lg:grid-cols-2">
							<!-- Contact information -->
							<div class="relative overflow-hidden">
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

								<div class="py-10 px-6 sm:px-10 xl:p-12">
									<h3 class="text-lg font-medium text-gray-400">Kontakt informacije</h3>
									<p class="mt-6 text-base text-gray-400 max-w-3xl">Ubuntu Novi Sad brine o vašem mentalnom zdravlju od 2016. godine</p>
									<dl class="mt-8 space-y-6">
										<dt><span class="sr-only">Telefon</span></dt>
										<dd class="flex text-base text-gray-400">
											<!-- Heroicon name: outline/phone -->
											<svg class="flex-shrink-0 w-6 h-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
												/>
											</svg>
											<span class="ml-3"> <a href="tel:+381658286881">065 828 6881</a></span>
										</dd>
										<dt><span class="sr-only">Email</span></dt>
										<dd class="flex text-base text-gray-400">
											<!-- Heroicon name: outline/mail -->
											<svg class="flex-shrink-0 w-6 h-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
												<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
											</svg>
											<span class="ml-3"><a href="mailto:psihoterapija-ns@ubuntucentar.com">psihoterapija-ns@ubuntucentar.com</a></span>
										</dd>
									</dl>
									<ul role="list" class="mt-8 flex space-x-12">
										<li>
											<a class="text-gray-400 hover:ttext-gray-500" href="https://sr-rs.facebook.com/UBUNTUcentar/" target="_blank">
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
											<a class="text-gray-400 hover:text-gray-500" href="https://www.instagram.com/ubuntu_centar/?hl=en" target="_blank">
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
							</div>

							<!-- Contact form -->
							<div class="py-10 px-6 sm:px-10 lg:col-span-1 xl:p-12">
								<h3 class="text-lg font-medium text-gray-900">Pošaljite nam poruku</h3>
								<form @submit.prevent="submit" class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8" name="contact-ns" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
									<div>
										<input type="hidden" name="form-name" value="contact-ns" />
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

			<div class="">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2809.060661813341!2d19.79255181555021!3d45.246566079099004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475b11d01908aa3f%3A0x7beaf20e5cb47676!2sAn%C4%91e%20Rankovi%C4%87%206%2C%20Novi%20Sad%20402343!5e0!3m2!1sen!2srs!4v1632906176728!5m2!1sen!2srs"
					width="auto"
					height="500"
					style="border: 0; width: 100% !important"
					allowfullscreen=""
					loading="lazy"
				></iframe>
			</div>

			<footer-landing></footer-landing>
		</div>
	</transition>
</template>

<script>
import NavigationNs from "../components/NavigationNs.vue";
import FooterLanding from "../components/FooterLanding.vue";
import { required, email } from "vuelidate/lib/validators";

export default {
	metaInfo: {
		title: "Savetovalište Novi Sad | Ubuntu",
		meta: [
			{
				name: "title",
				content: "Savetovalište Novi Sad  | Ubuntu",
			},
			{
				name: "description",
				content: "Savetovaliste je...",
			},
		],
	},

	data() {
		return {
			formData: {
				name: "",
				last: "",
				email: "",
				submitStatus: null,
				phone: "",
				message: "",
				subject: "",
				city: "Novi Sad",
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
		NavigationNs,
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
.fade-enter-active {
	transition: opacity 1s;
}

.fade-enter {
	opacity: 0;
}
</style>
