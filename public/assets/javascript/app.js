$(document).on("click", "#scrapeModal", function(e) {
    e.preventDefault();
    $.ajax({ url: "/scrape" });
    console.log("Scrape Completed!");
});


function displayNote(event) {
	event.preventDefault();
	var id = $(this).attr("value");
	$("#addNote").attr("value", id);
	$.get("/" + id, function(data) {
		$.get("/note/" + id, function(data) {
			if (data) {
				$("#noteTitle").val(data.title);
				$("#noteBody").val(data.body);
            }
            window.location.href = "/saved";
		});
	});

}

function newNote(e) {
    e.preventDefault();
    var id=$(this).attr("value");
    console.log("id: " + id);
    var note = {
        title: $("#noteTitle").val().trim(),
        body: $("#noteBody").val().trim()
    };
    $.post("/note/" + id, note, function(data) {
        window.location.href = "/saved";
    })
}
// Save Note button in modal
$(document).on("click", "#addNote", newNote);
//Edit Note button on saved page 
$(document).on("click", ".editNote", displayNote);