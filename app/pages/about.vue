<script setup lang="ts">
import ContactCard from '~/components/ContactCard.vue'

const partners = [
  'Logo Partnera 1',
  'Logo Partnera 2',
  'Logo Partnera 3',
  'Logo Partnera 4',
  'Logo Partnera 5',
  'Logo Partnera 6'
]
</script>

<template>
  <div>
    <section class="relative overflow-hidden bg-white py-10 md:py-20 lg:py-32">
      <div class="container mx-auto px-6 lg:px-12">
        <div class="grid items-center gap-12 lg:grid-cols-2">
          <div class="relative z-10">
            <span class="inline-block text-sm font-semibold uppercase tracking-widest text-orange-500">
              Naša Priča
            </span>
            <h1 class="mt-4 text-4xl font-extrabold tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl">
              Tradicija preciznosti u <span class="text-orange-500">svakom metru.</span>
            </h1>
            <p class="mt-6 text-lg leading-relaxed text-zinc-600 lg:max-w-lg">
              Delić Signalizacija nije samo firma za ocrtavanje puteva. Mi smo tim posvećen sigurnosti učesnika u
              saobraćaju, koristeći decenijsko iskustvo i najsavremeniju tehnologiju na tržištu.
            </p>

            <div class="mt-10 flex items-center gap-6">
              <div class="border-l-4 border-orange-500 pl-6">
                <p class="text-2xl font-bold text-zinc-900">100%</p>
                <p class="text-sm uppercase tracking-wider text-zinc-500">Posvećenost sigurnosti</p>
              </div>
              <div class="border-l-4 border-orange-500 pl-6">
                <p class="text-2xl font-bold text-zinc-900">24/7</p>
                <p class="text-sm uppercase tracking-wider text-zinc-500">Podrška na terenu</p>
              </div>
            </div>
          </div>

          <div class="relative">
            <div class="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/kompanija.webp"
                alt="Rad na terenu"
                class="h-[400px] w-full object-cover transition-transform duration-500 hover:scale-105 sm:h-[500px]"
              />
              <div class="absolute bottom-0 right-0 bg-orange-500 p-6 text-white sm:p-10">
                <p class="text-4xl font-black">10+</p>
                <p class="text-xs uppercase tracking-widest">Godina iskustva</p>
              </div>
            </div>

            <div
              class="absolute -bottom-6 -left-6 -z-10 h-32 w-32 bg-[radial-gradient(#f97316_2px,transparent_2px)] [background-size:16px_16px] opacity-20"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="bg-zinc-950 py-12 border-y border-white/5 overflow-hidden">
      <div class="flex flex-col gap-8">
        <!-- Naslovna oznaka iznad skrolera -->
        <div class="container mx-auto px-6 lg:px-12">
          <div class="flex items-center gap-3">
            <span class="h-[1px] w-8 bg-orange-500" />
            <span class="text-sm font-semibold uppercase tracking-[0.22em] text-zinc-400">Partneri i institucije</span>
          </div>
        </div>

        <!-- Beskonačni skroler -->
        <div class="relative flex overflow-x-hidden">
          <div class="flex animate-marquee whitespace-nowrap py-4">
            <div v-for="partner in partners" :key="partner" class="mx-6 flex items-center">
              <div
                class="flex h-24 min-w-48 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-8 grayscale opacity-60 transition-all duration-300 hover:border-orange-500/50 hover:bg-white/[0.05] hover:grayscale-0 hover:opacity-100"
              >
                <span class="text-xs font-bold uppercase tracking-[0.3em] text-zinc-400">{{ partner }}</span>
              </div>
            </div>
          </div>

          <!-- Duplirani sadržaj za beskonačni efekat -->
          <div class="absolute top-0 flex animate-marquee2 whitespace-nowrap py-4">
            <div v-for="partner in partners" :key="partner + '2'" class="mx-6 flex items-center">
              <div
                class="flex h-24 min-w-48 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-8 grayscale opacity-60 transition-all duration-300 hover:border-orange-500/50 hover:bg-white/[0.05] hover:grayscale-0 hover:opacity-100"
              >
                <span class="text-xs font-bold uppercase tracking-[0.3em] text-zinc-400">{{ partner }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-zinc-50 py-20 text-zinc-950">
      <div class="container mx-auto px-6 lg:px-12">
        <!-- Naslov sekcije -->
        <div class="mb-16 max-w-2xl">
          <h2 class="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">Standardi bez kompromisa</h2>
          <div class="mt-4 h-1.5 w-20 bg-orange-500" />
          <p class="mt-6 text-lg text-zinc-600">
            Naš rad definiše preciznost i upotreba materijala koji garantuju dugovječnost, bez obzira na intenzitet
            saobraćaja ili vremenske uslove.
          </p>
        </div>

        <!-- Grid sa vrijednostima -->
        <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <!-- Kartica 1: Kvalitet materijala -->
          <div
            class="group relative rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(39,39,42,0.92)_0%,rgba(24,24,27,0.98)_100%)] p-8 shadow-[0_20px_44px_rgba(0,0,0,0.3),0_10px_24px_rgba(252,150,25,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/40 hover:shadow-[0_26px_56px_rgba(0,0,0,0.38),0_14px_28px_rgba(252,150,25,0.14)]"
          >
            <div
              class="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-orange-500/10 text-orange-500 transition-colors group-hover:bg-orange-500 group-hover:text-white"
            >
              <i class="pi pi-shield !text-2xl" />
            </div>
            <h3 class="text-xl font-bold text-white">Vrhunski Materijali</h3>
            <p class="mt-4 leading-relaxed text-zinc-300">
              Koristimo isključivo atestirane boje i retro-reflektujuće perle koje osiguravaju maksimalnu vidljivost u
              noćnim uslovima.
            </p>
          </div>

          <!-- Kartica 2: Preciznost -->
          <div
            class="group relative rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(39,39,42,0.92)_0%,rgba(24,24,27,0.98)_100%)] p-8 shadow-[0_20px_44px_rgba(0,0,0,0.3),0_10px_24px_rgba(252,150,25,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/40 hover:shadow-[0_26px_56px_rgba(0,0,0,0.38),0_14px_28px_rgba(252,150,25,0.14)]"
          >
            <div
              class="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-orange-500/10 text-orange-500 transition-colors group-hover:bg-orange-500 group-hover:text-white"
            >
              <i class="pi pi-compass !text-2xl" />
            </div>
            <h3 class="text-xl font-bold text-white">Precizna Izvedba</h3>
            <p class="mt-4 leading-relaxed text-zinc-300">
              Savremena mehanizacija i lasersko navođenje omogućavaju nam milimetarsku preciznost pri ocrtavanju svake
              linije.
            </p>
          </div>

          <!-- Kartica 3: Zakonska usklađenost -->
          <div
            class="group relative rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(39,39,42,0.92)_0%,rgba(24,24,27,0.98)_100%)] p-8 shadow-[0_20px_44px_rgba(0,0,0,0.3),0_10px_24px_rgba(252,150,25,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/40 hover:shadow-[0_26px_56px_rgba(0,0,0,0.38),0_14px_28px_rgba(252,150,25,0.14)]"
          >
            <div
              class="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-orange-500/10 text-orange-500 transition-colors group-hover:bg-orange-500 group-hover:text-white"
            >
              <i class="pi pi-file-check !text-2xl" />
            </div>
            <h3 class="text-xl font-bold text-white">Certifikovan Rad</h3>
            <p class="mt-4 leading-relaxed text-zinc-300">
              Svi naši radovi se izvode strogo prema važećim saobraćajnim propisima i standardima sigurnosti cesta.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-white py-20 text-zinc-950">
      <div class="container mx-auto px-6 lg:px-12">
        <div class="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
              Provjerena <br />
              <span class="text-orange-500">kvaliteta rada</span>
            </h2>
            <p class="mt-6 leading-relaxed text-zinc-600">
              Posedujemo sve neophodne licence i certifikate za rad na javnim putevima, što garantuje usklađenost sa
              najstrožim propisima sigurnosti.
            </p>

            <div class="mt-8 flex flex-wrap gap-4">
              <!-- Ovdje možeš staviti male bedževe ili samo diskretne checkmarkove -->
              <div class="flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2">
                <i class="pi pi-verified text-orange-500" />
                <span class="text-sm font-medium">ISO 9001:2015</span>
              </div>
              <div class="flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2">
                <i class="pi pi-verified text-orange-500" />
                <span class="text-sm font-medium">Licenca M-1</span>
              </div>
            </div>
          </div>

          <div class="flex justify-center lg:justify-center">
            <img
              src="/iso_certification.jpg"
              alt="ISO 9001 certified logo"
              class="max-h-64 w-full max-w-sm object-contain sm:max-h-72"
            />
          </div>
        </div>
      </div>
    </section>

    <ContactCard />
  </div>
</template>

<style scoped>
.animate-marquee {
  animation: marquee 30s linear infinite;
}
.animate-marquee2 {
  animation: marquee2 30s linear infinite;
}

@keyframes marquee {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

@keyframes marquee2 {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0%);
  }
}
</style>
