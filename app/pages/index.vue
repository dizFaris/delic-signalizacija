<script setup lang="ts">
import { ref } from 'vue'

const goToContact = () => navigateTo('/contact')
const goToServices = () => navigateTo('/services')

const stats = [
  { value: '100+', label: 'Završenih projekata' },
  { value: '15+', label: 'Godina iskustva' },
  { value: '24/7', label: 'Podrška na terenu' },
  { value: '100%', label: 'Poštovanje rokova' }
]

const sectors = [
  {
    number: '01.',
    title: 'Javne saobraćajnice',
    description: 'Magistralni i lokalni putevi, gradske ulice'
  },
  {
    number: '02.',
    title: 'Industrijske zone',
    description: 'Fabrički krugovi, skladišta i logistički centri'
  },
  {
    number: '03.',
    title: 'Parking prostori',
    description: 'Garaže, otvoreni parkinzi, tržni centri'
  },
  {
    number: '04.',
    title: 'Specijalne namjene',
    description: 'Aerodromske piste, sportski tereni i igrališta'
  }
]

const servicesRef = ref<HTMLElement | null>(null)

const scrollToServices = () => {
  console.log('Scrolling to services section')
  servicesRef.value?.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
}
</script>

<template>
  <div class="flex flex-col">
    <section class="h-[calc(100vh-var(--app-navbar-height))] relative flex flex-col">
      <video
        class="absolute inset-0 h-full w-full object-cover"
        autoplay
        muted
        loop
        playsinline
        preload="auto"
        poster="/favicon.ico"
        aria-hidden="true"
      >
        <source src="https://roadgrip.co.uk/wp-content/uploads/roadgrip_home_video_2018.mp4" type="video/mp4" />
      </video>

      <div class="absolute inset-0 bg-black/50" />
      <div
        class="absolute inset-0 bg-[linear-gradient(120deg,rgba(0,0,0,0.78)_0%,rgba(0,0,0,0.55)_38%,rgba(252,150,25,0.18)_100%)]"
      />

      <div class="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        <Tag value="DELIĆ SIGNALIZACIJA" rounded class="mb-8 tracking-[0.2em] uppercase text-xs" />

        <div class="max-w-4xl">
          <h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl text-balance">
            Horizontalna i vertikalna <br class="hidden md:block" />
            <span class="text-orange-400">saobraćajna signalizacija</span>
          </h1>

          <p class="mt-8 mx-auto max-w-xl text-lg sm:text-xl leading-relaxed text-zinc-300">
            Vršimo usluge ocrtavanja signalizacije, montažu znakova, te ugradnju opreme za smirivanje saobraćaja.
          </p>
        </div>

        <div class="mt-10 flex flex-col sm:flex-row items-center gap-4">
          <Button label="Kontakt" class="w-full sm:w-auto px-8" @click="goToContact" />
          <Button label="Pogledaj usluge" variant="outlined" class="w-full sm:w-auto px-8" @click="goToServices" />
        </div>
      </div>

      <div
        class="relative z-20 w-full h-18 sm:h-24 flex justify-center items-end pb-4 cursor-pointer"
        @click="scrollToServices"
      >
        <i
          class="pi pi-angle-down animate-bounce !text-3xl sm:!text-4xl"
          :style="{ color: 'var(--color-orange-400)' }"
        />
      </div>
    </section>

    <section ref="servicesRef" class="bg-white scroll-mt-[var(--app-navbar-height)] py-16">
      <div class="container mx-auto px-6 lg:px-12">
        <div class="flex flex-col items-center border-b border-black/6 pb-8 text-center">
          <h2
            class="mt-4 max-w-3xl text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl lg:text-4xl text-balance"
          >
            Dobro došli u <span class="text-orange-400">Delić Signalizaciju</span>
          </h2>
        </div>

        <div class="mt-8 flex flex-col gap-10 lg:flex-row lg:items-stretch lg:justify-evenly lg:gap-16">
          <div class="flex w-full lg:max-w-xl lg:flex-2 lg:items-center">
            <p class="text-lg leading-8 text-zinc-700 sm:text-xl lg:text-[1.4rem] lg:leading-9">
              Vaš partner za sigurnost na putevima. Gradimo kompletna rješenja iz oblasti signalizacije uz savremenu
              mehanizaciju, preciznu izvedbu i materijale koji ostaju vidljivi u svim uslovima.
            </p>
          </div>

          <div class="w-full lg:max-w-xl lg:flex-1">
            <div class="grid gap-4 sm:grid-cols-1">
              <NuxtLink
                v-for="service in ['Horizontalna signalizacija', 'Vertikalna signalizacija', 'Sigurnosna oprema']"
                :key="service"
                to="/services"
                class="block"
              >
                <Button
                  :label="service"
                  icon="pi pi-arrow-right"
                  icon-pos="right"
                  variant="secondary"
                  size="large"
                  class="!w-full !justify-between !rounded-m !px-6 !py-6 !text-left text-lg font-bold tracking-tight !text-white transition-all duration-200 hover:!-translate-y-0.5 hover:!shadow-lg sm:text-xl"
                />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-zinc-900 py-12 text-white sm:py-14">
      <div class="mx-auto grid max-w-7xl gap-8 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-12">
        <div v-for="stat in stats" :key="stat.label" class="border-l border-white/10 pl-5 border-l-orange-400 pl-5">
          <p class="text-3xl font-bold tracking-tight text-orange-400 sm:text-4xl">{{ stat.value }}</p>
          <p class="mt-2 text-sm uppercase tracking-[0.14em] text-zinc-300 sm:text-base">{{ stat.label }}</p>
        </div>
      </div>
    </section>

    <section class="bg-white py-16 sm:py-20">
      <div class="container mx-auto px-6 lg:px-12">
        <div class="mx-auto max-w-3xl text-center">
          <p class="text-sm font-semibold uppercase tracking-[0.22em] text-orange-500">Gdje Radimo</p>
          <h2 class="mt-4 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl text-balance">
            Rješenja prilagođena različitim vrstama površina i objekata
          </h2>
        </div>

        <div class="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <Card
            v-for="sector in sectors"
            :key="sector.number"
            class="group h-full rounded-xl !border-white/10 !bg-[linear-gradient(180deg,rgba(39,39,42,0.92)_0%,rgba(24,24,27,0.98)_100%)] !shadow-[0_20px_44px_rgba(0,0,0,0.3),0_10px_24px_rgba(252,150,25,0.08)] transition-all duration-300 hover:!-translate-y-1 hover:!border-orange-400/40 hover:!shadow-[0_26px_56px_rgba(0,0,0,0.38),0_14px_28px_rgba(252,150,25,0.14)]"
          >
            <template #header>
              <img
                src="/art_direction.jpg"
                alt="Signalizacija projekat"
                class="h-48 w-full rounded-t-xl object-cover lg:h-52"
              />
            </template>
            <template #content>
              <div class="flex h-full min-h-40 flex-col">
                <p class="text-sm font-semibold tracking-[0.22em] text-orange-500">{{ sector.number }}</p>
                <h3 class="mt-4 text-xl font-bold tracking-tight text-white">{{ sector.title }}</h3>
                <p class="mt-3 text-base leading-7 text-zinc-300">{{ sector.description }}</p>
                <div class="mt-auto pt-5">
                  <div class="h-0.5 w-0 bg-orange-500 transition-all duration-300 group-hover:w-full" />
                </div>
              </div>
            </template>
          </Card>
        </div>
      </div>
    </section>
  </div>
</template>
