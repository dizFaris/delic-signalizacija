import Aura from '@primeuix/themes/aura'

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
        preset: Aura
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
