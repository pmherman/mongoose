
function displayNote(e) {
    e.preventDefault();
    var thisId = $(this).attr("value");
  
    $.ajax({
      method: "GET",
      url: "/save/" + thisId
    })
      .then(function(data) {
        if (data.note) {
            $(".modalTitle").html("<h4>" + data.headline + "</h4>");
            $("#noteTitle").val(data.note.title);
            $("#noteBody").val(data.note.body);
            console.log("Title: " + data.headline);
            console.log("ID: " + thisId);
            console.log("noteTitle: " + data.note.title);
        }
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
    })
}
// Save Note button in modal
$(document).on("click", "#addNote", newNote);
//Edit Note button on saved page 
$(document).on("click", ".editNote", displayNote);