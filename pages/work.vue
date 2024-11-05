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
      <div class="work-examples">
x
      </div>

  </div>

  </main>
</template>

<style lang="scss" scoped>

  main {
    background-color: $blue;
  }

  .main-content {
    text-align: center;
    border-color: $blue;
    background-color: $lightblue;
    align-items: center;
    border-top: 0;
    overflow: scroll;
  }

  .work-nav {
    display: flex;
    // width: 100%;
    padding: 8px 0;
    gap: 8px;
    align-items: center; 
    justify-content: center;
    flex-wrap: wrap;
    background-color: $blue;

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
      padding: 16px 0;
    }

    @include bp(md) {
      gap: 16px;
      a {
        font-size: 24px;
      }
    }
  }
  
  .dot {
    width: 2px;
    height: 2px;
    background-color: $lightblue;

    @include bp(md) {
      width: 4px;
      height: 4px;
    }
  }

  .work-examples {
    flex: 1;
    width: 100%;
    background-color: $lightblue;
  }

  .work-example {
    width: 50%;
    margin: auto;
    img {
      width: 100%;
    }
  }
</style>