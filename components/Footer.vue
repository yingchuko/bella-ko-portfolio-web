<template>
  <footer id="contact" class="py-32 md:py-48 px-6 md:px-16 lg:px-24 bg-foreground text-background">
    <div class="max-w-6xl mx-auto">
      <!-- Main contact section -->
      <div class="mb-32 md:mb-48">
        <span class="text-xs tracking-widest text-background/60 uppercase">{{ portfolioData.footer.sectionLabel
        }}</span>
        <div class="mt-8 md:mt-12">
          <a :href="portfolioData.footer.email.mailto" class="group inline-block">
            <span
              class="font-serif text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-none block group-hover:translate-x-4 transition-transform duration-500">
              {{ portfolioData.footer.email.displayLine1 }}
            </span>
            <span
              class="font-serif text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-light italic leading-none block group-hover:translate-x-4 transition-transform duration-500 delay-75">
              {{ portfolioData.footer.email.displayLine2 }}
            </span>
          </a>
        </div>
        <p class="mt-8 text-background/60 max-w-md leading-relaxed">
          {{ portfolioData.footer.intro }}
        </p>
      </div>

      <!-- Bottom section -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-12 pt-12 border-t border-background/20">
        <!-- Live clock -->
        <div class="md:col-span-4">
          <span class="text-xs tracking-widest text-background/60 uppercase">{{ portfolioData.footer.localTimeLabel
          }}</span>
          <div class="mt-3 font-mono text-2xl md:text-3xl tracking-wider">
            {{ currentTime }}
          </div>
          <span class="text-xs text-background/40 mt-1 block">{{ timezone }}</span>
        </div>

        <!-- Social links -->
        <div class="md:col-span-4">
          <span class="text-xs tracking-widest text-background/60 uppercase">{{ portfolioData.footer.connectLabel
          }}</span>
          <div class="mt-3 space-y-2">
            <a v-for="link in portfolioData.footer.socialLinks" :key="link.name" :href="link.url" target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-2 text-background/80 hover:text-background transition-colors duration-300 group">
              <span>{{ link.name }}</span>
              <ArrowUpRight class="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </div>
        </div>

        <!-- Navigation -->
        <div class="md:col-span-4">
          <span class="text-xs tracking-widest text-background/60 uppercase">{{ portfolioData.footer.navigateLabel
          }}</span>
          <div class="mt-3 space-y-2">
            <a v-for="nav in portfolioData.footer.nav" :key="nav.href" :href="nav.href"
              class="block text-background/80 hover:text-background transition-colors duration-300">
              {{ nav.label }}
            </a>
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div class="mt-24 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <span class="text-xs text-background/40">
          © {{ currentYear }} {{ portfolioData.footer.copyrightName }}. All rights reserved.
        </span>
        <span class="text-xs text-background/40 tracking-wider">
          {{ portfolioData.footer.tagline }}
        </span>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'
import { portfolioData } from '~/data/portfolio'

const currentTime = ref('')
const timezone = ref('')
const currentYear = new Date().getFullYear()

const updateTime = () => {
  const now = new Date()
  currentTime.value = now.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  })
  timezone.value = Intl.DateTimeFormat().resolvedOptions().timeZone
}

onMounted(() => {
  updateTime()
  setInterval(updateTime, 1000)
})
</script>
