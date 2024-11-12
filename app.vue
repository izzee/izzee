<template>
  <NuxtLoadingIndicator color="linear-gradient(to right, red, orange, yellow, lime, blue, indigo, violet)"/>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>


<script setup lang="ts">

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `izzee | ${titleChunk.toLowerCase()}` : 'izzee';
  }
})
</script>
