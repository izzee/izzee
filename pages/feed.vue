<template>
  <main>
    <Nav/>
    <div class="main-content">
      <div class="feed">
      </div>
      <div class="feed">
      </div>
      <div class="feed">
      </div>
      <div class="feed">
      </div>
      <div class="feed">
      </div>
      <div class="feed">
      </div>
      <div class="feed">
      </div>
      <div class="feed">
      </div>
      <div class="feed">
      </div>
      <div class="feed">
      </div>
      <div class="feed">
      </div>
      <div class="feed">
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
  main {
    background-color: $lightestpurple;
  }
  .main-content {
    background-color: $lightpurple;
    border-color: $lightestpurple;
    overflow: scroll;
  }

  .feed {
    flex-shrink: 0;
    height: 240px;
    position:sticky;
    top: 0;
    background-color: $lightestpurple;

  }
</style>