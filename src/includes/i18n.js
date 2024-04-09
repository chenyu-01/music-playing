import { createI18n } from 'vue-i18n'
import en from '@/locales/en.json'
import cn from '@/locales/cn.json'
export default createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    cn,
  },
  numberFormats: {
    en: {
      currency: {
        style: 'currency',
        currency: 'USD',
      },
    },
    cn: {
      currency: {
        style: 'currency',
        currency: 'CNY',
      },
    },
  },
})
