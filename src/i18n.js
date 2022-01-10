import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEn from './locale/en/common'
import translationFr from './locale/fr/common'


i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: translationEn },
            fr: { translation: translationFr }
        },
        fallbackLng: 'en',
        lng: 'en',
        interpolation: {
            escapeValue: false,
        }
    });


export default i18n;