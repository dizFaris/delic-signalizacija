import { definePreset } from '@primeuix/themes'
import Aura from '@primeuix/themes/aura'

const DelicAuraPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#fff6eb',
      100: '#ffead1',
      200: '#ffd29f',
      300: '#ffb45f',
      400: '#fc9619',
      500: '#e98407',
      600: '#c96c00',
      700: '#a55605',
      800: '#85460d',
      900: '#6d3a0f',
      950: '#3b1d05'
    }
  }
})

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/ui', '@primevue/nuxt-module'],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/ui.css', '~/assets/css/main.scss', 'primeicons/primeicons.css'],

  routeRules: {
    '/': { prerender: true },
    '/serices': { redirect: '/services' }
  },

  compatibilityDate: '2025-01-15',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  primevue: {
    options: {
      ripple: true,
      inputVariant: 'filled',
      theme: {
        preset: DelicAuraPreset
      }
    },
    components: {
      include: ['Button', 'Card', 'Drawer', 'InputText', 'Message', 'Tag', 'Textarea']
    },
    composables: {
      exclude: ['useConfirm', 'useDialog', 'useToast']
    }
  }
})
