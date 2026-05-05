<template>
  <main class="min-h-screen">
    <Hero />
    <About />
    <Experience />
    <Skills />
    <Projects />
    <Footer />
  </main>
</template>

<script setup lang="ts">
useHead({
  title: 'Digital Zen | Crafting Digital Serenity',
  meta: [
    {
      name: 'description',
      content: 'A minimalist portfolio showcasing thoughtful digital experiences.',
    },
  ],
})
</script>
