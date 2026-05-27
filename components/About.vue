<template>
  <section id="about" class="section min-h-screen">
    <div class="section-container">
      <div class="section-grid">
        <div class="section-grid-sidebar">
          <span class="type-accent mb-8 block">{{ portfolioData.about.sectionLabel }}</span>
          <div class="hidden lg:block h-px w-10 bg-muted" />
        </div>

        <div class="section-grid-content space-y-4">
          <p v-for="(line, lineIndex) in portfolioData.about.manifesto" :key="lineIndex" class="type-section">
            <template v-for="(segment, segIndex) in line" :key="segIndex">
              <span v-if="segment.italic" class="italic">{{ segment.text }}</span>
              <template v-else>{{ segment.text }}</template>
            </template>
          </p>

          <div class="pt-10 space-y-6 max-w-xl">
            <p v-for="(paragraph, pIndex) in portfolioData.about.body" :key="pIndex" class="type-body-1 text-justify">
              {{ paragraph }}
            </p>
          </div>

          <div class="pt-10 grid grid-cols-3 gap-8">
            <div v-for="(stat, sIndex) in portfolioData.about.stats" :key="sIndex">
              <span class="type-section font-light block">{{ stat.value }}</span>
              <p class="type-body-2 mt-2">{{ stat.label }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const portfolioData = usePortfolioData()
</script>
