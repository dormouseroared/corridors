const util = require('util')

const blogTools = require("eleventy-plugin-blog-tools");


const pluginDate = require("eleventy-plugin-date");

module.exports = function (eleventyConfig) {

    eleventyConfig.addPlugin(blogTools);

  eleventyConfig.addPlugin(pluginDate);

  eleventyConfig.addFilter('dump', obj => {
    return util.inspect(obj)
  });

};


