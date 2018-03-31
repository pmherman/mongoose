$(document).ready(function() {
    function displayNote(e) {
        e.preventDefault();
        $("#noteTitle").val("");
        $("#noteBody").val("");
        var thisId = $(this).attr("value");
        console.log("ID: " + this.id);    
        $.ajax({
        method: "GET",
        url: "/save/" + thisId
        })
        .then(function(data) {
            $(".modalTitle").html("<h4>" + data.headline + "</h4>");
            if (data.note) {
                $("#noteTitle").val(data.note.title);
                $("#noteBody").val(data.note.body);
            } 
        });

    }

    function newNote(e) {
        var thisId = $(".editNote").attr("value");
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