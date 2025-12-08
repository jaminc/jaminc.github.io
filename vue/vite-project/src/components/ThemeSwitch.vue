<template>
  <input @change="setDarkMode(isChecked)" id="theme" type="checkbox" v-model="isChecked" />
  <label for="theme">Theme: {{ isDarkMode ? 'Dark' : 'Light' }}</label>
</template>

<script setup>
import { ref } from 'vue'
import useDark from '@/use/useDark'

const { isDarkMode, setDarkMode } = useDark()

const isChecked = ref(isDarkMode)
</script>
