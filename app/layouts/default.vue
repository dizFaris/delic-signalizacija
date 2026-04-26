<script setup lang="ts">
const footerNavItems = [
  { label: 'Početna', to: '/' },
  { label: 'O nama', to: '/about' },
  { label: 'Usluge', to: '/services' },
  { label: 'Kontakt', to: '/contact' }
]

const contactItems = [
  {
    icon: 'pi pi-map-marker',
    text: 'Vaša Adresa bb, Grad'
  },
  {
    icon: 'pi pi-phone',
    text: '+387 00 000 000',
    href: 'tel:+38700000000'
  },
  {
    icon: 'pi pi-building',
    text: 'Delić Signalizacija'
  }
]

const socialLinks = [
  {
    label: 'Facebook',
    icon: 'pi pi-facebook',
    href: '#'
  },
  {
    label: 'Instagram',
    icon: 'pi pi-instagram',
    href: '#'
  },
  {
    label: 'LinkedIn',
    icon: 'pi pi-linkedin',
    href: '#'
  }
]
</script>

<template>
  <div class="flex min-h-screen flex-col bg-transparent text-black">
    <AppNavbar />

    <main class="mx-auto flex w-full flex-1 flex-col pb-10 mt-[var(--app-navbar-height)]">
      <slot />
    </main>

    <footer class="bg-zinc-950 text-white pt-16 pb-8 font-['Montserrat',sans-serif]">
      <div class="container mx-auto px-6 lg:px-12">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div class="space-y-6">
            <h2 class="text-xl font-black uppercase tracking-widest text-orange-500">Delić Signalizacija</h2>
            <p class="text-zinc-400 leading-relaxed text-sm">
              Specijalizovana kompanija za obilježavanje puteva, postavljanje saobraćajne opreme i zaštitnih sistema.
              Sigurnost i preciznost su naša garancija.
            </p>
          </div>

          <div class="space-y-6">
            <h3 class="text-sm font-bold uppercase tracking-widest text-white">Navigacija</h3>
            <ul class="space-y-4 text-zinc-400 text-sm">
              <li v-for="item in footerNavItems" :key="item.to">
                <NuxtLink :to="item.to" class="hover:text-orange-500 transition-colors">
                  {{ item.label }}
                </NuxtLink>
              </li>
            </ul>
          </div>

          <div class="space-y-6">
            <h3 class="text-sm font-bold uppercase tracking-widest text-white">Kontakt</h3>
            <ul class="space-y-4 text-zinc-400 text-sm">
              <li v-for="item in contactItems" :key="item.text" class="flex items-start gap-3">
                <i :class="[item.icon, 'mt-0.5 text-orange-500']" aria-hidden="true" />
                <a v-if="item.href" :href="item.href" class="hover:text-white transition-colors">
                  {{ item.text }}
                </a>
                <span v-else>
                  {{ item.text }}
                </span>
              </li>
            </ul>
          </div>

          <div class="space-y-6">
            <h3 class="text-sm font-bold uppercase tracking-widest text-white">Pratite nas</h3>
            <div class="flex gap-4">
              <a
                v-for="social in socialLinks"
                :key="social.label"
                :href="social.href"
                :aria-label="social.label"
                class="flex h-10 w-10 items-center justify-center border border-zinc-800 transition-all hover:border-orange-500 hover:bg-orange-500 hover:text-black"
              >
                <i :class="social.icon" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div
          class="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-500 uppercase tracking-widest"
        >
          <p>© {{ new Date().getFullYear() }} Delić Signalizacija. Sva prava zadržana.</p>
        </div>
      </div>
    </footer>
  </div>
</template>
