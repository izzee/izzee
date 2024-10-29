
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
  nav {
    display: flex;
  }
  nav a {
    flex: 1;
    font-size: 24px;
    line-height: 2;
    font-weight: 500;
    text-align: center;

    @include bp(md) {
      font-size: 40px;
    }
  }
  .nav-alt {
    margin: auto;
    flex-direction: column;
    width: calc(100vw - 32px);

    a {
      font-size: 40px;
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
  }
  .feed-link {
    color: $blue;
    background-color: $lightpurple;
  }
</style>