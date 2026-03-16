<template>
  <section class="content-section">
    <AboutMe />
  </section>

  <section class="content-section">
    <WorkExperience />
  </section>

  <section class="content-section">
    <ContactMe />
  </section>
</template>

<script setup>
import AboutMe from './AboutMe.vue'
import WorkExperience from './WorkExperience.vue'
import ContactMe from './ContactMe.vue'
</script>

<style scoped>
.content-section {
  /* padding: 2rem 0; */
  border-top: 1px solid var(--color-border);
}
</style>
