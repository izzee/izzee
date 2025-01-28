<template>
  <div class="main-content">
    <div class="feed">
      <ContentList path="/feed" v-slot="{ list }">
        <p 
          v-for="article in list" 
          :key="article._path" 
          :href="article._path"
          class="post"
        >
          {{ article.title }}
        </p>
      </ContentList>
    </div>
  </div>
</template>

<script setup>
  const formatDate = (unformatted) => {
    const date = new Date(unformatted);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date);
  }
</script>

<style lang="scss" scoped>

  .main-content {
    border-color: $lavendar;
    background: $purple;

    padding: 0;
    gap: 16px;
    display: flex;
    height: 100%;
    flex: 1;
    overflow: scroll;
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
    font-size: 24px;
    font-weight: 500;
    color: $lavendar;
    cursor: pointer;

    &:nth-child(even) {
      background-color: $lightpurple;
      color: $lavendar;
    }

    &:hover {
      color: $yellow;
    }

    @include bp(sm) {
      padding: 72px 64px;
      font-size: 32px;
      text-align: right;
    }
  }
  

</style>