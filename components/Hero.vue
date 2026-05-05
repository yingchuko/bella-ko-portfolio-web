<template>
  <section class="relative min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 py-32">
    <!-- Three.js placeholder -->
    <div class="canvas-placeholder absolute inset-0 -z-10" />

    <div class="max-w-6xl mx-auto w-full">
      <!-- Navigation -->
      <nav class="absolute top-8 left-6 md:left-16 lg:left-24 right-6 md:right-16 lg:right-24 flex justify-between items-center opacity-0 animate-fade-in">
        <span class="font-serif text-lg tracking-wide">Portfolio</span>
        <div class="hidden md:flex items-center gap-8 text-sm tracking-wider">
          <a href="#about" class="link-underline text-muted-foreground hover:text-foreground transition-colors duration-300">About</a>
          <a href="#experience" class="link-underline text-muted-foreground hover:text-foreground transition-colors duration-300">Experience</a>
          <a href="#projects" class="link-underline text-muted-foreground hover:text-foreground transition-colors duration-300">Projects</a>
          <a href="#contact" class="link-underline text-muted-foreground hover:text-foreground transition-colors duration-300">Contact</a>
        </div>
      </nav>

      <!-- Main headline -->
      <div class="space-y-8">
        <h1 class="font-serif text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-light leading-[0.95] tracking-tight opacity-0 animate-fade-in-up delay-200">
          Crafting<br />
          <span class="italic">Digital</span><br />
          Serenity.
        </h1>

        <p class="max-w-md text-muted-foreground text-sm md:text-base tracking-wider leading-relaxed opacity-0 animate-fade-in-up delay-400">
          BUILDING THOUGHTFUL INTERFACES THAT BLEND<br class="hidden md:block" />
          FORM AND FUNCTION INTO SEAMLESS EXPERIENCES
        </p>

        <!-- Scroll indicator -->
        <div class="pt-16 md:pt-24 opacity-0 animate-fade-in delay-600">
          <a
            href="#about"
            class="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300 group"
          >
            <span class="text-xs tracking-widest uppercase">Scroll</span>
            <div class="w-px h-12 bg-muted group-hover:bg-foreground transition-colors duration-300" />
          </a>
        </div>
      </div>

      <!-- Side decorative text -->
      <div class="hidden lg:block absolute right-24 top-1/2 -translate-y-1/2 opacity-0 animate-fade-in delay-500">
        <span class="text-xs tracking-widest text-muted-foreground uppercase writing-mode-vertical" style="writing-mode: vertical-rl;">
          Est. 2024
        </span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
