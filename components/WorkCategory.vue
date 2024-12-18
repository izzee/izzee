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
      :options="intersectOptions"
      :onIntersect="() => onIntersect(title)"
      @toggle="setToggled(index)"
    />
  </div>
</template>

<script setup>
  const emit = defineEmits(["intersect"]);

  const props = defineProps(["title", "component", "examples", "rootElement"])

  const toggledIndex = ref(null);
  const toggleWindowLoadedCount = ref(0)

  function setToggled(index) {
    toggledIndex.value = toggledIndex.value === index ? null : index;
  }
  const onIntersect = (entry) => {
    toggledIndex.value = null
    emit('intersect', entry);
  };

  const intersectOptions = {
    root: props.rootElement,
    rootMargin: '-140px',
    threshold: 0.0,
  }

</script>

<style scoped lang="scss">

  h2 {
    height: 32px;
    font-weight: normal;
    color: $lightblue;
    width: 100%;
    border-bottom: 4px dotted $lightblue;

  }
  .window-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    margin-top: 16px;
  
    @include bp(sm) {
      margin-top: 40px;
    }
    @include bp(md) {
      width: 50vw;
      margin-top: 0;

      &:first-child {
        padding-top: 80px;
      }

    }
  }
</style>