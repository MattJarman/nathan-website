<template>
  <Layout>
    <p class="mb-8 title lg:mb-16">Photos</p>
    <div class="gap-1 mb-4 masonry sm:gap-2">
      <expandable-image
        v-for="image in $page.photos.edges"
        :key="image.node.id"
        :image="image.node.formats"
        class="mb-1 shadow-md sm:mb-2"
      />
    </div>
  </Layout>
</template>

<script>
import ExpandableImage from '@/components/ExpandableImage'
export default {
  name: 'Photos',
  components: {
    ExpandableImage
  }
}
</script>

<page-query>
query {
  photos: allPhotos {
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

<style scoped>
.masonry {
  -webkit-column-count: 2;
  -moz-column-count: 2;
  column-count: 2;
}

@screen sm {
  .masonry {
    -webkit-column-count: 3;
    -moz-column-count: 3;
    column-count: 3;
  }
}

@screen md {
  .masonry {
    -webkit-column-count: 4;
    -moz-column-count: 4;
    column-count: 4;
  }
}

@screen xl {
  .masonry {
    -webkit-column-count: 6;
    -moz-column-count: 6;
    column-count: 6;
  }
}
</style>
