<template>
  <section id="experience" class="section bg-accent/30">
    <div class="section-container">
      <header class="section-header">
        <span class="type-accent">{{ portfolioData.experience.sectionLabel }}</span>
        <h2 class="type-section mt-6">
          {{ portfolioData.experience.title }}<br />
          <span class="italic">{{ portfolioData.experience.titleItalic }}</span>
        </h2>
      </header>

      <div>
        <ExperienceItem v-for="(exp, index) in portfolioData.experience.items" :key="index" :year="exp.year"
          :company="exp.company" :url="exp.url" :role="exp.role" :description="exp.description" :skills="exp.skills" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { portfolioData } from '~/data/portfolio'
</script>
