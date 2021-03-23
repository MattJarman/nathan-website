<template>
  <div
      class="flex fixed bottom-0 z-50 flex-row justify-center items-center space-x-3 w-full h-8 bg-white social-links lg:h-auto lg:w-0 lg:flex-col lg:space-x-0 lg:space-y-3 lg:ml-16 lg:items-center lg:pb-0"
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
              url: this.formatIconUrl(edge.node.icon, edge.node.url),
              icon: faIcon
            }
          }

          return false
        })
        .filter(social => social.icon)
    }
  },
  methods: {
    formatIconUrl (social, url) {
      switch (social) {
        case 'email':
          return `mailto:${url}`
        default:
          return url
      }
    },
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
        case 'email':
          return ['fa', 'envelope']
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
    @apply block h-24 text-gray-800 md:bg-green-500;
  }

  .social-links a:last-of-type {
    @apply mb-4;
  }
}

.social-icon {
  @apply text-gray-800 md:text-green-500 focus:outline-none;
}

.social-link {
  @apply duration-300 ease-in-out transform;
}

.social-icon:hover {
  @apply text-black md:text-green-700;
}

.social-link:hover {
  @apply scale-110 -translate-y-1;
}
</style>
