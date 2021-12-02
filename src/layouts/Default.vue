<template>
	<transition name="fade" appear>

			<Header></Header>
			<slot />

			<Footer></Footer>
	</transition>
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
import Footer from "../components/Footer";

export default {
	components: {
		Header,
		Footer,
	},
};
</script>

<style scoped>
.btn-to-top {
	width: 60px;
	height: 60px;
	padding: 10px 16px;
	border-radius: 50%;
	font-size: 22px;
	line-height: 22px;
}

.fade-enter-active {
	transition: opacity 0.5s;
}

.fade-enter {
	opacity: 0;
}
</style>
