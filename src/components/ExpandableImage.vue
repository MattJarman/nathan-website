<template>
  <div>
    <transition name="fade" mode="out-in">
      <div
        v-if="this.expanded"
        class="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full overflow-hidden modal opacity-1"
      >
        <div
          class="absolute z-20 w-full h-full bg-black opacity-75 modal-overlay"
        ></div>

        <div
          class="z-50 w-full h-full mx-auto rounded shadow-lg modal-container"
        >
          <div
            class="absolute top-0 right-0 z-50 flex flex-col items-center mt-4 mr-4 text-sm text-white cursor-pointer modal-close"
            @click="closeModal"
          >
            <svg
              class="text-white fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
            >
              <path
                d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
              ></path>
            </svg>
          </div>
          <div
            class="flex items-center justify-center w-full h-full modal-content"
          >
            <g-image
              class="rounded-md expandable-image max-w-9/10 md:max-h-9/10"
              v-on-clickaway="closeModal"
              v-bind="$attrs"
              :src="image.original.url"
              alt=""
            />
          </div>
        </div>
      </div>
    </transition>
    <g-image
      class="w-full h-auto rounded-md shadow-md cursor-pointer object-cover h-full w-full"
      @click="toggleExpanded"
      :src="image.small.url"
      :width="image.small.width.toString()"
      :height="image.small.height.toString()"
      v-bind="$attrs"
      alt=""
    />
  </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway'
export default {
  name: 'ExpandableImage',
  mixins: [clickaway],
  props: {
    image: {
      required: true
    }
  },
  data () {
    return {
      expanded: false
    }
  },
  created () {
    if (process.isClient) {
      window.addEventListener('keydown', this.processKey)
    }
  },
  beforeDestroy () {
    if (process.isClient) {
      window.removeEventListener('keydown', this.processKey)
    }
  },
  methods: {
    processKey (e) {
      if (this.expanded) {
        if (e.code === 'Escape') {
          this.closeModal()
        }
      }
    },
    toggleExpanded () {
      this.expanded = !this.expanded
    },
    closeModal () {
      this.expanded = false
    }
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
