<template>
  <div class="h-view-minus-nav w-full relative">
    <Particles
        id="tsparticles"
        class="fixed h-full w-full pb-32 md:pb-0"
        :options="config"
    />
    <div class="text-center relative flex items-center justify-center h-full flex-col pb-64">
      <p class="mb-1 text-4xl font-bold sm:text-8xl">Nathan Ellerton</p>
      <p class="text-xs text-gray-500 sm:text-3xl">Freelance Photographer | Videographer </p>
    </div>
  </div>
</template>

<script>
import config from '../config/particles'

export default {
  name: 'Home',
  metaInfo: {
    title: 'Home'
  },
  data () {
    return {
      config: config
    }
  }
}
</script>

<style scoped>
</style>
