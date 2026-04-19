<script setup lang="ts">
const form = reactive({
  name: '',
  email: '',
  message: ''
})

const submitted = ref(false)

const submit = () => {
  submitted.value = true
}
</script>

<template>
  <div class="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
    <Card>
      <template #title>
        Kontakt
      </template>
      <template #content>
        <div class="space-y-4 leading-7 text-surface-600">
          <p>
            Ovo je razvojna forma spremna da se poveze sa backend servisom,
            email gateway-em ili CRM integracijom.
          </p>
          <p>
            Trenutno sluzi kao validna PrimeVue osnova za dalji razvoj
            kontaktnog toka.
          </p>
        </div>
      </template>
    </Card>

    <Card>
      <template #title>
        Posaljite upit
      </template>
      <template #content>
        <form
          class="space-y-4"
          @submit.prevent="submit"
        >
          <div class="grid gap-4 sm:grid-cols-2">
            <InputText
              v-model="form.name"
              placeholder="Ime i prezime"
              fluid
            />
            <InputText
              v-model="form.email"
              placeholder="Email adresa"
              fluid
            />
          </div>

          <Textarea
            v-model="form.message"
            placeholder="Opis projekta ili upita"
            rows="7"
            fluid
          />

          <div class="flex flex-wrap items-center gap-3">
            <Button
              type="submit"
              label="Sacuvaj test unos"
              rounded
            />
            <span class="text-sm text-surface-500">Povezite ovu formu na stvarni endpoint kada budete spremni.</span>
          </div>

          <Message
            v-if="submitted"
            severity="success"
            :closable="false"
          >
            Forma radi kao razvojni scaffold. Sljedeci korak je povezivanje sa
            backend obradom.
          </Message>
        </form>
      </template>
    </Card>
  </div>
</template>
