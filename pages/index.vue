<template>
  <div class="index-page">
    <img src="/logo.svg" alt="Logo" class="logo" />
    <h1 class="app-name">App Name</h1>
    <h2>Welcome!</h2>
    <NButton @click="handleOpen">Open</NButton>
  </div>
</template>

<script setup>
const handleOpen = () => {
  console.log('Button clicked');
}
</script>

<style scoped>
.index-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
}

.logo {
  width: 100px;
}

.app-name {
  font-size: 2rem;
}
</style>