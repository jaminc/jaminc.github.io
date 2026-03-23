<template>
  <div class="container">
    <header class="header">
      <h1>Jamin Cheung</h1>
      <ThemeSwitch class="theme-switch" />
    </header>

    <ProfilePic />

    <MainContent />
  </div>
</template>

<script setup>
import ThemeSwitch from './components/ThemeSwitch.vue'
import MainContent from './components/MainContent.vue'
import ProfilePic from './components/ProfilePic.vue'
</script>

<style scoped>
.container {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: auto;
  padding: 2rem 1rem;
  max-width: 1500px;
}
@media screen and (min-width: 600px) {
  .container {
    padding: 2rem 4rem;
  }
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
