<template>
  <div
    :class="{ 'flex-row-reverse': reversed, 'flex-row': !reversed }"
    class="flex flex-row items-center"
  >
    <div
      :class="{ 'ml-4 md:ml-10': reversed, 'mr-4 md:mr-10': !reversed }"
      class="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 text-green-500 bg-green-100 rounded-full sm:w-32 sm:h-32"
    >
      <font-awesome-icon class="text-4xl" :icon="icon" />
    </div>
    <div
      class="flex-grow p-2 bg-gray-100 rounded-md shadow-sm sm:text-left sm:mt-0"
    >
      <p>{{ tools }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tool',
  props: {
    icon: {
      type: Array,
      required: true
    },
    tools: {
      required: true
    },
    reversed: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>

<style scoped>
</style>
