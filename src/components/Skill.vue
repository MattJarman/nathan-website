<template>
  <div class="flex flex-row items-center w-full">
    <div class="w-1/2 font-bold sm:w-1/3 md:w-1/4">
      <p>{{name}}</p>
    </div>
    <div class="flex overflow-hidden w-full h-4 bg-gray-200 rounded-full shadow-md md:h-6 lg:h-6">
      <div
          :style="progressWidth"
          class="flex flex-col justify-center text-center text-white whitespace-nowrap bg-green-500 shadow-none"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Skill',
  data () {
    return {
      max: 100,
      min: 0
    }
  },
  props: {
    name: {
      type: String,
      required: true
    },
    percentage: {
      type: Number,
      required: true
    }
  },
  computed: {
    progressWidth () {
      return {
        width: `${this.clamp(this.percentage)}%`
      }
    }
  }
}
</script>

<style scoped>

</style>
