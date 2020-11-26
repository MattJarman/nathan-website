<template>
  <main class="px-4 mx-auto md:px-16 lg:px-32">
    <slot />
  </main>
</template>

<script>
export default {
  name: 'App'
}
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
#app {
  overflow: hidden;
}

.fade-slide-enter,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(-2em);
  width: inherit;
}

.fade-slide-enter-active {
  transition-delay: 0.25s;
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.3s ease;
}
</style>
