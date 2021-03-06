const path = require("path");
const ip = require("ip");
const HOST_IP = ip.address();
const PORT = 9110;
const proxyHeaders = {
  "X-Forwarded-Proto": "https",
  "X-Forwarded-For": HOST_IP,
};
const resolve = (dir) => path.resolve(__dirname, dir);

/* idc34 */
const localUrl0 = "http://172.18.20.34:9100";
const localUrl1 = "http://172.18.20.35:9100";
const localUrl2 = "http://172.22.205.107:9100";
const localUrl3 = "http://172.22.205.89:9100";
const userUrl = "http://172.18.20.34:8700";

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  /** 区分打包环境与开发环境
   * process.env.NODE_ENV==='production'  (打包环境)
   * process.env.NODE_ENV==='development' (开发环境)
   * publicPath: process.env.NODE_ENV==='production'?"https://cdn.didabisai.com/front/":'front/',
   */
  // 项目部署的基础路径
  // 我们默认假设你的应用将会部署在域名的根部,
  // 例如 https://www.my-app.com/
  // 如果你的应用部署在一个子路径下，那么你需要在这里
  // 指定子路径。比如将你的应用部署在
  // https://www.foobar.com/my-app/
  // 那么将这个值改为 '/my-app/'
  // publicPath: "/",
  // 构建好的文件输出到哪里
  outputDir: "dist",
  // where to put static assets (js/css/img/font/...)
  // assetsDir: "",
  // 是否在保存时使用‘eslint-loader’进行检查 // 有效值: true | false | 'error' // 当设置为‘error’时，检查出的错误会触发编译失败
  lintOnSave: false,
  // 使用带有浏览器内编译器的完整构建版本 // https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
  runtimeCompiler: false,
  // babel-loader默认会跳过`node_modules`依赖. // 通过这个选项可以显示转译一个依赖
  transpileDependencies: [],
  // 是否为生产环境构建生成sourceMap?
  productionSourceMap: false,
  // 调整内部的webpack配置. // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  // chainWebpack通过链式编程的形式，来修改默认的webpack配置
  // chainWebpack: (config) => {
  //   config.resolve.alias.set("@", resolve("src"));
  // },
  // configureWebpack通过操作对象的形式，来修改默认的webpack配置
  configureWebpack: (config) => {
    config.resolve = {
      ...config.resolve,
      alias: {
        "@": resolve("src"),
      },
    };
    const plugins = [];
    plugins.push(
      new MiniCssExtractPlugin({
        ignoreOrder: true,
      })
    );
    config.plugins = [...config.plugins, ...plugins];
  },
  // CSS 相关选项
  css: {
    // 将组件内部的css提取到一个单独的css文件（只用在生产环境）
    // 也可以是传递给 extract-text-webpack-plugin 的选项对象
    extract: true,
    // 允许生成 CSS source maps?
    sourceMap: false,
    // pass custom options to pre-processor loaders. e.g. to pass options to // sass-loader, use { sass: { ... } }
    loaderOptions: {
      less: {
        javascriptEnabled: true, // 可以在less中使用js
      },
    },
    // Enable CSS modules for all css / pre-processor files. // This option does not affect *.vue files.
    // 默认情况下，只有 *.module.[ext] 结尾的文件才会被视作 CSS Modules 模块。
    // 设置为 false 后你就可以去掉文件名中的 .module 并将所有的 *.(css|scss|sass|less|styl(us)?) 文件视为 CSS Modules 模块。
    requireModuleExtension: true,
  },
  // use thread-loader for babel & TS in production build // enabled by default if the machine has more than 1 cores
  parallel: require("os").cpus().length > 1,
  // PWA 插件相关配置 // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  pwa: {
    iconPaths: {
      favicon32: "favicon.ico",
      favicon16: "favicon.ico",
      appleTouchIcon: "favicon.ico",
      maskIcon: "favicon.ico",
      msTileImage: "favicon.ico",
    },
  }, // configure webpack-dev-server behavior
  devServer: {
    disableHostCheck: false,
    host: "0.0.0.0",
    port: 8088,
    hot: true,
    // host: HOST_IP,
    // port: PORT,
    quiet: true,
    open: true,
    // openPage: "/",
    compress: true,
    historyApiFallback: true,
    inline: true,
    // https: true,
    // publicPath: "/",
    // hotOnly: false, // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#configuring-proxy
    proxy: {
      "/gateway": {
        target: userUrl,
        pathRewrite: function (path) {
          if (path.startsWith("/gateway")) {
            const newPath = path.substr("/gateway".length);
            return newPath;
          } else {
            return path;
          }
        },
        secure: false,
        changeOrigin: false,
        headers: proxyHeaders,
        logLevel: "debug",
      },
      "/api": {
        target: userUrl,
        secure: false,
        logLevel: "debug",
        headers: proxyHeaders,
      },
      "/cas": {
        target: userUrl,
        secure: false,
        changeOrigin: false,
        protocolRewrite: "https",
        autoRewrite: true,
        headers: proxyHeaders,
      },
      "/pierce": {
        target: localUrl1,
        secure: false,
        changeOrigin: false,
        ws: false, //如果要代理 websockets，配置这个参数
        logLevel: "debug",
      },
    },
    // before: app => {}
  },
  // 第三方插件配置
  pluginOptions: {
    // ...
  },
};
