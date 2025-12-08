<template>
  test
  <h2>
    {{ title }}
  </h2>
  <ol>
    <li v-for="bulletPoint in bulletPoints" :key="bulletPoint.id">
      {{ bulletPoint }}
    </li>
  </ol>
</template>

<script setup>
const { title } = defineProps({
  title: String,
  bulletPoints: [String],
})
</script>
