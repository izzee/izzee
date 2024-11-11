<template>
  <div :class="`${isToggled ? 'website-example toggled' : 'website-example'}`">
    <h3 class="example-title" v-html="title"/>
    <div class="left-panel">
      <div class="topbar"/>
      <div class="content">
        <NuxtImg class="example-image" :src="src" alt=""/>
      </div>
    </div>
    <div class="right-panel">
      <div class="topbar">
        <div class="toggle-button" @click="toggle">
          <Plus/>
        </div>
      </div>
      <div class="content">
        <p v-html="description" />
      </div>
    </div>
  </div>
</template>

<script setup>
  import Plus from '~/public/icons/plus.svg?skipsvgo'
  import { defineProps, defineEmits } from 'vue';

  const props = defineProps(['isToggled', 'title', 'src', 'description'])

  const emit = defineEmits(['toggle']);

  function toggle() {
    emit('toggle');
  }
</script>

<style lang="scss" scoped>
.website-example {
  position: relative;
  width: 100%;
  background-color: white;
  @include bp(md) {
    width: 50vw;

  }
}

.example-title {
  position: absolute;
  top: 0;
  width: 100%;
  color: $gray;
  font-size: 16px;
  line-height: 48px;
  font-weight: 400;
  text-align: center;
  pointer-events: none;
  z-index: 1;
  @include bp (sm) {
    font-size: 24px;
    line-height: 64px;
  }
}

.topbar {
  position: relative;
  height: 48px;
  width: 100%;
  background: linear-gradient(white, lightgray);
  @include bp(sm) {
    height: 64px;
  }
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

  svg {
    fill: $gray;
    width: 80px;
    height: 48px;
    transition: transform .25s;
    background: radial-gradient(#fff, transparent 10%);
  }

  @include bp(sm) {
    top: 16px;
    right: 16px;
    width: 32px;
    height: 32px;
  }
}

.content {
  padding: 8px;
  flex: 1;
  flex-direction: column;
  display: flex;
  background-color: #fff;
  transition: transform .25s;

  p {
    font-size: 16px;
    line-height: 1.5;
    text-align: left;
  }

  @include bp(sm) {
    padding: 16px;

    p {
      font-size: 24px;
      line-height: calc(32 / 24);
    }
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

  .content {
    transform: scaleX(0);
    transform-origin: right;

  }
  @include bp(md) {
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
  @include bp(md) {
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
    svg {
      fill: $darkgray;
      transform: rotate(45deg);
    }
  }
}



</style>