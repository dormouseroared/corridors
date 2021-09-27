const util = require('util')

const blogTools = require("eleventy-plugin-blog-tools")


const pluginDate = require("eleventy-plugin-date")

module.exports = function (eleventyConfig) {

  // start of related posts

  // https://www.raymondcamden.com/2021/09/24/creating-a-manual-related-posts-feature-in-eleventy

  // the article has link to github
  // these new filters are used in post-raymond.liquid 
  // post.njk remains unaltered
  // wildlife-corridor-act.md was amended to use this new layout
  // more work is needed to understand and complete the new layout
  // the idea is to have the new layout include the old
  // in the meantime, all posts will use the existing layout
  // note the dtFormat filter results in a US format display
  // but it was a useful test and it has the const right next to it
  // rather than being before the module.exports

  const english = new Intl.DateTimeFormat("en")

  eleventyConfig.addFilter("dtFormat", function(date) {
    return english.format(date)
  })

  eleventyConfig.addFilter("getRelated", function(relatedPosts, all) {
    /*
      relatedPosts is an array of filePathStems
      return an array of page obs that match
    */

    return all.filter(p => {
      return relatedPosts.includes(p.filePathStem)
    })
  })

  // end of related posts



  eleventyConfig.addPlugin(blogTools)

  eleventyConfig.addPlugin(pluginDate)

  eleventyConfig.addFilter('dump', obj => {
    return util.inspect(obj)
  })

}


