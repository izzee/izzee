<template>
  <MediaWindow 
    v-if="component === 'ImageGrid'"
    :id="title"
    :title="title"
    :examples="examples"
  />
  <div v-if="component === 'ToggleWindows'" class="toggle-windows" :id="title">
    <ToggleWindow
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

<style scoped>
  .toggle-windows {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }
</style>