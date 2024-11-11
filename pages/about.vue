<template>
  <NuxtLayout>
    <ContentDoc v-slot="{ doc }">
      <main>
        <Nav/>
        <div class="main-content">
          <div class="bio">
            <p class="bio-text" v-html="doc.bio"/>
          </div>

          <div class="links">
            <button class="link" @click="toggleForm">
              <span>
                get in touch
              </span>
            </button>
            <div class="external-links">
              <a class="link" href="#">instagram</a>
              <a class="link" href="#">are.na</a>
              <span class="link webring">
                <a class="webring-link" href="">
                  <Arrow/>
                </a>
                <span>
                  recurse webring
                </span>
                <a class="webring-link" href="">
                  <Arrow variant="flipped"/>
                </a>
              </span>
            </div>
          </div>
          <Form :toggled="isFormToggled" :toggleForm="toggleForm"/>
        </div>
      </main>
  </ContentDoc>
</NuxtLayout>
</template>

<script setup>
  import { ref } from 'vue';

  const isFormToggled = ref(false);
  
  const toggleForm = () => {
    isFormToggled.value = !isFormToggled.value
  }
</script>

<style lang="scss" scoped>

  main {
    background-color: $darkgray;
  }
  
  .main-content {
    justify-content: space-between;
    position: relative;
    border-color: $gray;
  }

  .bio-text {
    color: $orange;    
  }

  .links {
    gap: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @include bp(sm) {
      gap: 16px;
    }

    @include bp(lg) {
      flex-direction: row;
    }
  }

  .external-links {
    display: inherit;
    flex-wrap: wrap;
    gap: inherit;
    .link {
      flex-grow: 1;
    }
  }

  .link {
    padding: 16px 24px;
    display: inline-block;
    font-weight: 500;
    font-size: 16px;
    line-height: 1;
    text-align: center;
    background-color: $gray;
    color: $lightpurple;
    fill: $lightpurple;
    cursor: pointer;

    @include bp (sm){
      font-size: 24px;
      line-height: calc(32 / 24);
    }

    &:hover {
      color: $gray;
      fill: $gray;
      background-color: $lightpurple;
    }
  }

  .webring {
    width: 296px;
    display: flex;
    justify-content: space-between;
    gap: 16px;
    a {
      display: flex;
      align-items: center;
      color: inherit;
      flex: 1;
      &:hover{
        fill: $yellow;
        animation: hue-rotate 5s linear infinite;
      }
    }
  }
</style>