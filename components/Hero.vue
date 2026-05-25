<template>
  <section class="section relative min-h-screen flex flex-col justify-center !py-32 md:!py-40">
    <div class="canvas-placeholder absolute inset-0 -z-10" />

    <div class="section-container">

      <div class="space-y-8">
        <h1 class="type-hero opacity-0 animate-fade-in-up delay-200">
          <template v-for="(line, index) in portfolioData.hero.headlineLines" :key="index">
            <span :class="{ 'italic': line.italic }">{{ line.text }}</span>
            <br v-if="index < portfolioData.hero.headlineLines.length - 1" />
          </template>
        </h1>

        <p class="type-body-1 max-w-lg tracking-wide opacity-0 animate-fade-in-up delay-400">
          {{ portfolioData.hero.tagline.line1 }}<br />
          {{ portfolioData.hero.tagline.line2 }}
        </p>

        <div class="pt-16 md:pt-12 opacity-0 animate-fade-in delay-600">
          <a href="#about" class="inline-flex flex-col items-center gap-4 group">
            <span class="type-accent group-hover:text-foreground transition-colors duration-300">{{
              portfolioData.hero.scrollLabel
            }}</span>
            <div class="w-px h-12 bg-muted group-hover:bg-foreground transition-colors duration-300" />
          </a>
        </div>
      </div>

      <div class="hidden lg:block absolute right-20 top-1/2 -translate-y-1/2 opacity-0 animate-fade-in delay-500">
        <span class="type-accent writing-mode-vertical" style="writing-mode: vertical-rl;">
          {{ portfolioData.hero.established }}
        </span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { portfolioData } from '~/data/portfolio'
</script>
