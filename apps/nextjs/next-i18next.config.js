// next-i18next.config.js
module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "de"],
    domains: [
      {
        domain: "localhost:3001",
        defaultLocale: "en",
        http: true,
      },
      {
        domain: "de.localhost:3001",
        defaultLocale: "de",
        http: true,
      },
    ],
  },
  reloadOnPrerender: process.env.NODE_ENV === "development",
};
