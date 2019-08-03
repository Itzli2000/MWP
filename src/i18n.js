import i18n from "i18next";
import { reactI18nextModule } from "react-i18next";

import translationEN from './transaltions/en.json';
import translationES from './transaltions/es.json';

const resources = {
  en: {
    translation: translationEN
  },
  es: {
    translation: translationES
  }
};

i18n
  .use(reactI18nextModule)
  .init({
    resources,
    lng: "es",

    keySeparator: false,

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;