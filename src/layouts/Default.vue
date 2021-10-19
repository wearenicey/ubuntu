<template>
		<transition name="fade" appear>
	<div class="layout">
		<back-to-top bottom="50px" right="50px" style="position: fixed; z-index: 99">
			<button type="button" class="btn btn-info btn-to-top border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600">
				<svg class="icon" viewBox="0 0 16 16">
					<title>Go to top of page</title>
					<g stroke-width="1" stroke="currentColor"><polyline fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="15.5,11.5 8,4 0.5,11.5 "></polyline></g>
				</svg>
			</button>
		</back-to-top>

		<Header></Header>
			<slot />

		<Footer></Footer>

	</div>
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
