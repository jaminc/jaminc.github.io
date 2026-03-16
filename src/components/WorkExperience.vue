<template>
  <SectionTitle title="Work Experience" />

  <div class="jobs">
    <article v-for="job in jobs" :key="job.id">
      <JobDescription
        :title="job.title"
        :tasks="job.tasks"
        :company="job.company"
        :start="job.start"
        :end="job.end"
      />
    </article>
  </div>
</template>

<script setup>
import JobDescription from './JobDescription.vue'
import jobs from '@/data/jobs'
import SectionTitle from './SectionTitle.vue'
</script>

<style scoped>
.jobs {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
</style>
