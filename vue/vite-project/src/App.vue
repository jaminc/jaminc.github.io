<template>
  <ThemeSwitch />

  <header>Jamin Cheung</header>

  <section>
    <h2>About Me</h2>
    <p>
      I’m a New York-based web developer experienced in JavaScript, React, Node, and much more. I
      love the problem solving involved with programming and am eager to further improve my skills.
    </p>
  </section>

  <section>
    <h2>Work Experience</h2>
    <article v-for="job in jobs" :key="job.id">
      <JobDescription :title="job.title" :bullet-points="job.tasks" />
    </article>
  </section>
</template>

<script setup>
import ThemeSwitch from './components/ThemeSwitch.vue'
import JobDescription from './components/JobDescription.vue'
import jobs from './data/jobs'
</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
}
</style>
