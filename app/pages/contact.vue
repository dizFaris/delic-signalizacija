<script setup lang="ts">
const contactItems = [
  {
    icon: 'pi-envelope',
    label: 'Email',
    value: 'info@delic-signalizacija.ba',
    href: 'mailto:info@delic-signalizacija.ba'
  },
  {
    icon: 'pi-phone',
    label: 'Telefon',
    value: '+387 00 000 000',
    href: 'tel:+38700000000'
  },
  {
    icon: 'pi-map-marker',
    label: 'Adresa',
    value: 'Ulica bb, 71000 Sarajevo, BiH',
    href: null
  }
]
</script>

<template>
  <div class="bg-white">
    <section class="py-10 lg:py-24">
      <div class="container mx-auto px-6 lg:px-12">
        <div class="mx-auto max-w-3xl text-center mb-14">
          <p class="text-sm font-semibold uppercase tracking-[0.22em] text-orange-500">Upit za radove</p>
          <h1 class="mt-4 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">Isplanirajmo vaš projekt</h1>
          <p class="mt-4 text-lg text-zinc-500">
            Pošaljite nam specifikacije dionice ili objekta koji treba označiti. Tu smo da dogovorimo detalje, izađemo
            na teren i odradimo posao po projektu.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <div class="flex flex-col gap-4">
            <a
              v-for="item in contactItems"
              :key="item.label"
              :href="item.href ?? undefined"
              class="group flex items-center gap-6 overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(39,39,42,0.92)_0%,rgba(24,24,27,0.98)_100%)] p-6 shadow-[0_8px_24px_rgba(0,0,0,0.25)] transition-all duration-300 hover:border-orange-500/40 no-underline"
            >
              <div
                class="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-orange-500/10 text-orange-500"
              >
                <i :class="`pi ${item.icon} !text-2xl`" />
              </div>
              <div>
                <p class="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">{{ item.label }}</p>
                <p class="mt-1 text-lg font-semibold text-white">{{ item.value }}</p>
              </div>
              <i
                v-if="item.href"
                class="pi pi-arrow-right ml-auto text-zinc-600 transition-all duration-300 group-hover:text-orange-500 group-hover:translate-x-1"
              />
            </a>
          </div>

          <!-- Google Maps -->
          <div class="overflow-hidden rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.15)] min-h-[340px] lg:min-h-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11520.635451634498!2d18.3890!3d43.8563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4758c93d88b8c98f%3A0x1f99d1f1dde7f9b0!2sSarajevo!5e0!3m2!1sbs!2sba!4v1714900000000"
              width="100%"
              height="100%"
              style="border: 0; min-height: 340px"
              allowfullscreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              class="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
