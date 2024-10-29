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
        <button>get in touch</button>
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
    padding: 24px;
    flex: 1;
    p {
      color: $orange;
    }

    a {
      color: $yellow;
    }
    @include bp(sm) {
      padding: 32px;
    }

    @include bp(md) {
      padding: 40px;
    }

    @include bp(lg) {
      padding: 64px;
    }
  }

  .footer {
    padding: 24px;
    display: flex;
    gap: 8px;
    flex-direction: column;
    justify-content: space-between;
    background-color: $darkgray;

    nav {
      display: inherit;
      gap: inherit;
      flex-wrap: wrap;
    }
    a,
    button {
      display: inline-block;
      font-size: 16px;
      line-height: 1;
      text-align: center;
    }
    a {
      padding: 16px;
      flex-grow: 1;
      color: $orange;
      background-color: $gray;
      &:last-child {
        width: 100%;
      }
    }
    button {
      padding: 16px 40px;
      color: $yellow;
      background-color: $green;
      border: 0;
      border-radius: 0;
    }

    @include bp(sm) {
      gap: 16px;
      padding: 32px;
      a:last-child {
        width: auto;
      }
    }

    @include bp(md) {
      padding: 40px;
 

      a, button {
        font-size: 24px;
      }
    }

    @include bp(lg) {
      padding: 64px;
      flex-direction: row;
    }
  }
</style>