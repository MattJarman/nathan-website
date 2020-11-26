<template>
  <div id="app">
    <header>
      <navbar />
    </header>
    <transition name="fade-slide" mode="out-in" appear>
      <router-view />
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
import Navbar from '@/components/Navbar.vue';
import SocialLinks from '@/components/SocialLinks.vue';

export default {
  components: {
    Navbar,
    SocialLinks,
  },
  metaInfo() {
    return {
      title: this.$static.metadata.siteName,
      meta: [
        {
          key: 'description',
          name: 'description',
          content: this.$static.metadata.siteDescription,
        },
      ],
    };
  },
  mounted() {
    this.updateVh();
  },
  created() {
    window.addEventListener('resize', this.updateVh);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateVh);
  },
  methods: {
    updateVh() {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    },
  },
};
</script>

<style>
html {
  scroll-behavior: smooth;
}

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
