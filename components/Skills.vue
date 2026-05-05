<template>
  <section id="skills" class="py-32 md:py-48 px-6 md:px-16 lg:px-24">
    <div class="max-w-6xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0">
        <!-- Left side -->
        <div class="lg:col-span-4">
          <span class="text-xs tracking-widest text-muted-foreground uppercase">Expertise</span>
          <h2 class="font-serif text-4xl md:text-5xl font-light mt-6 leading-tight">
            Tools of<br />
            the <span class="italic">craft</span>.
          </h2>
        </div>

        <!-- Right side - Skills list -->
        <div class="lg:col-span-8 lg:pl-12">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-x-16">
            <!-- Design Skills -->
            <div class="space-y-1">
              <h3 class="text-xs tracking-widest text-muted-foreground uppercase mb-6">Design</h3>
              <SkillItem
                v-for="skill in designSkills"
                :key="skill"
                :name="skill"
              />
            </div>

            <!-- Development Skills -->
            <div class="space-y-1 mt-12 md:mt-0">
              <h3 class="text-xs tracking-widest text-muted-foreground uppercase mb-6">Development</h3>
              <SkillItem
                v-for="skill in devSkills"
                :key="skill"
                :name="skill"
              />
            </div>
          </div>

          <!-- Additional skills -->
          <div class="mt-16 pt-16 border-t border-border">
            <h3 class="text-xs tracking-widest text-muted-foreground uppercase mb-6">Philosophy</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div class="space-y-3">
                <span class="font-serif text-xl">Minimalism</span>
                <p class="text-sm text-muted-foreground leading-relaxed">
                  Reducing to the essential. Every element earns its place.
                </p>
              </div>
              <div class="space-y-3">
                <span class="font-serif text-xl">Precision</span>
                <p class="text-sm text-muted-foreground leading-relaxed">
                  Obsessing over details that most won&apos;t notice, but all will feel.
                </p>
              </div>
              <div class="space-y-3">
                <span class="font-serif text-xl">Longevity</span>
                <p class="text-sm text-muted-foreground leading-relaxed">
                  Creating work that ages gracefully, beyond trends.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const designSkills = [
  'Interface Design',
  'Design Systems',
  'Typography',
  'Motion Design',
  'Brand Identity',
  'Art Direction',
]

const devSkills = [
  'Vue / Nuxt',
  'React / Next.js',
  'TypeScript',
  'Tailwind CSS',
  'Three.js / WebGL',
  'GSAP Animations',
]
</script>
