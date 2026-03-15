<template>
  <SectionTitle title="Contact Me" />

  <div class="contact-container">
    <a href="http://www.github.com/jaminc">
      <img alt="github icon" src="@/assets/icons/github.svg" class="icon" />
    </a>
    <a href="http://www.linkedin.com/in/jamincheung">
      <img alt="github icon" src="@/assets/icons/linkedin.svg" class="icon" />
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
