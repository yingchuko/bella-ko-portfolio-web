<template>
  <article
    class="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-0 py-12 md:py-14 border-t border-border first:border-t-0 -mx-6 px-6 md:-mx-8 md:px-8">
    <div class="md:col-span-3">
      <span class="type-body-2 tracking-wider">{{ year }}</span>
    </div>

    <div class="md:col-span-4">
      <h3
        class="type-subheading font-light md:group-hover:translate-x-2 transition-transform duration-500 flex items-center gap-2">
        <a v-if="url" :href="url" target="_blank" class="hover:opacity-70 transition-opacity">
          {{ company }}
        </a>
        <span v-else>{{ company }}</span>
      </h3>
      <p class="type-body-2 mt-3 tracking-[0.2em] text-primary/80">{{ role }}</p>

      <div class="hidden md:flex flex-wrap gap-2 mt-6 -ml-1">
        <span v-for="skill in skills" :key="skill"
          class="type-accent normal-case tracking-wider px-2 py-1 border border-border rounded-full">
          {{ skill }}
        </span>
      </div>
    </div>

    <div class="md:col-span-5 md:pl-8">
      <ul class="space-y-4">
        <li v-for="(point, i) in description" :key="i" class="type-body-1 text-justify flex gap-3">
          <span class="shrink-0 mt-3 w-1 h-1 rounded-full bg-muted" />
          <span>{{ point }}</span>
        </li>
      </ul>

      <div class="flex md:hidden flex-wrap gap-2 mt-8">
        <span v-for="skill in skills" :key="skill"
          class="type-accent normal-case tracking-wider px-2 py-1 border border-border rounded-full">
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
