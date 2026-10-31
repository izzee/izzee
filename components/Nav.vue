
<template>
  <nav :class="navClass()">
    <NuxtLink to="/" class="home-link">
      <div class="icon"/>
      <p>izzee</p>
      <div class="icon"/>
      <Arrow/>
    </NuxtLink>
    <NuxtLink to="/work#websites" class="work-link" prefetch>
      <p>work</p>
      <video src="/images/work.mp4" autoplay muted="true" loop playsinline/>
    </NuxtLink>
    <NuxtLink to="/about" class="about-link">
      <div class="icon"/>
      <p>about</p>
      <div class="icon"/>
    </NuxtLink>
    <NuxtLink to="/feed" class="feed-link">
      <p>feed</p>
      <div class="mouth">
        <div class="top-teeth"></div>
        <div class="bottom-teeth"></div>
      </div>
    </NuxtLink>
  </nav>
</template>

<script setup>
  const props = defineProps(['variant'])

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

  .mouth {
    position: absolute;
    width: 100%;
    height: 100%;
    display: inherit;
    justify-content: inherit;
    align-items: inerit;
    border-radius: 100%;
    transform: scaleY(0);
    color: $darkgray;
    background-color: $darkgray;
    transition: transform .5s, border-radius .5s, color .5s, background-color .5s;
    box-shadow: 0 0 0 8px $red inset;
    overflow: hidden;
    
    &::after {
      content: "feed";
      text-align: center;
      position: absolute;
      height: 100%;
      width: 100%;
      line-height: inherit;
      font-size: inherit;
      line-height: inherit;
    }
  }
  .top-teeth,
  .bottom-teeth {
    position: absolute;
    width: calc(100% - 16px);
    left: 8px;
    height: 24px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    transition: background-color .25s, color .25s;
    z-index: 0;
    background-size: 24px auto;
  }
  .top-teeth {
    top: 8px;
    background-image: url("/images/tooth.svg");
    background-position: center top;
  }
  .bottom-teeth {
    bottom: 8px;
    background-image: url("/images/bottom-tooth.svg");
    background-position: center bottom;
  }

  nav a {
    transition: background-color .25s, color .25s;
    display: flex;
    justify-content: space-evenly;
    align-items: stretch;
    position: relative;

    video {
      display: none;
    }

    .icon {
      flex: 1;
      margin: 0 4px;
      height: 100%;
      background-size: 100%;
      background-repeat: no-repeat;
      background-position: center;
      transition: transform .5s;

      @include bp(md) {
        margin: 0 8px;
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
    background-color: $lavendar;
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


    a {
      display: flex;
      align-items: center;
      text-align: center;
      font-size: 16px;
      line-height: 1;
      font-weight: 500;
      width: 50%;
      position: relative;
      overflow: hidden;
      cursor: pointer;

      .icon {
        max-width: 64px;
        pointer-events: none;
      }

      p {
        transition: opacity .5s;
        pointer-events: none;
      }

      &.router-link-exact-active {
        text-decoration: underline;
        text-underline-offset: 4px;
        text-decoration-thickness: 2px;
      }
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
      pointer-events: none;

    }

    @include bp(sm) {
      padding: 0;
      height: 64px;
      a {
        flex: 1;
        font-size: 24px;

        &.router-link-exact-active {
          text-decoration: none;
        }

        &:hover {
          cursor: pointer;
        }
      }

      .home-link:hover {
        .arrow {
          transform: translate(0);
          opacity: 1;
        }
        p {
          opacity: 0;
        }
      }
    }
    
    @include bp(md) {
      height: 80px;
      a {
        font-size: 40px;
      }
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
        max-width: 100px;
      }
    }

    .home-link {
      pointer-events: none;

      .arrow {
        display: none;
      }
    }

    @include bp(md) {
      width: 640px;

      a {
        font-size: 80px;
      }

      .home-link {
        pointer-events: auto;
        cursor: default;
        .icon {
          transform: scaleY(0);
          background-image: url("/images/eye.svg");
        }
        &:hover .icon {
          transform: scaleY(1);
        }
      }

      .about-link {
        .icon {
          max-width: 100%;
          background-size: auto 50%;
          transition: transform .5s;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: transform .5s, opacity .5s;

          &::after {
            content: "?";
          }      
        }
        &:hover {
           p {
            animation: rainbow 2s linear infinite;
           }
          .icon:first-child {
            opacity: 1;
            animation: questionmark 1s linear alternate infinite;
          }
          .icon:last-child {
            opacity: 1;
            animation: questionmark 1s linear alternate-reverse infinite;
          }
        }
      }

      .work-link {
        position: relative;
        overflow: hidden;
        p {
          z-index: 1;
          transition: transform 3s, opacity 3s, text-shadow 3s, filter 3s;
        }
        video {
          pointer-events: none;
          user-select: none;
          display: block;
          position: absolute;
          z-index: 0;
          opacity: 0;
          width: 100%;
          height: 100%;
          filter: blur(10px);
          transform: scale(1.5);
          transition: transform 3s, opacity 3s, filter 3s;
        }

        &:hover{
          p {
            filter: blur(4px);
            transform: rotate(-5deg) scale(1.25);
            text-shadow: 0 0 64px $darkorange, 0 0 64px $darkorange, 0 0 64px $darkorange, 0 0 64px $darkorange;
          }
          video {
            filter: blur(0);
            transform: scale(1);
            opacity: .5;
          }
        }
      }

      .feed-link {
        &:hover{ 
          background-color: $red;
          .mouth {
            color: $lightlavendar;
            border-radius: 0;
            transform: scaleY(1);
          }
        }
      }    
    }
  }

  @keyframes rainbow {
    0% {
      filter: hue-rotate(0deg);
    }
    100% {
      filter: hue-rotate(360deg);
    }
  }

  @keyframes questionmark {
    0% {
      filter: hue-rotate(0deg);
      transform: scale(-1.25, 1.25) translateY(-4px);
    }
    100% {
      filter: hue-rotate(360deg);
      transform: scale(1.25, 1.25) translateY(4px);
    }
  }  
</style>