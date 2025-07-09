const { feedPlugin } = require("@11ty/eleventy-plugin-rss");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/assets");
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
      title: "porn",
      subtitle: "This is a longer description about your blog.",
      base: "http://localhost:8080/",
      author: {
        name: "Your Nam",
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