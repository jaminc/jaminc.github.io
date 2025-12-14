<template>
  <input
    @change="setDarkMode(isChecked)"
    id="theme"
    type="checkbox"
    v-model="isChecked"
    class="theme-switch-checkbox"
  />
  <label class="theme-switch-label" for="theme" />
</template>

<script setup>
import { ref } from 'vue'
import useDark from '@/use/useDark'

const { isDarkMode, setDarkMode } = useDark()

const isChecked = ref(isDarkMode)
</script>

<style scoped>
.theme-switch-checkbox {
  position: absolute;
  opacity: 0;
}

.theme-switch-label {
  --label-height: 30px;

  box-sizing: content-box;
  display: block;
  position: relative;
  cursor: pointer;
  width: calc(2 * var(--label-height));
  height: var(--label-height);
  border: 1px solid var(--color-border);
  border-radius: calc(var(--label-height) * 0.5);
  background-color: var(--color-background-soft);
}

.theme-switch-label::after {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  height: var(--label-height);
  width: var(--label-height);
  border: 1px solid var(--color-border);
  border-radius: 50%;
  background-color: var(--color-background);
  transition: all 0.2s ease-in-out;
}

.theme-switch-checkbox:focus + .theme-switch-label {
  outline: auto;
  outline: 5px auto -webkit-focus-ring-color;
  outline-offset: 0.25rem;
}

.theme-switch-checkbox:checked + .theme-switch-label::after {
  left: calc(100% - var(--label-height));
}
</style>
