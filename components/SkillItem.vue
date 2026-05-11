<template>
  <div class="group py-4 px-4 -mx-4 rounded-lg cursor-default transition-all duration-300 hover:bg-accent">
    <span
      class="font-serif text-lg md:text-xl font-light group-hover:translate-x-2 inline-block transition-transform duration-300">
      {{ name }}
    </span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name: string
}>()
</script>
