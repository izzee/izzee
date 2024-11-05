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
    background-color: $lightpurple;
  }
  .main-content {
    background-color: $lightestpurple;
    border-color: $lightpurple;
    padding: 0;
    gap: 0;
    overflow: scroll;
  }

  .feed {
    flex-shrink: 0;
    height: 160px;
    position:sticky;
    top: 0;
    background-color: $lightpurple;
    &:nth-child(odd) {
      background-color: $lightestpurple;
    }
  }
</style>