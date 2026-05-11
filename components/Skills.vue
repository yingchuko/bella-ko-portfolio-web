<template>
  <section id="skills" class="py-32 md:py-48 px-6 md:px-16 lg:px-24">
    <div class="max-w-6xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0">
        <div class="lg:col-span-3">
          <span class="text-xs tracking-widest text-muted-foreground uppercase">{{ portfolioData.skills.sectionLabel
          }}</span>
          <h2 class="font-serif text-3xl md:text-4xl lg:text-5xl font-light mt-6 !leading-tight">
            {{ portfolioData.skills.titleLine1 }}<br />
            <span class="italic">
              {{ portfolioData.skills.titleLine2 }}
            </span>
          </h2>
        </div>

        <div class="lg:col-span-9 lg:pl-12">
          <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-12">
            <div v-for="category in portfolioData.skills.categories" :key="category.id" class="space-y-4">
              <h3
                class="text-[10px] tracking-[0.2em] text-primary/60 uppercase font-bold border-b border-border pb-2 mb-4">
                {{ category.label }}
              </h3>
              <div class="flex flex-col space-y-2">
                <SkillItem v-for="skill in category.items" :key="skill" :name="skill" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-20 pt-16 border-t border-border">
        <h3 class="text-xs tracking-widest text-muted-foreground uppercase mb-10">
          {{ portfolioData.skills.philosophy.label }}
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-10">
          <div v-for="pillar in portfolioData.skills.philosophy.pillars" :key="pillar.title" class="space-y-3 group">
            <span class="font-serif text-xl block group-hover:italic transition-all duration-300">
              {{ pillar.title }}
            </span>
            <p class="text-sm text-muted-foreground leading-relaxed">
              {{ pillar.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { portfolioData } from "~/data/portfolio";
</script>
