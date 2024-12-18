<template>
  <NuxtPage/>
</template>

<script setup>
  useHead({
    titleTemplate: (titleChunk) => {
      return titleChunk ? `izzee | ${titleChunk.toLowerCase()}` : 'izzee';
    }
  })
</script>

