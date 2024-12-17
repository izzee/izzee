
<template>
  <nav :class="navClass">
    <NuxtLink to="/" class="home-link">
      izzee
      <Arrow/>
    </NuxtLink>
    <NuxtLink to="/work" class="work-link">work</NuxtLink>
    <NuxtLink to="/about" class="about-link">about</NuxtLink>
    <NuxtLink to="/feed" class="feed-link">feed</NuxtLink>
  </nav>
</template>

<script>
  export default {
    props: {
      variant: {
        type: String,
        default: 'primary', // 'primary', 'alt', etc.
      },
    },
    computed: {
      navClass() {
        return {
          'nav-primary': this.variant === 'primary',
          'nav-alt': this.variant === 'alt',
        }
      }
    },
  }
</script>

<style lang="scss" scoped>  

  nav a {
    transition: background-color .25s, color .25s;
  }
  .nav-primary {
    position: sticky;
    top: 0;
    height: 96px;
    display: flex;
    flex-wrap: wrap;
    z-index: 10;
    padding: 16px;
    padding-bottom: 0;

    @include bp(sm) {
      padding: 0;
      height: 64px;
    }
    
    @include bp(md) {
      height: 80px;
    }
  }

  .nav-primary a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    width: 50%;

    @include bp(sm) {
      flex: 1;
      font-size: 24px;
    }

    @include bp(md) {
      font-size: 40px;
    }
  }
  
  .nav-alt {
    margin: auto;
    display: flex;
    flex-direction: column;
    width: calc(100vw - 32px);

    a {
      text-align: center;
      font-size: 40px;
      line-height: 2;
      font-weight: 500;
    }

    @include bp(md) {
      width: 640px;
      a {
        font-size: 80px;
      }
    }
  }

  .home-link {
    color: $yellow;
    background-color: $green;
    .arrow {
      display: none;
    }
  }

  .work-link {
    color: $darkorange;
    background-color: $blue;
  }

  .about-link {
    color: $orange;
    background-color: $gray;
  }

  .feed-link {
    color: $blue;
    background-color: $lavendar;
  }

  .nav-primary {

    .home-link {
      position: relative;
      overflow: hidden;
    }
    .arrow {
      left: 0;
      display: flex;
      position: absolute;
      width: 100%;
      fill: $yellow;
      opacity: 0;
      transform: translateX(100%);
      transition: transform .5s;
    }
    .home-link:hover {
      color: $green;
      background-image: url(./Arrow.vue);

      .arrow {
        opacity: 1;
        transform: translateX(0)

      }
    }
  }
</style>