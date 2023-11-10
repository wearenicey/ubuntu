<div>
  <b-tabs content-class="mt-3">
    <b-tab title="First" active><p>I'm the first tab</p></b-tab>
    <b-tab title="Second"><p>I'm the second tab</p></b-tab>
    <b-tab title="Disabled" disabled><p>I'm a disabled tab!</p></b-tab>
  </b-tabs>
</div>

<div class="mt-16 bg-white pb-12 lg:mt-20 lg:pb-20">
  <div class="relative z-0">
    <div class="absolute inset-0 h-5/6 bg-primary lg:h-2/3" />
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="relative lg:grid lg:grid-cols-7">
        <div class="mx-auto max-w-md lg:col-start-1 lg:col-end-4 lg:row-start-2 lg:row-end-3 lg:mx-0 lg:max-w-none">
          <div class="flex h-full flex-col overflow-hidden rounded-lg shadow-lg lg:rounded-none lg:rounded-l-lg">
            <div class="flex flex-1 flex-col">
              <div class="bg-white px-6 py-10">
                <div>
                  <h3 class="text-center text-2xl font-medium text-gray-900" id="tier-hobby">Povoljno</h3>
                  <div class="mt-4 block lg:flex items-center justify-center">
                    <span class="flex text-center items-start justify-center lg:justify-start px-3 text-6xl tracking-tight text-gray-900">
                      <span class="mt-2 mr-2 text-4xl font-medium tracking-tight">RSD</span>
                      <span class="font-bold">1.500</span>
                    </span>
                    <span class="text-xl flex justify-center font-medium text-gray-500">/ seansa</span>
                  </div>

                  <div class="mt-5">
                    <p class="text-center font-medium text-gray-900">Partnerska terapija</p>
                    <div class="block lg:flex items-center justify-center">
                      <span class="flex text-center items-start justify-center lg:justify-start px-3 text-xl tracking-tight text-gray-900">
                        <span class="mr-2 text-xl font-medium tracking-tight">RSD</span>
                        <span class="font-bold">3.000</span>
                      </span>
                      <span class=" flex justify-center font-medium text-gray-500">/ seansa</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex flex-1 flex-col justify-between border-t-2 border-gray-100 bg-gray-50 p-6 sm:p-10 lg:p-6 xl:p-10">
                <ul role="list" class="space-y-4">
                  <li v-for="feature in hobbyFeatures" :key="feature" class="flex items-start">
                    <p class="ml-3 text-base font-medium text-gray-500">{{ feature }}</p>
                  </li>
                </ul>
                <div class="mt-8">
                  <div class="rounded-lg shadow-md">
                    <a href="/kontakt" class="block w-full rounded-lg border border-transparent bg-white px-6 py-3 text-center text-base font-medium text-secondary hover:bg-gray-50" aria-describedby="tier-hobby">Kontaktirajte nas</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mx-auto mt-10 max-w-lg lg:col-start-4 lg:col-end-8 lg:row-start-1 lg:row-end-4 lg:mx-0 lg:mt-0 lg:max-w-none">
          <div class="relative z-10 rounded-lg shadow-xl">
            <div class="pointer-events-none absolute inset-0 rounded-lg border-2 border-secondary" aria-hidden="true" />
            <div class="absolute inset-x-0 top-0 translate-y-px transform">
              <div class="flex -translate-y-1/2 transform justify-center">
                <span class="inline-flex rounded-full bg-green-700 px-4 py-1 text-base tracking-widest text-white">Najtraženije</span>
              </div>
            </div>
            <div class="rounded-t-lg bg-white px-6 pt-12 pb-10">
              <div>
                <h3 class="text-center text-3xl font-semibold tracking-tight text-gray-900 sm:-mx-6" id="tier-growth">Brzo</h3>
                <div class="mt-4 block lg:flex items-center justify-center">
                  <span class="flex text-center items-start justify-center lg:justify-start px-3 text-6xl tracking-tight text-gray-900 sm:text-6xl">
                    <span class="mt-2 mr-2 text-4xl font-medium tracking-tight">RSD</span>
                    <span class="font-bold">3.500</span>
                  </span>
                  <span class="text-xl flex justify-center font-medium text-gray-500">/ seansa</span>
                </div>

                <div class="mt-5">
                    <p class="text-center font-medium text-gray-900">Partnerska terapija</p>
                    <div class="block lg:flex items-center justify-center">
                      <span class="flex text-center items-start justify-center lg:justify-start px-3 text-xl tracking-tight text-gray-900">
                        <span class="mr-2 text-xl font-medium tracking-tight">RSD</span>
                        <span class="font-bold">5.000</span>
                      </span>
                      <span class=" flex justify-center font-medium text-gray-500">/ seansa</span>
                    </div>
                  </div>
              </div>
            </div>
            <div class="rounded-b-lg border-t-2 border-gray-100 bg-gray-50 px-6 pt-10 pb-8 sm:px-10 sm:py-10">
              <ul role="list" class="space-y-4">
                <li v-for="feature in growthFeatures" :key="feature" class="flex items-start">
                  <p class="ml-3 text-base font-medium text-gray-500">{{ feature }}</p>
                </li>
              </ul>
              <div class="mt-10">
                <div class="rounded-lg shadow-md">
                  <a href="https://docs.google.com/forms/d/1xIDvX8yX0q5tQqEdQLel4PRcBj61hMhJkCI0LQc56bc/edit?ts=64464c81" class="block w-full rounded-lg border border-transparent bg-secondary px-6 py-4 text-center text-xl font-medium leading-6 text-white" aria-describedby="tier-growth">Popuni upitnik</a>
                </div>
                <p class="text-xs text-gray-500 mt-4 text-center">Klijent popunjava upitnik i koordinator sa njim obavlja kraći razgovor</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<script>
//importovane komponente
import CardItem from "../components/CardItem.vue";
import { required, email } from "vuelidate/lib/validators";

const hobbyFeatures = [
	"✓ Motivisani saradnici u procesu edukacije koji rade pod supervizijom",
	"✓ Dostupni su vam saradnici koji dolaze iz različitih psihoterapijskih škola",
	"✓ Kvalitetna podrška u procesu savetovanja i psihoterapije",
	"✓ Kontakt saradnika se dobija u roku od mesec dana",
	"✓ Ograničen broj susreta (12)",
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

		meta: [
			{
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
		onClickTwo() {
			let element = document.getElementById("scroll");
			element.scrollIntoView({
				behavior: "smooth",
				block: "start",
			});
		},
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