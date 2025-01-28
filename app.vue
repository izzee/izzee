<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>

<script setup>
  useHead({
    titleTemplate: (titleChunk) => {
      return titleChunk ? `izzee | ${titleChunk}` : 'izzee';
    }
  })
</script>

<style lang="scss" scoped>
</style>
