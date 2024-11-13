<template>
  <main>
    <Nav variant="alt"/>
  </main>
</template>

<script setup>
  useHead({
    titleTemplate: () => {
      return 'izzee | home'
    }
  })
</script>

<style lang="scss" scoped>
  main {
    background: $purple;
  }
</style>