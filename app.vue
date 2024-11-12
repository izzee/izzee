<template>
  <NuxtPage/>
</template>

<script setup lang="ts">

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `izzee | ${titleChunk.toLowerCase()}` : 'izzee | home';
  }
})
</script>
