<template>
  <Padded class="mb-16 md:mb-0">
    <div class="mb-16 lg:mb-0">
      <div class="flex flex-wrap -mx-2">
        <div
          v-for="(video, index) in $page.videos.edges"
          :key="video.node.id"
          class="w-full p-2 sm:w-1/2 xl:w-1/3"
          :class="getGradient(index)"
        >
          <Video
            :title="video.node.title"
            :description="video.node.description"
            :embed="video.node.embed"
            :link="video.node.externalLink"
            :tags="video.node.tags"
          />
        </div>
      </div>
    </div>
  </Padded>
</template>

<page-query>
query {
  videos: allVideos(sortBy: "id", order: ASC) {
    edges {
      node {
        id
        title
        description
        embed
        externalLink
        tags
      }
    }
  }
}
</page-query>

<script>
import Video from '../components/Video'

export default {
  name: 'Videos',
  metaInfo: {
    title: 'Videos'
  },
  components: { Video },
  methods: {
    getGradient (index) {
      const repetitions = 6
      const position = index % repetitions

      switch (position) {
        case 0:
          return 'from-indigo-400 via-purple-400 to-pink-500'
        case 1:
          return 'from-green-400 via-teal-400 to-blue-400'
        case 2:
          return 'from-yellow-400 via-orange-400 to-red-500'
        case 3:
          return 'from-green-600 via-blue-400 to-purple-500'
        case 4:
          return 'from-pink-600 via-red-400 to-yellow-500'
        case 5:
          return 'from-blue-500 via-indigo-500 to-purple-400'
      }
    }
  }
}
</script>

<style scoped>
</style>
