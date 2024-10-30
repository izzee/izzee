<template>
  <span :class="`arrow ${variant || ''}`">
    <Arrow class="arrowhead"/>
    <Line class="line" />
  </span>        
</template>

<script setup>
  import Arrow from '~/static/icons/arrow.svg?skipsvgo'
  import Line from '~/static/icons/dot.svg?skipsvgo'
  const props = defineProps(['variant'])
</script>

<style lang="scss" scoped>
.arrow {
  flex: 1;
  display: flex;
  align-items: center;
  fill: inherit;
  .arrowhead {
    fill: inherit;
  }
  .line {
    height: 2px;
    flex: 1;
    fill: inherit;
    @include bp(sm) {
      height: 4px;
    }
  }

}
.flipped {
  transform: rotate(180deg);
}
</style>