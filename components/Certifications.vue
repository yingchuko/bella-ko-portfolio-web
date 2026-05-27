<template>
  <section id="certifications" class="section">
    <div class="section-container">
      <div class="section-grid lg:gap-0">
        <div class="lg:col-span-5">
          <span class="type-accent">{{ portfolioData.certifications.sectionLabel }}</span>
          <h2 class="type-section mt-6">
            {{ portfolioData.certifications.title }}<br />
            <span class="italic">{{ portfolioData.certifications.titleItalic }}</span>
          </h2>
        </div>

        <div class="lg:col-span-7 lg:pl-12">
          <div class="divide-y divide-border/60">
            <div v-for="(cert, index) in portfolioData.certifications.items" :key="index"
              class="group grid grid-cols-12 py-8 items-center">
              <div class="col-span-10 md:col-span-9 space-y-1">
                <h3 class="type-subheading font-light group-hover:translate-x-1 transition-transform duration-500">
                  {{ cert.name }}
                </h3>
                <p class="type-body-2 normal-case">
                  {{ cert.issuer }}
                </p>
              </div>

              <div class="col-span-2 md:col-span-3 text-right">
                <span class="type-body-2">
                  {{ cert.year }}
                </span>
              </div>
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
