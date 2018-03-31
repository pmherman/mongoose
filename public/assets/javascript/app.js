$(document).ready(function() {
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
    $(".col-lg-12").on("click", ".editNote", displayNote);
    //Refreshes page when scrape is executed
    $(document).on("click", "#scrapeDismiss", scrape);
});