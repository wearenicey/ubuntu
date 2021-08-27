<template>
  <div class="layout">
    <PageHeader></PageHeader>
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
import PageHeader from "~/components/PageHeader";

export default {
  metaInfo: {
    title: "Learn something new",
  },
  components: {
    PageHeader,
  },

	mounted() {
    let frontEnd = document.createElement("script");
    frontEnd.setAttribute("src", "../header.js");
    frontEnd.setAttribute("id", "main-header-js");

    document.body.appendChild(frontEnd);
    // 👈 load the JS code once the component is mounted
  },
  destroyed() {
    document.getElementById("main-header-js").remove();

    // remove the JS code once the component has been destroyed
  },
};
</script>