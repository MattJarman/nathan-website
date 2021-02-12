<template>
  <div>
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
          </div>
        </div>
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
    <section id="skills" class="skewed-container flex flex-col items-center min-h-view">
      <div class="skewed-content my-16 px-4 sm:px-16 lg:px-32 xl:px-64 2xl:px-96 container mx-auto z-10 h-full text-white">
        <div class="mb-24">
          <p class="text-4xl lg:text-5xl font-bold mb-4 text-light-blue-400">Skills</p>
        </div>
        <div class="w-full">
          <skill
              v-for="skill in $page.skills.edges"
              :key="skill.node.id"
              class="mb-4 md:mb-6"
              :name="skill.node.name"
              v-bind:percentage=skill.node.level
          />
        </div>
      </div>
    </section>
    <section id="experience" class="flex flex-col items-center min-h-view">
      <div class="content flex-grow my-12 px-4 px-4 sm:px-16 container mx-auto">
        <p class="text-4xl lg:text-5xl font-bold text-green-500 mb-16">Experience</p>
        <div class="text-gray-600 body-font">
          <div class="container px-5 mx-auto flex flex-wrap">
            <div
                v-for="groupedExperience in this.groupedExperiences"
                :key="groupedExperience.yearEnd"
                class="flex relative pt-10 md:w-2/3 w-full mx-auto"
            >
              <div class="flex justify-center absolute transform -rotate-90 w-16 -left-12 md:rotate-0 md:pr-8 md:w-12">
                <span class="font-bold text-gray-400">{{groupedExperience.yearEnd}}</span>
              </div>
              <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div class="h-full w-1 bg-green-500 pointer-events-none"></div>
              </div>
              <div class="flex-shrink-0 w-6 h-6 rounded-full sm:mt-0 inline-flex items-center border-4 border-green-500 bg-white text-white relative z-10 title-font font-medium text-sm"></div>
              <div class="flex-grow pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div class="flex-grow w-full mt-3 border-t-2 border-gray-200 py-4">
                  <div v-for="experience in groupedExperience.experiences" :key="experience.id" class="mb-8 last:mb-0">
                    <p class="font-bold text-xl text-black md:text-3xl">{{experience.title}}</p>
                    <p class="italic text-sm text-gray-500 mb-2">{{experience.name}}</p>
                    <div class="text-xs leading-relaxed rich-text"  v-html="experience.description"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-center mb-6 lg:mb-0">
        <span class="focus:outline-none cursor-pointer" @click="scrollToTop">
          <font-awesome-icon
              class="text-5xl text-green-500 animate-bounce"
              :icon="['fa', 'angle-up']"
          />
        </span>
      </div>
    </section>
  </div>

</template>

<page-query>
query {
  about(id: 1) {
    id
    title
    description
    avatar
  }
  skills: allSkills(sortBy: "level") {
    edges {
      node {
        id
        name
        level
      }
    }
  }
  experience: allExperience(sortBy: "yearEnd") {
    edges {
      node {
        id
        title
        name
        description
        yearEnd
      }
    }
  }
}
</page-query>

<script>
import Skill from '../components/Skill'
export default {
  metaInfo: {
    title: 'About Me'
  },
  name: 'About',
  components: {
    Skill
  },
  data () {
    return {
      skewedAngle: -4
    }
  },
  computed: {
    groupedExperiences () {
      const groupedExperiences = []
      for (const edge of this.$page.experience.edges) {
        const foundYearIndex = groupedExperiences.findIndex(experience => experience.yearEnd === edge.node.yearEnd)

        const experience = {
          id: edge.node.id,
          title: edge.node.title,
          name: edge.node.name,
          description: edge.node.description
        }

        if (foundYearIndex !== -1) {
          groupedExperiences[foundYearIndex].experiences.push(experience)

          continue
        }

        groupedExperiences.push({
          yearEnd: edge.node.yearEnd,
          experiences: [experience]
        })
      }

      return groupedExperiences
    }
  },
  mounted () {
    this.handleResizeEvents()
  },
  created () {
    if (process.isClient) {
      this.setCSSVariables()
    }
  },
  methods: {
    handleResizeEvents () {
      if (process.isClient) {
        this.updateContentPadding()
      }
    },
    updateContentPadding () {
      const width = window.innerWidth
      const radians = Math.abs(this.skewedAngle) * (Math.PI / 180)
      const padding = (Math.tan(radians) / 2) * width
      document.documentElement.style.setProperty('--skewedContentPaddingY', `${padding}px`)
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
    },
    setCSSVariables () {
      document.documentElement.style.setProperty('--skewedAngle', `${this.skewedAngle}deg`)
    }

  }
}
</script>

<style scoped>

:root {
  --skewedAngle: -4deg;
  --viewportHeight: 100vh;
  --navbarHeight: 0vh;
  --skewedContentPaddingY: 0px;
}

.skewed-container {
  @apply relative;
}

.skewed-container:before {
  content: "";
  transform: skewY(var(--skewedAngle, -4deg));
  margin: var(--skewedContentPaddingY) 0;
  @apply absolute top-0 right-0 left-0 bottom-0 bg-oxford-blue
}

.skewed-content {
  padding-top: calc(var(--skewedContentPaddingY) * 2);
  padding-bottom: calc(var(--skewedContentPaddingY) * 2);
}
</style>
