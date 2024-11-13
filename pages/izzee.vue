<template>
  <main>
    <nav>
      <a href="">Work</a>
      <a href="">About</a>
      <a href="">Feed</a>


    </nav>
    <Izzee/>
  </main>
</template>

<script setup>
  import Izzee from '~/public/icons/izzee.svg?skipsvgo'

</script>

<style scoped lang="scss">
  main {
    background: linear-gradient(#00ff7b, #000 75%);
    
  }

  svg {
    position: fixed;
    width: 100%;
    height: 100%;
    fill: #00ff7b;
  }

  nav {
    z-index: 10;
    position: fixed;
    top:0;
    left: 0;
    padding: 32px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    box-sizing: border-box;
    gap: 32px;

    a {
      flex: 1;
      font-size: 64px;
      font-weight: 900;
      line-height: 1;
      text-align: center;
      padding: 32px 64px;
      background: linear-gradient(#000, #65e8a433);
      border-radius: 32px;
      color: #000000;
      text-shadow: 2px 2px 8px #000;
      box-shadow: 0 0 64px #000000, 0 -8px 8px #000000 inset;
      filter: blur(2px);
    }
  }
</style>