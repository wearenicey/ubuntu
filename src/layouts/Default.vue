<template>
  <div class="layout">
    <Header></Header>
    <slot />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Header from "../components/Header";

export default {
  metaInfo: {
    title: "Learn something new",
  },
  components: {
    Header,
  },
};
</script>
