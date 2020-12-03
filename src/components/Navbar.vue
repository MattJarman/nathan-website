<template>
  <nav>
    <div class="relative bg-white">
      <div class="w-full mx-auto">
        <div
            class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10 px-4">
          <div class="flex justify-start lg:w-0 lg:flex-1">
            <g-link to="/">
              <span class="sr-only">Home</span>
              <svg class="w-8 h-8 fill-current text-green-500" id="a9528a82-5725-4f19-87ef-5a5b945e3d16" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"
                   viewBox="0 0 300 300">
                <path class="b3dc968a-1a88-4449-b68e-87bd7016d67f" d="M274.8.45V300H220.09L89.77,111.47H87.58V300H24.25V.45H79.83l129.3,188.39h2.63V.45Z"/>
              </svg>
            </g-link>
          </div>
          <div class="-mr-2 -my-2 md:hidden">
            <button
                id="mobile-menu-button"
                type="button"
                @click="toggleMenu"
                class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500">
              <span class="sr-only">Open menu</span>
              <svg
                  class="pointer-events-none h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor" aria-hidden="true"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>
          <nav class="hidden md:flex space-x-10">
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
                exact-active-class="text-green-500"
            >
              Photos
            </g-link>
            <g-link
                to="/videos"
                class="text-xl font-medium text-gray-500 hover:text-gray-900"
                exact-active-class="text-green-500"
            >
              Videos
            </g-link>
            <g-link
                to="/about"
                class="text-xl font-medium text-gray-500 hover:text-gray-900"
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
        <div
            v-show="this.isMenuOpen"
            v-on-clickaway.native="hideMenu"
            class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-50"
        >
          <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div class="pt-5 pb-6 px-5">
              <div class="flex items-center justify-between">
                <g-link to="/">
                  <span class="sr-only">Home</span>
                  <svg class="w-6 h-6 fill-current text-green-500" id="a9528a82-5725-4f19-87ef-5a5b945e3d16" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 300 300">
                    <path class="b3dc968a-1a88-4449-b68e-87bd7016d67f" d="M274.8.45V300H220.09L89.77,111.47H87.58V300H24.25V.45H79.83l129.3,188.39h2.63V.45Z"/>
                  </svg>
                </g-link>
                <div class="-mr-2">
                  <button type="button" @click="toggleMenu"
                          class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500">
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
                      <font-awesome-icon class="text-green-500 text-xl" :icon="['far', 'image']"/>
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
                      <font-awesome-icon class="text-green-500" :icon="['fa', 'tv']"/>
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
