<template>
  <main>
    <Nav/>
    <div class="main-content">
      <div class="bio">
        <p>
          I am a freelance web developer, designer, and digital media artist based in Brooklyn, NY. As a developer at <a href="#">Thesis</a>, I built websites for industry-leading clients such as Casper, Roman, Ritual, Talkspace, and Baboon to the Moon. In 2024, I participated in the <a href="#">Recurse Center</a>, where I researched creative coding, human-computer interaction, and rendering 3D content in the browser. I also make art with <a href="#">infinity8rocks</a>.
        </p>
      </div>

      <div class="links">
        <button class="link" @click="() => toggleForm = true">
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
              <span class="line"/>
            </a>
            recurse webring
            <a class="webring-link" href="">
              <span class="line"/>
              <Arrow/>
            </a>
          </span>
        </div>
      </div>

      <div class="contact-form-modal" :style="`transform: scale(${toggleForm ? 1 : 0})`">
        <div class="contact-form-wrapper">
          <button class="close-button" @click="() => toggleForm = false">x</button>
          <form action="">


          </form>
        </div>

      </div>
    </div>
  </main>
</template>

<script setup>
  import { ref } from 'vue';
  import Arrow from '~/static/icons/arrow.svg'

  const toggleForm = ref(false)

</script>

<style lang="scss" scoped>
  .main-content {
    background-color: $darkgray;
    justify-content: space-between;
    position: relative;
  }

  .bio {
    p {
      color: $orange;
    }

    a {
      color: $yellow;
      animation: hue-rotate 5s linear infinite;
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
    padding: 16px;
    display: inline-block;
    font-size: 16px;
    line-height: 1;
    text-align: center;
    background-color: $gray;
    color: $lightpurple;
    fill: $lightpurple;
    cursor: pointer;

    @include bp (sm){
      font-size: 24px;
    }

    @include bp(lg) {
      line-height: 2;
    }

    &:hover {
      color: $gray;
      fill: $gray;
      background-color: $lightpurple;
    }
  }

  .webring {
    flex-basis: 100%;
    display: flex;
    justify-content: space-between;
    gap: 16px;

    @include bp(md) {
      flex-basis: auto;
    }

    &:hover .line {
      background-color: $gray;
    }
  }

  .webring-link {
    display: flex;
    align-items: center;
    color: inherit;
    flex: 1;
    
    .line {
      height: 1px;
      flex: 1;
      width: 100%;
      background-color: $lightpurple;
    }

    svg {
      fill: inherit;
    }

    &:last-child svg {
      transform: rotate(180deg)
    }

    &:hover{
      svg{ fill: $yellow; }
      .line { background-color: $yellow}
    }
  }

  .contact-form-modal {
    transform: scale(1);

    transition: transform .25s ;
    transform-origin: 64px calc(100% - 64px);
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: $darkgray;
    display: flex;
    flex-direction: column;

  }

  .contact-form-wrapper {
    margin: 64px;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 16px;
    .close-button {
      width: 80px;
      height: 80px;
      flex-shrink: 0;
      background-color: $yellow;
      margin-left: auto;
    }

    form {
      height: 100%;
      border: 1px solid black;
    }
  }
</style>