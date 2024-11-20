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
        <LazyNuxtImg 
          v-for="example in examples" 
          :class="example.size"
          :src="example.src"
        />    
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
    display: grid;
    flex-direction: inherit;
    grid-template-columns: 1fr;

    gap: inherit;
    @include bp(sm) {
      grid-template-columns: 1fr 1fr;

    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;

      &.full {
        grid-column: span 2;
      }
    }
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