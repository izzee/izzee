<template>
  <NuxtLayout>
    <ContentDoc v-slot="{ doc }">
      <main>
        <Nav/>
        <div class="main-content" ref="rootElement">
          <WorkCategory 
            v-for="category in doc.categories" 
            :title="category.title"
            :component="category.component"
            :examples="category.examples"
            :rootElement="rootElement"
            @intersect="onIntersect"
          />
        </div>
        <div class="work-nav">
          <template v-for="(category, index) in doc.categories">
            <span v-if="index !== 0" class="dot"/>
            <a 
              :class="focusedCategory === category.title && 'focused'"
              :href="`#${category.title}`" 
              @click="() => setFocusedCategory(category.title)"
              v-html="category.title"
            />
          </template>
        </div>
      </main>
    </ContentDoc>
  </NuxtLayout>
</template>

<script setup>
  const focusedCategory = ref(null);
  const rootElement = ref(null);

  const setFocusedCategory = (category) => {
    focusedCategory.value = category
  }

  const onIntersect = (category) => {
    setFocusedCategory(category)
  }

</script>

<style lang="scss" scoped>

  main {
    background: linear-gradient($lightblue, $blue calc(100% - 48px));
    background-attachment: fixed;
    &:before {
      content: '';
      position: fixed;
      width: 100%;
      height: 96px;
      top: 0;
      background: linear-gradient($lightblue 48px, transparent);
      z-index: 2;
    }
    @include bp(sm) {
      background: $lightblue;
      &:before {
        display: none;
      }
    }
  }

  .main-content {
    text-align: center;
    align-items: center;
    overflow-y: scroll;
    overflow-x: hidden;
    border-bottom: 0;
    padding-top: 0;
    border-color: $blue;
    background: inherit;
    scroll-behavior: smooth;
    scroll-padding-top: 16px;

    @include bp(sm) {
      scroll-padding-top: 24px;
    }

    @include bp(md) {
      scroll-padding-top: 0;
    }
    
  }

  .work-nav {
    position: sticky;
    bottom: 0;
    display: flex;
    padding: 8px 0;
    gap: 8px;
    align-items: center; 
    justify-content: center;
    flex-wrap: wrap;
    background-color: $blue;
    z-index: 2;
    
    a { 
      font-size: 16px;
      line-height: 2;
      color: $lightblue;
      cursor: pointer;
      &.focused{
        color: $yellow;
      }
    }

    @include bp(sm) {
      padding: 16px 0;
      gap: 16px;
      a {
        font-size: 24px;

        &:hover {
          color: $yellow;
        }
      }
    }
  }
  
  .dot {
    width: 4px;
    height: 4px;
    background-color: $lightblue;
  } 

  .work-heading {
    z-index: 2;
    width: 100%;
    background-color: $lightblue;
    font-size: 32px;
    line-height: 1.5;
    font-weight: 400;
    color: $lightestblue;
  }
</style>