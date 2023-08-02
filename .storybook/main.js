const path = require("path");
const fs = require("fs");
const {
  merge
} = require("webpack-merge");
module.exports = {
  stories: ["../app/components/**/*.stories.js"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions"],
  framework: {
    name: "@storybook/nextjs",
    options: {}
  },
  webpackFinal: async config => {
    return merge(config, {
      resolve: {
        alias: {
          "@emotion/react": getPackageDir("@emotion/react")
        }
      }
    });
  },
  docs: {
    autodocs: true
  }
};
function getPackageDir(filepath) {
  let currDir = path.dirname(require.resolve(filepath));
  while (true) {
    if (fs.existsSync(path.join(currDir, "package.json"))) {
      return currDir;
    }
    const {
      dir,
      root
    } = path.parse(currDir);
    if (dir === root) {
      throw new Error(`Could not find package.json in the parent directories starting from ${filepath}.`);
    }
    currDir = dir;
  }
}