<template>
  <main class="min-h-screen">
    <Hero />
    <About />
    <Experience />
    <Skills />
    <Projects />
    <Certifications />
    <Footer />
  </main>
</template>

<script setup lang="ts">
import { portfolioData } from '~/data/portfolio'

useHead({
  title: portfolioData.seo.title,
  meta: [
    {
      name: 'description',
      content: portfolioData.seo.description,
    },
  ],
})
</script>
