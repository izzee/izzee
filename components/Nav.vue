
<template>
  <nav :class="navClass()">
    <NuxtLink to="/" class="home-link">
      <Eye class="icon"/>
      <p>izzee</p>
      <Eye class="icon"/>
      <Arrow/>
    </NuxtLink>
    <NuxtLink to="/work#websites" class="work-link" prefetch>
      <p>work</p>
    </NuxtLink>
    <NuxtLink to="/about" class="about-link">
      <p>about</p>
    </NuxtLink>
    <NuxtLink to="/feed" class="feed-link">
      <p>feed</p>
    </NuxtLink>
  </nav>
</template>

<script setup>
  const props = defineProps(['variant'])
  import Eye from '~/public/images/eye.svg?skipsvgo'


  const navClass = () => {
    switch(props.variant) {
      case 'primary':
        return 'nav-primary'
      case 'alt':
        return 'nav-alt'
      default:
        return 'nav-primary'
    }
  }
</script>

<style lang="scss" scoped>  

  nav a {
    transition: background-color .25s, color .25s;
    display: flex;
    justify-content: center;

    p {
      display: inline;
      background: linear-gradient(90deg, transparent);
      transition: background .5s;
    }

    .icon {
      flex: 1;
      padding: 16px;
      height: 100%;
      max-width: 160px;
    }

    
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
    transition: transform 2s;

    a {
      text-align: center;
      font-size: 40px;
      line-height: 2;
      font-weight: 500;
      .icon {
        padding: 16px;

        @include bp(md) {
          padding: 0 40px;
        }
      }
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

    .icon {
      transform: scaleY(1);
      transition: transform .5s;
    }

    &:not(:hover) .icon {
      transform: scaleY(0);
    }
  }

  .work-link {
    color: $darkorange;
    background-color: $blue;
  }

  .about-link {
    color: $orange;
    background-color: $gray;

    &:hover p{
      background: linear-gradient(90deg, $red, $orange, $yellow, $lightgreen, $blue, $purple, $red);
      background-size: 200% 100%;
      -webkit-background-clip: text;
      color: transparent;
      animation: about 5s linear infinite;
    }
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
      transition: transform .5s, opacity .25s;
    }
    // .home-link:hover {
    //   color: $green;
    //   background-image: url(./Arrow.vue);

    //   .arrow {
    //     opacity: 1;
    //     transform: translateX(0)
    //   }
    // }
  }

  @keyframes about {
    0% {
      // filter: hue-rotate(0deg);
      background-position: -100% 0;
    }
    100% {
      background-position: 100% 0;
      // filter: hue-rotate(360deg);
    }
  }
</style>