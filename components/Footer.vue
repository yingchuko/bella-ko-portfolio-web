<template>
  <footer id="contact" class="section section--inset bg-foreground text-background">
    <div class="section-container">
      <div class="mb-24">
        <span class="type-accent text-background/60">{{ portfolioData.footer.sectionLabel }}</span>

        <div class="mt-8 md:mt-12 flex flex-col md:flex-row md:items-start justify-between gap-8">
          <a :href="mailtoHref" class="group inline-block">
            <span
              class="type-hero block group-hover:translate-x-4 transition-transform duration-500 text-background"
            >
              {{ portfolioData.footer.email.mail }}
            </span>
          </a>

          <div class="flex flex-col gap-4 self-start md:self-auto items-start md:items-end text-left md:text-right">
            <a
              v-for="link in portfolioData.footer.socialLinks"
              :key="link.name"
              :href="link.url"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-2 type-body-1 text-background/80 hover:text-background transition-colors duration-300 group"
            >
              <span>{{ link.name }}</span>
              <ArrowUpRight
                class="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>

        <p class="type-body-1 mt-8 text-background/60 max-w-md">
          {{ portfolioData.footer.intro }}
        </p>
      </div>

      <div
        class="pt-12 border-t border-background/20 flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
      >
        <span class="type-body-2 text-background/40">
          © {{ currentYear }} {{ portfolioData.footer.copyrightName }}. All rights reserved.
        </span>
        <span class="type-body-2 text-background/40">
          {{ portfolioData.footer.tagline }}
        </span>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'

const portfolioData = usePortfolioData()
const currentYear = new Date().getFullYear()

const mailtoHref = computed(() => {
  const email = portfolioData.value.footer.email.mail
  return email ? `mailto:${email}` : '#'
})
</script>
