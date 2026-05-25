<template>
  <div class="relative isolate min-h-full">
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
useHead({
  htmlAttrs: {
    class: 'min-h-full bg-transparent',
  },
})
</script>
