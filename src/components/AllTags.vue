<template>
  <div>
    <div v-for="edge in $static.test.egdes" :key="edge.node.id">
      <h1>{{ edge.node.title }}</h1>
    </div>
  </div>
</template>

<static-query>
query   {
test: allPost {
  edges {
    node {
			id
      tags {
        id
      }
			title
    }
  }
}
  
}
</static-query>
