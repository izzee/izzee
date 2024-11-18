<template>

  <div  class="window-wrapper" :id="title">
    <MediaWindow 
      v-if="component === 'ImageGrid'"
      :title="title"
      :examples="examples"
    />
    <ToggleWindow
      v-if="component === 'ToggleWindows'"
      v-for="(example, index) in examples"
      :toggled="toggledIndex === index"
      :title="example.title"
      :src="example.src"
      :description="example.description"
      @toggle="setToggled(index)"
    />
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  const props = defineProps(['title', 'component', 'examples'])

  const toggledIndex = ref(null);

  function setToggled(index) {
    toggledIndex.value = toggledIndex.value === index ? null : index;
  }
</script>

<style scoped lang="scss">
  .window-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    margin-top: 64px;
    @include bp(md) {
      width: 50vw;
    }
  }
</style>