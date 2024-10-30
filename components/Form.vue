<template>
  <div class="contact-form-modal" :style="`transform: scale(${toggled ? 1 : 0})`">

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
  import X from '~/static/icons/x.svg?skipsvgo'
  const props = defineProps(['toggled', 'toggleForm'])
</script>

<style lang="scss" scoped>
  .contact-form-modal {
    transition: transform .25s;
    transform-origin: 32px 32px;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;

    @include bp(md) {
      transform-origin: 56px calc(100% - 56px);
    }
  }
  .contact-form-wrapper {
    padding: 8px;
    margin: 24px;
    gap: 8px;
    flex: 1;
    display: flex;
    flex-direction: column;
    background-color: $gray;
    @include bp(sm) {
      padding: 16px;
      margin: 32px;
      gap: 16px;
    }
    @include bp(md) {
      margin: 40px;
    }
    @include bp(lg) {
      margin: 56px;
    }
  }

  .contact-form {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: inherit;
    font-size: 16px;
    line-height: 2;

    @include bp(sm) {
      font-size: 24px;
    }

    input,
    textarea {
      padding: 16px;
      flex: 1;
      background-color: $darkgray;
      color: $lightpurple;
      border: 0;
      display: flex;
      font-size: inherit;
      line-height: inherit;
      font-family: 'Inter';

      &::placeholder {
        color: inherit;
      }
      &:focus {
        outline: 0;
        color: $lightpurple;
        box-shadow: 0 0 0 2px $lightpurple inset;
        @include bp(sm) {
          box-shadow: 0 0 0 4px $lightpurple inset;
        }
      }
    }
  }

  .close-button {
    width: 64px;
    height: 64px;
    background-color: $darkgray;
    margin-left: auto;

    svg {
      fill: $lightpurple;
      width: 100%;
      height: 100%;
    }

    @include bp(md) {
      width: 80px;
      height: 80px;
    }
  }

  .row {
    display: inherit;
    gap: inherit;
    flex-wrap: wrap;
  }

  .submit-button {
    padding: 16px;
    width: 160px;
    margin-right: auto;
    font-size: inherit;
    line-height: inherit;
    color: $lightpurple;
    background-color: $darkgray;
    display: flex;
    align-items: center;
    gap: 16px;
    fill: $lightpurple;
  }
</style>