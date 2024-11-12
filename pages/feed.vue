<template>
  <main>
    <Nav/>
    <div class="main-content">
      <div class="feed">
      <div class="post">
          <div class="date">11.31.24</div>
          <div class="title">welcome to my new site!</div>
        </div>
      </div>
    </div>

  </main>
</template>

<style lang="scss" scoped>

  main {
    background-color: $lightestpurple;

  }
  .main-content {
    border-color: $lightpurple;
    padding: 0;
    gap: 16px;
    display: flex;
    height: 100%;
    flex: 1;
    overflow: scroll;
  }

  .feed {
    border-bottom: 16px solid $lightpurple;
  }

  .post {
    flex-shrink: 0;
    height: 32px;
    top: 0;
    background-color: $lightestpurple;
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding: 64px;
    font-size:32px;
    font-weight: 500;
    color: $blue;
    cursor: pointer;
    &:nth-child(even) {
      background-color: $lightpurple;
    }
    &:hover {
      background-color: $lightyellow;
    }
  }
  

</style>