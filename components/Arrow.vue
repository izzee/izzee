<template>
  <span :class="`arrow ${variant || ''}`">
    <Arrow class="arrowhead"/>
    <Line class="line"/>
  </span>        
</template>

<script setup>
  import Arrow from '~/public/images/arrow.svg?skipsvgo'
  import Line from '~/public/images/dot.svg?skipsvgo'
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
    height: 16px;
    width: 16px;
    @include bp(sm) {
      height: 24px;
    }
  }
  .line {
    height: 2px;
    flex: 1;
    fill: inherit;
    margin-left: -1px;
    @include bp(sm) {
      height: 4px;
    }
  }
}
.flipped {
  transform: rotate(180deg);
}
</style>