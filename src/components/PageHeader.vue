<template>
  <nav class="relative bg-white border-b-2 border-gray-300 text-gray-900">
    <div class="container mx-auto flex justify-between">
      <div class="relative block p-4 lg:p-6 text-xl text-teal-600 font-bold">
        <a href="#" class="hover:text-teal-900">Logo</a>
      </div>
      <ul class="flex">
        <!--Regular Link-->
        <li class="hover:bg-teal-700 hover:text-white">
          <a
            href="#"
            class="
              relative
              block
              py-6
              px-2
              lg:p-6
              text-sm
              lg:text-base
              font-bold
            "
            >navlink</a
          >
        </li>

        <!--Toggleable Link-->
        <li class="toggleable hover:bg-teal-700 hover:text-white">
          <input
            type="checkbox"
            value="selected"
            id="toggle-one"
            class="toggle-input"
          />
          <label
            for="toggle-one"
            class="
              block
              cursor-pointer
              py-6
              px-4
              lg:p-6
              text-sm
              lg:text-base
              font-bold
            "
            >test</label
          >
          <div
            role="toggle"
            class="p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-teal-700 z-50"
          >
            <div
              class="
                container
                mx-auto
                w-full
                flex flex-wrap
                justify-between
                mx-2
              "
            >
              <ul class="px-4 w-full sm:w-1/2 lg:w-1/4 pb-6 pt-6 lg:pt-3">
                <li>
                  <a
                    href="#"
                    class="block p-3 hover:bg-teal-900 hover:text-white"
                    >test u ishrani</a
                  >
                </li>

                <li>
                  <a
                    href="/category/zdrava%20hrana"
                    class="block p-3 hover:bg-teal-900 hover:text-white"
                    >Zdrava hrana</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="block p-3 hover:bg-teal-900 hover:text-white"
                    >Super hrana</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="block p-3 hover:bg-teal-900 hover:text-white"
                    >Recepti</a
                  >
                </li>
              </ul>

              <ul class="px-4 w-full sm:w-1/2 lg:w-1/4 pb-6 pt-6 lg:pt-3">
                <h3 class="font-bold text-xl text-white text-bold mb-2">
                  Endor
                </h3>
                <li class="pt-3">
                  <img src="https://placehold.it/205x172" />
                </li>
              </ul>
              <ul class="px-4 w-full sm:w-1/2 lg:w-1/4 pb-6 pt-6 lg:pt-3">
                <h3 class="font-bold text-xl text-white text-bold mb-2">
                  Endor
                </h3>
                <li class="pt-3">
                  <img src="https://placehold.it/205x172" />
                </li>
              </ul>
              <ul class="px-4 w-full sm:w-1/2 lg:w-1/4 pb-6 pt-6 lg:pt-3">
                <h3 class="font-bold text-xl text-white text-bold mb-2">
                  Endor
                </h3>
                <li class="pt-3">
                  <img src="https://placehold.it/205x172" />
                </li>
              </ul>
            </div>
          </div>
        </li>
        <!-- end Toggleable Link-->
        <!--Toggleable Link-->
        <li class="toggleable hover:bg-teal-700 hover:text-white">
          <input
            type="checkbox"
            value="selected"
            id="toggle-two"
            class="toggle-input"
          />
          <label
            for="toggle-two"
            class="
              block
              cursor-pointer
              py-6
              px-4
              lg:p-6
              text-sm
              lg:text-base
              font-bold
            "
            >Ishrana</label
          >
          <div
            role="toggle"
            class="p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-teal-700 z-50"
          >
            <div
              class="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3"
            >
              <nav
                class="
                  grid
                  gap-y-10
                  px-4
                  py-8
                  bg-white
                  sm:gap-x-8
                  sm:py-12
                  sm:px-6
                  lg:px-8
                  xl:pr-12
                "
                aria-labelledby="solutions-heading"
              >
                <h2 id="solutions-heading" class="sr-only">Solutions menu</h2>
                <div>
                  <ul role="list" class="mt-5 space-y-6">
                    <li class="flow-root">
                      <a
                        href="#"
                        class="
                          -m-3
                          p-3
                          flex
                          items-center
                          rounded-md
                          text-base
                          font-medium
                          text-gray-900
                          hover:bg-gray-50
                          transition
                          ease-in-out
                          duration-150
                        "
                      >
                        <!-- Heroicon name: outline/information-circle -->
                        <svg
                          class="flex-shrink-0 h-6 w-6 text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span class="ml-4">Trendovi u ishrani</span>
                      </a>
                    </li>

                    <li class="flow-root">
                      <a
                        href="/kategorija/zdrava%20hrana"
                        class="
                          -m-3
                          p-3
                          flex
                          items-center
                          rounded-md
                          text-base
                          font-medium
                          text-gray-900
                          hover:bg-gray-50
                          transition
                          ease-in-out
                          duration-150
                        "
                      >
                        <!-- Heroicon name: outline/office-building -->
                        <svg
                          class="flex-shrink-0 h-6 w-6 text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                          />
                        </svg>
                        <span class="ml-4">Zdrava hrana</span>
                      </a>
                    </li>

                    <li class="flow-root">
                      <a
                        href="/kategorija/super%20hrana"
                        class="
                          -m-3
                          p-3
                          flex
                          items-center
                          rounded-md
                          text-base
                          font-medium
                          text-gray-900
                          hover:bg-gray-50
                          transition
                          ease-in-out
                          duration-150
                        "
                      >
                        <!-- Heroicon name: outline/newspaper -->
                        <svg
                          class="flex-shrink-0 h-6 w-6 text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                          />
                        </svg>
                        <span class="ml-4">Super hrana</span>
                      </a>
                    </li>

                    <li class="flow-root">
                      <a
                        href="#"
                        class="
                          -m-3
                          p-3
                          flex
                          items-center
                          rounded-md
                          text-base
                          font-medium
                          text-gray-900
                          hover:bg-gray-50
                          transition
                          ease-in-out
                          duration-150
                        "
                      >
                        <!-- Heroicon name: outline/briefcase -->
                        <svg
                          class="flex-shrink-0 h-6 w-6 text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                        <span class="ml-4">Recepti</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
              <div
                class="
                  bg-gray-50
                  px-4
                  py-8
                  sm:py-12
                  sm:px-6
                  lg:px-8
                  xl:pl-12
                  col-span-2
                "
              >
                <div>
                  <h3
                    class="
                      text-sm
                      font-medium
                      tracking-wide
                      text-gray-500
                      uppercase
                    "
                  >
                    From the blog
                  </h3>
                  <ul role="list" class="mt-6 space-y-6">
                    <li class="flow-root">
                      <a
                        href="#"
                        class="
                          -m-3
                          p-3
                          flex
                          rounded-lg
                          hover:bg-gray-100
                          transition
                          ease-in-out
                          duration-150
                        "
                      >
                        <div class="hidden sm:block flex-shrink-0">
                          <img
                            class="w-32 h-20 object-cover rounded-md"
                            src="https://images.unsplash.com/photo-1558478551-1a378f63328e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2849&q=80"
                            alt=""
                          />
                        </div>
                        <div class="min-w-0 flex-1 sm:ml-8">
                          <h4
                            class="text-base font-medium text-gray-900 truncate"
                          >
                            Boost your conversion rate
                          </h4>
                          <p class="mt-1 text-sm text-gray-500">
                            Eget ullamcorper ac ut vulputate fames nec mattis
                            pellentesque elementum. Viverra tempor id mus.
                          </p>
                        </div>
                      </a>
                    </li>

                    <li class="flow-root">
                      <a
                        href="#"
                        class="
                          -m-3
                          p-3
                          flex
                          rounded-lg
                          hover:bg-gray-100
                          transition
                          ease-in-out
                          duration-150
                        "
                      >
                        <div class="hidden sm:block flex-shrink-0">
                          <img
                            class="w-32 h-20 object-cover rounded-md"
                            src="https://images.unsplash.com/1/apple-gear-looking-pretty.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
                            alt=""
                          />
                        </div>
                        <div class="min-w-0 flex-1 sm:ml-8">
                          <h4
                            class="text-base font-medium text-gray-900 truncate"
                          >
                            How to use search engine optimization to drive
                            traffic to your site
                          </h4>
                          <p class="mt-1 text-sm text-gray-500">
                            Eget ullamcorper ac ut vulputate fames nec mattis
                            pellentesque elementum. Viverra tempor id mus.
                          </p>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="mt-6 text-sm font-medium">
                  <a
                    href="#"
                    class="
                      text-indigo-600
                      hover:text-indigo-500
                      transition
                      ease-in-out
                      duration-150
                    "
                    >View all posts <span aria-hidden="true">&rarr;</span></a
                  >
                </div>
              </div>
            </div>
          </div>
        </li>
        <!-- end Toggleable Link-->
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
.mega-menu {
  display: none;
  left: 0;
  position: absolute;
  text-align: left;
  width: 100%;
  background-color: white !important;
}

/* #hoverable Class Styles */
.hoverable {
  position: static;
}

.hoverable > a:after {
  content: "\25BC";
  font-size: 10px;
  padding-left: 6px;
  position: relative;
  top: -1px;
}

.hoverable:hover .mega-menu {
  display: block;
}

/* #toggle Class Styles */

.toggleable > label:after {
  content: "\25BC";
  font-size: 10px;
  padding-left: 6px;
  position: relative;
  top: -1px;
}

.toggle-input {
  display: none;
}
.toggle-input:not(checked) ~ .mega-menu {
  display: none;
}

.toggle-input:checked ~ .mega-menu {
  display: block;
}

.toggle-input:checked + label {
  color: white;
  background: rgb(3, 102, 114); /*@apply bg-teal-700 */
}

.toggle-input:checked ~ label:after {
  content: "\25B2";
  font-size: 10px;
  padding-left: 6px;
  position: relative;
  top: -1px;
}
</style>