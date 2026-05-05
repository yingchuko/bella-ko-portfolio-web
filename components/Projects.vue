<template>
  <section id="projects" class="py-32 md:py-48 px-6 md:px-16 lg:px-24 bg-accent/30">
    <div class="max-w-6xl mx-auto">
      <!-- Section header -->
      <div class="mb-20 md:mb-32 grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div class="lg:col-span-4">
          <span class="text-xs tracking-widest text-muted-foreground uppercase">Selected Work</span>
        </div>
        <div class="lg:col-span-8">
          <h2 class="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
            Projects that speak<br />
            <span class="italic">for themselves</span>.
          </h2>
        </div>
      </div>

      <!-- Project cards -->
      <div class="space-y-24 md:space-y-32">
        <ProjectCard
          v-for="(project, index) in projects"
          :key="index"
          :title="project.title"
          :description="project.description"
          :technologies="project.technologies"
          :year="project.year"
          :index="index"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const projects = [
  {
    title: 'Oevra Design System',
    description: 'A comprehensive design system built on principles of restraint and clarity. Over 200 components crafted for seamless digital experiences.',
    technologies: ['Figma', 'React', 'Storybook', 'TypeScript'],
    year: '2024',
  },
  {
    title: 'Serene Dashboard',
    description: 'An analytics platform that transforms complex data into digestible insights. Focused on reducing cognitive load while maximizing understanding.',
    technologies: ['Vue', 'D3.js', 'Node.js', 'PostgreSQL'],
    year: '2023',
  },
  {
    title: 'Minimal Commerce',
    description: 'E-commerce experience stripped to its essence. Every interaction designed to guide without overwhelming.',
    technologies: ['Nuxt', 'Stripe', 'Sanity', 'Vercel'],
    year: '2023',
  },
  {
    title: 'Type Foundry',
    description: 'A digital home for a contemporary type foundry. Typography as both content and canvas.',
    technologies: ['Next.js', 'Three.js', 'GSAP', 'Prismic'],
    year: '2022',
  },
]
</script>
