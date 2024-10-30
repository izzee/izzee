<template>
  <main>
    <Nav/>
    <div class="work-nav">
      <p>web dev</p>
      <Dot/>
      <p>design</p>
      <Dot/>
      <p>painting</p>
      <Dot/>
      <p>video</p>
    </div>
    <div class="main-content">


    </div>

  </main>
</template>

<script setup>
  import Dot from '~/static/icons/dot.svg'
</script>

<style lang="scss" scoped>
  .main-content {
    border-color: $blue;
    background-color: $lightblue;
    position: relative;
    text-align: center;
  }

  .work-nav {
    display: flex;
    width: 100%;
    padding-top: 8px;
    gap: 8px;
    align-items: center; 
    justify-content: center;
    flex-wrap: wrap;
    color: $lightestblue;
    background-color: $blue;

    p { 
      font-size: 16px;
      line-height: 2;
      cursor: pointer;
      &:hover {
        color: $yellow;
      }
    }

    @include bp(sm) {
      padding-top: 16px;
    }
    @include bp(md) {
      gap: 16px;
      p {
        font-size: 24px;
      }
    }
  }
</style>