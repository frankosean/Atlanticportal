$(document).ready(function() {

    $("#delete").on("click", function(){
        function handleDeleteButtonPress() {
            var listItemData = $(this).parent("td").parent("tr").data("truckloads");
            var id = listItemData.id;
            $.ajax({
              method: "DELETE",
              url: "/api/truckloads/" + id
            })
            .done(truckLoadsJson);
          }
    });
})