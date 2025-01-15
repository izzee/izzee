<template>
  <ContentDoc v-slot="{ doc }">
    <p>{{formatDate(doc.date)}}</p>
    <h1 class="post-title">{{ doc.title }}</h1>
    <div class="post-body">
      <ContentRenderer :value="doc" />
    </div>
  </ContentDoc>
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

<style lang="scss">

  .post-title {
    font-size: 40px;
    line-height: 1.5;
    font-weight: 500;
    @include bp(sm) {
      font-size: 64px;
    }
  }

  .post-body{
    font-size: inherit;
    list-style: inside;
    

    ul + *, p + * {
      margin-top: 16px;

      @include bp(sm) {
        margin-top: 32px;

      }
    }
    
  }
</style>