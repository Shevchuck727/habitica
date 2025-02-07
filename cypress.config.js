const { defineConfig } = require("cypress");

// Примусово встановлюємо NODE_ENV перед імпортом Webpack-конфігурації
process.env.NODE_ENV = process.env.NODE_ENV || "development";

const webpackConfig = require("./node_modules/react-scripts/config/webpack.config");

module.exports = defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
      webpackConfig: webpackConfig(process.env.NODE_ENV),
    },
    supportFile: "cypress/support/component.js", // ✅ Перемістив всередину `component`
    specPattern: "cypress/component/**/*.cy.{js,jsx,ts,tsx}", // 🔹 Додано підтримку TypeScript
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
