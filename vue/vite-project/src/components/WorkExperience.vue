<template>
  <h2>Work Experience</h2>

  <article v-for="job in jobs" :key="job.id">
    <JobDescription :title="job.title" :tasks="job.tasks" :company="job.company" />
  </article>
</template>

<script setup>
import JobDescription from './JobDescription.vue'
import jobs from '@/data/jobs'
</script>
