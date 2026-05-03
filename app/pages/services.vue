<script setup lang="ts">
import ContactCard from '~/components/ContactCard.vue'

const goToContact = () => navigateTo('/contact')

const galleryImages = [
  { src: '/kompanija.webp' },
  { src: '/art_direction.jpg' },
  { src: '/kompanija.webp' },
  { src: '/art_direction.jpg' },
  { src: '/kompanija.webp' },
  { src: '/art_direction.jpg' },
  { src: '/kompanija.webp' },
  { src: '/art_direction.jpg' }
]

const services = [
  {
    title: 'Horizontalna signalizacija',
    subtitle: 'Debeloslojna i hladna plastika',
    description:
      'Vršimo mašinsko i ručno ocrtavanje puteva, pješačkih prijelaza i simbola koristeći materijale visoke refleksije i trajnosti.',
    features: ['Pješački prijelazi', 'Parking mjesta', 'Aerodromske piste'],
    image: '/kompanija.webp',
    icon: 'pi pi-directions'
  },
  {
    title: 'Vertikalna signalizacija',
    subtitle: 'Aluminijumska galanterija',
    description:
      'Kompletna izrada i montaža saobraćajnih znakova svih oblika, turističke signalizacije i tabli za usmjeravanje saobraćaja.',
    features: ['Standardni znakovi', 'Putokazne table', 'LED signalizacija'],
    image: '/art_direction.jpg',
    icon: 'pi pi-flag'
  },
  {
    title: 'Sigurnosna oprema',
    subtitle: 'Certifikovana zaštita',
    description:
      'Ugradnja opreme za smirivanje saobraćaja, zaštitnih stubića i barijera koje osiguravaju bezbjednost u svim zonama.',
    features: ['Ležeći policajci', 'Zaštitne ograde', 'Ogledala'],
    image: '/kompanija.webp',
    icon: 'pi pi-shield'
  }
]

const processSteps = [
  {
    step: 1,
    icon: 'pi-map',
    title: 'Planiranje',
    description:
      'Analiziramo teren i specifične zahtjeve signalizacije kako bismo kreirali precizan plan izvođenja radova.'
  },
  {
    step: 2,
    icon: 'pi-cog',
    title: 'Izvođenje',
    description: 'Vršimo profesionalno ocrtavanje i montažu koristeći najkvalitetnije materijale i mehanizaciju.'
  },
  {
    step: 3,
    icon: 'pi-check-circle',
    title: 'Kontrola',
    description: 'Finalna provjera kvaliteta i primopredaja projekta uz garanciju na dugovječnost i vidljivost.'
  }
]
</script>

<template>
  <div class="bg-white">
    <section class="py-10 lg:py-20">
      <div class="container mx-auto px-6 lg:px-12">
        <div class="flex flex-col gap-16 lg:gap-32">
          <div
            v-for="(service, index) in services"
            :key="service.title"
            class="flex flex-col gap-12 lg:items-center"
            :class="index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'"
          >
            <div class="w-full lg:w-1/2">
              <div class="overflow-hidden rounded-2xl shadow-xl">
                <img
                  :src="service.image"
                  class="h-[240px] lg:h-[400px] w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>

            <div class="w-full lg:w-1/2 lg:px-8">
              <span class="inline-block text-sm font-semibold uppercase tracking-[0.22em] text-orange-500 mb-4">
                {{ service.subtitle }}
              </span>
              <h2 class="text-3xl font-bold text-zinc-900 sm:text-4xl">{{ service.title }}</h2>
              <p class="mt-6 text-lg leading-relaxed text-zinc-600">
                {{ service.description }}
              </p>

              <ul class="mt-8 space-y-3">
                <li v-for="feature in service.features" :key="feature" class="flex items-center gap-3">
                  <i class="pi pi-angle-right text-orange-500 shrink-0" />
                  <span class="text-zinc-700">{{ feature }}</span>
                </li>
              </ul>

              <div class="mt-10">
                <Button
                  label="Pošalji upit"
                  class="!px-10 !py-4 !bg-orange-500 !border-orange-500 !text-white shadow-lg shadow-orange-500/20"
                  @click="goToContact"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-12 lg:py-24 bg-white">
      <div class="container mx-auto px-6 lg:px-12">
        <div class="mx-auto max-w-3xl text-center mb-20">
          <p class="text-sm font-semibold uppercase tracking-[0.22em] text-orange-500">Proces realizacije</p>
          <h2 class="mt-4 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
            Od planiranja do finalne signalizacije
          </h2>
        </div>

        <div class="relative mx-auto max-w-7xl">
          <div class="hidden md:block absolute top-7 left-0 w-full h-[2px] bg-orange-500/20" aria-hidden="true">
            <div class="h-full bg-orange-500 w-full opacity-50" />
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              v-for="step in processSteps"
              :key="step.step"
              class="relative flex flex-col h-full items-center text-center group"
            >
              <div class="relative z-10 mb-10 flex items-center justify-center w-full">
                <div class="flex-1 h-[2px] bg-orange-500/20 md:hidden" />
                <div
                  class="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-zinc-950 border-2 border-orange-500 text-xl font-black text-orange-500 shadow-lg"
                >
                  {{ step.step }}
                </div>
                <div class="flex-1 h-[2px] bg-orange-500/20 md:hidden" />
              </div>

              <div
                class="flex flex-col h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(39,39,42,0.92)_0%,rgba(24,24,27,0.98)_100%)] p-8 shadow-[0_20px_44px_rgba(0,0,0,0.3)] transition-all duration-300 hover:border-orange-500/40"
              >
                <div
                  class="mx-auto flex h-14 w-14 items-center justify-center rounded-lg bg-orange-500/10 text-orange-500 mb-6"
                >
                  <i :class="`pi ${step.icon} !text-2xl`" />
                </div>

                <h3 class="text-xl font-bold tracking-tight text-white uppercase">{{ step.title }}</h3>
                <p class="mt-4 text-base leading-7 text-zinc-300 flex-grow">{{ step.description }}</p>

                <div class="mt-6 pt-4">
                  <div class="h-1 w-12 bg-orange-500 mx-auto transition-all duration-300 group-hover:w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-zinc-50 py-10 lg:py-20 border-y border-zinc-100">
      <div class="container mx-auto px-6 lg:px-12">
        <div class="mb-10">
          <h3 class="text-xl font-bold text-zinc-900 uppercase tracking-tighter">Projekti u fokusu</h3>
        </div>
        <Carousel
          :value="galleryImages"
          :num-visible="3"
          :num-scroll="1"
          :responsive-options="[
            { breakpoint: '1024px', numVisible: 2, numScroll: 1 },
            { breakpoint: '640px', numVisible: 1, numScroll: 1 }
          ]"
          circular
          :autoplay-interval="3000"
        >
          <template #item="slotProps">
            <div class="px-2">
              <img
                :src="slotProps.data.src"
                class="h-72 w-full rounded-2xl object-cover shadow-md hover:shadow-xl transition-all duration-300"
              />
            </div>
          </template>
        </Carousel>
      </div>
    </section>

    <ContactCard />
  </div>
</template>

<style scoped>
:deep(.p-carousel-prev-button),
:deep(.p-carousel-next-button) {
  background: var(--p-button-primary-background);
  border: 1px solid var(--p-button-primary-border-color);
  color: var(--p-button-primary-color);
  border-radius: 9999px;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition:
    background 0.2s,
    color 0.2s,
    border-color 0.2s;
}

:deep(.p-carousel-prev-button:hover),
:deep(.p-carousel-next-button:hover) {
  background: var(--p-button-primary-hover-background) !important;
  border-color: var(--p-button-primary-hover-border-color) !important;
  color: var(--p-button-primary-hover-color) !important;
}

:deep(.p-carousel-indicator button) {
  width: 8px;
  height: 8px;
  border-radius: 9999px;
  background: #d4d4d8;
  border: none;
  padding: 0;
  transition:
    background 0.2s,
    width 0.2s;
}

:deep(.p-carousel-indicator[data-p-active='true'] button),
:deep(.p-carousel-indicator.p-highlight button) {
  background: var(--p-button-primary-background);
  width: 20px;
}
</style>
