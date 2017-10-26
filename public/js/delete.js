//var truckloads = "heroku_1e1a3ef17e3ba90"

$(document).ready(function() {

    $("#delete").on("click", function(){
        function handleDeleteButtonPress() {
            var listItemData = $(this).parent("td").parent("tr").data("truckloads");
            var id = listItemData.id;
            $.ajax({
              method: "DELETE",
              url: "/api/truckloads/" + id
            })
            .done(heroku_1e1a3ef17e3ba90Json);
          }
    });
})