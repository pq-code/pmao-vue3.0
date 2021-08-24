module.exports = {
  pages: {
    index: {
      entry: "src/main.js",
      template: "public/index.html",
      filename: "index.html",
    },
  },

  // 强制内联CSS
  css: { extract: false },

  // 扩展 webpack 配置，使 packages 加入编译
  // chainWebpack: (config) => {
  //   config.module
  //     .rule("ts")
  //     .include.add("/packages")
  //     .end()
  //     .use("babel")
  //     .loader("babel-loader")
  //     .tap((options) => {
  //       // 修改它的选项...
  //       return options;
  //     });
  // },

  // pluginOptions: {
  //   "style-resources-loader": {
  //     preProcessor: "sass",
  //     patterns: [],
  //   },
  // },
};
// module.exports = {
//   lintOnSave: false
// }