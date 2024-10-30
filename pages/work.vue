<template>
  <main>
    <Nav/>
    <div class="work-nav">
      <a href="">web development</a>
      <span class="dot"/>
      <a href="">design</a>
      <span class="dot"/>
      <a href="">painting</a>
      <span class="dot"/>
      <a href="">video</a>
    </div>
    <div class="main-content">
    </div>

  </main>
</template>

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
    background-color: $blue;

    .dot {
      width: 4px;
      height: 4px;
      background-color: $lightblue;
    }

    a { 
      font-size: 16px;
      line-height: 2;
      color: $lightestblue;

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
      a {
        font-size: 24px;
      }
      .dot {
        width: 8px;
        height: 8px;
      }
    }
  }
</style>