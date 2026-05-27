<template>
  <section id="skills" class="section">
    <div class="section-container">

      <div class="section-grid lg:gap-0">
        <div class="lg:col-span-4">
          <span class="type-accent">{{ portfolioData.skills.sectionLabel }}</span>
          <h2 class="type-section mt-6">
            {{ portfolioData.skills.title }}<br />
            <span class="italic">{{ portfolioData.skills.titleItalic }}</span>
          </h2>
        </div>

        <div class="lg:col-span-8 lg:pl-12 mt-12 lg:mt-0">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
            <div v-for="category in portfolioData.skills.categories" :key="category.id" class="space-y-6">
              <h3 class="type-accent border-b border-border pb-4">
                {{ category.label }}
              </h3>

              <div class="grid grid-cols-2 md:grid-cols-1 gap-x-4 w-full">
                <div v-for="skill in category.items" :key="skill" class="skill-item group py-2.5">
                  <span class="type-body-1 block transition-transform duration-300 md:group-hover:translate-x-2">
                    {{ skill }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-12 pt-12">
        <h3 class="type-accent mb-10 border-b border-border pb-4">
          {{ portfolioData.skills.philosophy.label }}
        </h3>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-10">
          <div v-for="pillar in portfolioData.skills.philosophy.pillars" :key="pillar.title" class="space-y-4">
            <h4 class="type-subheading block">
              {{ pillar.title }}
            </h4>

            <p class="type-body-1 text-justify">
              {{ pillar.description }}
            </p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
const portfolioData = usePortfolioData()
</script>

<style scoped>
.skill-item {
  backface-visibility: hidden;
}
</style>