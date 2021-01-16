<template>
  <div
    class="fixed bottom-0 z-50 flex flex-row items-center justify-center w-full h-8 space-x-3 bg-white social-links lg:h-auto lg:w-0 lg:flex-col lg:space-x-0 lg:space-y-3 lg:ml-16 lg:items-center lg:pb-0"
  >
    <a
      v-for="social in this.socials"
      :key="social.id"
      class="social-link"
      :href="social.url"
      target="_blank"
    >
      <font-awesome-icon
        class="text-xl social-icon md:text-2xl"
        :icon="social.icon"
      />
    </a>
  </div>
</template>

<static-query>
query {
  socials: allSocials(sortBy: "id", order: ASC) {
    edges {
      node {
        id
        url
        icon
      }
    }
  }
}
</static-query>

<script>
export default {
  name: 'SocialLinks',
  computed: {
    socials () {
      return this.$static.socials.edges
        .map(edge => {
          const faIcon = this.mapSocialFaIcon(edge.node.icon)

          if (faIcon) {
            return {
              id: edge.node.id,
              url: edge.node.url,
              icon: faIcon
            }
          }

          return false
        })
        .filter(social => social.icon)
    }
  },
  methods: {
    mapSocialFaIcon (social) {
      switch (social) {
        case 'facebook':
          return ['fab', 'facebook-square']
        case 'linkedin':
          return ['fab', 'linkedin']
        case 'instagram':
          return ['fab', 'instagram']
        case 'youtube':
          return ['fab', 'youtube']
        default:
          return false
      }
    }
  }
}
</script>

<style scoped>
@screen lg {
  .social-links:after {
    content: "";
    width: 2px;
    @apply h-24 text-gray-800 md:bg-green-500 block;
  }

  .social-links a:last-of-type {
    @apply mb-4;
  }
}

.social-icon {
  @apply text-gray-800 md:text-green-500;
}

.social-link {
  @apply transform duration-300 ease-in-out;
}

.social-icon:hover {
  @apply text-black md:text-green-700;
}

.social-link:hover {
  @apply -translate-y-1 scale-110;
}
</style>
