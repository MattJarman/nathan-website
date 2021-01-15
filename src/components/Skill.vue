<template>
  <div class="flex flex-row items-center w-full">
    <div class="font-bold w-1/2 sm:w-1/3 md:w-1/4">
      <p>{{name}}</p>
    </div>
    <div class="flex w-full h-4 overflow-hidden bg-gray-200 rounded-full shadow-md md:h-6 lg:h-6">
      <div
          :style="progressWidth"
          class="flex flex-col justify-center text-center text-white bg-green-500 shadow-none whitespace-nowrap"
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
  },
  methods: {
    clamp (number) {
      return number <= this.min ? this.min : number >= this.max ? this.max : number
    }
  }
}
</script>

<style scoped>

</style>
