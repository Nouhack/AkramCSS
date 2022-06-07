//const purgecss = require("@fullhuman/postcss-purgecss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const animation = require("postcss-animation");
module.exports = {
  plugins: [
    animation,
    cssnano({
      preset: "default",
    }),
    autoprefixer,
  ],
};
