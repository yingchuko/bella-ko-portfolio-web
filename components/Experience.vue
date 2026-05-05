<template>
  <section id="experience" class="py-32 md:py-48 px-6 md:px-16 lg:px-24 bg-accent/30">
    <div class="max-w-6xl mx-auto">
      <!-- Section header -->
      <div class="mb-20 md:mb-32">
        <span class="text-xs tracking-widest text-muted-foreground uppercase">Experience</span>
        <h2 class="font-serif text-4xl md:text-5xl lg:text-6xl font-light mt-6">
          A journey through<br />
          <span class="italic">meaningful</span> work.
        </h2>
      </div>

      <!-- Timeline -->
      <div class="space-y-0">
        <ExperienceItem
          v-for="(exp, index) in experiences"
          :key="index"
          :year="exp.year"
          :company="exp.company"
          :role="exp.role"
          :description="exp.description"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const experiences = [
  {
    year: '2024 — Present',
    company: 'Oevra Studio',
    role: 'Founder & Lead Designer',
    description: 'Leading a boutique design studio focused on creating serene digital experiences for discerning brands.',
  },
  {
    year: '2021 — 2024',
    company: 'Linear',
    role: 'Senior Product Designer',
    description: 'Shaping the visual language and interaction patterns for the modern project management tool.',
  },
  {
    year: '2018 — 2021',
    company: 'Vercel',
    role: 'Design Engineer',
    description: 'Bridging design and engineering to create seamless developer experiences and documentation.',
  },
  {
    year: '2015 — 2018',
    company: 'Stripe',
    role: 'Product Designer',
    description: 'Designing payment interfaces that made complex financial operations feel simple and trustworthy.',
  },
]
</script>
