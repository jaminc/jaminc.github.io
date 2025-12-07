<template>
  <input @change="toggleDarkClass(isChecked)" id="theme" type="checkbox" v-model="isChecked" />
  <label for="theme">Theme: {{ isChecked ? 'Dark' : 'Light' }}</label>
</template>

<script setup>
import { ref } from 'vue'

const isOsDarkMode = !!(
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
)
const isChecked = ref(isOsDarkMode)

function toggleDarkClass(setDarkClass) {
  document.body.classList.toggle('dark', !!setDarkClass)
}

toggleDarkClass(isChecked.value)
</script>
