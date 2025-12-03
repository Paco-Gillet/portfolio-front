import { createI18n } from 'vue-i18n'

const messages = {
    fr: {
        home: 'Accueil',
        projects: 'Projets',
    },
    en: {
        home: 'Home',
        projects: 'Projects',
    }
}

const savedLocale = localStorage.getItem('user-locale')
    || navigator.language.split('-')[0]
    || 'fr';

const i18n = createI18n({
    legacy: false,
    locale: savedLocale,
    fallbackLocale: 'en',
    globalInjection: true,
    messages
})

export default i18n