
<template>
  <nav :class="navClass">
    <NuxtLink to="/" class="home-link">izzee</NuxtLink>
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
    height: 48px;
    display: flex;
    z-index: 10;

    @include bp(sm) {
      height: 64px;
    }
    
    @include bp(md) {
      height: 80px;
    }
  }

  .nav-primary a {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 16px;
    font-weight: 500;

    @include bp(sm) {
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
    width: calc(100vw - 16px);

    a {
      text-align: center;
      font-size: 40px;
      line-height: 2;
      font-weight: 500;
    }

    @include bp(sm) {
      width: calc(100vw - 32px);
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
  }

  .work-link {
    color: $darkorange;
    background-color: $blue;

  }

  .about-link {
    color: $orange;
    background-color: $gray;
    &:hover,
    &.router-link-exact-active {
    }
  }

  .feed-link {
    color: $blue;
    background-color: $lightpurple;
  }
</style>