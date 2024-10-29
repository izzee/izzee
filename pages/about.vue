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
        <button class="email-link">get in touch</button>
        <nav>
          <a class="link" href="#">instagram</a>
          <a class="link" href="#">are.na</a>
          <span class="webring-link">
            <a href=""> <- </a>
            recurse webring
            <a href=""> -> </a>
          </span>
        </nav>
      </div>

    </div>
  </main>
</template>

<style lang="scss" scoped>
  .main-content {
    border-color: $gray;
    background-color: $darkgray;
    justify-content: space-between;
  }

  .bio {
    p {
      color: $orange;
    }

    a {
      color: $yellow;
    }
  }

  .links {
    gap: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    nav {
      display: inherit;
      flex-wrap: wrap;
      gap: inherit;
    }

    @include bp(sm) {
      gap: 16px;
    }

    @include bp(lg) {
      flex-direction: row;
    }
  }

  .link,
  .email-link,
  .webring-link {
    padding: 16px 24px;
    display: inline-block;
    font-size: 16px;
    line-height: 1;
    text-align: center;
    cursor: pointer;
    @include bp (sm){
      font-size: 24px;
    }
  }

  .link {
    flex: 1;
    color: $lightpurple;
    background-color: $gray;

    &:hover {
      color: $gray;
      background-color: $lightpurple;
    }
  }

  .email-link {
    color: $yellow;
    background-color: $gray;

    &:hover {
      color: $gray;
      background-color: $yellow;
    }
  }

  .webring-link {
    color: $lightpurple;
    background-color: $gray;
    flex-basis: 100%;

    a {
      color: inherit;
    }

    &:hover {
      color: $gray;
      background-color: $lightpurple;
    }

    a:hover {
      color: $yellow;
    }
    
    @include bp(md) {
      flex-basis: auto;
    }
  }
</style>