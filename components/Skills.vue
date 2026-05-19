<template>
  <section id="skills" class="section">
    <div class="section-container">
      <div class="section-grid lg:gap-0">
        <div class="lg:col-span-4">
          <span class="type-accent">{{ portfolioData.skills.sectionLabel }}</span>
          <h2 class="type-section mt-6">
            {{ portfolioData.skills.title }}<br />
            <span class="italic">{{ portfolioData.skills.titleItalic }}</span>
          </h2>
        </div>

        <div class="lg:col-span-8 lg:pl-12">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
            <div v-for="category in portfolioData.skills.categories" :key="category.id" class="space-y-8">
              <h3 class="type-accent border-b border-border pb-4 tracking-[0.2em]">
                {{ category.label }}
              </h3>

              <div class="flex flex-wrap md:flex-col items-center md:items-start gap-y-1">
                <div v-for="(skill, index) in category.items" :key="skill"
                  class="skill-wrapper group flex items-center">
                  <span
                    class="type-body-1 font-serif font-light transition-transform duration-300 md:group-hover:translate-x-3 text-foreground/90 md:text-foreground whitespace-nowrap">
                    {{ skill }}
                  </span>

                  <span v-if="index !== category.items.length - 1"
                    class="block md:hidden mx-3 h-3 w-[1.5px] bg-current opacity-20 shrink-0"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="section-divider">
        <h3 class="type-accent mb-12 border-b border-border pb-4 tracking-[0.2em]">
          {{ portfolioData.skills.philosophy.label }}
        </h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-12">
          <div v-for="pillar in portfolioData.skills.philosophy.pillars" :key="pillar.title" class="space-y-4 group">
            <span class="type-subheading font-light block transition-all duration-300">
              {{ pillar.title }}
            </span>
            <p class="type-body-1 text-justify">
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

<style scoped>
@media (min-width: 768px) {
  .skill-wrapper {
    @apply py-3 px-4 -mx-4 rounded-lg transition-colors duration-300;
  }
}
</style>
