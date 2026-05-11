<template>
  <section class="relative min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 py-32">
    <!-- Three.js placeholder -->
    <div class="canvas-placeholder absolute inset-0 -z-10" />

    <div class="max-w-6xl mx-auto w-full">
      <!-- Navigation -->
      <nav
        class="absolute top-8 left-6 md:left-16 lg:left-24 right-6 md:right-16 lg:right-24 flex justify-between items-center opacity-0 animate-fade-in">
        <span class="font-serif text-lg tracking-wide">{{ portfolioData.site.brand }}</span>
        <div class="hidden md:flex items-center gap-8 text-sm tracking-wider">
          <a v-for="link in portfolioData.site.nav" :key="link.href" :href="link.href"
            class="link-underline text-muted-foreground hover:text-foreground transition-colors duration-300">
            {{ link.label }}
          </a>
        </div>
      </nav>

      <!-- Main headline -->
      <div class="space-y-8">
        <h1
          class="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light !leading-relaxed opacity-0 animate-fade-in-up delay-200">
          <template v-for="(line, index) in portfolioData.hero.headlineLines" :key="index">
            <span :class="{ italic: line.italic }">{{ line.text }}</span>
            <br v-if="index < portfolioData.hero.headlineLines.length - 1" />
          </template>
        </h1>

        <p
          class="max-w-lg text-muted-foreground text-sm md:text-base tracking-wide opacity-0 animate-fade-in-up delay-400">
          {{ portfolioData.hero.tagline.line1 }}<br class="hidden md:block" />
          {{ portfolioData.hero.tagline.line2 }}
        </p>

        <!-- Scroll indicator -->
        <div class="pt-16 md:pt-24 opacity-0 animate-fade-in delay-600">
          <a href="#about"
            class="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300 group">
            <span class="text-xs tracking-widest uppercase">{{ portfolioData.hero.scrollLabel }}</span>
            <div class="w-px h-12 bg-muted group-hover:bg-foreground transition-colors duration-300" />
          </a>
        </div>
      </div>

      <!-- Side decorative text -->
      <div class="hidden lg:block absolute right-24 top-1/2 -translate-y-1/2 opacity-0 animate-fade-in delay-500">
        <span class="text-xs tracking-widest text-muted-foreground uppercase writing-mode-vertical"
          style="writing-mode: vertical-rl;">
          {{ portfolioData.hero.established }}
        </span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { portfolioData } from '~/data/portfolio'
</script>
