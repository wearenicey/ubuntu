<template>
	<Layout>
		<div class="relative shadow-sm">
			<div class="max-w-7xl mx-auto flex justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-8 md:justify-start md:space-x-10">
				<div class="hidden md:flex-1 md:flex md:items-center md:justify-between">
					<nav class="flex space-x-10">
						<div v-for="tag in ishrana" v-if="$page.tag.title == tag.tags">
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
						{{ $page.tag.title }}
					</h1>
					<div v-for="tag in ishrana">
						<div v-if="$page.tag.title == tag.tags">
							<p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
								{{ tag.desc }}
							</p>
						</div>
					</div>
				</div>
				<div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
					<div v-for="post in $page.tag.belongsTo.edges" :key="post.node.id" class="flex flex-col rounded-lg shadow-lg overflow-hidden">
						<div class="flex-shrink-0">
							<g-image class="h-48 w-full object-cover" :src="require(`!!assets-loader!@img/${post.node.image}`)" alt="" />
						</div>
						<div class="flex-1 bg-white p-6 flex flex-col justify-between">
							<div class="flex-1">
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
								<div class="ml-3">
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
	</Layout>
</template>

<page-query>
query
 Tag ($id: ID!, $page: Int) {


  tag: tag (id: $id) {

    title
		id
    belongsTo (page: $page, perPage: 30) @paginate {
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


	test:  allTag  {
    edges {
      node {
        id
        title
        path
      }
    }

  }

}


</page-query>

<script>
const ishrana = [
	// Ishrana podkategorije
	{
		tags: "zdrava hrana",
		desc: "zdrava hrana",
		kategorije: [
			{ name: "Trendovi u ishrani", path: "/kategorija/trendovi-u-ishrani" },
			{ name: "Super hrana", path: "/kategorija/super-hrana" },
			{ name: "Zdrava hrana", path: "/kategorija/zdrava-hrana" },
			{ name: "Recepti", path: "/kategorija/recepti" },
		],
	},
	{
		tags: "super hrana",
		desc: "super hrana",
		kategorije: [
			{ name: "Trendovi u ishrani", path: "/kategorija/trendovi-u-ishrani" },
			{ name: "Super hrana", path: "/kategorija/super-hrana" },
			{ name: "Zdrava hrana", path: "/kategorija/zdrava-hrana" },
			{ name: "Recepti", path: "/kategorija/recepti" },
		],
	},
	{
		tags: "trendovi u ishrani",
		desc: "trendovi u ishrani..",
		kategorije: [
			{ name: "Trendovi u ishrani", path: "/kategorija/trendovi-u-ishrani" },
			{ name: "Super hrana", path: "/kategorija/super-hrana" },
			{ name: "Zdrava hrana", path: "/kategorija/zdrava-hrana" },
			{ name: "Recepti", path: "/kategorija/recepti" },
		],
	},

	{
		tags: "recepti",
		desc: "recepti..",
		kategorije: [
			{ name: "Trendovi u ishrani", path: "/kategorija/trendovi-u-ishrani" },
			{ name: "Super hrana", path: "/kategorija/super-hrana" },
			{ name: "Zdrava hrana", path: "/kategorija/zdrava-hrana" },
			{ name: "Recepti", path: "/kategorija/recepti" },
		],
	},

	// Zdravlje podkateogrije
	{
		tags: "kardiovaskularni",
		desc: "kardiovaskularni..",
		kategorije: [
			{ name: "Kardiovaskularini", path: "/kategorija/kardiovaskularni" },
			{ name: "Rak", path: "/kategorija/rak" },
			{ name: "Dijabetes", path: "/kategorija/dijabetes" },
			{ name: "Osteoporoza", path: "/kategoirja/osteoporoza" },
			{
				name: "Gastrodigestivni trakt",
				path: "/kategorija/gastrodigestivni-trakt",
			},
			{ name: "Zdravlje žena", path: "/kategorija/zdravlje-zena" },
			{
				name: "Ishrana po bolestima",
				path: "/kategorija/ishrana-po-bolestima",
			},
			{ name: "Detoks", path: "/kategorija/detoks" },
			{ name: "Suplementi", path: "/kategorija/suplementi" },
		],
	},

	{
		tags: "rak",
		desc: "rak..",
		kategorije: [
			{ name: "Kardiovaskularini", path: "/kategorija/kardiovaskularni" },
			{ name: "Rak", path: "/kategorija/rak" },
			{ name: "Dijabetes", path: "/kategorija/dijabetes" },
			{ name: "Osteoporoza", path: "/kategoirja/osteoporoza" },
			{
				name: "Gastrodigestivni trakt",
				path: "/kategorija/gastrodigestivni-trakt",
			},
			{ name: "Zdravlje žena", path: "/kategorija/zdravlje-zena" },
			{
				name: "Ishrana po bolestima",
				path: "/kategorija/ishrana-po-bolestima",
			},
			{ name: "Detoks", path: "/kategorija/detoks" },
			{ name: "Suplementi", path: "/kategorija/suplementi" },
		],
	},
	{
		tags: "dijabetes",
		desc: "dijabetes..",
		kategorije: [
			{ name: "Kardiovaskularini", path: "/kategorija/kardiovaskularni" },
			{ name: "Rak", path: "/kategorija/rak" },
			{ name: "Dijabetes", path: "/kategorija/dijabetes" },
			{ name: "Osteoporoza", path: "/kategoirja/osteoporoza" },
			{
				name: "Gastrodigestivni trakt",
				path: "/kategorija/gastrodigestivni-trakt",
			},
			{ name: "Zdravlje žena", path: "/kategorija/zdravlje-zena" },
			{
				name: "Ishrana po bolestima",
				path: "/kategorija/ishrana-po-bolestima",
			},
			{ name: "Detoks", path: "/kategorija/detoks" },
			{ name: "Suplementi", path: "/kategorija/suplementi" },
		],
	},
	{
		tags: "osteoporoza",
		desc: "Osteoporoza..",
		kategorije: [
			{ name: "Kardiovaskularini", path: "/kategorija/kardiovaskularni" },
			{ name: "Rak", path: "/kategorija/rak" },
			{ name: "Dijabetes", path: "/kategorija/dijabetes" },
			{ name: "Osteoporoza", path: "/kategoirja/osteoporoza" },
			{
				name: "Gastrodigestivni trakt",
				path: "/kategorija/gastrodigestivni-trakt",
			},
			{ name: "Zdravlje žena", path: "/kategorija/zdravlje-zena" },
			{
				name: "Ishrana po bolestima",
				path: "/kategorija/ishrana-po-bolestima",
			},
			{ name: "Detoks", path: "/kategorija/detoks" },
			{ name: "Suplementi", path: "/kategorija/suplementi" },
		],
	},

	{
		tags: "gastrodigestivni trakt",
		desc: "Gastrodigestivni trakt..",
		kategorije: [
			{ name: "Kardiovaskularini", path: "/kategorija/kardiovaskularni" },
			{ name: "Rak", path: "/kategorija/rak" },
			{ name: "Dijabetes", path: "/kategorija/dijabetes" },
			{ name: "Osteoporoza", path: "/kategoirja/osteoporoza" },
			{
				name: "Gastrodigestivni trakt",
				path: "/kategorija/gastrodigestivni-trakt",
			},
			{ name: "Zdravlje žena", path: "/kategorija/zdravlje-zena" },
			{
				name: "Ishrana po bolestima",
				path: "/kategorija/ishrana-po-bolestima",
			},
			{ name: "Detoks", path: "/kategorija/detoks" },
			{ name: "Suplementi", path: "/kategorija/suplementi" },
		],
	},

	{
		tags: "zdravlje žena",
		desc: "Zdravlje žena..",
		kategorije: [
			{ name: "Kardiovaskularini", path: "/kategorija/kardiovaskularni" },
			{ name: "Rak", path: "/kategorija/rak" },
			{ name: "Dijabetes", path: "/kategorija/dijabetes" },
			{ name: "Osteoporoza", path: "/kategoirja/osteoporoza" },
			{
				name: "Gastrodigestivni trakt",
				path: "/kategorija/gastrodigestivni-trakt",
			},
			{ name: "Zdravlje žena", path: "/kategorija/zdravlje-zena" },
			{
				name: "Ishrana po bolestima",
				path: "/kategorija/ishrana-po-bolestima",
			},
			{ name: "Detoks", path: "/kategorija/detoks" },
			{ name: "Suplementi", path: "/kategorija/suplementi" },
		],
	},

	{
		tags: "ishrana po bolestima",
		desc: "Ishrana po bolestima..",
		kategorije: [
			{ name: "Kardiovaskularini", path: "/kategorija/kardiovaskularni" },
			{ name: "Rak", path: "/kategorija/rak" },
			{ name: "Dijabetes", path: "/kategorija/dijabetes" },
			{ name: "Osteoporoza", path: "/kategoirja/osteoporoza" },
			{
				name: "Gastrodigestivni trakt",
				path: "/kategorija/gastrodigestivni-trakt",
			},
			{ name: "Zdravlje žena", path: "/kategorija/zdravlje-zena" },
			{
				name: "Ishrana po bolestima",
				path: "/kategorija/ishrana-po-bolestima",
			},
			{ name: "Detoks", path: "/kategorija/detoks" },
			{ name: "Suplementi", path: "/kategorija/suplementi" },
		],
	},
	{
		tags: "detoks",
		desc: "Detoks..",
		kategorije: [
			{ name: "Kardiovaskularini", path: "/kategorija/kardiovaskularni" },
			{ name: "Rak", path: "/kategorija/rak" },
			{ name: "Dijabetes", path: "/kategorija/dijabetes" },
			{ name: "Osteoporoza", path: "/kategoirja/osteoporoza" },
			{
				name: "Gastrodigestivni trakt",
				path: "/kategorija/gastrodigestivni-trakt",
			},
			{ name: "Zdravlje žena", path: "/kategorija/zdravlje-zena" },
			{
				name: "Ishrana po bolestima",
				path: "/kategorija/ishrana-po-bolestima",
			},
			{ name: "Detoks", path: "/kategorija/detoks" },
			{ name: "Suplementi", path: "/kategorija/suplementi" },
		],
	},
	{
		tags: "suplementi",
		desc: "Suplementi..",
		kategorije: [
			{ name: "Kardiovaskularini", path: "/kategorija/kardiovaskularni" },
			{ name: "Rak", path: "/kategorija/rak" },
			{ name: "Dijabetes", path: "/kategorija/dijabetes" },
			{ name: "Osteoporoza", path: "/kategoirja/osteoporoza" },
			{
				name: "Gastrodigestivni trakt",
				path: "/kategorija/gastrodigestivni-trakt",
			},
			{ name: "Zdravlje žena", path: "/kategorija/zdravlje-zena" },
			{
				name: "Ishrana po bolestima",
				path: "/kategorija/ishrana-po-bolestima",
			},
			{ name: "Detoks", path: "/kategorija/detoks" },
			{ name: "Suplementi", path: "/kategorija/suplementi" },
		],
	},

	// Mentalno zdravlje podkateogrije

	{
		tags: "licni razvoj",
		desc: "Lični razvoj",
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
		tags: "duhovnost",
		desc: "Duhovnost...",
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
		tags: "intimni odnosi",
		desc: "Intimni odnosi...",
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
		tags: "Ljubav",
		desc: "ljubav...",
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
		tags: "prijateljstvo",
		desc: "Prijateljstvo...",
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
		tags: "coaching",
		desc: "Coaching...",
		kategorije: [
			{ name: "Lični razvoj", path: "/kategorija/licni-razvoj" },
			{ name: "Duhovnost", path: "/kategorija/duhovnost" },
			{ name: "Intimni odnosi", path: "/kategorija/intimni-odnosi" },
			{ name: "Ljubav", path: "/kategorija/ljubav" },
			{ name: "Prijateljstvo", path: "/kategorija/prijateljstvo" },
			{ name: "Coaching", path: "/kategorija/coaching" },
		],
	},

	// roditeljstvo podkategorija
	{
		tags: "trudnoća",
		desc: "Trudnoća je...",
		kategorije: [
			{ name: "Trudnoća", path: "/kategorija/trudnoca" },
			{ name: "Materinstvo", path: "/kategorija/materinstvo" },
			{ name: "Beba", path: "/kategorija/beba" },
			{ name: "Mlađa deca", path: "/kategorija/mladja-deca" },
			{ name: "Tinejdžeri", path: "/kategorija/tinejdzeri" },
		],
	},

	{
		tags: "materinstvo",
		desc: "Materinstvo je...",
		kategorije: [
			{ name: "Trudnoća", path: "/kategorija/trudnoca" },
			{ name: "Materinstvo", path: "/kategorija/materinstvo" },
			{ name: "Beba", path: "/kategorija/beba" },
			{ name: "Mlađa deca", path: "/kategorija/mladja-deca" },
			{ name: "Tinejdžeri", path: "/kategorija/tinejdzeri" },
		],
	},

	{
		tags: "beba",
		desc: "Beba je...",
		kategorije: [
			{ name: "Trudnoća", path: "/kategorija/trudnoca" },
			{ name: "Materinstvo", path: "/kategorija/materinstvo" },
			{ name: "Beba", path: "/kategorija/beba" },
			{ name: "Mlađa deca", path: "/kategorija/mladja-deca" },
			{ name: "Tinejdžeri", path: "/kategorija/tinejdzeri" },
		],
	},

	{
		tags: "mlađa deca",
		desc: "Mlađa deca je...",
		kategorije: [
			{ name: "Trudnoća", path: "/kategorija/trudnoca" },
			{ name: "Materinstvo", path: "/kategorija/materinstvo" },
			{ name: "Beba", path: "/kategorija/beba" },
			{ name: "Mlađa deca", path: "/kategorija/mladja-deca" },
			{ name: "Tinejdžeri", path: "/kategorija/tinejdzeri" },
		],
	},

	{
		tags: "tinejdžeri",
		desc: "Tinejdžeri...",
		kategorije: [
			{ name: "Trudnoća", path: "/kategorija/trudnoca" },
			{ name: "Materinstvo", path: "/kategorija/materinstvo" },
			{ name: "Beba", path: "/kategorija/beba" },
			{ name: "Mlađa deca", path: "/kategorija/mladja-deca" },
			{ name: "Tinejdžeri", path: "/kategorija/tinejdzeri" },
		],
	},

	{
		tags: "dom",
		desc: "Dom",
		kategorija: [
			{ name: "Putovanja", path: "/kategorija/putovanja" },
			{ name: "Dom", path: "/kategorija/dom" },
			{ name: "Kucni budzet", path: "/kategorija/kategorija/kucni-budzet" },
			{ name: "Praznici", path: "/kategorija/praznici" },
			{ name: "Lepota", path: "/kategorija/lepota" },
			{ name: "Fitness", path: "/kategorija/fitness" },
			{ name: "Pokloni", path: "/kategorija/pokloni" },
		],
	},

	{
		tags: "kucni budzet",
		desc: "Kucni budzet...",
		kategorija: [
			{ name: "Putovanja", path: "/kategorija/putovanja" },
			{ name: "Dom", path: "/kategorija/dom" },
			{ name: "Kucni budzet", path: "/kategorija/kategorija/kucni-budzet" },
			{ name: "Praznici", path: "/kategorija/praznici" },
			{ name: "Lepota", path: "/kategorija/lepota" },
			{ name: "Fitness", path: "/kategorija/fitness" },
			{ name: "Pokloni", path: "/kategorija/pokloni" },
		],
	},

	{
		tags: "praznici",
		desc: "Praznici...",
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
		tags: "lepota",
		desc: "Lepota...",
		kategorija: [
			{ name: "Putovanja", path: "/kategorija/putovanja" },
			{ name: "Dom", path: "/kategorija/dom" },
			{ name: "Kucni budzet", path: "/kategorija/kategorija/kucni-budzet" },
			{ name: "Praznici", path: "/kategorija/praznici" },
			{ name: "Lepota", path: "/kategorija/lepota" },
			{ name: "Fitness", path: "/kategorija/fitness" },
			{ name: "Pokloni", path: "/kategorija/pokloni" },
		],
	},

	{
		tags: "fitness",
		desc: "Fitness...",
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
		tags: "pokloni",
		desc: "Pokloni...",
		kategorija: [
			{ name: "Putovanja", path: "/kategorija/putovanja" },
			{ name: "Dom", path: "/kategorija/dom" },
			{ name: "Kucni budzet", path: "/kategorija/kucni-budzet" },
			{ name: "Praznici", path: "/kategorija/praznici" },
			{ name: "Lepota", path: "/kategorija/lepota" },
			{ name: "Fitness", path: "kategorija/fitness" },
			{ name: "Pokloni", path: "/kategorija/pokloni" },
		],
	},

	// finasijski savjetnik podkategorija
	{
		tags: "kucni budzet",
		desc: "Kucni budzet...",
		kategorije: [
			{ name: "Kucni budzet", path: "/kategorija/kucni-budzet" },
			{ name: "Investicioni fondovi", path: "/kategorija/investicioni-fondovi" },
			{ name: "Stednja", path: "/kategorija/stednja" },
			{ name: "Bitkoin", path: "/kategorija/bitkoin" },
			{ name: "Nekretnine", path: "/kategorija/nekretnine" },
		],
	},

	{
		tags: "investicioni fondovi",
		desc: "Investicioni fondovi...",
		kategorije: [
			{ name: "Kucni budzet", path: "/kategorija/kucni-budzet" },
			{ name: "Investicioni fondovi", path: "/kategorija/investicioni-fondovi" },
			{ name: "Stednja", path: "/kategorija/stednja" },
			{ name: "Bitkoin", path: "/kategorija/bitkoin" },
			{ name: "Nekretnine", path: "/kategorija/nekretnine" },
		],
	},

	{
		tags: "stednja",
		desc: "Stednja...",
		kategorije: [
			{ name: "Kucni budzet", path: "/kategorija/kucni-budzet" },
			{ name: "Investicioni fondovi", path: "/kategorija/investicioni-fondovi" },
			{ name: "Stednja", path: "/kategorija/stednja" },
			{ name: "Bitkoin", path: "/kategorija/bitkoin" },
			{ name: "Nekretnine", path: "/kategorija/nekretnine" },
		],
	},

	{
		tags: "bitkoin",
		desc: "Bitkoin...",
		kategorije: [
			{ name: "Kucni budzet", path: "/kategorija/kucni-budzet" },
			{ name: "Investicioni fondovi", path: "/kategorija/investicioni-fondovi" },
			{ name: "Stednja", path: "/kategorija/stednja" },
			{ name: "Bitkoin", path: "/kategorija/bitkoin" },
			{ name: "Nekretnine", path: "/kategorija/nekretnine" },
		],
	},

	{
		tags: "nekretnine",
		desc: "Nekretnine...",
		kategorije: [
			{ name: "Kucni budzet", path: "/kategorija/kucni-budzet" },
			{ name: "Investicioni fondovi", path: "/kategorija/investicioni-fondovi" },
			{ name: "Stednja", path: "/kategorija/stednja" },
			{ name: "Bitkoin", path: "/kategorija/bitkoin" },
			{ name: "Nekretnine", path: "/kategorija/nekretnine" },
		],
	},

	// poslovni kutak

	{
		tags: "biznis coaching",
		desc: "Biznis coaching...",
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
		tags: "digitalni marketing",
		desc: "Digitalni marketing...",
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
		tags: "dizajn",
		desc: "Dizajn...",
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
		tags: "zaposlenje",
		desc: "Zaposlenje...",
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
		tags: "gradjenje karijere",
		desc: "Zaposlenje...",
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
		tags: "profesionalna orijentacija",
		desc: "Profesionalna orijentacija...",
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
			{ name: "Komunikacija", path: "/kategorija/komunikacija" },
		],
	},

	// drustvena svest podkategorije

	{
		tags: "budi human",
		desc: "aaa sadds",
		kategorije: [
			{ name: "Budi Human", path: "/kategorija/budi-human" },
			{ name: "Podeli obrko", path: "/kategorija/podeli-obrok" },
			{ name: "Akcije - prilozi", path: "/kategorija/akcije-prilozi" },
			{ name: "Humanizam", path: "/kategorije/humanizam" },
			{ name: "Sirenje drustvene svesti", path: "/kategorija/sirenje-drustvene-svest" },
		],
	},

	{
		tags: "podeli obrok",
		desc: "aaa sadds",
		kategorije: [
			{ name: "Budi Human", path: "/kategorija/budi-human" },
			{ name: "Podeli obrok", path: "/kategorija/podeli-obrok" },
			{ name: "Akcije - prilozi", path: "/kategorija/akcije-prilozi" },
			{ name: "Humanizam", path: "/kategorije/humanizam" },
			{ name: "Sirenje drustvene svesti", path: "/kategorija/sirenje-drustvene-svest" },
		],
	},

	{
		tags: "akcije - prilozi",
		desc: "aaa sadds",
		kategorije: [
			{ name: "Budi Human", path: "/kategorija/budi-human" },
			{ name: "Podeli obrok", path: "/kategorija/podeli-obrok" },
			{ name: "Akcije - prilozi", path: "/kategorija/akcije-prilozi" },
			{ name: "Humanizam", path: "/kategorije/humanizam" },
			{ name: "Sirenje drustvene svesti", path: "/kategorija/sirenje-drustvene-svest" },
		],
	},

	{
		tags: "humanizam",
		desc: "aaa sadds",
		kategorije: [
			{ name: "Budi Human", path: "/kategorija/budi-human" },
			{ name: "Podeli obrok", path: "/kategorija/podeli-obrok" },
			{ name: "Akcije - prilozi", path: "/kategorija/akcije-prilozi" },
			{ name: "Humanizam", path: "/kategorije/humanizam" },
			{ name: "Sirenje drustvene svesti", path: "/kategorija/sirenje-drustvene-svest" },
		],
	},

	{
		tags: "sirenje drustvene svesti",
		desc: "aaa sadds",
		kategorije: [
			{ name: "Budi Human", path: "/kategorija/budi-human" },
			{ name: "Podeli obrok", path: "/kategorija/podeli-obrok" },
			{ name: "Akcije - prilozi", path: "/kategorija/akcije-prilozi" },
			{ name: "Humanizam", path: "/kategorije/humanizam" },
			{ name: "Sirenje drustvene svesti", path: "/kategorija/sirenje-drustvene-svest" },
		],
	},

	// ----------
	// {
	//   tags: "vegetarijanac",
	//   desc: "Danas je lijep i suncan dan",
	//   kategorije: [
	//     { name: "Zdrava hrana", path: "/kategorija/zdrava%20hrana" },
	//     { name: "Trendovi u ishrani", path: "/" },
	//     { name: "Recepti", path: "/" },
	//   ],
	// },
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
