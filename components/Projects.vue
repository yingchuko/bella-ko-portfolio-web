<template>
  <section id="projects" class="section relative bg-accent/30 lg:overflow-hidden">
    <div class="section-container mb-10 md:mb-20">
      <span class="type-accent">{{ portfolioData.projects.sectionLabel }}</span>
      <h2 class="type-section mt-6">
        {{ portfolioData.projects.title }}<br />
        <span class="italic">{{ portfolioData.projects.titleItalic }}</span>
      </h2>
    </div>

    <div ref="trackRef" @scroll="handleMobileScroll"
      class="max-lg:flex max-lg:overflow-x-auto max-lg:snap-x max-lg:snap-mandatory max-lg:px-6 md:max-lg:px-12 max-lg:gap-8 max-lg:pb-4 grid grid-cols-1 lg:flex lg:flex-nowrap lg:items-start lg:h-screen lg:absolute lg:top-0 lg:left-0 lg:pl-20 lg:gap-24 lg:pt-[48vh] scrollbar-hide">
      <div v-for="groupIndex in projectGroupCount" :key="groupIndex"
        class="max-lg:grid max-lg:grid-rows-2 max-lg:gap-y-12 max-lg:flex-shrink-0 max-lg:w-[85vw] md:max-lg:w-[45vw] max-lg:snap-start flex flex-col lg:contents">
        <article v-for="(project, index) in projectsForGroup(groupIndex)" :key="`${groupIndex}-${index}`"
          class="group relative flex flex-col transition-all duration-700 lg:py-4 flex-shrink-0 w-full lg:w-[38vw] xl:w-[28vw]">
          <div class="lg:border-l lg:pl-10 transition-colors duration-500">
            <div class="space-y-4">
              <div class="hidden lg:flex items-center gap-4 type-accent opacity-40 project-explore">
                <span>Explore</span>
              </div>
              <component :is="project.url ? 'a' : 'h3'" :href="project.url" :target="project.url ? '_blank' : undefined"
                :rel="project.url ? 'noopener noreferrer' : undefined"
                class="type-subheading inline-block transition-transform duration-500 origin-left lg:group-hover:[transform:skewX(-8deg)_translateX(6px)]">
                {{ project.title }} <span v-if="project.url">↗</span>
              </component>
              <div class="flex flex-wrap items-center gap-y-3 type-accent opacity-60">
                <template v-for="(tech, tIndex) in project.technologies" :key="tech">
                  <span>{{ tech }}</span>
                  <span v-if="tIndex < project.technologies.length - 1" class="mx-2 opacity-30">/</span>
                </template>
              </div>
            </div>

            <div
              class="grid transition-all duration-700 mt-6 max-lg:grid-rows-[1fr] max-lg:opacity-100 lg:grid-rows-[0fr] lg:opacity-0 lg:group-hover:grid-rows-[1fr] lg:group-hover:opacity-100 lg:group-hover:mt-4">
              <div class="overflow-hidden">
                <p class="type-body-1 mb-6 text-justify">{{ project.description }}</p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>

    <div class="max-lg:flex hidden flex-col items-center mt-8 mb-10 px-6 md:px-12">
      <p class="type-accent mb-3">
        Swipe to explore
      </p>
      <div class="w-32 h-px bg-accent relative overflow-hidden">
        <div ref="mobileProgressBarRef"
          class="absolute top-0 left-0 w-full h-full bg-muted-foreground origin-left scale-x-0 transition-transform duration-75 ease-out" />
      </div>
    </div>

    <div
      class="hidden lg:flex absolute bottom-12 left-0 w-full px-12 lg:px-20 flex-row items-center gap-6 z-10 pointer-events-none">
      <div class="type-accent flex-shrink-0">
        <span>KEEP SCROLL</span>
      </div>
      <div class="flex-1 h-px bg-accent relative overflow-hidden">
        <div ref="progressBarRef"
          class="absolute top-0 left-0 w-full h-full bg-muted-foreground origin-left scale-x-0" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'
import type { ProjectEntry } from '~/data/portfolio'

const portfolioData = usePortfolioData()
const projects = computed(() => portfolioData.value.projects.items)

const trackRef = ref<HTMLElement | null>(null)
const progressBarRef = ref<HTMLElement | null>(null)
const mobileProgressBarRef = ref<HTMLElement | null>(null)

const projectGroupCount = computed(() => Math.ceil(projects.value.length / 2))

function projectsForGroup(groupIndex: number): ProjectEntry[] {
  const start = (groupIndex - 1) * 2
  return projects.value.slice(start, start + 2)
}

function handleMobileScroll(e: Event) {
  if (window.innerWidth >= 1024) return

  const target = e.target as HTMLElement
  if (!target || !mobileProgressBarRef.value) return

  const maxScroll = target.scrollWidth - target.clientWidth
  if (maxScroll <= 0) return

  const progress = target.scrollLeft / maxScroll
  mobileProgressBarRef.value.style.transform = `scaleX(${progress})`
}

let revertScrollMedia: (() => void) | null = null

onMounted(async () => {
  if (!import.meta.client) return

  const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
    import('gsap'),
    import('gsap/ScrollTrigger'),
  ])

  gsap.registerPlugin(ScrollTrigger)
  await nextTick()

  const mm = gsap.matchMedia()

  mm.add('(min-width: 1024px)', () => {
    const track = trackRef.value
    if (!track) return

    const scrollDist = track.scrollWidth - window.innerWidth + 80
    const holdDistance = window.innerHeight * 0.6

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#projects',
        start: 'top top',
        end: () => `+=${scrollDist + window.innerHeight * 0.5 + holdDistance}`,
        pin: true,
        scrub: 1.1,
        invalidateOnRefresh: true,
      },
    })

    tl.to(track, { x: -scrollDist, ease: 'none' }, 0.02)

    if (progressBarRef.value) {
      tl.to(progressBarRef.value, { scaleX: 1, ease: 'none' }, 0.02)
    }

    tl.to({}, { duration: 0.1 })
  })

  revertScrollMedia = () => mm.revert()
})

onUnmounted(() => {
  revertScrollMedia?.()
})
</script>

<style scoped>
@media (min-width: 1024px) {
  #projects {
    min-height: 100vh;
  }
}

@keyframes project-explore-pulse {

  0%,
  100% {
    opacity: 0.2;
    transform: translateX(0) scale(0.95);
  }

  50% {
    opacity: 1;
    transform: translateX(12px) scale(1);
  }
}

.project-explore {
  animation: project-explore-pulse 2.4s infinite cubic-bezier(0.45, 0, 0.55, 1);
  will-change: opacity, transform;
}

.group:hover .project-explore {
  animation: none;
  opacity: 0;
}

.scrollbar-hide {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>