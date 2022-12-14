const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        // 按需加载
        //false 不对当前的JS做polyfill填充
        //usage 依据用户当前使用的新语法填充
        //entry 依据我们筛选的浏览器填充
        useBuiltIns: "usage",
        // 指定core-js版本，默认是 2 会报错
        corejs: 3,
      },
    ],
    // 解析react，typescript
    ["@babel/preset-react", "@babel/preset-typescript"],

    // '@babel/preset-typescript',
    // '@emotion/babel-preset-css-prop',
  ],
  plugins: [
    // 使用transform-runtime，避免全局污染，注入helper
    [
      "@babel/transform-runtime",
      {
        regenerator: true,
      },
    ],
    [
      "@babel/plugin-proposal-decorators",
      {
        legacy: true,
      },
    ],
    ["@babel/plugin-proposal-class-properties", { loose: true }],
    [
      "import",
      {
        libraryName: "antd",
        libraryDirectory: "es",
        style: "css", // `style: true` 会加载 less 文件
      },
    ],
  ],

  plugins: [[isDevelopment && require.resolve("react-refresh/babel")].filter(Boolean)],
};
