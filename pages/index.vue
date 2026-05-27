<template>
  <main class="min-h-screen">
    <Navigation />
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
const portfolioData = usePortfolioData()

useHead({
  title: () => portfolioData.value.seo.title,
  meta: [
    {
      name: 'description',
      content: () => portfolioData.value.seo.description,
    },
  ],
})
</script>
