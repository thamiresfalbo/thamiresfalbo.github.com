const pluginRss = require("@11ty/eleventy-plugin-rss");
const { DateTime } = require("luxon");
const _ = require("lodash");

module.exports = function(eleventyConfig) {
    // Plugins
    eleventyConfig.addPlugin(pluginRss);

    // Passthrough
    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addPassthroughCopy("src/js");
    eleventyConfig.addPassthroughCopy("src/img");

    // Format Dates
    eleventyConfig.addFilter("asPostDate", dateObj => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    });

    // Group blog posts by year
    // Source: https://darekkay.com/blog/eleventy-group-posts-by-year/
    eleventyConfig.addCollection("postsByYear", (collection) => {
        return _.chain(collection.getAllSorted())
            .groupBy((post) => post.date.getFullYear())
            .toPairs()
            .reverse()
            .value();
    });

    return {
        dir: {
            input: "src",
            output: "dist",
            includes: "includes",
            layouts: "includes/layouts"
        },
        templateFormats: ['njk', 'md', '11ty.js'],
        htmlTemplateEngine: 'njk',
        markdownTemplateEngine: 'md'
    }
}