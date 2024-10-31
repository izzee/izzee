<template>
  <main>
    <Nav/>
    <div class="main-content">
      <div class="bio">
        <p>
          I am a freelance web developer, designer, and digital media artist based in Brooklyn, NY. As a developer at <a href="#">Thesis</a> I built websites for industry-leading clients such as Casper, Roman, Ritual, Talkspace, and Baboon to the Moon. In 2024, I participated in the <a href="#">Recurse Center</a> where I researched creative coding, human-computer interaction, and rendering 3D content in the browser. I also make art with <a href="#">infinity8rocks</a>.
        </p>
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
</template>

<script setup>
  import { ref } from 'vue';

  const isFormToggled = ref(false);
  
  const toggleForm = () => {
    isFormToggled.value = !isFormToggled.value
    console.log(isFormToggled.value)
  }
</script>

<style lang="scss" scoped>

  main {
    background-color: $gray;;
  }
  
  .main-content {
    background-color: $darkgray;
    // border-color: $gray;
    justify-content: space-between;
    position: relative;
  }

  .bio {
    p {
      color: $orange;
    }

    a {
      color: $yellow;
      white-space: nowrap;
      animation: hue-rotate 5s linear infinite;

      &:hover {
        color: $darkgray;
        background-color: $yellow;
      }
    }
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

    @include bp(md) {
      padding: 24px;
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