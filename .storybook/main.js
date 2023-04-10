module.exports = {
<<<<<<< HEAD
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../components/**/**/*.stories.js",
  ],
=======
  stories: ["../components/**/*.stories.js"],
>>>>>>> 8e22d05bdcf5110acb964def437f8742fd034e72
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  webpackFinal: async (config) => {
    return merge(config, {
      resolve: {
        alias: {
          "@emotion/react": getPackageDir("@emotion/react"),
        },
      },
    });
  },
};

function getPackageDir(filepath) {
  let currDir = path.dirname(require.resolve(filepath));
  while (true) {
    if (fs.existsSync(path.join(currDir, "package.json"))) {
      return currDir;
    }
    const { dir, root } = path.parse(currDir);
    if (dir === root) {
      throw new Error(
        `Could not find package.json in the parent directories starting from ${filepath}.`
      );
    }
    currDir = dir;
  }
}
