<template>
  <div
    class="fixed bottom-0 z-50 flex flex-row items-center justify-center w-full h-8 space-x-3 bg-white social-links lg:h-auto lg:w-0 lg:flex-col lg:space-x-0 lg:space-y-3 lg:ml-16 lg:items-center lg:pb-0"
  >
    <a
      class="social-link"
      href="https://www.facebook.com/NathanJEllerton"
      target="_blank"
    >
      <font-awesome-icon
        class="text-xl social-icon md:text-2xl"
        :icon="['fab', 'facebook-square']"
      />
    </a>
    <a
      class="social-link"
      href="https://www.linkedin.com/in/nathanjellerton"
      target="_blank"
    >
      <font-awesome-icon
        class="text-xl social-icon md:text-2xl"
        :icon="['fab', 'linkedin']"
      />
    </a>
    <a
      class="social-link"
      href="https://www.instagram.com/nathanjellerton"
      target="_blank"
    >
      <font-awesome-icon
        class="text-xl social-icon md:text-2xl"
        :icon="['fab', 'instagram']"
      />
    </a>
    <a
      class="social-link"
      href="https://www.youtube.com/c/NathanJEllerton"
      target="_blank"
    >
      <font-awesome-icon
        class="text-xl social-icon md:text-2xl"
        :icon="['fab', 'youtube']"
      />
    </a>
  </div>
</template>

<script>
export default {
  name: 'SocialLinks'
}
</script>

<style scoped>
@screen lg {
  .social-links:after {
    content: "";
    display: block;
    width: 2px;
    @apply h-24;
    @apply bg-gray-900;
  }

  .social-links a:last-of-type {
    @apply mb-4;
  }
}

.social-icon {
  @apply text-gray-800;
}

.social-link {
  @apply duration-300;
  @apply ease-in-out;
  @apply transform;
}

.social-icon:hover {
  @apply text-green-500;
}

.social-link:hover {
  @apply -translate-y-1;
  @apply scale-110;
}
</style>
