const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  webpackFinal: async (config) => {
    config.resolve.plugins.push(new TsconfigPathsPlugin({}));
    return config;
  },
  "stories": [
    "../src/**/*.stories.@(js|jsx|ts|tsx)",

    // TODO: delete this once all stories are moved into feature folders
    // "../stories/**/*.stories.mdx",
    // "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    'storybook-css-modules-preset',
  ]
}