<template>
  <main>
    <Nav/>
    <div class="main-content">
      <div class="feed">
      <div class="post">
          <div class="title">Coming soon...</div>
        </div>
      </div>
    </div>

  </main>
</template>

<style lang="scss" scoped>

  main {
    background-color: $purple;
  }
  .main-content {
    border-color: $lavendar;
    padding: 0;
    gap: 16px;
    display: flex;
    height: 100%;
    flex: 1;
    overflow: scroll;
  }

  .feed {
    @include bp(sm) {
      border-bottom: 16px solid $lavendar;
    }
  }

  .post {
    flex-shrink: 0;
    height: 32px;
    padding: 16px;
    top: 0;
    background-color: $purple;
    display:flex;
    align-items: center;
    justify-content: space-between;
    font-size:24px;

    font-weight: 500;
    color: $lavendar;
    cursor: pointer;
    &:nth-child(even) {
      background-color: $lavendar;
    }

    @include bp(sm) {
      padding: 64px;
    font-size:32px;


    }
  }
  

</style>