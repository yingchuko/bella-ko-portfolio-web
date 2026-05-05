<template>
  <article class="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0">
    <!-- Project number -->
    <div class="lg:col-span-1">
      <span class="font-serif text-muted-foreground text-sm">
        {{ String(index + 1).padStart(2, '0') }}
      </span>
    </div>

    <!-- Image placeholder -->
    <div class="lg:col-span-5 lg:pr-8">
      <div
        class="aspect-[4/3] bg-accent rounded-lg overflow-hidden relative group-hover:shadow-2xl transition-shadow duration-700"
      >
        <!-- Placeholder content -->
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="text-center space-y-2">
            <div class="w-12 h-12 mx-auto border border-border rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
              <ArrowUpRight class="w-5 h-5 text-muted-foreground" />
            </div>
            <span class="text-xs tracking-widest text-muted-foreground uppercase">View Project</span>
          </div>
        </div>

        <!-- Hover overlay -->
        <div class="absolute inset-0 bg-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </div>

    <!-- Content -->
    <div class="lg:col-span-6 flex flex-col justify-between py-2">
      <div class="space-y-6">
        <div class="flex items-start justify-between">
          <h3 class="font-serif text-3xl md:text-4xl lg:text-5xl font-light leading-tight group-hover:translate-x-2 transition-transform duration-500">
            {{ title }}
          </h3>
          <span class="text-sm text-muted-foreground tracking-wider ml-4 mt-2">{{ year }}</span>
        </div>

        <p class="text-muted-foreground leading-relaxed max-w-lg">
          {{ description }}
        </p>
      </div>

      <!-- Technologies -->
      <div class="flex flex-wrap gap-3 mt-8">
        <span
          v-for="tech in technologies"
          :key="tech"
          class="text-xs tracking-wider text-muted-foreground px-3 py-1.5 border border-border rounded-full hover:border-foreground hover:text-foreground transition-colors duration-300"
        >
          {{ tech }}
        </span>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'

defineProps<{
  title: string
  description: string
  technologies: string[]
  year: string
  index: number
}>()
</script>
