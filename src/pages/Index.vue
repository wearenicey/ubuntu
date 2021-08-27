<template>
  <Layout>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135" />

    <h1>Hello, world!</h1>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
      excepturi labore tempore expedita, et iste tenetur suscipit explicabo!
      Dolores, aperiam non officia eos quod asperiores
    </p>

    <p class="home-links">
      <a href="https://gridsome.org/docs/" target="_blank" rel="noopener"
        >Gridsome Docs</a
      >
      <a
        href="https://github.com/gridsome/gridsome"
        target="_blank"
        rel="noopener"
        >GitHub</a
      >
    </p>
    <div>
  <h3 class="text-lg leading-6 font-medium text-gray-900">
    Last 30 days
  </h3>
  <dl class="mt-5 grid grid-cols-1 rounded-lg bg-white overflow-hidden shadow divide-y divide-gray-200 md:grid-cols-3 md:divide-y-0 md:divide-x">
    <div class="px-4 py-5 sm:p-6">
      <dt class="text-base font-normal text-gray-900">
        Total Subscribers
      </dt>
      <dd class="mt-1 flex justify-between items-baseline md:block lg:flex">
        <div class="flex items-baseline text-2xl font-semibold text-indigo-600">
          71,897
          <span class="ml-2 text-sm font-medium text-gray-500">
            from 70,946
          </span>
        </div>

        <div class="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800 md:mt-2 lg:mt-0">
          <!-- Heroicon name: solid/arrow-sm-up -->
          <svg class="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />
          </svg>
          <span class="sr-only">
            Increased by
          </span>
          12%
        </div>
      </dd>
    </div>

    <div class="px-4 py-5 sm:p-6">
      <dt class="text-base font-normal text-gray-900">
        Avg. Open Rate
      </dt>
      <dd class="mt-1 flex justify-between items-baseline md:block lg:flex">
        <div class="flex items-baseline text-2xl font-semibold text-indigo-600">
          58.16%
          <span class="ml-2 text-sm font-medium text-gray-500">
            from 56.14%
          </span>
        </div>

        <div class="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800 md:mt-2 lg:mt-0">
          <!-- Heroicon name: solid/arrow-sm-up -->
          <svg class="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />
          </svg>
          <span class="sr-only">
            Increased by
          </span>
          2.02%
        </div>
      </dd>
    </div>

    <div class="px-4 py-5 sm:p-6">
      <dt class="text-base font-normal text-gray-900">
        Avg. Click Rate
      </dt>
      <dd class="mt-1 flex justify-between items-baseline md:block lg:flex">
        <div class="flex items-baseline text-2xl font-semibold text-indigo-600">
          24.57%
          <span class="ml-2 text-sm font-medium text-gray-500">
            from 28.62%
          </span>
        </div>

        <div class="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium bg-red-100 text-red-800 md:mt-2 lg:mt-0">
          <!-- Heroicon name: solid/arrow-sm-down -->
          <svg class="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
          <span class="sr-only">
            Decreased by
          </span>
          4.05%
        </div>
      </dd>
    </div>
  </dl>
</div>
  </Layout>
</template>

<script>
import AllTags from "~/components/AllTags";
export default {
  metaInfo() {
    return {};
  },

  components: {
    AllTags,
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
