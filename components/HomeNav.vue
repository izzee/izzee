
<template>
  <nav>
    <NuxtLink to="/" class="home-link">izzee</NuxtLink>
    <NuxtLink to="/work" class="work-link">work</NuxtLink>
    <NuxtLink to="/about" class="about-link">about</NuxtLink>
    <NuxtLink to="/contact" class="contact-link">contact</NuxtLink>
  </nav>
</template>

<style lang="scss" scoped>

nav {
  display: flex;
  flex-direction: column;
  width: 640px;
}
nav a {
  font-size: 80px;
  line-height: 2;
  font-weight: 400;
  text-align: center;
  text-decoration: none;
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
  background-color: $darkgray;
}
.contact-link {
  color: $blue;
  background-color: $lightpurple;
}
</style>