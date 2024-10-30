<template>
  <main>
    <Nav/>
    <div class="work-nav">
      <p>web development</p>
      <span class="dot"/>
      <p>design</p>
      <span class="dot"/>
      <p>painting</p>
      <span class="dot"/>
      <p>video</p>
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
    color: $lightestblue;
    background-color: $blue;

    .dot {
      width: 4px;
      height: 4px;
      background-color: $lightblue;
    }

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
      .dot {
        width: 8px;
        height: 8px;
      }
    }
  }
</style>