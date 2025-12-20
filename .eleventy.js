const fs = require("fs");
const path = require("path");

module.exports = function (eleventyConfig) {
  eleventyConfig.addGlobalData("permalink", "{{ page.filePathStem }}.html");

  eleventyConfig.addPassthroughCopy("./src/assets/css/");
  eleventyConfig.addWatchTarget("./src/assets/css/");
  eleventyConfig.addPassthroughCopy("./src/assets/js/");
  eleventyConfig.addWatchTarget("./src/assets/js/");

  const filepath = path.join(__dirname, "src", "_data", "links.json");
  
  const stats = fs.statSync(filepath);
  eleventyConfig.addGlobalData("linksLastModified", stats.mtime.toISOString());

  return {
    dir: {
      input: "src",
      output: "loveberry.nekoweb.org",
    },
  };
};
