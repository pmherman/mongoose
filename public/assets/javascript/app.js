$(document).ready(function() {
    function displayNote(e) {
        e.preventDefault();
        $("#noteTitle").val("");
        $("#noteBody").val("");
        console.log("ID: " + this.id);
        thisId = this.id;    
        $.ajax({
        method: "GET",
        url: "/save/" + this.id
        })
        .then(function(data) {
            $(".modalTitle").html("<h4>" + data.headline + "</h4>");
            $("#hiddenIdValue").val(thisId);
            if (data.note) {
                $("#noteTitle").val(data.note.title);
                $("#noteBody").val(data.note.body);
            } 
        });

    }

    function newNote(e) {
        var thisId = $("#hiddenIdValue").val();
        console.log("id: " + this.Id);
        $.ajax({
            method: "POST",
            url: "/note/" + thisId,
            data: {
              title: $("#noteTitle").val(),
              body: $("#noteBody").val()
            }
          })
          .then(function(data) {
          });
    };

    function scrape(e) {
        e.preventDefault();
        location.reload();
        console.log("page reloaded");
    }

    // Save Note button in modal
    $(document).on("click", "#addNote", newNote);
    //Edit Note button on saved page 
    $(document).on("click", ".editNote", displayNote);
    //Refreshes page when scrape is executed
    $(document).on("click", "#scrapeDismiss", scrape);
});