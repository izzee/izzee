<template>
  <div>
  <NuxtLayout>
    <main>
      <Nav/>
      <div class="main-content">
        <ContentDoc v-slot="{ doc }">
          <Post :doc="doc" />
        </ContentDoc>
      </div>
    </main>
  </NuxtLayout>
  </div>
</template>

<style lang="scss" scoped>
  main {
    background-color: $purple;
    color: $lavendar;
  }
  .main-content {
    gap: 24px;
    border-color: $lavendar;
    overflow: scroll;

    @include bp(sm) {
      gap: 48px;
      
    }
  }
</style>