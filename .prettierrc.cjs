/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */
module.exports = {
  pluginSearchDirs: false,
  plugins: [
    require("prettier-plugin-packagejson"),
    require("@ianvs/prettier-plugin-sort-imports"),
  ],
  // @ianvs/prettier-plugin-sort-imports
  importOrder: [
    "",
    "<BUILTIN_MODULES>",
    "",
    "<THIRD_PARTY_MODULES>",
    "",
    "^\\.",
  ],
  importOrderTypeScriptVersion: "4.0.0",
};
