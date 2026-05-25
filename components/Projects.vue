<template>
  <section id="projects" class="section relative bg-accent/30 lg:overflow-hidden">
    <div class="section-container mb-10 md:mb-20">
      <span class="type-accent">{{ portfolioData.projects.sectionLabel }}</span>
      <h2 class="type-section mt-6">
        {{ portfolioData.projects.title }}<br />
        <span class="italic">{{ portfolioData.projects.titleItalic }}</span>
      </h2>
    </div>

    <div ref="trackRef"
      class="md:px-12 lg:px-20 grid grid-cols-1 lg:flex lg:flex-nowrap lg:items-start lg:h-screen lg:absolute lg:top-0 lg:left-0 lg:gap-24 lg:pt-[50vh]">
      <article v-for="(project, index) in projects" :key="index"
        class="group relative flex flex-col transition-all duration-700 py-10 lg:py-4 flex-shrink-0 w-full lg:w-[38vw] xl:w-[28vw] max-lg:border-b max-lg:last:border-b-0 border-neutral-200">
        <div class="lg:border-l lg:pl-10 transition-colors duration-500">
          <div class="space-y-4">
            <div class="flex items-center gap-4 type-accent">
              <span>{{ padIndex(index) }}</span>
              <span class="w-8 h-[1px] bg-border"></span>
              <span>{{ project.technologies[0] }}</span>
              <div
                class="hidden lg:flex items-center gap-4 transition-all duration-700 animate-explore group-hover:opacity-0 group-hover:-translate-x-6">
                <span class="w-8 h-[1px] bg-border"></span>
                <span>Explore</span>
              </div>
            </div>
            <h3
              class="type-subheading transition-transform duration-500 origin-left lg:group-hover:[transform:skewX(-8deg)_translateX(6px)]">
              {{ project.title }}
            </h3>
            <p class="type-body-2 italic max-w-[90%]">{{ project.punchline }}</p>
          </div>

          <div
            class="grid transition-all duration-700 mt-6 max-lg:grid-rows-[1fr] max-lg:opacity-100 lg:grid-rows-[0fr] lg:opacity-0 lg:group-hover:grid-rows-[1fr] lg:group-hover:opacity-100 lg:group-hover:mt-4">
            <div class="overflow-hidden">
              <p class="type-body-1 mb-6 text-justify">{{ project.description }}</p>
              <div class="flex flex-wrap items-center gap-y-3 type-accent normal-case tracking-[0.15em]">
                <template v-for="(tech, tIndex) in project.technologies" :key="tech">
                  <span>{{ tech }}</span>
                  <span v-if="tIndex < project.technologies.length - 1" class="mx-2 opacity-30">/</span>
                </template>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { portfolioData } from '~/data/portfolio'

const projects = portfolioData.projects.items
const trackRef = ref<HTMLElement | null>(null)
let mm: gsap.MatchMedia | null = null

const padIndex = (i: number) => String(i + 1).padStart(2, '0')

onMounted(async () => {
  if (!import.meta.client) return
  gsap.registerPlugin(ScrollTrigger)
  await nextTick()

  mm = gsap.matchMedia()
  mm.add('(min-width: 1024px)', () => {
    const track = trackRef.value;
    if (!track) return;

    const scrollDist = track.scrollWidth - window.innerWidth * 1.02;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#projects',
        start: 'top top',
        end: () => `+=${scrollDist + window.innerHeight * 0.5}`,
        pin: true,
        scrub: 1.1,
        invalidateOnRefresh: true,
      }
    });

    tl.to(track, { x: -scrollDist, ease: 'none' }, 0.02)
      .to({}, { duration: 0.08 });

    return () => tl.scrollTrigger?.kill();
  });
})

onUnmounted(() => mm?.revert())
</script>

<style scoped>
@media (min-width: 1024px) {
  #projects {
    min-height: 100vh;
  }
}

h3,
p,
span,
.animate-explore {
  transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes explore-pulse {
  0% {
    opacity: 0.2;
    transform: translateX(0) scale(0.95);
  }

  50% {
    opacity: 1;
    transform: translateX(12px) scale(1);
  }

  100% {
    opacity: 0.2;
    transform: translateX(0) scale(0.95);
  }
}

.animate-explore {
  animation: explore-pulse 2.4s infinite cubic-bezier(0.45, 0, 0.55, 1);
  will-change: opacity, transform;
}

.group:hover .animate-explore {
  animation: none !important;
}

#projects {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

#projects::-webkit-scrollbar {
  display: none;
}
</style>
