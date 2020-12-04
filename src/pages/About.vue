<template>
  <Layout>
    <section id="about" class="flex flex-col h-view-minus-nav">
      <div class="flex-grow container mx-auto flex flex-col items-center justify-center px-8 sm:px-16 lg:px-24 2xl:px-32 mb-2">
        <div class="flex flex-col mt-4 md:px-16 xl:flex-row">
          <div class="text-center xl:w-1/3 xl:pr-8">
              <div class="inline-flex items-center justify-center w-24 h-24 text-gray-400 bg-gray-200 rounded-full shadow-md lg:w-32 lg:h-32">
                <g-image
                    class="w-full rounded-full"
                    :src="$page.about.avatar"
                    alt="Nathan Ellerton"
                />
              </div>
              <div class="flex flex-col items-center justify-center text-center">
                <h2 class="mt-4 text-lg font-medium text-gray-900 title-font lg:text-2xl">
                  Nathan Ellerton
                </h2>
                <div class="w-12 h-1 mt-2 mb-4 bg-green-500 rounded"></div>
                <p class="text-xs text-gray-600 sm:text-base">
                  {{ $page.about.title }}
                </p>
              </div>
          </div>
          <div class="pt-4 mt-4 text-center border-t border-gray-300 xl:w-2/3 xl:pl-8 xl:py-8 xl:border-l xl:border-t-0 xl:mt-0 xl:text-left">
            <div
                class="mb-4 text-xs leading-relaxed rich-text lg:text-base xl:text-lg"
                v-html="$page.about.description"
            ></div>
            <a class="inline-flex items-center text-green-500">
              Learn More
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
      <div class="flex items-center justify-center mb-6 lg:mb-0">
        <span class="focus:outline-none cursor-pointer" @click="scrollTo('experience')">
          <font-awesome-icon
              class="text-5xl text-green-500 animate-bounce"
              :icon="['fa', 'angle-down']"
          />
        </span>
      </div>
    </section>
    <section id="experience" class="flex flex-col h-view">
      <div class="flex-grow mx-auto flex flex-col py-8 w-full md:w-3/4 lg:w-1/2 mb-2">
        <div class="flex flex-col items-center pb-8">
          <p class="text-lg md:text-3xl font-bold text-green-400 mb-1 border-2 md:border-4 border-green-400 p-2 bg-gray-800 shadow-lg">EXPERIENCE</p>
        </div>
        <experience />
      </div>
      <div class="flex items-center justify-center mb-6 lg:mb-0">
        <span class="focus:outline-none cursor-pointer" @click="scrollTo('skills')">
          <font-awesome-icon
              class="text-5xl text-green-500 animate-bounce"
              :icon="['fa', 'angle-down']"
          />
        </span>
      </div>
    </section>
    <section id="skills" class="flex flex-col h-view">
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
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'

export default {
  metaInfo: {
    title: 'About Me'
  },
  name: 'About',
  components: {
    Experience,
    Skills
  },
  mounted () {
    this.updateViewportHeight()
  },
  created () {
    if (process.isClient) {
      window.addEventListener('resize', this.updateViewportHeight)
    }
  },
  beforeDestroy () {
    if (process.isClient) {
      window.removeEventListener('resize', this.updateViewportHeight)
    }
  },
  methods: {
    updateViewportHeight () {
      if (process.isClient) {
        const windowHeight = window.innerHeight
        const headerHeight = document.getElementById('nav').clientHeight

        document.documentElement.style.setProperty('--navbarHeight', `${headerHeight}px`)
        document.documentElement.style.setProperty('--viewportHeight', `${windowHeight}px`)
      }
    },
    scrollToTop () {
      if (process.isClient) {
        window.scroll({ top: 0, behavior: 'smooth' })

        // Removes any hashtag routes from the URL
        history.pushState('', document.title, window.location.pathname)
      }
    },
    scrollTo (id) {
      if (process.isClient) {
        const element = document.getElementById(id)

        if (!element) {
          return
        }

        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }
}
</script>

<style scoped>
:root {
  --viewportHeight: 100vh;
  --navbarHeight: 0vh;
}

.h-view {
  min-height: var(--viewportHeight, 100vh);
  height: var(--viewportHeight, 100vh);
}

.h-view-minus-nav {
  min-height: calc(var(--viewportHeight, 100vh) - var(--navbarHeight, 0vh));
  height: calc(var(--viewportHeight, 100vh) - var(--navbarHeight, 0vh));
}
</style>
