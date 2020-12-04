<template>
  <div class="w-full lg:py-6">
    <div class="flex justify-center items-center w-full">
      <tabs class="w-full">
        <tab
          v-for="(experience, index) in $static.experience.edges"
          :key="experience.node.id"
          :name="experience.node.name"
          :selected="index === 0"
          class="md:py-8"
        >
          <p class="text-2xl leading-relaxed font-bold md:text-3xl lg:text-4xl truncate">
            {{ experience.node.title }}
          </p>
          <p class="mb-4 text-sm leading-relaxed text-gray-600 italic md:text-xl">
            {{ experience.node.date }}
          </p>
          <div class="rich-text text-xs md:text-sm lg:text-base" v-html="experience.node.description" />
        </tab>
      </tabs>
    </div>
  </div>
</template>

<static-query>
query {
  experience: allExperience {
    edges {
      node {
        id
        name
        title
        date
        description
      }
    }
  }
}
</static-query>

<script>
import Tab from '@/components//Tab'
import Tabs from '@/components/Tabs'

export default {
  name: 'WorkTabs',
  components: {
    Tab,
    Tabs
  },
  methods: {
    getGradient (index) {
      const repetitions = 3
      const position = index % repetitions

      switch (position) {
        case 0:
          return 'from-green-400 to-cyan-500 rotate-1'
        case 1:
          return 'from-orange-400 to-pink-600 -rotate-1'
        case 2:
          return 'from-fuchsia-500 to-purple-600 rotate-1'
      }
    }
  }
}
</script>
