<template>
  <div class="window">
    <div class="topbar">
      <h3 class="title" v-html="title"/>
    </div>
    <div class="content">
      <div class="media-grid">
        <LazyNuxtImg v-for="example in examples" :src="example.src"/>    
      </div>
    </div>
  </div>
</template>

<script setup>
  import '~/styles/window.scss'
  const props = defineProps(['title', 'examples'])
</script>

<style lang="scss" scoped>
  .media-grid {
    display: inherit;
    flex-direction: inherit;
    gap: inherit;
  }
</style>