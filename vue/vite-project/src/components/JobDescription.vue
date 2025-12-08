<template>
  <div class="job">
    <h3 class="title">
      {{ title }}
    </h3>
    <div class="company">{{ company }}</div>
    <div v-if="dateString">{{ dateString }}</div>
    <ul class="task-list">
      <li v-for="task in tasks" :key="task.id">
        {{ task }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { getDateString, getDateRangeString } from '@/util/dateStrings'

const { start, end } = defineProps({
  title: String,
  company: String,
  tasks: [String],
  start: [Number],
  end: [Number],
})

const dateString = computed(() => {
  let result = ''

  if (start) {
    result += getDateString(start)
  }

  if (start && end) {
    result += ` - ${getDateString(end)} ${getDateRangeString(start, end)}`
  } else if (start) {
    const currentDate = new Date()
    const currentEndNumbers = [currentDate.getFullYear(), currentDate.getMonth() + 1]

    result += ` - Current ${getDateRangeString(start, currentEndNumbers)}`
  }

  return result
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
