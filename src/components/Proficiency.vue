<template>
  <div class="flex flex-col items-center w-1/3 mx-auto lg:mb-4">
    <div class="mb-2 text-xs text-center truncate md:text-base lg:text-xl">
      <p>{{ name }}</p>
    </div>
    <div
      class="flex w-3/4 h-2 max-w-xs mb-4 overflow-hidden text-xs bg-green-200 rounded-full shadow-md md:h-3 lg:h-3"
    >
      <div
        :style="progressWidth"
        class="flex flex-col justify-center text-center text-white bg-green-400 shadow-none whitespace-nowrap"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Skill",
  data() {
    return {
      max: 100,
      min: 0,
    };
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    level: {
      type: Number, // Value should be 0 - 100
      required: true,
    },
  },
  computed: {
    progressWidth() {
      return {
        width: `${this.clamp(this.level)}%`,
      };
    },
  },
  methods: {
    clamp(number) {
      return number <= this.min
        ? this.min
        : number >= this.max
        ? this.max
        : number;
    },
  },
};
</script>
