<template>
  <main>
    <Nav/>
    <div class="main-content">
      <div class="feed">
        feed
      </div>
      <div class="feed">
        feed
      </div>
      <div class="feed">
        feed
      </div>

      <div class="feed">
        feed
      </div>
      <div class="feed">
        feed
      </div>
      <div class="feed">
        feed
      </div>
      <div class="feed">
        feed
      </div>
      <div class="feed">
        feed
      </div>
      <div class="feed">
        feed
      </div>

      <div class="feed">
        feed
      </div>
      <div class="feed">
        feed
      </div>
      <div class="feed">
        feed
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
  .main-content {
    background-color: $lightestpurple;
    border-color: $lightpurple;
    overflow: scroll;
  }

  .feed {
    flex-shrink: 0;
    height: 240px;
    background-color: $lightpurple;
  }
</style>