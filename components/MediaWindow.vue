<template>
  <IntersectionObserver 
    class="window"
    @intersect="onIntersect"
  >
    <div class="topbar">
      <h3 class="title" v-html="title"/>
    </div>
    <div class="content">
      <div class="media-grid">
        <div
          v-for="example in examples"
          :class="`media ${example.size || 'full'}`"
        >
        <LazyNuxtImg 
          v-if="example.type === 'image'" 
          :src="example.src"
          provider="uploadcare"
        />   
        <div
          class="embed-wrapper"
          v-if="example.type === 'embed'" 
          v-html="example.src"
        />
        </div>
      </div>
    </div>
  </IntersectionObserver>
</template>

<script setup>
  const props = defineProps(["toggled", "title", "examples", "onIntersect"])
    
</script>

<style lang="scss" scoped>
  @import url('~/styles/_window.scss');

  .media-grid {
    display: grid;
    gap: inherit;
    grid-template-columns: 1fr 1fr;

    .media{
      &.full {
        grid-column: span 2;
      }
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .window {
    width: 100%;
  }

  .topbar {
    position: sticky;
    top: 0;
    border-top: 16px solid $mediumblue;
    @include bp(sm) {
      border-top: 32px solid $mediumblue;
    }
    @include bp(md) {
      border-top: 80px solid $mediumblue;
      position: sticky;
      top: 0;
    }
  }
</style>