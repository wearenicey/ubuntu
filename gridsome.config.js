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
	siteName: 'Gridsome',
	plugins: [

		{
			use: '@gridsome/source-filesystem',
			options: {
				typeName: 'Author',
				path: './content/author/*.md',
				refs: {
					posts: {
						typeName: 'Post',
					},
				},
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
				typeName: 'Post',
				path: './content/blog/**/**/*.md',


				refs: {
					author: 'Author',
					tags: {
						typeName: 'Tag',
						create: true,
					},
					category: {
						typeName: 'Category',
						create: true
					}
				}
			},

		},
		{
			use: "gridsome-plugin-recommender",
			options: {
				enabled: true,
				debug: true,
				typeName: 'Post',
				field: 'tag',
				relatedFieldName: 'related',
				minScore: 0.1,
				maxRelations: 3,

			}
		}

	],
	templates: {
		Post: '/blog/:path',
		Tag: '/kategorija/:slug',

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

