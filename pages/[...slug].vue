<template>
  <main>
    <Nav/>
    <div class="main-content">
      <ContentDoc >
        <template v-slot="{ doc }">
          <Post :doc="doc" />
        </template>
        <template #not-found>
          <p>404</p>
        </template>
        <template #empty></template>
      </ContentDoc>
    </div>
  </main>
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

  .bottom-nav {
    position: sticky;
    bottom: 0;
    display: flex;
    padding: 8px 0;
    gap: 8px;
    align-items: center; 
    justify-content: center;
    flex-wrap: wrap;
    background-color: $lavendar;
    z-index: 2;
       @include bp(sm) {
      gap: 16px;
      a {
        font-size: 24px;

        &:hover {
          color: $darkorange;
        }
      }
    }
    @include bp(md) {
      a {
        font-size: 32px;
      }
    }

  }
</style>