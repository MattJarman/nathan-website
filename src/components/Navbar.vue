<template>
  <nav>
    <div class="relative bg-white">
      <div class="w-full mx-auto">
        <div
            class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10 px-4">
          <div class="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span class="sr-only">Workflow</span>
              <img class="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                   alt="">
            </a>
          </div>
          <div class="-mr-2 -my-2 md:hidden">
            <button type="button" @click="toggleMenu"
                    class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span class="sr-only">Open menu</span>
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>
          <nav class="hidden md:flex space-x-10">
            <g-link
                to="/"
                class="text-base font-medium text-gray-500 hover:text-gray-900"
                exact-active-class="text-green-500"
            >
              Home
            </g-link>
            <g-link
                to="/photos"
                class="text-base font-medium text-gray-500 hover:text-gray-900"
                exact-active-class="text-green-500"
            >
              Photos
            </g-link>
            <g-link
                to="/videos"
                class="text-base font-medium text-gray-500 hover:text-gray-900"
                exact-active-class="text-green-500"
            >
              Videos
            </g-link>
            <g-link
                to="/about"
                class="text-base font-medium text-gray-500 hover:text-gray-900"
                exact-active-class="text-green-500"
            >
              About
            </g-link>
          </nav>
        </div>
      </div>
      <transition
          enter-active-class="duration-200 ease-out"
          enter-class="opacity-0 scale-95"
          enter-to-class="opacity-100 scale-100"
          leave-active-class="duration-100 ease-in"
          leave-class="opacity-100 scale-100"
          leave-to-class="opacity-0 scale-95"
      >
        <div v-show="this.isMenuOpen"
             class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-50">
          <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div class="pt-5 pb-6 px-5">
              <div class="flex items-center justify-between">
                <div>
                  <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                       alt="Workflow">
                </div>
                <div class="-mr-2">
                  <button type="button" @click="toggleMenu"
                          class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span class="sr-only">Close menu</span>
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                  </button>
                </div>
              </div>
              <div class="mt-6">
                <nav class="grid gap-y-8">
                  <g-link
                      to="/"
                      class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 text-gray-900"
                      exact-active-class="text-green-600"
                      v-on:click.native="hideMenu"
                  >
                    <div class="flex items-center justify-center w-6">
                      <font-awesome-icon class="text-green-500 text-xl" :icon="['fa', 'home']"/>
                    </div>
                    <span class="ml-3 text-base font-medium">
                      Home
                    </span>
                  </g-link>

                  <g-link
                      to="/photos"
                      class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 text-gray-900"
                      active-class="text-green-600"
                      v-on:click.native="hideMenu"
                      >
                    <div class="flex items-center justify-center w-6">
                      <font-awesome-icon class="text-green-500 text-xl" :icon="['fa', 'camera']"/>
                    </div>
                    <span class="ml-3 text-base font-medium">
                      Photos
                    </span>
                  </g-link>

                  <g-link
                      to="/videos"
                      class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 text-gray-900"
                      active-class="text-green-600"
                      v-on:click.native="hideMenu"
                  >
                    <div class="flex items-center justify-center w-6">
                      <font-awesome-icon class="text-green-500 text-xl" :icon="['fa', 'tv']"/>
                    </div>
                    <span class="ml-3 text-base font-medium">
                      Videos
                    </span>
                  </g-link>
                  <g-link
                      to="/about"
                      class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 text-gray-900"
                      active-class="text-green-600"
                      v-on:click.native="hideMenu"
                  >
                    <div class="flex items-center justify-center w-6">
                      <font-awesome-icon class="text-green-500 text-xl" :icon="['far', 'user']"/>
                    </div>
                    <span class="ml-3 text-base font-medium text-gray-900">
                      About
                    </span>
                  </g-link>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    hideMenu () {
      this.isMenuOpen = false
    },
    toggleMenu () {
      this.isMenuOpen = !this.isMenuOpen
    }
  }
}
</script>
