<template>
  <section class="section section--inset relative min-h-screen flex flex-col justify-center">
    <div class="section-container">
      <div class="space-y-8">
        <h1 class="type-hero opacity-0 animate-fade-in-up delay-200 leading-normal">
          <template v-for="(line, index) in portfolioData.hero.headlineLines" :key="index">
            <span :class="{ italic: line.italic }">{{ line.text }}</span>
            <br v-if="index < portfolioData.hero.headlineLines.length - 1" />
          </template>
        </h1>

        <p class="type-body-1 max-w-lg leading-4 opacity-0 animate-fade-in-up delay-400 leading-relaxed">
          {{ portfolioData.hero.tagline.line1 }}<br />
          {{ portfolioData.hero.tagline.line2 }}
        </p>

        <div class="pt-16 md:pt-12 opacity-0 animate-fade-in delay-600">
          <a href="#about" class="inline-flex flex-col items-center gap-4 group">
            <span class="type-accent group-hover:text-foreground transition-colors duration-300">
              {{ portfolioData.hero.scrollLabel }}
            </span>
            <div class="w-px h-12 bg-muted group-hover:bg-foreground transition-colors duration-300" />
          </a>
        </div>
      </div>

      <div class="hidden lg:block absolute right-20 top-1/2 -translate-y-1/2 opacity-0 animate-fade-in delay-500">
        <span class="type-accent type-vertical">
          {{ portfolioData.hero.established }}
        </span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const portfolioData = usePortfolioData()
</script>
