
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
    font-size: 40px;
    line-height: 2;
    font-weight: 400;
    text-align: center;
    text-decoration: none;
  }
  .nav-alt {
    margin: auto;
    width: 640px;
    flex-direction: column;
  }
  .nav-alt a {
    font-size: 80px;
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