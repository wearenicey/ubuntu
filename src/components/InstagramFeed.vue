<template>
	<ul role="list" class="mt-6 space-y-6">
		<li class="flow-root" v-for="post in $static.feeds.edges" :key="post.node.id">
			<p>{{ post.node.text }}</p>
		</li>
	</ul>
</template>
<static-query>
query {
  feeds: allInstagramPhoto {
    edges {
      node {
        display_url
        edge_media_to_caption {
          edges {
            node {
              text
            }
          }
        }
      }
    }
  }
}

</static-query>

<script>
export default {
	name: "InstagramFeed",

	data() {
		return {};
	},
};
</script>
