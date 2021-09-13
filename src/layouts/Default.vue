<template>
	<div class="layout">
		<Navigation></Navigation>
		<slot />
		<Footer></Footer>
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
import Navigation from "../components/Navigation";
import Footer from "../components/Footer.vue";

export default {
	metaInfo: {
		title: "Learn something new",
	},
	components: {
		Navigation,
		Footer,
	},
};
</script>
