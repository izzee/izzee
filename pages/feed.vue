<template>
  <NuxtLayout>
    <main>
      <Nav/>
      <div class="main-content">
        <div class="feed">
          <ContentList path="/feed" v-slot="{ list }">
            <NuxtLink 
              v-for="article in list" 
              :key="article._path" 
              :href="article._path"
              class="post"
            >
              <p>{{ article.title }}</p> 
              <p>{{ formatDate(article.date) }}</p>
            </NuxtLink>
            
          </ContentList>
        </div>
      </div>
    </main>
  </NuxtLayout>
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

  .post {
    flex-shrink: 0;
    padding: 16px;
    background-color: $purple;
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: 24px;
    color: $lavendar;
    cursor: pointer;

    @include bp(sm) {
      padding: 32px;
      font-size: 32px;
      text-align: right;
    }

    @include bp(md) {
      padding: 48px;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }

    @include bp(lg) {
      padding: 64px;
    }

    &:nth-child(even) {
      background-color: $lightpurple;
      color: $lavendar;
    }
    &:hover {
      color: $yellow;
    }
  }
  

</style>