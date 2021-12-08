<template>
<client-only> 
	<vue-horizontal>
		<section class="py-6" v-for="cate in $static.allCategory.edges" :key="cate.node.id">
			<g-link :to="cate.node.path" class="px-5 rounded-md py-3 bg-gray-100 mr-3">{{ cate.node.title }}</g-link>
		</section>
	</vue-horizontal>
</client-only>
</template>

<static-query>
query {
  allCategory {
    edges {
      node {
        path
        id
        title
      }
    }
  }
}
</static-query>

<script>
// Depending on how you installed it, import it if required.
// import VueHorizontal from "vue-horizontal";

export default {
	// components: { VueHorizontal },
	data() {
		return { items: [1, 2, 3] };
	},
};
</script>
<style scoped>
a.active--exact.active {
	color: #059669;
	font-weight: bold;
}
</style>
