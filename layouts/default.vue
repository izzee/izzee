<template>
  <main :class="routeClass">
    <Nav class="nav"/>
    <NuxtPage/>
  </main>
</template>

<script setup>
  const route = useRoute();

  const routeClass = computed(() => `background ${route.name || ''}`);
</script>

<style lang="scss" scoped>
  // .background {
  //   transition: background 0.5s ease;
  // }
  // .index {
  //   background: $purple;
  // }
  // .work {
  //   background: $blue;
  // }
  // .about {
  //   background: $gray;
  // }
  // .feed {
  //   background: $purple;
  // }
  .page-enter-active,
  .page-leave-active {
    transition: opacity 0.25s;
  }
  .page-enter-from,
  .page-leave-to {
    opacity: 0;
  }
  .layout-enter-active,
  .layout-leave-active {
    transition: all 0.4s;
  }
  .layout-enter-from,
  .layout-leave-to {
    opacity: 0;
    transform: translateY(-100%);
  }
</style>
