<script setup lang="ts">
const services = [
  {
    title: 'Projektovanje signalizacije',
    description:
      'Priprema koncepta, tehnicke dokumentacije i plana izvedbe za objekte i saobracajne povrsine.'
  },
  {
    title: 'Izrada i montaza',
    description:
      'Proizvodnja i postavljanje vertikalne i horizontalne signalizacije za poslovne i javne prostore.'
  },
  {
    title: 'Odrzavanje i obnova',
    description: 'Zamjena ostecene signalizacije, obnavljanje oznaka i intervencije na terenu.'
  }
]

const goToContact = () => navigateTo('/contact')
const goToServices = () => navigateTo('/services')
</script>

<template>
  <div class="flex flex-col gap-10">
    <section
      class="grid gap-6 rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-surface-200 lg:grid-cols-[1.35fr_0.65fr] lg:p-12"
    >
      <div class="space-y-6">
        <Tag
          value="Spremno za razvoj"
          severity="success"
          rounded
        />

        <div class="space-y-4">
          <h1 class="max-w-3xl text-4xl font-semibold tracking-tight text-surface-900 sm:text-5xl">
            PrimeVue je integrisan, rutiranje je stabilno i projekat je spreman za dalje razvijanje.
          </h1>
          <p class="max-w-2xl text-lg leading-8 text-surface-600">
            Ovaj scaffold sada ima ispravan Nuxt layout, radne stranice i pocetnu strukturu za
            razvoj web prezentacije Delic Signalizacija.
          </p>
        </div>

        <div class="flex flex-wrap gap-3">
          <Button
            label="Kontakt"
            rounded
            @click="goToContact"
          />
          <Button
            label="Pogledaj usluge"
            variant="outlined"
            rounded
            @click="goToServices"
          />
        </div>
      </div>

      <Card>
        <template #title> Tehnicki status </template>
        <template #content>
          <div class="space-y-4 text-sm text-surface-700">
            <div class="rounded-2xl bg-surface-50 p-4">
              <p class="font-semibold text-surface-900">Nuxt 4</p>
              <p>Osnovna aplikacija koristi layout + page strukturu bez praznih SFC fajlova.</p>
            </div>
            <div class="rounded-2xl bg-surface-50 p-4">
              <p class="font-semibold text-surface-900">PrimeVue 4</p>
              <p>Auto-import, tema i osnovne komponente su spremne za dalji rad.</p>
            </div>
            <div class="rounded-2xl bg-surface-50 p-4">
              <p class="font-semibold text-surface-900">Routing</p>
              <p>Dodana je ispravna ruta /services i redirect sa starog /serices path-a.</p>
            </div>
          </div>
        </template>
      </Card>
    </section>

    <section class="grid gap-4 md:grid-cols-3">
      <Card
        v-for="service in services"
        :key="service.title"
      >
        <template #title>
          {{ service.title }}
        </template>
        <template #content>
          <p class="leading-7 text-surface-600">
            {{ service.description }}
          </p>
        </template>
      </Card>
    </section>
  </div>
</template>
