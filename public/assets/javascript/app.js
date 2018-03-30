
function displayNote(e) {
    e.preventDefault();
    var thisId = $(this).attr("value");
  
    // Now make an ajax call for the Article
    $.ajax({
      method: "GET",
      url: "/save/" + thisId
    })
      // With that done, add the note information to the page
      .then(function(data) {
        console.log(data);
        console.log(thisId);
        if (data.note) {
            $("#noteTitle").val(data.note.title);
            $("#noteBody").val(data.note.body);
            
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
        window.location.href = "/saved";
    })
}
// Save Note button in modal
$("#addNote").on("click", newNote);
//Edit Note button on saved page 
$(".editNote").on("click", displayNote);