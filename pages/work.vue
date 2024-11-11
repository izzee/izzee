<template>
  <NuxtLayout>
    <ContentDoc v-slot="{ doc }">
      <main>
        <Nav/>

        <div class="main-content">
          <WebsiteExample 
            v-for="(website, index) in doc.websites"
            :isToggled="toggledIndex === index"
            :title="website.title"
            :src="website.src"
            :description="website.description"
            @toggle="setToggled(index)"
          />
        </div>

        <div class="work-nav">
          <a href="">websites</a>
          <span class="dot"/>
          <a href="">design</a>
          <span class="dot"/>
          <a href="">painting</a>
          <span class="dot"/>
          <a href="">video</a>
        </div>

      </main>
    </ContentDoc>
  </NuxtLayout>
</template>

<script setup>
  import { ref } from 'vue';
  
  const toggledIndex = ref(null);

  function setToggled(index) {
    toggledIndex.value = toggledIndex.value === index ? null : index;
  }
</script>

<style lang="scss" scoped>

  main {
    background-color: $lightblue;
  }

  .main-content {
    text-align: center;
    align-items: center;
    overflow-y: scroll;
    overflow-x: hidden;
    gap: 16px;
    border-bottom: 0;
    border-color: $blue;
  }

  .work-nav {
    display: flex;
    // width: 100%;
    padding: 8px 0;
    gap: 8px;
    align-items: center; 
    justify-content: center;
    flex-wrap: wrap;
    background-color: $blue;

    a { 
      font-size: 16px;
      line-height: 2;
      color: $lightblue;
      cursor: pointer;
      &:hover {
        color: white;
      }
    }

    @include bp(sm) {
      padding: 8px 0;
      gap: 16px;

      a {
        font-size: 24px;
      }
    }

    @include bp(md) {
     
    }
  }
  
  .dot {
    width: 4px;
    height: 4px;
    background-color: $lightblue;

    @include bp(sm) {
      width: 8px;
      height: 8px;
    }
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