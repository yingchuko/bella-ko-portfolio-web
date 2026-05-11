<template>
  <article
    class="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-0 py-12 md:py-16 border-t border-border first:border-t-0 hover:bg-background/40 transition-colors duration-500 -mx-6 px-6 md:-mx-8 md:px-8">
    <div class="md:col-span-3">
      <span class="text-sm tracking-wider text-muted-foreground font-light">{{ year }}</span>
    </div>

    <div class="md:col-span-4">
      <h3
        class="font-serif text-2xl md:text-3xl font-light group-hover:translate-x-2 transition-transform duration-500 flex items-center gap-2">
        <a v-if="url" :href="url" target="_blank" class="hover:opacity-70 transition-opacity">
          {{ company }}
        </a>
        <span v-else>{{ company }}</span>
      </h3>
      <p class="text-xs tracking-[0.2em] text-primary/80 uppercase mt-3">{{ role }}</p>

      <div class="hidden md:flex flex-wrap gap-2 mt-6">
        <span v-for="skill in skills" :key="skill"
          class="text-[10px] px-2 py-1 border border-border rounded-full text-muted-foreground uppercase tracking-wider">
          {{ skill }}
        </span>
      </div>
    </div>

    <div class="md:col-span-5 md:pl-8">
      <ul class="space-y-4">
        <li v-for="(point, i) in description" :key="i"
          class="text-muted-foreground leading-relaxed text-sm md:text-base flex gap-3">
          <span class="shrink-0 mt-2 w-1 h-1 rounded-full bg-border" />
          <span>{{ point }}</span>
        </li>
      </ul>

      <div class="flex md:hidden flex-wrap gap-2 mt-8">
        <span v-for="skill in skills" :key="skill"
          class="text-[10px] px-2 py-1 border border-border rounded-full text-muted-foreground uppercase">
          {{ skill }}
        </span>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  year: string
  company: string
  url: string
  role: string
  description: string[]
  skills: string[]
}>()
</script>