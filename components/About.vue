<template>
  <section id="about" class="section min-h-screen">
    <div class="section-container">
      <div class="section-grid">
        <div class="section-grid-sidebar">
          <span class="type-accent mb-8 block">{{ portfolioData.about.sectionLabel }}</span>
          <div class="hidden lg:block h-px w-10 bg-muted" />
        </div>

        <div class="section-grid-content">
          <p v-for="(line, lineIndex) in portfolioData.about.manifesto" :key="lineIndex" class="type-section"
            :class="manifestoDelayClasses[lineIndex]">
            <template v-for="(segment, segIndex) in line" :key="segIndex">
              <span v-if="segment.italic" class="italic">{{ segment.text }}</span>
              <template v-else>{{ segment.text }}</template>
            </template>
          </p>

          <div class="mt-16 space-y-6 max-w-xl">
            <p v-for="(paragraph, pIndex) in portfolioData.about.body" :key="pIndex" class="type-body-1 text-justify">
              {{ paragraph }}
            </p>
          </div>

          <div class="mt-16 grid grid-cols-3 gap-8">
            <div v-for="(stat, sIndex) in portfolioData.about.stats" :key="sIndex">
              <span class="type-section font-light block">{{ stat.value }}</span>
              <p class="type-body-2 mt-2 tracking-wider">{{ stat.label }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { portfolioData } from '~/data/portfolio'

const manifestoDelayClasses = ['', 'delay-200', 'delay-400']
</script>
