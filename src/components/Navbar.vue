<template>
  <nav>
    <div class="lg:py-8">
      <div class="flex items-center justify-between h-16">
        <div class="left-0 flex items-center lg:hidden">
          <!-- Mobile menu button-->
          <button
            @click="toggleMenu"
            class="inline-flex items-center justify-center p-2 transition duration-150 ease-in-out rounded-md hover:text-gray-600 focus:outline-none focus:text-gray-800"
            aria-label="Main menu"
            aria-expanded="false"
          >
            <svg
              class="block w-6 h-6 md:h-8 md:w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              class="hidden w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div
          class="flex items-center justify-center flex-1 mr-16 sm:items-stretch sm:justify-end"
        >
          <div class="hidden lg:block">
            <div class="flex">
              <g-link
                to="/"
                :exact-active-class="'active-link'"
                class="mx-8 text-2xl nav-link"
                >Home</g-link
              >
              <g-link
                to="/photos/"
                :active-class="'active-link'"
                class="mx-8 text-2xl nav-link"
                >Photos</g-link
              >
              <g-link
                to="/videos"
                :active-class="'active-link'"
                class="mx-8 text-2xl nav-link"
                >Videos</g-link
              >
              <g-link
                to="/about/"
                :active-class="'active-link'"
                class="mx-8 text-2xl nav-link"
                >About</g-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <nav
      :class="!this.isMenuOpen ? 'max-h-0' : 'max-h-64'"
      class="absolute z-50 w-full overflow-hidden transition-all duration-500 ease-in-out bg-white shadow-md lg:h-0"
    >
      <div class="pt-2 pb-3 pl-2 shadow-md">
        <g-link
          v-on:click.native="hideMenu"
          to="/"
          :exact-active-class="'active-link'"
          class="block text-xl nav-link"
          >Home</g-link
        >
        <g-link
          v-on:click.native="hideMenu"
          to="/photos/"
          :active-class="'active-link'"
          class="block mt-3 text-xl nav-link"
          >Photos</g-link
        >
        <g-link
          v-on:click.native="hideMenu"
          to="/videos/"
          :active-class="'active-link'"
          class="block mt-3 text-xl nav-link"
          >Videos</g-link
        >
        <g-link
          v-on:click.native="hideMenu"
          to="/about/"
          :active-class="'active-link'"
          class="block mt-3 text-xl nav-link"
          >About</g-link
        >
      </div>
    </nav>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    hideMenu() {
      this.isMenuOpen = false;
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style scoped>
.active-link {
  @apply text-green-600 lg:border-b-2 lg:border-green-600;
}

.nav-link {
  @apply leading-5 lg:py-2;
}

.nav-link:hover {
  @apply text-green-600;
}
</style>
