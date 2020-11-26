<template>
  <div class="h-full lg:py-6">
    <div class="w-full">
      <h1
        class="mb-2 text-2xl font-medium text-gray-900 sm:text-4xl title-font"
      >
        My Skills
      </h1>
      <div class="w-20 h-1 bg-green-500 rounded"></div>
    </div>
    <div
      class="flex flex-col items-center justify-center w-full h-full mx-auto md:w-2/3"
    >
      <p
        class="w-full mb-4 text-xl font-medium leading-relaxed text-center border-b-2 border-gray-300 md:text-2xl"
      >
        Proficiencies
      </p>
      <div class="flex flex-col items-center w-full py-4">
        <div
          class="flex flex-row flex-wrap justify-between w-full skills sm:w-2/3 lg:w-3/5 xl:w-2/5"
        >
          <proficiency
            v-for="skill in $static.skills.edges"
            :key="skill.node.id"
            :name="skill.node.name"
            :level="skill.node.level"
          />
        </div>
      </div>
      <p
        class="w-full mb-4 text-xl font-medium leading-relaxed text-center border-b-2 border-gray-300 md:text-2xl"
      >
        Tools
      </p>
      <div
        class="flex flex-col flex-grow w-full mb-16 text-xs leading-relaxed h-1/3 lg:mb-64 md:text-base"
      >
        <tool
          :icon="['fa', 'camera']"
          tools="Adobe Photoshop, Adobe Lightroom, etc."
        />
        <tool
          :icon="['fa', 'video']"
          tools="Adobe Premiere, Sony Vegas Pro, Windows Movie Maker, etc."
          :reversed="true"
        />
        <tool
          :icon="['fa', 'file-alt']"
          tools="Microsoft Word, Microsoft Excel, Google Docs, etc."
        />
      </div>
    </div>
  </div>
</template>

<static-query>
query {
  skills: allSkills(sortBy: "level", order: DESC) {
    edges {
      node {
        id
        name
        level
      }
    }
  }
}
</static-query>

<script>
import Proficiency from "@/components/Proficiency";
import Tool from "@/components/Tool";

export default {
  name: "Skills",
  components: {
    Proficiency,
    Tool,
  },
};
</script>

<style scoped>
</style>
