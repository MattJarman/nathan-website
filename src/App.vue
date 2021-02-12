<template>
  <div id="app">
    <header id="nav">
      <navbar />
    </header>
    <transition name="fade-slide" mode="out-in" type="transition">
      <router-view/>
    </transition>
    <footer>
      <social-links />
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
    siteDescription
  }
}
</static-query>

<script>
import Navbar from '@/components/Navbar.vue'
import SocialLinks from '@/components/SocialLinks.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    SocialLinks
  },
  metaInfo () {
    return {
      title: this.$static.metadata.siteName,
      meta: [
        {
          key: 'description',
          name: 'description',
          content: this.$static.metadata.siteDescription
        }
      ]
    }
  },
  mounted () {
    this.handleResizeEvents()
  },
  created () {
    if (process.isClient) {
      window.addEventListener('resize', this.handleResizeEvents)
    }
  },
  beforeDestroy () {
    if (process.isClient) {
      window.removeEventListener('resize', this.handleResizeEvents)
    }
  },
  methods: {
    handleResizeEvents () {
      if (process.isClient) {
        this.updateViewportHeight()
      }
    },
    updateViewportHeight () {
      const windowHeight = window.innerHeight
      const headerHeight = document.getElementById('nav').clientHeight

      document.documentElement.style.setProperty('--navbarHeight', `${headerHeight}px`)
      document.documentElement.style.setProperty('--viewportHeight', `${windowHeight}px`)
    }
  }
}
</script>

<style>
:root {
  --viewportHeight: 100vh;
  --navbarHeight: 0vh;
}

html, body {
  scroll-behavior: smooth;
  @apply h-full;
}

#app {
  overflow: hidden;
}

.min-h-view {
  min-height: var(--viewportHeight, 100vh);
}

.h-view-minus-nav {
  height: calc(var(--viewportHeight, 100vh) - var(--navbarHeight, 0vh));
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
