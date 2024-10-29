<template>
  <main>
    <Nav/>
    <div class="main-content">

      <div class="bio">
        <p>
          I am a freelance web developer, designer, and digital media artist based in Brooklyn, NY. At <a href="#">Thesis</a>, I built websites for industry-leading clients such as Casper, Roman, Keeps, Baboon to the Moon. Working independently, I designed and built websites for Gaian, Disco, ACA, and Baggy Industries. In 2024, I participated in the <a href="#">Recurse Center</a>, where I researched creative coding, human-computer interaction, and rendering 3D content in the browser. I also make art with <a href="#">infinity8rocks</a>.
        </p>
      </div>

      <div class="footer">
        <button>get in touch!</button>
        <nav>
          <a href="#">instagram</a>
          <a href="#">are.na</a>
          <a href="#"><- recurse webring -></a>
        </nav>
      </div>

    </div>
  </main>
</template>

<style lang="scss" scoped>
  .main-content {
    border-color: $gray;
    background-color: $darkgray;
  }

  .bio {
    padding: 32px;
    flex: 1;
    p {
      color: $orange;
    }

    a {
      color: $yellow;
    }

    @include bp(md) {
      padding: 64px;
    }
  }

  .footer {
    padding: 32px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
    justify-content: space-between;
    background-color: $darkgray;

    nav {
      display: inherit;
      gap: inherit;
    }
    button, 
    a {
      display: inline-block;
      padding: 16px;
      font-size: 24px;

      line-height: 1;
      color: $orange;
      background-color: $gray;
    }

    button {
      color: $gray;
      background-color: $orange;
      border: 0;
      border-radius: 0;
    }

    @include bp(md) {
      padding: 64px;
      flex-direction: row;
    }
  }
</style>