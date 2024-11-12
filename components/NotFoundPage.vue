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
    background-color: $red;
    fill: $yellow;
    display: flex;
    flex-direction: row;
    overflow: hidden;
    animation: colorshift 10s linear infinite alternate;
  }

  .link {
    padding: 8px;
    flex: 1;
    display: flex;
    gap: 8px;
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
    filter: blur(24px);
  }

  @keyframes colorshift {
    0% {
      background-color: $red;
      fill: $orange;
    }

    100% {
      background-color: $purple;
      fill: $blue;
    }
  }
</style>