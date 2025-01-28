<template>
  <main>
    <Nav variant="alt"/>
  </main>
</template>

<script lang="ts" setup>

</script>

<style lang="scss">
  main {
    background: $purple;
  }
  .layout-enter-active,
  .layout-leave-active {
    transition: all 0.25s;
  }
  .layout-enter-from,
  .layout-leave-to {
      transform: scaleX(0);
  }
</style>