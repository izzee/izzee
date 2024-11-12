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
          <WorkExamples/>

        </div>

        <div class="work-nav">
          <a href="">websites</a>
          <span class="dot"/>
          <a href="">design</a>
          <span class="dot"/>
          <a href="">painting</a>
          <span class="dot"/>
          <a href="">video art</a>
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
    background: linear-gradient($lightblue, $blue);
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
      background: linear-gradient($lightblue, $lightestblue);
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
    gap: 16px;
    border-bottom: 0;
    border-color: $blue;


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