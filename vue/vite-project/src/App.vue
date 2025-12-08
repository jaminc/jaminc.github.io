<template>
  <ThemeSwitch />

  <img
    alt="jamin cheung profile picture"
    src="@/assets/images/jamin-cheung.jpg"
    class="profile-pic"
  />

  <header>Jamin Cheung</header>

  <section>
    <h2>About Me</h2>
    <p>
      I’m a New York-based web developer experienced in JavaScript, React, Node, and much more. I
      love the problem solving involved with programming and am eager to further improve my skills.
    </p>
  </section>

  <section>
    <WorkExperience />
  </section>
</template>

<script setup>
import ThemeSwitch from './components/ThemeSwitch.vue'
import WorkExperience from './components/WorkExperience.vue'
</script>

<style scoped>
.profile-pic {
  border-radius: 50%;
}
</style>
