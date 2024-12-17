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
        <div
          v-for="example in examples"
          :class="`media ${example.size || 'full'}`"
        >
        <NuxtImg 
          v-if="example.type === 'image'" 
          :src="example.src"
          @load="onMediaLoaded"
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
  const props = defineProps(["toggled", "title", "examples", "onLeave", "onIntersect", "onCategoryLoaded"])
  const mediaLoadedCount = ref(0);

  const onMediaLoaded = () => {
    mediaLoadedCount.value = mediaLoadedCount.value + 1
    if (mediaLoadedCount.value >= props.examples.length) {
      props.onCategoryLoaded();
    }
  }
  onMounted(() => {
    if (props.title === 'videos') {
      console.log('video')
      props.onCategoryLoaded();
    }
  })
    
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