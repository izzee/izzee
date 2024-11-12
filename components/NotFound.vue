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
    fill: $yellow;
    background-color: $yellow;
    display: flex;
    flex-direction: row;
    overflow: hidden;
    animation: colorfade 20s linear alternate infinite;
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
    filter: blur(16px);

  
  }

  @keyframes colorfade {
    0% {
      fill: $yellow;
      background-color: $orange;
    }

    25%{ 
      fill: $orange;
      background-color: $yellow;
    }
  }

</style>