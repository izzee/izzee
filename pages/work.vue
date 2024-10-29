<template>
  <main>
    <Nav/>
    <div class="main-content">
      <div class="work-nav">
        <p>web development</p>
        <p>graphic design</p>
        <p>digital painting</p>
        <p>video art</p>
      </div>

    </div>

  </main>
</template>

<style lang="scss" scoped>
  .main-content {
    border-color: $blue;
    background: $lightblue;
    position: relative;
    text-align: center;
  }
  .work-nav {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 24px;
    color: $blue;

    p { 
      font-size: 24px;
      line-height: 1;

      &:hover {
        color: $yellow;
      }
    }

  }
</style>