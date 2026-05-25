<template>
  <nav
    class="fixed top-0 left-0 z-50 w-full bg-white/20 backdrop-blur-md backdrop-saturate-150 opacity-0 animate-fade-in transition-all duration-300"
    :class="{ 'shadow-[0_4px_30px_rgba(0,0,0,0.03)]': !isOpen }">
    <div class="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4 lg:px-20 lg:py-5 relative z-50">

      <span class="type-subheading font-light tracking-wide">
        {{ portfolioData.site.brand }}
      </span>

      <div class="hidden items-center gap-8 lg:flex">
        <a v-for="link in portfolioData.site.nav" :key="link.href" :href="link.href"
          class="type-body-2 link-underline hover:text-foreground tracking-wider transition-colors duration-300">
          {{ link.label }}
        </a>
      </div>

      <button @click="isOpen = !isOpen"
        class="flex flex-col justify-center items-center w-8 h-8 gap-1.5 lg:hidden focus:outline-none"
        aria-label="Toggle Menu">
        <span class="w-6 h-0.5 bg-current transition-all duration-300 ease-in-out"
          :class="{ 'rotate-45 translate-y-2': isOpen }"></span>
        <span class="w-6 h-0.5 bg-current transition-all duration-300 ease-in-out"
          :class="{ 'opacity-0': isOpen }"></span>
        <span class="w-6 h-0.5 bg-current transition-all duration-300 ease-in-out"
          :class="{ '-rotate-45 -translate-y-2': isOpen }"></span>
      </button>

    </div>

    <div
      class="fixed inset-0 h-screen w-screen bg-background flex flex-col justify-center items-center gap-8 transition-all duration-300 ease-in-out lg:hidden z-40"
      :class="isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'">
      <a v-for="link in portfolioData.site.nav" :key="link.href" :href="link.href" @click="isOpen = false"
        class="type-subheading text-xl font-light hover:text-neutral-500 transition-colors duration-300">
        {{ link.label }}
      </a>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { portfolioData } from '~/data/portfolio'

const isOpen = ref(false)
watch(isOpen, (newValue) => {
  if (process.client) {
    document.body.style.overflow = newValue ? 'hidden' : ''
  }
})
</script>