<template>
  <Padded>
    <div class="flex flex-col items-center pb-8">
      <p class="text-lg md:text-3xl font-bold text-green-400 mb-1 border-2 md:border-4 border-green-400 p-2 bg-gray-800 shadow-lg">PHOTOS</p>
    </div>
    <div class="gap-1 mb-4 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 sm:gap-2">
      <expandable-image
        v-for="image in $page.photos.edges"
        :key="image.node.id"
        :image="image.node.formats"
        class="shadow-md"
        :id="image.node.id"
      />
    </div>
  </Padded>
</template>

<script>
import ExpandableImage from '@/components/ExpandableImage'
export default {
  name: 'Photos',
  metaInfo: {
    title: 'Photos'
  },
  components: {
    ExpandableImage
  }
}
</script>

<page-query>
query {
  photos: allPhotos(sortBy: "id", order: ASC) {
    edges {
      node {
        id
        formats {
          original {
            url
            width
            height
          }
          small {
            url
            width
            height
          }
        }
      }
    }
  }
}
</page-query>
