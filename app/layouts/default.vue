<template>
  <div class="flex min-h-screen flex-col bg-surface-ground text-surface-900">
    <AppNavbar />

    <main
      class="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 pb-10 pt-[calc(var(--app-navbar-height)+2rem)] sm:px-6 lg:px-8"
    >
      <slot />
    </main>

    <footer class="border-t border-surface-200 bg-white/80">
      <div
        class="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-6 text-sm text-surface-600 sm:px-6 lg:px-8"
      >
        <p>Delic Signalizacija - development scaffold</p>
        <p>{{ new Date().getFullYear() }}</p>
      </div>
    </footer>
  </div>
</template>
