/* eslint-disable @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access */
module.exports = (api) => {
  api.cache(true);

  return {
    presets: [
      ["@babel/preset-env", { targets: { node: "current" } }],
      "@babel/preset-typescript",
      "babel-preset-expo",
    ],
    plugins: [
      [
        "react-native-reanimated/plugin",
        {
          globals: ["__scanOCR"],
        },
      ],
    ],
  };
};
