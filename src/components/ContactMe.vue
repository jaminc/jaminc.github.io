<template>
  <SectionTitle title="Contact Me" />

  <div class="contact-container">
    <a href="http://www.github.com/jaminc" aria-label="Github Profile">
      <img alt="" src="@/assets/icons/github.svg" class="icon" aria-hidden="true" />
    </a>
    <a href="http://www.linkedin.com/in/jamincheung" aria-label="Linkedin Profile">
      <img alt="" src="@/assets/icons/linkedin.svg" class="icon" aria-hidden="true" />
    </a>
  </div>
</template>

<script setup>
import SectionTitle from './SectionTitle.vue'
</script>

<style scoped>
.contact-container {
  display: flex;
  gap: 1rem;
}

.icon {
  width: 2rem;
}
</style>
