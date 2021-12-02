<template>
	<div bottom="50px" right="50px" style="position: fixed; z-index: 99">
		<button type="button" class="btn btn-info btn-to-top border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600">
			<svg class="icon" viewBox="0 0 16 16">
				<title>Go to top of page</title>
				<g stroke-width="1" stroke="currentColor"><polyline fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="15.5,11.5 8,4 0.5,11.5 "></polyline></g>
			</svg>
		</button>
	</div>
</template>

<script>
export default {
	name: "Backtotop",

	data() {
		return {};
	},
};
</script>
