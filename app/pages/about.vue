<template>
  <div class="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
    <Card>
      <template #title>
        O nama
      </template>
      <template #content>
        <div class="space-y-4 leading-7 text-surface-600">
          <p>
            Delic Signalizacija razvija i izvodi rjesenja za signalizaciju,
            oznacavanje i pratecu opremu za poslovne, industrijske i javne
            prostore.
          </p>
          <p>
            Stranica je sada postavljena kao razvojna osnova: layout, navigacija
            i glavne stranice su spremne, pa se sadrzaj i poslovna logika mogu
            dalje siriti bez popravki osnovne strukture.
          </p>
        </div>
      </template>
    </Card>

    <Card>
      <template #title>
        Sta je spremno
      </template>
      <template #content>
        <div class="grid gap-4 sm:grid-cols-2">
          <div class="rounded-2xl bg-surface-50 p-4">
            <h2 class="font-semibold text-surface-900">
              Komponente
            </h2>
            <p class="mt-2 text-sm leading-6 text-surface-600">
              PrimeVue dugmad, kartice, inputi i poruke su dostupni bez rucnog
              importa.
            </p>
          </div>
          <div class="rounded-2xl bg-surface-50 p-4">
            <h2 class="font-semibold text-surface-900">
              Stranice
            </h2>
            <p class="mt-2 text-sm leading-6 text-surface-600">
              Home, About, Services i Contact sada imaju validne Vue komponente.
            </p>
          </div>
          <div class="rounded-2xl bg-surface-50 p-4">
            <h2 class="font-semibold text-surface-900">
              Navigacija
            </h2>
            <p class="mt-2 text-sm leading-6 text-surface-600">
              Linkovi i aktivno stanje rute su povezani kroz zajednicki header.
            </p>
          </div>
          <div class="rounded-2xl bg-surface-50 p-4">
            <h2 class="font-semibold text-surface-900">
              Validacija
            </h2>
            <p class="mt-2 text-sm leading-6 text-surface-600">
              Projekat je pripremljen za lint, typecheck i production build
              provjere.
            </p>
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>
