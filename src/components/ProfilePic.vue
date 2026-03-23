<template>
  <div class="profile-container">
    <Transition name="fade">
      <img
        v-if="isDarkMode"
        key="dark"
        alt="Jamin Cheung profile picture"
        src="@/assets/images/jamin-profile-pic-dark-mode.png"
        class="profile-pic"
      />
      <img
        v-else
        key="light"
        alt="Jamin Cheung profile picture"
        src="@/assets/images/jamin-profile-pic-light-mode.png"
        class="profile-pic"
      />
    </Transition>
  </div>
</template>

<script setup>
import useDark from '@/use/useDark'

const { isDarkMode } = useDark()
</script>

<style scoped>
.profile-container {
  position: relative;
  width: 6rem;
  height: 6rem;
}

.profile-pic {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  border-radius: 50%;
}
</style>
