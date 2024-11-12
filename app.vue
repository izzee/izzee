<template>
  <NuxtLoadingIndicator/>
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
