<template>
  <div class="flex flex-col p-4 rounded-md shadow-lg bg-gradient-to-bl">
    <div class="flex w-full">
      <div
        class="w-full rounded-md shadow-lg embed-responsive aspect-ratio-16/9"
      >
        <iframe
          class="embed-responsive-item"
          :src="embed"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
    <div class="flex flex-col order-2 w-full mt-4 text-xl">
      <p
        class="pl-2 mb-4 text-2xl font-bold text-white truncate border-l-4 border-white lg:text-4xl md:pl-4"
      >
        {{ title }}
      </p>
      <read-more
        :text="description"
        :characters="{
          default: 600,
          xs: 175,
          sm: 200,
          md: 175,
          lg: 200,
          xl: 200,
        }"
        class="flex-grow mb-4 text-xs text-white min-h-24 lg:min-h-32 md:text-sm lg:text-base"
      />
      <div class="flex flex-row items-center w-full">
        <div class="flex flex-row flex-grow -mx-1 tags">
          <div v-for="(tag, index) in tags" :key="index" class="px-1">
            <p
              class="px-4 text-xs font-bold text-gray-800 bg-white rounded-full"
            >
              {{ tag }}
            </p>
          </div>
        </div>
        <a :href="link" target="_blank">
          <font-awesome-icon
            class="text-sm text-gray-200"
            :icon="['fa', 'external-link-alt']"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import ReadMore from '@/components/ReadMore'

export default {
  name: 'Video',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    embed: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    tags: {
      type: Array,
      required: false
    }
  },
  components: {
    ReadMore
  }
}
</script>

<style scoped>
</style>
