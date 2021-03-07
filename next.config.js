const { i18n } = require("./next-i18next.config");

module.exports = {
  i18n,
  async rewrites() {
    return [{ source: "/tr/hakkimizda", destination: "/about", locale: false }];
  },
  async redirects() {
    return [
      {
        source: "/tr/about",
        destination: "/tr/hakkimizda",
        locale: false,
        permanent: true,
      },
    ];
  },
};
