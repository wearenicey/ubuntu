// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const tailwind = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')

const postcssPlugins = [
	tailwind(),
]

if (process.env.NODE_ENV === 'production') postcssPlugins.push(purgecss(require('./purgecss.config.js')))

module.exports = {
	siteName: 'Ubuntu Centar',
	siteUrl: 'http://www.ubuntucentar.com/',
	plugins: [

		{
			use: 'gridsome-plugin-gtm',
			options: {
				id: 'GTM-TST9HFJ',
				enabled: true,
				debug: true
			}
		},

		{
		  use: '@gridsome/plugin-sitemap',
		  options: {
		    exclude: ['/404', '/blog/2', '/blog/3'],
		    config: {
		      '/blog/*': {
		        changefreq: 'daily',
		        priority: 0.9,
		        lastmod: '2021-12-11',
		      },
					'/blog/*/*': {
		        changefreq: 'daily',
		        priority: 0.8,
		        lastmod: '2021-12-11',
		      },
					'/savetovaliste-beograd/': {
						changefreq: 'daily',
						priority: 0.8,
						lastmod: '2021-10-12',
					},

		    }
		  }
		},

		// {
		// 	use: "gridsome-plugin-htaccess",
		// 	options: {
		// 		forceHttps: true,
		// 		redirections: [
		// 			{
		// 				from: "https://www.ubuntucentar.com/savetovaliste-u-beogradu/",
		// 				to: "/savetovaliste-beograd/",
		// 			},
		// 			{
		// 				from: "https://www.ubuntucentar.com/blog/samopovredivanje/",
		// 				to: "/blog/nefunkcionalna-ponasanja/samopovredjivanje/",
		// 			},
		// 			{
		// 				from: "http://www.ubuntucentar.com/uncategorized/emocionalna-glad/feed/",
		// 				to: "/blog/emocije/emocionalna-glad/",
		// 			},
		// 			{
		// 				from: "https://www.ubuntucentar.com/uncategorized/uvod-u-osnovne-emocije-sreca/",
		// 				to: "/blog/emocije/uvod-u-osnovne-emocije-sreca/",
		// 			},
		// 			{
		// 				from: "https://www.ubuntucentar.com/uncategorized/osnovni-principi-transakcione-analize/",
		// 				to: "/blog/psihoterapijski-pravci/osnovni-principi-transakcione-analize/",
		// 			},
		// 			{
		// 				from: "https://www.ubuntucentar.com/uncategorized/razlika-izmedu-psihologa-psihijatra-i-psihoterapeuta/feed/",
		// 				to: "/blog/psihoterapija/razlika-izmedju-psihologa-psihijatra-i-psihoterapeuta/",
		// 			},
		// 			{
		// 				from: "https://www.ubuntucentar.com/savetovaliste-u-novom-sadu/",
		// 				to: "/savetovaliste-novi-sad/",
		// 			},
		// 			{
		// 				from: "https://www.ubuntucentar.com/uncategorized/psihodrama",
		// 				to: "/blog/psihoterapijski-pravci/psihodorama/",
		// 			},
		// 			{
		// 				from: "https://www.ubuntucentar.com/category/blog/feed/",
		// 				to: "/blog",
		// 			},
		// 			{
		// 				from: "https://www.ubuntucentar.com/projekti/",
		// 				to: "/",
		// 			},
		// 			{
		// 				from: "http://www.ubuntucentar.com/o-nama/",
		// 				to: "/zasto-ubuntu"
		// 			},
		// 			{
		// 				from: "https://www.ubuntucentar.com/uncategorized/sta-su-panicni-napadi-i-zbog-cega-nastaju/feed/",
		// 				to: "/blog/panicni-napadi/sta-su-panicni-napadi-zbog-cega-nastaju/"
		// 			},
		// 			{
		// 				from: "http://www.ubuntucentar.com/o-nama/",
		// 				to: "/zasto-ubuntu"
		// 			},
		// 			{
		// 				from: "https://www.ubuntucentar.com/uncategorized/koliko-me-je-do-sada-bolela-psihoterapija/feed/",
		// 				to: "/blog/psihoterapija/koliko-me-je-do-sada-bolela-psihoterapija/"
		// 			},
		// 			{
		// 				from: "https://www.ubuntucentar.com/comments/feed/",
		// 				to: "/blog"
		// 			},
		// 			{
		// 				from: "https://www.ubuntucentar.com/uncategorized/metafora-i-sistemska-porodicna-psihoterapija/feed/",
		// 				to: "/blog/psihoterapijski-pravci/metafora-i-sistemska-porodicna-psihoterapija/"
		// 			},
		// 			{
		// 				from: "http://www.ubuntucentar.com/uncategorized/prokrastinacija-i-sta-sa-njom/feed/",
		// 				to: "/blog/nefunkcionalna-ponasanja/prokrastinacija-i-sta-sa-njom/"
		// 			},
		// 			{
		// 				from: "https://www.ubuntucentar.com/uncategorized/metafora-i-sistemska-porodicna-psihoterapija/feed/",
		// 				to: "https://ubuntucentar.com/blog/nefunkcionalna-ponasanja/prokrastinacija-i-sta-sa-njom/"
		// 			},
		// 			{
		// 				from: "http://www.ubuntucentar.com/uncategorized/sta-mozete-ocekivati-od-terapije-i-na-prvoj-seansi/feed/",
		// 				to: "/blog/psihoterapija/sta-mozete-ocekivati-od-terapije-i-na-prvoj-seansi/"
		// 			},
		// 			{
		// 				from: "http://www.ubuntucentar.com/category/blog/feed/",
		// 				to: "/blog"
		// 			},
		// 			{
		// 				from: "http://www.ubuntucentar.com/uncategorized/anksioznost/feed/",
		// 				to: "/blog/anksioznost-i-anksiozni-poremecaji/sta-je-aksioznost/"
		// 			},
		// 			{
		// 				from: "http://www.ubuntucentar.com/author/admin/feed/",
		// 				to: "/blog"
		// 			},
		// 			{
		// 				from: "https://www.ubuntucentar.com/feed/",
		// 				to: "/blog"
		// 			},
		// 			{
		// 				from: "http://www.ubuntucentar.com/feed/",
		// 				to: "/blog"
		// 			},
		// 		],
		// 	},
		// },

		{
			use: '@gridsome/source-filesystem',
			options: {
				typeName: 'Category',
				path: './content/category/*.md'
			}
		},

		{
			use: '@gridsome/source-filesystem',
			options: {
				typeName: 'Author',
				path: './content/author/*.md'
			}
		},

		{
			use: '@gridsome/source-filesystem',
			options: {
				typeName: 'Post',
				path: './content/blog/**/**/*.md',


				refs: {
					author: 'Author',


					category: {
						typeName: 'Category',
						create: true
					}
				}
			},

		},

		{
			use: '@gridsome/source-filesystem',
			options: {
				typeName: 'Blog',
				path: './content/blog/**/**/*.md',


				refs: {
					author: 'Author',

				}
			},

		},



	],
	templates: {
		Post: '/blog/:category/:path',

		Category: [
			{
				path: '/blog/:id',
				componenent: '~/templates/Category.vue',
			},
		],



	},

	transformers: {
		remark: {
			externalLinksTarget: '_blank',
			externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
			anchorClassName: 'icon icon-link',
			plugins: [
				// ...global plugins
			],
		},
	},
	chainWebpack: config => {
		config.resolve.alias.set('@img', '@/assets/img')
	},
	css: {
		loaderOptions: {
			postcss: {
				plugins: postcssPlugins,
			},
		},
	},
}

