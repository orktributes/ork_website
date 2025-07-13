const { feedPlugin } = require("@11ty/eleventy-plugin-rss");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy("./src/robots.txt");
  eleventyConfig.addShortcode("localedate", function () {
    return new Date().toLocaleDateString()
  })

  eleventyConfig.addPlugin(feedPlugin, {
    type: "atom",
    outputPath: "/feed.xml",
    collection: {
      name: "posts",
      limit: 10,
    },
    metadata: {
      language: "en",
      title: "orktributes website feed",
      subtitle: "",
      base: "https://orktributes.github.io/",
      author: {
        name: "orktributes",
        email: "", // Optional
      }
    }
  });

  return {
    dir: {
      input: "src",
      output: "orktributes.github.io",
    }
  };
};