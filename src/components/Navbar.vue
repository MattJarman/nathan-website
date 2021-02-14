<template>
  <nav>
    <div class="relative bg-white">
      <div class="mx-auto w-full">
        <div
            class="flex justify-between items-center py-6 px-4 border-b-2 border-gray-100 md:justify-start md:space-x-10">
          <div class="flex justify-start lg:w-0 lg:flex-1">
            <g-link to="/">
              <span class="sr-only">Home</span>
              <svg class="w-8 h-8 text-green-500 fill-current" id="a9528a82-5725-4f19-87ef-5a5b945e3d16"
                   data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"
                   viewBox="0 0 300 300">
                <path class="b3dc968a-1a88-4449-b68e-87bd7016d67f"
                      d="M274.8.45V300H220.09L89.77,111.47H87.58V300H24.25V.45H79.83l129.3,188.39h2.63V.45Z"/>
              </svg>
            </g-link>
          </div>
          <div class="-my-2 -mr-2 md:hidden">
            <button
                id="mobile-menu-button"
                type="button"
                @click="toggleMenu"
                class="inline-flex justify-center items-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500">
              <span class="sr-only">Open menu</span>
              <svg
                  class="w-6 h-6 pointer-events-none"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor" aria-hidden="true"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>
          <nav class="hidden space-x-10 md:flex">
            <g-link
                to="/"
                class="text-xl font-medium text-gray-500 hover:text-gray-900"
                exact-active-class="text-green-500"
            >
              Home
            </g-link>
            <g-link
                to="/photos"
                class="text-xl font-medium text-gray-500 hover:text-gray-900"
                active-class="text-green-500"
            >
              Photos
            </g-link>
            <g-link
                to="/videos"
                class="text-xl font-medium text-gray-500 hover:text-gray-900"
                active-class="text-green-500"
            >
              Videos
            </g-link>
            <g-link
                to="/about"
                class="text-xl font-medium text-gray-500 hover:text-gray-900"
                active-class="text-green-500"
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
        <div
            v-show="this.isMenuOpen"
            v-on-clickaway.native="hideMenu"
            class="absolute inset-x-0 top-0 z-50 p-2 transition transform origin-top-right md:hidden"
        >
          <div class="bg-white rounded-lg divide-y-2 divide-gray-50 ring-1 ring-black ring-opacity-5 shadow-lg">
            <div class="px-5 pt-5 pb-6">
              <div class="flex justify-between items-center">
                <g-link to="/">
                  <span class="sr-only">Home</span>
                  <svg class="w-6 h-6 text-green-500 fill-current" id="a9528a82-5725-4f19-87ef-5a5b945e3d16"
                       data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 300 300">
                    <path class="b3dc968a-1a88-4449-b68e-87bd7016d67f"
                          d="M274.8.45V300H220.09L89.77,111.47H87.58V300H24.25V.45H79.83l129.3,188.39h2.63V.45Z"/>
                  </svg>
                </g-link>
                <div class="-mr-2">
                  <button type="button" @click="toggleMenu"
                          class="inline-flex justify-center items-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500">
                    <span class="sr-only">Close menu</span>
                    <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
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
                      class="flex items-center p-3 -m-3 text-gray-900 rounded-md hover:bg-gray-50"
                      exact-active-class="text-green-600"
                      v-on:click.native="hideMenu"
                  >
                    <div class="flex justify-center items-center w-6">
                      <font-awesome-icon class="text-xl text-green-500" :icon="['fa', 'home']"/>
                    </div>
                    <span class="ml-3 text-base font-medium">
                      Home
                    </span>
                  </g-link>

                  <g-link
                      to="/photos"
                      class="flex items-center p-3 -m-3 text-gray-900 rounded-md hover:bg-gray-50"
                      active-class="text-green-600"
                      v-on:click.native="hideMenu"
                  >
                    <div class="flex justify-center items-center w-6">
                      <font-awesome-icon class="text-xl text-green-500" :icon="['far', 'image']"/>
                    </div>
                    <span class="ml-3 text-base font-medium">
                      Photos
                    </span>
                  </g-link>

                  <g-link
                      to="/videos"
                      class="flex items-center p-3 -m-3 text-gray-900 rounded-md hover:bg-gray-50"
                      active-class="text-green-600"
                      v-on:click.native="hideMenu"
                  >
                    <div class="flex justify-center items-center w-6">
                      <font-awesome-icon class="text-green-500" :icon="['fa', 'tv']"/>
                    </div>
                    <span class="ml-3 text-base font-medium">
                      Videos
                    </span>
                  </g-link>
                  <g-link
                      to="/about"
                      class="flex items-center p-3 -m-3 text-gray-900 rounded-md hover:bg-gray-50"
                      active-class="text-green-600"
                      v-on:click.native="hideMenu"
                  >
                    <div class="flex justify-center items-center w-6">
                      <font-awesome-icon class="text-xl text-green-500" :icon="['far', 'user']"/>
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
import { mixin as clickaway } from 'vue-clickaway'

export default {
  name: 'Navbar',
  mixins: [clickaway],
  data () {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    hideMenu (e) {
      if (e.target.id === 'mobile-menu-button') {
        return
      }

      this.isMenuOpen = false
    },
    toggleMenu () {
      this.isMenuOpen = !this.isMenuOpen
    }
  }
}
</script>
