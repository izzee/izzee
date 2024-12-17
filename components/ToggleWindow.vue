<template>
  <IntersectionObserver 
    :class="`${toggled ? 'window toggled' : 'window'}`"
    @intersect="onIntersect"
    @leave="onLeave"
  >
    <h3 class="title" v-html="title" />
    <div class="left-panel">
      <div class="topbar"/>
      <div class="content">
        <NuxtImg 
          class="website-image" 
          :src="src"
        />
      </div>
    </div>
    <div class="right-panel">
      <div class="topbar">
        <div class="toggle-button" @click="toggle">
          <Plus/>
        </div>
      </div>
      <div class="content">
        <p class="description" v-html="description" />
        <div class="links">
          <a class="link" :href="link">Github</a>
          <a class="link" :href="link">Link</a>
        </div>
      </div>
    </div>
  </IntersectionObserver>
</template>

<script setup>
  import Plus from "~/public/images/plus.svg?skipsvgo"
  import Eye from "~/public/images/eye.svg?skipsvgo"

  import { ref, defineProps, defineEmits } from "vue";

  const hasBeenToggled = ref(false);

  const props = defineProps(["title", "src", "description", "link", "toggled", "onLeave", "onIntersect"])

  const emit = defineEmits(["toggle"]);

  function toggle() {
    hasBeenToggled.value = true
    emit("toggle");
  }


</script>

<style lang="scss" scoped>
  @import url("~/styles/_window.scss");
  .title {
    top: 0;
    position: absolute;
    pointer-events: none;
    z-index: 2;
  }

  .toggle-button {
    position: absolute;
    top: 12px;
    right: 12px;
    width: 24px;
    height: 24px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: $green;
    border-radius: 100%;
    transition: background-color .5s;
    // box-shadow: 0 -2px 4px $shadow inset;


    svg {
      fill: $darkgray;
      margin: 4px;
      transition: transform .25s;
    }

    @include bp(sm) {
      top: 16px;
      right: 16px;
      width: 32px;
      height: 32px;
    }
  }

  .links {
    display: flex;
    gap: inherit;
  }

  .link,
  .description {
    font-size: 16px;
    line-height: 24px;

    @include bp(md) {
      font-size: 24px;
      line-height: 32px;
    }
  }

  .description {
    flex: 1;
    text-align: left;
  }

  .link {
    flex: 1;
    padding: 8px;
    background-color: $blue;
    color: $yellow;

    &:hover {
      background-color: $yellow;
      color: $blue;
    }

    @include bp(md) {
      padding: 16px;
    }
  }

  .left-panel,
  .right-panel {
    height:100%;
    transition:transform .25s;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }

  .left-panel {
    position: relative;
    right: 50%;
    width: 100%;
    transform: translateX(50%);

    .content {
      transform-origin: left;
    }
  }

  .right-panel {
    position: absolute;
    top: 0;
    width: 100%;

    .content {
      transform: scaleX(0);
      transform-origin: right;
    }

    @include bp(lg) {
      left: calc(50% + 80px);
      width: calc(100% - 160px);
      transform: translateX(-50%);
      transform-origin: center right;

      .content{
        padding-left: 0;
        & > * {
          opacity: 0;
          transition: opacity .25s;
        }
      }
    }
  }

  .toggled {
    .left-panel .content{
      transform: scaleX(0);
    }
    .right-panel .content{
      transform: scaleX(1);
    }
    @include bp(lg) {
      .left-panel {
        transform: translateX(80px);

        .content {
          transform: none;
        }
      }
      
      .right-panel {
        transform: translateX(0);
        .content {
          transform: scaleX(1);
          & > * {
            opacity: 1;
          }
        }
      }
    }
    .toggle-button {
    background-color: $red;

      svg {
        transform: rotate(45deg);
      }
    }
  }
</style>