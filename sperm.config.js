const image = require("@rollup/plugin-image");
module.exports = {
  rollup: {
    inPlugins: [image()],
  },
};
