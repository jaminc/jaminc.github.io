<template>
  <div>
    <img
      v-if="isDarkMode"
      alt="Jamin Cheung profile picture"
      src="@/assets/images/jamin-profile-pic-dark-mode.png"
      class="profile-pic"
    />
    <img
      v-else
      alt="Jamin Cheung profile picture"
      src="@/assets/images/jamin-profile-pic-light-mode.png"
      class="profile-pic"
    />
  </div>
</template>

<script setup>
import useDark from '@/use/useDark'

const { isDarkMode } = useDark()
</script>

<style scoped>
.profile-pic {
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
}
</style>
