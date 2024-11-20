<template>
  <IntersectionObserver 
    class="window"
    @intersect="onIntersect"
    @leave="onLeave"
  >
    <div class="topbar">
      <h3 class="title" v-html="title"/>
    </div>
    <div class="content">
      <div class="media-grid">
        <LazyNuxtImg v-for="example in examples" :src="example.src"/>    
      </div>
    </div>
  </IntersectionObserver>
</template>

<script setup>
  const props = defineProps(["toggled", "title", "examples", "onLeave", "onIntersect"])

</script>

<style lang="scss" scoped>
  @import url('~/styles/_window.scss');
  .media-grid {
    display: inherit;
    flex-direction: inherit;
    gap: inherit;
  }

  .window {
    width: 100%;
  }

  .topbar {
    @include bp(md) {
      border-top: 64px solid $lightblue;
      position: sticky;
      top: 0;
    }
  }
</style>