<template>
  <section id="experience" class="section bg-accent/30">
    <div class="section-container">
      <header class="section-header">
        <span class="type-accent">{{ portfolioData.experience.sectionLabel }}</span>
        <h2 class="type-section mt-6">
          {{ portfolioData.experience.title }}<br />
          <span class="italic">{{ portfolioData.experience.titleItalic }}</span>
        </h2>
      </header>

      <div class="grid grid-cols-1 md:grid-cols-12 gap-8 mt-12">
        <div
          class="md:col-span-2 grid grid-cols-3 md:flex md:flex-col gap-4 border-b md:border-b-0 md:border-r border-border pb-4 md:pb-0">
          <button v-for="(exp, index) in portfolioData.experience.items" :key="'tab-' + index" type="button"
            class="text-center md:text-left py-2 px-2 transition-colors duration-300"
            :aria-pressed="activeIdx === index" @click="activeIdx = index">
            <span class="type-body-2 block md:pl-4 transition-colors duration-300"
              :class="activeIdx === index ? 'text-foreground' : 'text-muted-foreground/60'">
              {{ exp.year }}
            </span>
          </button>
        </div>

        <div class="md:col-span-10 grid grid-cols-1 items-start">
          <article v-for="(exp, index) in portfolioData.experience.items" :key="index"
            class="group grid grid-cols-1 md:grid-cols-9 gap-6 md:gap-0 -mx-6 px-6 md:-mx-8 md:px-8 transition-all duration-300 col-start-1 row-start-1"
            :class="[
              activeIdx === index
                ? 'opacity-100 pointer-events-auto z-10 visible'
                : 'opacity-0 pointer-events-none z-0 invisible'
            ]">
            <div class="md:col-span-4">
              <h3
                class="type-subheading font-light md:group-hover:translate-x-2 transition-transform duration-500 flex items-center gap-2">
                <a v-if="exp.url" :href="exp.url" target="_blank" rel="noopener noreferrer"
                  class="hover:opacity-70 transition-opacity">
                  {{ exp.company }}
                </a>
                <span v-else>{{ exp.company }}</span>
              </h3>
              <p class="type-body-2 mt-3 text-muted-foreground/80">{{ exp.role }}</p>

              <div class="hidden md:flex flex-wrap gap-2 mt-6 -ml-1">
                <span v-for="skill in exp.skills" :key="skill" class="badge-pill">
                  {{ skill }}
                </span>
              </div>
            </div>

            <div class="md:col-span-5 md:pl-8">
              <ul class="space-y-4">
                <li v-for="(point, i) in exp.description" :key="i" class="type-body-1 text-justify flex gap-3">
                  <span class="shrink-0 mt-3 w-1 h-1 rounded-full bg-muted" />
                  <span>{{ point }}</span>
                </li>
              </ul>

              <div class="flex md:hidden flex-wrap gap-2 mt-8">
                <span v-for="skill in exp.skills" :key="skill" class="badge-pill">
                  {{ skill }}
                </span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const portfolioData = usePortfolioData()
const activeIdx = ref(0)
</script>