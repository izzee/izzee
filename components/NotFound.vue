<template>
  <main>
    <NuxtLink to="/" class="link">
      <Four/><Zero/><Four/>
    </NuxtLink>
  </main>
</template>

<script setup>
  import Four from '~/public/icons/four.svg?skipsvgo'
  import Zero from '~/public/icons/zero.svg?skipsvgo'


</script>

<style lang="scss" scoped>
  main {
    background-color: $purple;
    fill: $yellow;
    display: flex;
    flex-direction: row;
    overflow: hidden;
  }

  .link {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: stretch;
    cursor: pointer;
  }

  svg {
    fill: inherit;
    flex: 1;
    width: 100%;
    height: 100%;

    &:nth-child(1) {
      fill: $green;
    }
    &:nth-child(2) {
      fill: $blue;
    }
    &:nth-child(3) {
      fill: $gray;
    }
  }

</style>