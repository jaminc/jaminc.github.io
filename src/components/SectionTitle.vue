<template>
  <h2 class="title">
    {{ title }}
  </h2>
</template>

<script setup>
defineProps({
  title: String,
})
</script>

<style scoped>
.title {
  font-size: 3rem;
  font-weight: bold;
}
</style>
