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

  const debounce = (fn, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => fn(...args), delay);
    };
  };

  const onIntersect = debounce((category) => {
    setFocusedCategory(category)
  }, 200)

</script>

<style lang="scss" scoped>

  main {
    background: $mediumblue;
    background-attachment: fixed;
    @include bp(sm) {
      background: $mediumblue;
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
        text-decoration: underline;
      }
    }

    @include bp(sm) {
      gap: 16px;
      a {
        font-size: 24px;

        &:hover {
          color: $yellow;
          text-decoration: underline;
        }
      }
    }
    @include bp(md) {
      a {
        font-size: 32px;
      }
    }
  }
  
  .dot {
    width: 4px;
    height: 4px;
    background-color: $lightblue;

    @include bp(md) {
      width: 8px;
      height: 8px;
    }
  }
</style>