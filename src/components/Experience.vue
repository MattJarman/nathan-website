<template>
  <div class="w-full lg:py-6">
    <div class="w-full mb-6 lg:mb-12">
      <h1
        class="mb-2 text-2xl font-medium text-gray-900 sm:text-4xl title-font"
      >
        Where I've Worked
      </h1>
      <div class="w-20 h-1 bg-green-500 rounded"></div>
    </div>
    <div class="flex justify-center w-full">
      <tabs class="w-full md:w-1/2">
        <tab
          v-for="(experience, index) in $static.experience.edges"
          :key="experience.node.id"
          :name="experience.node.name"
          :selected="index === 0"
          class="md:py-8"
        >
          <p class="text-xl leading-relaxed md:text-3xl">
            {{ experience.node.title }}
          </p>
          <p class="mb-4 text-sm leading-relaxed text-gray-600 md:text-xl">
            {{ experience.node.date }}
          </p>
          <div class="rich-text" v-html="experience.node.description" />
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
import Tab from '@/components//Tab';
import Tabs from '@/components/Tabs';

export default {
  name: 'WorkTabs',
  components: {
    Tab,
    Tabs,
  },
};
</script>
