<template>
  <SectionTitle title="Work Experience" />

  <article v-for="job in jobs" :key="job.id">
    <JobDescription
      :title="job.title"
      :tasks="job.tasks"
      :company="job.company"
      :start="job.start"
      :end="job.end"
    />
  </article>
</template>

<script setup>
import JobDescription from './JobDescription.vue'
import jobs from '@/data/jobs'
import SectionTitle from './SectionTitle.vue'
</script>
