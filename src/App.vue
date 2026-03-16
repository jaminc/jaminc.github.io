<template>
  <div class="container">
    <header>
      <h1>Jamin Cheung</h1>
    </header>
    <div class="content">
      <!-- <img
    alt="jamin cheung profile picture"
    src="@/assets/images/jamin-cheung.jpg"
    class="profile-pic"
  /> -->

      <section class="content-section">
        <AboutMe />
      </section>

      <section class="content-section">
        <WorkExperience />
      </section>

      <section class="content-section">
        <ContactMe />
      </section>
    </div>

    <ThemeSwitch />
  </div>
</template>

<script setup>
import ThemeSwitch from './components/ThemeSwitch.vue'
import WorkExperience from './components/WorkExperience.vue'
import ContactMe from './components/ContactMe.vue'
import AboutMe from './components/AboutMe.vue'
</script>

<style scoped>
.container {
  padding: 2rem 4rem;
}

.profile-pic {
  border-radius: 50%;
}

.content-section {
  padding: 2rem 0;
  border-top: 1px solid var(--color-border);
}
</style>
