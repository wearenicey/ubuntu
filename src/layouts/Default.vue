<template>
	<div class="layout">
		<Navigation></Navigation>
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
import Navigation from "../components/Navigation";

export default {
	metaInfo: {
		title: "Learn something new",
	},
	components: {
		Navigation,
	},
};
</script>
