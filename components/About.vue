<template>
  <section id="about" class="min-h-screen py-32 md:py-48 px-6 md:px-16 lg:px-24">
    <div class="max-w-6xl mx-auto">
      <!-- Asymmetric two-column layout -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0">
        <!-- Left side - white space with label -->
        <div class="lg:col-span-4 flex flex-col justify-start">
          <span class="text-xs tracking-widest text-muted-foreground uppercase mb-8">{{ portfolioData.about.sectionLabel
          }}</span>
          <div class="hidden lg:block h-px w-16 bg-border" />
        </div>

        <!-- Right side - content -->
        <div class="lg:col-span-8 lg:pl-12">
          <div class="md:space-y-6">
            <p v-for="(line, lineIndex) in portfolioData.about.manifesto" :key="lineIndex"
              class="font-serif text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-reveal revealed"
              :class="manifestoDelayClasses[lineIndex]">
              <template v-for="(segment, segIndex) in line" :key="segIndex">
                <span v-if="segment.italic" class="italic">{{ segment.text }}</span>
                <template v-else>{{ segment.text }}</template>
              </template>
            </p>
          </div>

          <div class="mt-16 md:mt-20 space-y-6 max-w-xl">
            <p v-for="(paragraph, pIndex) in portfolioData.about.body" :key="pIndex"
              class="text-muted-foreground leading-relaxed">
              {{ paragraph }}
            </p>
          </div>

          <!-- Stats -->
          <div class="mt-16 md:mt-24 grid grid-cols-3 gap-8">
            <div v-for="(stat, sIndex) in portfolioData.about.stats" :key="sIndex">
              <span class="font-serif text-4xl md:text-5xl font-light">{{ stat.value }}</span>
              <p class="text-xs tracking-wider text-muted-foreground mt-2 uppercase">{{ stat.label }}</p>
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
