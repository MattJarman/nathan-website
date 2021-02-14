<template>
  <div class="h-view-minus-nav w-full relative">
    <Particles
        id="tsparticles"
        class="fixed h-full w-full pb-32 md:pb-0"
        :options="config"
    />
    <div class="text-center relative flex items-center justify-center h-full flex-col pb-64">
      <p class="mb-1 text-4xl font-bold sm:text-7xl">Nathan Ellerton</p>
      <p class="text-xs text-gray-500 sm:text-xl pb-8">{{ $page.about.title }}</p>
      <div class="flex items-center space-x-4 justify-center w-full">
        <g-link
            to="/photos"
            class="border-2 text-xs md:text-base border-green-500 bg-white rounded-sm px-4 p-2 cursor-pointer hover:bg-gray-100"
        >
          Photos
        </g-link>
        <g-link
            to="/videos"
            class="border-2 text-xs md:text-base border-green-500 bg-white rounded-sm px-4 p-2 cursor-pointer hover:bg-gray-100"
        >
          Videos
        </g-link>
      </div>
    </div>
  </div>
</template>

<page-query>
query {
  about(id: 1) {
    title
  }
}
</page-query>

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
