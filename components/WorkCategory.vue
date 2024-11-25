<template>
  <div class="window-wrapper" :id="title">
    <MediaWindow 
      v-if="component === 'MediaGrid'"
      :title="title"
      :examples="examples"
      :onIntersect="() => onIntersect(title)"
      :options="intersectOptions"
    />
    <ToggleWindow
      ref="window"
      v-if="component === 'ToggleWindows'"
      v-for="(example, index) in examples"
      :toggled="toggledIndex === index"
      :title="example.title"
      :src="example.src"
      :description="example.description"
      :link="example.link"
      :onIntersect="() => onIntersect(title)"
      :options="intersectOptions"
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


  const intersectOptions = {
    root: props.rootElement,
    rootMargin: '-140px',
    threshold: 0.0,
  }
</script>

<style scoped lang="scss">
  .window-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    margin-top: 16px;
  
    @include bp(sm) {
      margin-top: 32px;
    }
    @include bp(md) {
      width: 50vw;
      margin-top: 0;

      &:first-child {
        padding-top: 64px;
      }

    }
  }
</style>