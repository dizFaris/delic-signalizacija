<script setup>
import { onBeforeUnmount, ref, watch } from 'vue'

const route = useRoute()
const isMenuOpen = ref(false)
let savedBodyStyles = {}
let lockedScrollY = 0

const navItems = [
  { label: 'Početna', to: '/' },
  { label: 'O nama', to: '/about' },
  { label: 'Usluge', to: '/services' },
  { label: 'Kontakt', to: '/contact' }
]

const setBodyScrollLock = (isLocked) => {
  if (!import.meta.client) {
    return
  }

  if (isLocked) {
    lockedScrollY = window.scrollY
    savedBodyStyles = {
      position: document.body.style.position,
      top: document.body.style.top,
      left: document.body.style.left,
      right: document.body.style.right
    }

    document.body.style.position = 'fixed'
    document.body.style.top = `-${lockedScrollY}px`
    document.body.style.left = '0'
    document.body.style.right = '0'

    return
  }

  Object.assign(document.body.style, savedBodyStyles)

  window.scrollTo({ top: lockedScrollY })
}

watch(
  () => route.path,
  () => {
    isMenuOpen.value = false
  }
)

watch(isMenuOpen, (isOpen) => {
  setBodyScrollLock(isOpen)
})

onBeforeUnmount(() => {
  setBodyScrollLock(false)
})
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-[70] border-b border-white/10 bg-zinc-900">
    <div
      class="mx-auto flex min-h-[var(--app-navbar-height)] max-w-6xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8"
    >
      <NuxtLink
        to="/"
        class="flex shrink-0 items-center text-white no-underline"
        aria-label="Delić Signalizacija početna stranica"
      >
        <AppLogo class="h-auto w-40 sm:w-48" />
      </NuxtLink>

      <nav class="hidden items-center gap-8 md:flex" aria-label="Glavna navigacija">
        <NuxtLink
          v-for="item in navItems"
          :key="item.label"
          :to="item.to"
          class="nav-link text-sm font-medium tracking-[0.08em] text-white uppercase transition-colors duration-200"
          active-class="nav-link-active"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>

      <button
        type="button"
        class="menu-toggle inline-flex items-center justify-center md:hidden !border-none"
        :class="{ 'menu-toggle-open': isMenuOpen }"
        :aria-expanded="isMenuOpen"
        aria-controls="mobile-menu"
        aria-label="Otvori ili zatvori navigaciju"
        @click="isMenuOpen = !isMenuOpen"
      >
        <span />
        <span />
        <span />
      </button>
    </div>
  </header>

  <Transition name="fade">
    <div v-if="isMenuOpen" class="fixed inset-x-0 bottom-0 top-[var(--app-navbar-height)] z-[60] md:hidden">
      <button
        type="button"
        class="absolute inset-0 bg-black/20"
        aria-label="Zatvori navigaciju"
        @click="isMenuOpen = false"
      />

      <aside
        id="mobile-menu"
        class="drawer-panel relative ml-auto flex h-full w-[min(22rem,85vw)] flex-col border-l border-white/10 bg-zinc-900 px-6 pb-8 pt-6 shadow-2xl text-white"
        aria-label="Mobilna navigacija"
      >
        <nav class="flex flex-col gap-2">
          <NuxtLink
            v-for="item in navItems"
            :key="item.label"
            :to="item.to"
            class="mobile-nav-link rounded-xl px-4 py-3 text-base font-semibold text-zinc-300 transition-colors duration-200 hover:bg-white/5 hover:text-white"
            active-class="mobile-nav-link-active"
            @click="isMenuOpen = false"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>
      </aside>
    </div>
  </Transition>
</template>

<style scoped lang="scss">
.nav-link {
  position: relative;
  padding-bottom: 2px;
  color: white;

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    height: 2px;
    width: 0;
    background: var(--p-button-primary-background);
    border-radius: 9999px;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

  &.nav-link-active {
    color: var(--p-button-primary-background);

    &::after {
      width: 100%;
    }
  }
}

.mobile-nav-link {
  &.mobile-nav-link-active {
    color: var(--p-button-primary-background) !important;
    background: rgb(from var(--p-button-primary-background) r g b / 0.1);
  }
}

.menu-toggle {
  position: relative;
  z-index: 80;
  height: 3rem;
  width: 3rem;
  border: none;
  border-radius: 9999px;
  background: transparent;
  color: white;

  span {
    position: absolute;
    height: 2px;
    width: 1.25rem;
    border-radius: 9999px;
    background: currentColor;
    transition:
      transform 0.2s ease,
      opacity 0.2s ease;

    &:nth-child(1) {
      transform: translateY(-6px);
    }

    &:nth-child(3) {
      transform: translateY(6px);
    }
  }

  &-open {
    span {
      &:nth-child(1) {
        transform: rotate(45deg);
      }

      &:nth-child(2) {
        opacity: 0;
      }

      &:nth-child(3) {
        transform: rotate(-45deg);
      }
    }
  }
}

.drawer-panel {
  animation: drawer-in 0.22s ease;
}

.fade-enter-active,
.fade-leave-active,
.drawer-enter-active,
.drawer-leave-active {
  transition: all 0.22s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.drawer-enter-from,
.drawer-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

@keyframes drawer-in {
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0);
  }
}
</style>
