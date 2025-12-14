<template>
  <input
    @change="setDarkMode(isChecked)"
    id="theme"
    type="checkbox"
    v-model="isChecked"
    class="theme-switch-checkbox"
  />
  <label class="theme-switch-label" for="theme">Theme: {{ isDarkMode ? 'Dark' : 'Light' }}</label>
</template>

<script setup>
import { ref } from 'vue'
import useDark from '@/use/useDark'

const { isDarkMode, setDarkMode } = useDark()

const isChecked = ref(isDarkMode)
</script>

<style scoped>
.theme-switch-label {
  /* display: block; */
  cursor: pointer;
  width: 400px;
  height: 25px;
  background-color: tomato;
}

.theme-switch-checkbox:checked + .theme-switch-label {
  background-color: yellow;
}
</style>
