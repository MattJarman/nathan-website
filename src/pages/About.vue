<template>
  <Layout>
    <section
      id="about-me"
      class="flex flex-col height-screen-minus-nav lg:h-view"
    >
      <div class="container flex flex-col flex-grow mx-auto">
        <div class="w-full">
          <h1 class="text-2xl font-medium text-gray-900 sm:text-4xl title-font">
            About Me
          </h1>
          <div class="w-20 h-1 bg-green-500 rounded"></div>
        </div>
        <div class="flex items-center h-full mx-auto lg:w-4/6">
          <div class="flex flex-col mt-4 md:px-16 lg:flex-row">
            <div class="text-center lg:w-1/3 lg:pr-8 sm:py-8">
              <div
                class="inline-flex items-center justify-center w-24 h-24 text-gray-400 bg-gray-200 rounded-full shadow-md md:w-32 md:h-32"
              >
                <g-image
                  class="w-full rounded-full"
                  :src="$page.about.avatar"
                  alt="Nathan Ellerton"
                />
              </div>
              <div
                class="flex flex-col items-center justify-center text-center"
              >
                <h2 class="mt-4 text-lg font-medium text-gray-900 title-font">
                  Nathan Ellerton
                </h2>
                <div class="w-12 h-1 mt-2 mb-4 bg-green-500 rounded"></div>
                <p class="text-xs text-gray-600 sm:text-base">
                  {{ $page.about.title }}
                </p>
              </div>
            </div>
            <div
              class="pt-4 mt-4 text-center border-t border-gray-300 lg:w-2/3 lg:pl-8 lg:py-8 lg:border-l lg:border-t-0 lg:mt-0 lg:text-left"
            >
              <div
                class="mb-4 text-xs leading-relaxed rich-text md:text-base lg:text-lg"
                v-html="$page.about.description"
              ></div>
              <a class="inline-flex items-center text-green-500"
                >Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-center mb-6 lg:mb-0">
        <a class="focus:outline-none" href="#experience">
          <font-awesome-icon
            class="text-5xl text-green-500 animate-bounce"
            :icon="['fa', 'angle-down']"
          />
        </a>
      </div>
    </section>
    <section id="experience" class="flex flex-col height-screen">
      <div class="container flex-grow pt-4 mx-auto">
        <experience />
      </div>
      <div class="flex items-center justify-center mb-6 lg:mb-0">
        <a href="#skills">
          <font-awesome-icon
            class="text-5xl text-green-500 animate-bounce"
            :icon="['fa', 'angle-down']"
          />
        </a>
      </div>
    </section>
    <section id="skills" class="flex flex-col height-screen">
      <div class="container flex-grow mx-auto">
        <skills />
      </div>
      <div class="flex items-center justify-center mb-6 lg:mb-0">
        <span @click="this.scrollToTop" class="cursor-pointer">
          <font-awesome-icon
            class="text-5xl text-green-500 animate-bounce"
            :icon="['fa', 'angle-up']"
          />
        </span>
      </div>
    </section>
  </Layout>
</template>

<page-query>
query {
  about(id: 1) {
    id
    title
    description
    avatar
  }
}
</page-query>

<script>
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";

export default {
  metaInfo: {
    title: 'About Me',
  },
  name: 'About',
  components: {
    Experience,
    Skills,
  },
  methods: {
    scrollToTop() {
      if (process.isClient) {
        document.body.scrollTop = document.documentElement.scrollTop = 0;

        // Removes any hashtag routes from the URL
        history.pushState("", document.title, window.location.pathname);
      }
    },
  },
};
</script>

<style scoped>
.rich-text >>> a {
  @apply text-green-500;
}
</style>
