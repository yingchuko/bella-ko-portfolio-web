<template>
  <article
    class="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-0 py-12 md:py-16 border-t border-border first:border-t-0 hover:bg-background/50 transition-colors duration-500 -mx-6 px-6 md:-mx-8 md:px-8"
  >
    <!-- Year -->
    <div class="md:col-span-3">
      <span class="text-sm tracking-wider text-muted-foreground">{{ year }}</span>
    </div>

    <!-- Company & Role -->
    <div class="md:col-span-4">
      <h3 class="font-serif text-2xl md:text-3xl font-light group-hover:translate-x-2 transition-transform duration-500">
        {{ company }}
      </h3>
      <p class="text-sm tracking-wider text-muted-foreground mt-2">{{ role }}</p>
    </div>

    <!-- Description -->
    <div class="md:col-span-5 md:pl-8">
      <p class="text-muted-foreground leading-relaxed max-w-md">
        {{ description }}
      </p>
    </div>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  year: string
  company: string
  role: string
  description: string
}>()
</script>
