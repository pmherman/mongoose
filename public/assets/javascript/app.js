$("#scrapeModal").on("click", function(e) {
    e.preventDefaults();
    $.ajax({ url: "/scrape" });
});