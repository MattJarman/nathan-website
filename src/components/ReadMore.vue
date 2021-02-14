<template>
  <div class="relative" ref="readMore">
    <div>
      <div
          class="max-h-24 text-fade"
          v-if="needsReadMore && !readMoreActivated"
      >
        {{ shortenedText }}
      </div>
      <div class="flex absolute bottom-0 justify-center items-center w-full">
        <span
            v-if="!readMoreActivated && needsReadMore"
            @click="toggleReadMore"
            class="flex justify-center items-center py-1 w-20 text-xs font-bold bg-black shadow-md cursor-pointer"
        >
          <span>Read More</span>
        </span>
      </div>
    </div>
    <span v-if="readMoreActivated || !needsReadMore">
      {{ text }}
      <a
          v-if="readMoreActivated && needsReadMore"
          @click="toggleReadMore"
          class="text-xs font-bold text-gray-800 cursor-pointer"
      >Read Less</a
      >
    </span>
  </div>
</template>

<script>
export default {
  name: 'ReadMore',
  props: {
    text: {
      type: String,
      required: true
    },
    characters: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      readMoreActivated: false,
      maxCharacters: 200,
      breakpoints: {
        xs: 360,
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280
      }
    }
  },
  mounted () {
    this.setMaxCharacters()
  },
  computed: {
    needsReadMore () {
      return this.text.length > this.maxCharacters
    },
    shortenedText () {
      return this.text.slice(0, this.maxCharacters) + '...'
    }
  },
  methods: {
    toggleReadMore () {
      this.readMoreActivated = !this.readMoreActivated
    },
    getScreenSize () {
      const { innerWidth } = window

      if (innerWidth < this.breakpoints.xs) {
        return 'xs'
      } else if (
        innerWidth >= this.breakpoints.xs &&
          innerWidth < this.breakpoints.sm
      ) {
        return 'sm'
      } else if (
        innerWidth >= this.breakpoints.sm &&
          innerWidth < this.breakpoints.md
      ) {
        return 'md'
      } else if (
        innerWidth >= this.breakpoints.md &&
          innerWidth < this.breakpoints.lg
      ) {
        return 'lg'
      } else {
        return 'xl'
      }
    },
    setMaxCharacters () {
      const screen = this.getScreenSize()

      if (Object.prototype.hasOwnProperty.call(this.characters, screen)) {
        this.maxCharacters = this.characters[screen]
        return
      }

      if (Object.prototype.hasOwnProperty.call(this.characters, 'default')) {
        this.maxCharacters = this.characters.default
      }
    }
  }
}
</script>

<style scoped>
.text-fade {
  -webkit-mask-image: -webkit-gradient(
      linear,
      left 50%,
      left bottom,
      from(rgba(0, 0, 0, 1)),
      to(rgba(0, 0, 0, 0))
  );
}
</style>
