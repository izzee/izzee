<template>

  <div  class="window-wrapper" :id="title">
    <MediaWindow 
      v-if="component === 'ImageGrid'"
      :title="title"
      :examples="examples"
      
      v-motion
      :initial="{ opacity: 0}"
      :visible="{ opacity: 1}"
      :onEnter="handleEnter"
      :duration="500"
    />
    <ToggleWindow
      v-if="component === 'ToggleWindows'"
      v-for="(example, index) in examples"
      :toggled="toggledIndex === index"
      :title="example.title"
      :src="example.src"
      :description="example.description"
      @toggle="setToggled(index)"

      v-motion
      :initial="{ opacity: 0}"
      :visible="{ opacity: 1}"
      :onEnter="handleEnter"
      :duration="500"
      :inView="handleEnter"
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
  const handleEnter = () => {
    console.log('enter ')
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

    @include bp(md) {
      width: 50vw;

      &:first-child {
        margin-top: 64px;
      }

    }
  }
</style>