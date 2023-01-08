const pluginRss = require("@11ty/eleventy-plugin-rss");
// const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
    // Plugins
    eleventyConfig.addPlugin(pluginRss);

    // Passthrough
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("js");
    eleventyConfig.addPassthroughCopy("img");

    // Format Dates
    // config.addFilter("asPostDate", (dateObj) => {
    //     return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATETIME_MED_WITH_WEEKDAY);
    // });

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