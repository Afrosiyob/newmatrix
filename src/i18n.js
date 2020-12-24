import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
// don't want to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init

import en from "./locales/en/translation.json";
import uz from "./locales/uz/translation.json";
import ru from "./locales/ru/translation.json";

i18n
  // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-http-backend
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: "en",
    debug: true,
    whitelist: ["uz", "ru", "en"],
    resources: {
      en: {
        // translation is the default namespace
        translation: en,
      },
      es: {
        translation: ru,
      },
      zh: {
        translation: uz,
      },
    },
    detection: {
      // order and from where user language should be detected
      order: [
        "querystring",
        "cookie",
        "localStorage",
        "sessionStorage",
        "navigator",
        "htmlTag",
        "path",
        "subdomain",
      ],

      // keys or params to lookup language from
      lookupQuerystring: "lng",
      lookupCookie: "i18next",
      lookupLocalStorage: "i18nextLng",
      lookupSessionStorage: "i18nextLng",
      lookupFromPathIndex: 0,
      lookupFromSubdomainIndex: 0,

      // cache user language on
      caches: ["localStorage", "cookie"],
      excludeCacheFor: ["cimode"], // languages to not persist (cookie, localStorage)

      // optional expire and domain for set cookie
      cookieMinutes: 10,
      cookieDomain: "myDomain",

      // optional htmlTag with lang attribute, the default is:
      htmlTag: document.documentElement,

      // optional set cookie options, reference:[MDN Set-Cookie docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie)
      cookieOptions: { path: "/", sameSite: "strict" },
      // only detect languages that are in the whitelist
      checkWhitelist: true,
    },

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
