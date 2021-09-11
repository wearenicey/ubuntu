<template>
	<Layout>
		<div class="relative shadow-sm">
			<div class="max-w-7xl mx-auto flex justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-8 md:justify-start md:space-x-10">
				<div class="hidden md:flex-1 md:flex md:items-center md:justify-end">
					<nav class="flex space-x-10">
						<div v-for="tag in ishrana" v-if="$page.category.title == tag.tags">
							<div class="flex space-x-10">
								<div v-for="(element, index) in tag.kategorije">
									<button
										type="button"
										class="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
										aria-expanded="false"
									>
										<g-link :to="element.path">{{ element.name }}</g-link>
									</button>
								</div>
							</div>
						</div>
					</nav>
				</div>
			</div>
		</div>
		<div class="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
			<div class="absolute inset-0">
				<div class="bg-white h-1/3 sm:h-2/3" />
			</div>
			<div class="relative max-w-7xl mx-auto">
				<div class="text-center">
					<h1 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl uppercase">
						{{ $page.category.title }}
					</h1>
					<div>
						<div>
							<p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
								{{ $page.category.desc }}
							</p>
						</div>
					</div>
				</div>
				<div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
					<div v-for="post in $page.category.belongsTo.edges" :key="post.node.id" class="flex flex-col rounded-lg shadow-lg overflow-hidden">
						<div class="flex-shrink-0">
							<g-image class="h-48 w-full object-cover" :src="require(`!!assets-loader!@img/${post.node.image}`)" alt="" />
						</div>
						<div class="flex-1 bg-white p-6 flex flex-col justify-between">
							<div class="flex-1">
								<div class="flex space-x-4">
									<!-- Tagovi -->
									<span v-for="(tag, index) in post.node.tags" :key="tag.id">
										<a :href="tag.path">
											<p class="text-sm font-medium text-indigo-600">
												{{ tag.title }}
											</p>
										</a>

										<!-- We will add a comma separator for the tags -->
									</span>
								</div>
								<p class="text-sm font-medium text-indigo-600">
									<a :href="post.node.tags.path" class="hover:underline">
										{{ post.node.tags.title }}
									</a>
								</p>
								<p class="text-sm font-medium text-indigo-600">
									<a :href="post.node.path" class="hover:underline"> </a>
								</p>
								<a :href="post.node.path" class="block mt-2">
									<p class="text-xl font-semibold text-gray-900">
										{{ post.node.title }}
									</p>
									<p class="mt-3 text-base text-gray-500">
										{{ post.node.excerpt }}
									</p>
								</a>
							</div>
							<div class="mt-6 flex items-center">
								<!-- <div class="flex-shrink-0">
                  <a :href="post.author.href">
                    <span class="sr-only">{{ post.author.name }}</span>
                    <img
                      class="h-10 w-10 rounded-full"
                      :src="post.author.imageUrl"
                      alt=""
                    />
                  </a>
                </div> -->
								<div class="">
									<div class="flex space-x-1 text-sm text-gray-500">
										<time :datetime="post.node.datetime">
											{{ post.node.humanTime }}
										</time>
										<span aria-hidden="true"> &middot; </span>
										<span> {{ post.node.timeToRead }} min read </span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div v-for="tag in ishrana">
			<div v-if="$page.category.title == tag.tags">
				<div v-for="(element, index) in tag.kategorije">
					<a :href="element.path">{{ element.name }}</a>
				</div>
			</div>
		</div>
	</Layout>
</template>

<page-query>
query($id: ID!) {

  category(id: $id) {
		id
    title
		desc
    belongsTo  {
      totalCount
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          ...on Post {
            title
            path
            excerpt
            image
            tags {
              title
							path
            }
						timeToRead
          featured
          humanTime: created(format: "DD.MM.YYYY")
          datetime: created
          }
        }
      }
    }
  }




  }




</page-query>

<script>
const ishrana = [
	{
		tags: "zdravlje",
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
		tags: "ishrana",
		kategorije: [
			{ name: "Trendovi u ishrani", path: "/kategorija/trendovi-u-ishrani" },
			{ name: "Super hrana", path: "/kategorija/super-hrana" },
			{ name: "Zdrava hrana", path: "/kategorija/zdrava-hrana" },
			{ name: "Recepti", path: "/kategorija/recepti" },
		],
	},
	{
		tags: "mentalno zdravlje",
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
		tags: "roditeljstvo",
		kategorije: [
			{ name: "Trudnoća", path: "/kategorija/trudnoca" },
			{ name: "Materinstvo", path: "/kategorija/materinstvo" },
			{ name: "Beba", path: "/kategorija/beba" },
			{ name: "Mlađa deca", path: "/kategorija/mladja-deca" },
			{ name: "Tinejdžeri", path: "/kategorija/tinejdzeri" },
		],
	},
	{
		tags: "lifestyle",
		kategorija: [
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
		tags: "finasijski savetnik",
		kategorije: [
			{ name: "Kucni budzet", path: "/kategorija/kucni-budzet" },
			{ name: "Investicioni fondovi", path: "/kategorija/investicioni-fondovi" },
			{ name: "Stednja", path: "/kategorija/stednja" },
			{ name: "Bitkoin", path: "/kategorija/bitkoin" },
			{ name: "Nekretnine", path: "/kategorija/nekretnine" },
		],
	},
	{
		tags: "poslovni kutak",
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
		tags: "drustvena odgovornost",
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
	metaInfo() {
		return {};
	},

	data() {
		return {
			ishrana,
		};
	},
};
</script>
<style></style>
