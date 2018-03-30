var cheerio = require("cheerio");
var axios = require("axios");
var db = require(".././models");

const scraperScript = function(req, res) {
  axios.get("http://www.nytimes.com/").then(function(response) {
    var $ = cheerio.load(response.data);
    $("article").each(function(i, element) {
      var result = {};
      result.headline = $(this)
        .children(".story-heading")
        .text();
      result.url = $(this)
        .children("a")
        .attr("href");
      result.summary = $(this)
        .children(".summary")
        .text();

      db.Headline.create(result)
        .then(function(dbHeadline) {
          console.log(dbHeadline);
        })
        .catch(function(err) {
          return res.json(err);
        });
    });
    res.send("Scrape Complete");
  });
}

module.exports = scraperScript;