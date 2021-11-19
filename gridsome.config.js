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
	siteDescription: 'Ubuntu centar',
	siteUrl: 'http://www.ubuntucentar.com/',
	plugins: [

		{
      use: 'gridsome-plugin-gtm',
      options: {
        id: 'GTM-XXXXXXX',
        enabled: true,
        debug: true
      }
    },

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
		Post: '/blog/:path',
		Blog: '/blog/',

		Category: [
			{
				path: '/:title',
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

