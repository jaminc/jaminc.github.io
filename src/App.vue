<template>
  <div class="container">
    <header>
      <h1>Jamin Cheung</h1>
    </header>
    <!-- <img
    alt="jamin cheung profile picture"
    src="@/assets/images/jamin-cheung.jpg"
    class="profile-pic"
  /> -->
    <MainContent />

    <ThemeSwitch />
  </div>
</template>

<script setup>
import ThemeSwitch from './components/ThemeSwitch.vue'
import MainContent from './components/MainContent.vue'
</script>

<style scoped>
.container {
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

.profile-pic {
  border-radius: 50%;
}
</style>
