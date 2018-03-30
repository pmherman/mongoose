$(document).on("click", "#scrapeModal", function(e) {
    e.preventDefaults();
    $.ajax({ url: "/scrape" });
    console.log("Scrape Completed!");
});