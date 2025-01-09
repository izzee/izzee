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
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => fn(...args), delay);
    };
  };

  const onIntersect = debounce((category) => {
    setFocusedCategory(category)
  }, 250)


</script>

<style lang="scss" scoped>

  main {
    background: $mediumblue;
    background-attachment: fixed;
    @include bp(sm) {
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
    position: relative;

    @include bp(sm) {
      scroll-padding-top: 24px;
    }

    @include bp(md) {
      scroll-padding-top: 0;
    } 
  }

  .loading {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: $mediumblue;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      animation: spin 1s linear infinite;
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
      transition: color .25s;
      &.focused{
        color: $darkorange;
      }
    }

    @include bp(sm) {
      gap: 16px;
      a {
        font-size: 24px;

        &:hover {
          color: $darkorange;
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

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>