<template>
  <div class="job">
    <h3 class="title">
      {{ title }}
    </h3>
    <div class="company">{{ company }}</div>
    <ul class="task-list">
      <li v-for="task in tasks" :key="task.id">
        {{ task }}
      </li>
    </ul>
  </div>
</template>

<script setup>
const { title } = defineProps({
  title: String,
  company: String,
  tasks: [String],
})
</script>

<style scoped>
.job {
  display: grid;
  row-gap: 0.5rem;
}

.title {
  font-size: 1.5rem;
  font-weight: bold;
}

.company {
  font-weight: 1rem;
  font-weight: bold;
}

.task-list {
  /* margin: 0; */
}
</style>
