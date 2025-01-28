<template>
  <div class="main-content">
    <ContentDoc v-slot="{ doc }">
      <div class="bio">
        <p class="bio-text" v-html="doc.text"/>
      </div>

      <div class="links">
        <button class="link" @click="toggleForm">
          <span>
            get in touch!
          </span>
        </button>
        <div class="external-links">
          <a class="link" href="https://github.com/izzee">github</a>
          <a class="link" href="https://are.na/isaac">are.na</a>
          <span class="link webring">
            <a class="webring-link" href="https://ring.recurse.com/prev?id=36">
              <Arrow/>
            </a>
            <span>
            <a data-rc-uuid="38b9e773-49b6-4735-b4d6-ef3329094db8" href="https://ring.recurse.com/">
              recurse webring
            </a>
            </span>
            <a class="webring-link" href="https://ring.recurse.com/next?id=36">
              <Arrow variant="flipped"/>
            </a>
          </span>
        </div>
      </div>
      <Form :toggled="isFormToggled" :toggleForm="toggleForm"/>
    </ContentDoc>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  const isFormToggled = ref(false);
  
  const toggleForm = () => {
    isFormToggled.value = !isFormToggled.value
  }
</script>

<style lang="scss" scoped>

  .main-content {
    justify-content: space-between;
    position: relative;
    border-color: $gray;
    background: $darkgray;
    gap: 16px;
    overflow-y: scroll;
    scrollbar-color: $gray $darkgray;
    @include bp(md) {
      overflow: hidden;
    }
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
    color: $lavendar;
    fill: $lavendar;
    cursor: pointer;

    @include bp (sm){
      font-size: 24px;
      line-height: calc(32 / 24);
    }

    &:hover {
      color: $gray;
      fill: $gray;
      background-color: $lavendar;
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