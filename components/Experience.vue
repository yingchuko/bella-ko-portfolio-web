<template>
  <section id="experience" class="py-32 md:py-48 px-6 md:px-16 lg:px-24 bg-accent/30">
    <div class="max-w-6xl mx-auto">
      <div class="mb-20 md:mb-32">
        <span class="text-xs tracking-widest text-muted-foreground uppercase">{{ portfolioData.experience.sectionLabel
        }}</span>
        <h2 class="font-serif text-3xl md:text-4xl lg:text-5xl font-light mt-6 !leading-tight">
          {{ portfolioData.experience.titleBefore }}<br />
          <span class="italic">{{ portfolioData.experience.titleItalic }}</span>
        </h2>
      </div>

      <div class="border-b border-border">
        <ExperienceItem v-for="(exp, index) in portfolioData.experience.items" :key="index" :year="exp.year"
          :company="exp.company" :url="exp.url" :role="exp.role" :description="exp.description" :skills="exp.skills" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { portfolioData } from '~/data/portfolio'
</script>