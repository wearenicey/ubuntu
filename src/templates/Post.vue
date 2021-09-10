<template>
	<Layout>
		<div class="relative shadow-sm">
			<div class="max-w-7xl mx-auto flex justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-8 md:justify-start md:space-x-10">
				<div class="hidden md:flex-1 md:flex md:items-center md:justify-between">
					<nav class="flex space-x-10">
						<div v-for="tag in ishrana">
							<div v-if="$page.post.category.title == tag.tags">
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
						</div>
					</nav>
				</div>
			</div>
		</div>
		<div class="container mx-auto">
			<div class="relative py-16 bg-white overflow-hidden">
				<div class="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full"></div>
				<div class="relative px-4 sm:px-6 lg:px-8">
					<div class="text-lg max-w-prose mx-auto">
						<h1>
							<span class="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">Introducing</span>
							<span class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">{{ $page.post.title }}</span>
						</h1>
						<div>
							<p>{{ $page.post.excerpt }}</p>
						</div>
					</div>
					<div class="mt-6 container">
						<div class="prose mx-auto max-w-6xl text-justify" v-html="$page.post.content"></div>
					</div>
				</div>
			</div>
		</div>
		<div class="container mx-auto">
			<div class="max-w-6xl mx-auto">
				<div id="related-posts" v-if="$page.post.related.length > 0">
					<posts-widget :posts="$page.post.related" />
				</div>
				<span v-else style="color: red">This post has no similar posts</span>
			</div>
		</div>
	</Layout>
</template>

<script>
import PostsWidget from "../components/PostsWidget";
export default {
	components: {
		PostsWidget,
	},
};
</script>
<page-query>
  query Post ($path: String!) {
  post: post (path: $path) {
      title
			category {
			title
	}
      image
      image_caption
      excerpt
      imageTwo {

      path
      alt

      }
      content
      humanTime : created(format:"DD.MMM.YYYY")
      datetime : created(format:"ddd MMM DD YYYY hh:mm:ss zZ")

      timeToRead
      tags {
        id
        title
      }

			related{
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
          humanTime: created(format: "DD MMM YYYY")
          datetime: created
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
