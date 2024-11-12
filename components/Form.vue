<template>
  <div class="contact-form-modal" :style="`transform: scaleX(${toggled ? 1 : 0})`">

    <div class="contact-form-wrapper">
      <button class="close-button" @click="toggleForm"><X/></button>
      <form class="contact-form" name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="contact" />
        <div class="row">
          <input type="text" name="name" placeholder="name">
          <input type="email" name="email" placeholder="email">
        </div>
        <textarea type="text" name="message" placeholder="message"></textarea>
        <button class="submit-button" type="submit">
          submit
          <Arrow variant="flipped"/>
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
  import X from '~/public/icons/x.svg?skipsvgo'
  const props = defineProps(['toggled', 'toggleForm'])
</script>

<style lang="scss" scoped>
  .contact-form-modal {
    transform-origin: 16px;
    transition: transform .25s;
    
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;

    @include bp(md) {
      transform-origin: 40px 40px;
    }

    @include bp(lg) {

      transform-origin: 64px calc(100% - 64px);
    }
  }
  .contact-form-wrapper {
    margin: 16px;
    gap: 8px;
    flex: 1;
    display: flex;
    flex-direction: column;
    background-color: $darkgray;
    @include bp(sm) {
      margin: 32px;
      gap: 16px;
    }
    @include bp(md) {
      margin: 48px;
    }
    @include bp(lg) {
      margin: 64px;
    }
  }

  .contact-form {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: inherit;
    font-size: 16px;
    line-height: 1.5;

    @include bp(sm) {
      font-size: 24px;
      line-height: calc(32 / 24);

    }

    input,
    textarea {
      flex: 1;
      padding: 12px 16px;
      background-color: $gray;
      color: $lightpurple;
      border: 0;
      display: flex;
      font-size: inherit;
      line-height: inherit;
      font-family: 'Inter';

      @include bp(sm) {
        padding: 16px;
      }

      &::placeholder {
        color: inherit;
      }
      &:focus {
        outline: 0;
        color: $lightpurple;
        box-shadow: 0 0 0 2px $lightpurple inset;

        @include bp(md) {
          box-shadow: 0 0 0 4px $lightpurple inset;
        }
      }
    }
  }

  .close-button {
    width: 48px;
    height: 48px;
    margin-right: auto;
    fill: $lightpurple;
    background-color: $gray;

    svg {
      fill: inherit;
      width: 100%;
      height: 100%;
    }

    @include bp(sm) {
      width: 64px;
      height: 64px;
    }

    &:hover {
      fill: $gray;
      background-color: $lightpurple;
    }
  }

  .row {
    display: inherit;
    gap: inherit;
    flex-wrap: wrap;
  }

  .submit-button {
    padding: 12px 24px;
    width: 50%;
    margin-left: auto;
    gap: 16px;
    display: flex;
    align-items: center;
    font-size: inherit;
    font-weight: 500;
    line-height: inherit;
    fill: $lightpurple;
    color: $lightpurple;
    background-color: $gray;

    &:hover {
      fill: $gray;
      color: $gray;
      background-color: $lightpurple;
    }

    @include bp (sm) {
      width: 176px;
      padding: 16px 24px;
    }
  }
</style>