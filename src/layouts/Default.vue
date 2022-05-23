<template>
	<div>
		<Header />
		<transition name="fade" appear>
			<main>
				<slot></slot>
			</main>
		</transition>
		<FooterLanding />
		<back-to-top bottom="24px" left="24px" style="position: fixed; z-index: 99; left:24px">
			<button type="button" class="btn btn-info btn-to-top border border-transparent rounded-md shadow-lg text-base font-bold text-green-600 bg-white">
				<svg class="icon" viewBox="0 0 16 16">
					<title>Go to top of page</title>
					<g stroke-width="1" stroke="currentColor"><polyline fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="15.5,11.5 8,4 0.5,11.5 "></polyline></g>
				</svg>
			</button>
		</back-to-top>
		<div style="position: fixed; z-index: 99; right: 24px; bottom: 24px">
			<a class="color-red" href="https://wa.me/381653899700" target="_blank"><img src="/wa.png" alt="" srcset="" /></a>
		</div>
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
import FooterLanding from "../components/FooterLanding.vue";
import Header from "../components/Header";

export default {
	components: {
		Header,
		FooterLanding,
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
	transition: opacity 0.75s;
}

.fade-enter {
	opacity: 0;
}
</style>
