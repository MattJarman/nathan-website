<template>
  <Padded class="mb-16 md:mb-0">
    <div class="grid grid-cols-2 gap-1 mb-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 sm:gap-2">
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
import ExpandableImage from '../components/ExpandableImage'

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
  photos: allPhotos(sort: [{ by: "order", order: ASC }, { by: "published", order: ASC }]) {
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
