<template>
  <section id="projects" class="py-32 md:py-48 px-6 md:px-16 lg:px-24 bg-accent/30">
    <div class="max-w-6xl mx-auto">
      <!-- Section header -->
      <div class="mb-20 md:mb-32 grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div class="lg:col-span-4">
          <span class="text-xs tracking-widest text-muted-foreground uppercase">{{ portfolioData.projects.sectionLabel
          }}</span>
        </div>
        <div class="lg:col-span-8">
          <h2 class="font-serif text-3xl md:text-4xl lg:text-5xl font-light !leading-tight">
            {{ portfolioData.projects.titleLine1 }}<br />
            <span class="italic">{{ portfolioData.projects.titleLine2 }}</span>
          </h2>
        </div>
      </div>

      <!-- Project cards -->
      <div class="space-y-24 md:space-y-32">
        <ProjectCard v-for="(project, index) in portfolioData.projects.items" :key="index" :title="project.title"
          :description="project.description" :technologies="project.technologies" :index="index"
          :image="project.image ?? undefined" :view-label="portfolioData.projects.viewProjectLabel" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { portfolioData } from '~/data/portfolio'
</script>
