<script setup lang="ts">
const goToContact = () => navigateTo('/contact')
const callPhone = () => {
  if (import.meta.client) {
    window.location.href = 'tel:+38700000000'
  }
}
</script>

<template>
  <section class="bg-white py-20">
    <div class="container mx-auto px-6 lg:px-12">
      <div
        class="relative overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(39,39,42,0.94)_0%,rgba(24,24,27,1)_100%)] p-8 md:p-16"
      >
        <div class="absolute top-0 right-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl" />

        <div class="relative z-10 flex flex-col items-center text-center lg:flex-row lg:text-left lg:justify-between">
          <div class="max-w-2xl">
            <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Spremni ste za novi projekt?</h2>
            <p class="mt-4 text-lg text-zinc-300">
              Bilo da se radi o velikoj saobraćajnici ili privatnom parkingu, naš tim je spreman pružiti profesionalnu
              uslugu u najkraćem roku.
            </p>
          </div>

          <div class="mt-10 lg:mt-0 flex flex-col sm:flex-row gap-4">
            <Button label="Zatraži ponudu" icon="pi pi-envelope" class="px-8 py-4" @click="goToContact" />
            <Button
              label="Nazovi nas"
              icon="pi pi-phone"
              variant="outlined"
              class="px-8 py-4 !border-white/30 !text-white hover:!bg-white/10"
              @click="callPhone"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
