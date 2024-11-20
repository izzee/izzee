<template>
  <div class="window-wrapper" :id="title">
    <MediaWindow 
      v-if="component === 'ImageGrid'"
      :title="title"
      :examples="examples"
      :onIntersect="() => onIntersect(title)"
    />
    <ToggleWindow
      ref="window"
      v-if="component === 'ToggleWindows'"
      v-for="(example, index) in examples"
      :toggled="toggledIndex === index"
      :title="example.title"
      :format="example.format"
      :src="example.src"
      :description="example.description"
      :onIntersect="() => onIntersect(title)"
      @toggle="setToggled(index)"
    />
  </div>
</template>

<script setup>
const emit = defineEmits(['intersect', 'leave']);

const props = defineProps(["title", "component", "examples", "onIntersect", "onLeave", "rootElement"])

  const toggledIndex = ref(null);

  function setToggled(index) {
    toggledIndex.value = toggledIndex.value === index ? null : index;
  }
  const onIntersect = (entry) => {
    emit('intersect', entry);
  };
</script>

<style scoped lang="scss">
  .window-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    margin-top: 16px;
  

    @include bp(md) {
      width: 50vw;
      margin-top: 0;

      &:first-child {
        padding-top: 64px;
      }

    }
  }
</style>