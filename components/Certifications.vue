<template>
  <section id="certifications" class="py-24 md:py-32 px-6 md:px-16 lg:px-24">
    <div class="max-w-6xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0">
        <div class="lg:col-span-6">
          <span class="text-xs tracking-widest text-muted-foreground uppercase">{{
            portfolioData.certifications.sectionLabel }}</span>
          <h2 class="font-serif text-3xl md:text-4xl lg:text-5xl font-light mt-6 !leading-tight">
            {{ portfolioData.certifications.titleBefore }}<br />
            <span class="italic">
              {{ portfolioData.certifications.titleItalic }}
            </span>
          </h2>
        </div>

        <div class="lg:col-span-6 lg:pl-12">
          <div class="divide-y divide-border/60">
            <div v-for="(cert, index) in portfolioData.certifications.items" :key="index"
              class="group grid grid-cols-12 py-8 items-center">
              <div class="col-span-10 md:col-span-9 space-y-1">
                <h3
                  class="text-lg md:text-xl font-serif font-light group-hover:translate-x-1 transition-transform duration-500">
                  {{ cert.name }}
                </h3>
                <p class="text-xs tracking-widest text-muted-foreground uppercase">
                  {{ cert.issuer }}
                </p>
              </div>

              <div class="col-span-2 md:col-span-3 text-right">
                <span class="text-sm font-light text-muted-foreground/60 tracking-tighter">
                  {{ cert.year }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { portfolioData } from '~/data/portfolio'
</script>

<style scoped>
/* 保持與整體風格一致的細微漸變 */
#certifications {
  background-color: transparent;
}
</style>