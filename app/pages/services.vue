<script setup lang="ts">
const services = [
  {
    title: 'Vertikalna signalizacija',
    description:
      'Projektovanje, izrada i montaza znakova, tabli i informacionih elemenata za objekte i saobracajne povrsine.'
  },
  {
    title: 'Horizontalno obiljezavanje',
    description:
      'Iscrtavanje parking mjesta, internih komunikacija, sigurnosnih zona i industrijskih oznaka.'
  },
  {
    title: 'Sigurnosna oprema',
    description:
      'Stubici, zastitne barijere, ogledala, oznake i dodatna oprema za bezbjedno kretanje ljudi i vozila.'
  }
]
</script>

<template>
  <div class="flex flex-col gap-6">
    <div class="space-y-3">
      <Tag
        value="Usluge"
        rounded
      />
      <h1 class="text-4xl font-semibold tracking-tight text-black">
        Primarni razvojni sadrzaj za stranicu usluga
      </h1>
      <p class="max-w-3xl text-lg leading-8 text-zinc-600">
        Stranica je spremna da se dopuni pravim ponudama, referencama, galerijama i cijenama bez
        dodatnih izmjena osnovnog routinga.
      </p>
    </div>

    <div class="grid gap-4 md:grid-cols-3">
      <Card
        v-for="service in services"
        :key="service.title"
      >
        <template #title>
          {{ service.title }}
        </template>
        <template #content>
          <p class="leading-7 text-zinc-600">
            {{ service.description }}
          </p>
        </template>
      </Card>
    </div>
  </div>
</template>
