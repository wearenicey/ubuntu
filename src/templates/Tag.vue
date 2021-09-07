<template>
  <Layout>
    <div
      class="
        relative
        bg-gray-50
        pt-16
        pb-20
        px-4
        sm:px-6
        lg:pt-24
        lg:pb-28
        lg:px-8
      "
    >
      <div class="absolute inset-0">
        <div class="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div class="relative max-w-7xl mx-auto">
        <div class="text-center">
          <h1
            class="
              text-3xl
              tracking-tight
              font-extrabold
              text-gray-900
              sm:text-4xl
              uppercase
            "
          >
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
        <div
          class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none"
        >
          <div
            v-for="post in $page.tag.belongsTo.edges"
            :key="post.node.id"
            class="flex flex-col rounded-lg shadow-lg overflow-hidden"
          >
            <div class="flex-shrink-0">
              <g-image
                class="h-48 w-full object-cover"
                :src="require(`!!assets-loader!@img/${post.node.image}`)"
                alt=""
              />
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
    <div>
      <AllTags></AllTags>
    </div>
    <div v-for="tag in ishrana">
      <div v-if="$page.tag.title == tag.tags">
        <div v-for="(element, index) in tag.kategorije">
          <a :href="element.path">{{ element.name }}</a>
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
          humanTime: created(format: "DD MMM YYYY")
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
  {
    tags: "zdravlje",
  },
  {
    tags: "super hrana",
    desc: "Danas je lijep i suncan dan",
    kategorije: [
      { name: "Zdrava hrana", path: "/kategorija/zdrava%20hrana" },
      { name: "Trendovi u ishrani", path: "/" },
      { name: "Recepti", path: "/" },
    ],
  },
];
import AllTags from "~/components/AllTags";
export default {
  metaInfo() {
    return {};
  },

  data() {
    return {
      ishrana,
    };
  },

  components: {
    AllTags,
  },
};
</script>