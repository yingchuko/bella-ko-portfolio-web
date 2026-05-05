<template>
  <div class="relative">
    <!-- Grainy texture overlay -->
    <div class="grain-overlay" />

    <!-- Main content -->
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
useHead({
  htmlAttrs: {
    class: 'bg-background',
  },
})
</script>
