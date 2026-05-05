<template>
  <section id="about" class="min-h-screen py-32 md:py-48 px-6 md:px-16 lg:px-24">
    <div class="max-w-6xl mx-auto">
      <!-- Asymmetric two-column layout -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0">
        <!-- Left side - white space with label -->
        <div class="lg:col-span-4 flex flex-col justify-start">
          <span class="text-xs tracking-widest text-muted-foreground uppercase mb-8">About</span>
          <div class="hidden lg:block h-px w-16 bg-border" />
        </div>

        <!-- Right side - content -->
        <div class="lg:col-span-8 lg:pl-12">
          <div class="space-y-8">
            <p class="font-serif text-3xl md:text-4xl lg:text-5xl font-light leading-relaxed text-reveal revealed">
              I believe in the power of restraint—
            </p>
            <p class="font-serif text-3xl md:text-4xl lg:text-5xl font-light leading-relaxed text-reveal revealed delay-200">
              that the most <span class="italic">profound</span> experiences
            </p>
            <p class="font-serif text-3xl md:text-4xl lg:text-5xl font-light leading-relaxed text-reveal revealed delay-400">
              emerge from thoughtful simplicity.
            </p>
          </div>

          <div class="mt-16 md:mt-24 space-y-6 max-w-xl">
            <p class="text-muted-foreground leading-relaxed">
              With over a decade of experience crafting digital products, I specialize in creating interfaces that feel inevitable—where every element serves a purpose and nothing competes for attention.
            </p>
            <p class="text-muted-foreground leading-relaxed">
              My approach combines meticulous attention to typography, generous white space, and considered interactions to create experiences that respect both the content and the user.
            </p>
          </div>

          <!-- Stats -->
          <div class="mt-16 md:mt-24 grid grid-cols-3 gap-8">
            <div>
              <span class="font-serif text-4xl md:text-5xl font-light">10+</span>
              <p class="text-xs tracking-wider text-muted-foreground mt-2 uppercase">Years Experience</p>
            </div>
            <div>
              <span class="font-serif text-4xl md:text-5xl font-light">50+</span>
              <p class="text-xs tracking-wider text-muted-foreground mt-2 uppercase">Projects Completed</p>
            </div>
            <div>
              <span class="font-serif text-4xl md:text-5xl font-light">∞</span>
              <p class="text-xs tracking-wider text-muted-foreground mt-2 uppercase">Pixels Pushed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
