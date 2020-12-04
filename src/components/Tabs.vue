<template>
  <div>
    <nav class="mb-4">
      <div class="flex mb-4 overflow-x-auto items-center justify-center">
        <a
          v-for="tab in tabs"
          class="flex-grow flex-shrink-0 px-1 py-4 text-sm text-center truncate border-b-2 cursor-pointer tab hover:bg-gray-100"
          :class="{
            'text-green-600 border-green-500': tab.isActive,
            'text-gray-600 border-gray-300': !tab.isActive,
          }"
          :href="tab.href"
          @click="selectTab(tab)"
          :key="tab.name"
        >
          {{ tab.name }}
        </a>
      </div>
    </nav>

    <div class="tabs-details flex flex-col flex-1 flex-grow">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tabs',
  data () {
    return {
      tabs: []
    }
  },
  created () {
    this.tabs = this.$children
  },
  methods: {
    selectTab (selectedTab) {
      for (const tab of this.tabs) {
        tab.isActive = tab.href === selectedTab.href
      }
    }
  }
}
</script>

<style scoped>
.tab {
  max-width: 10rem;
}
</style>
