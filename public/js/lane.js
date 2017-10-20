$(document).ready(function(){
    var loadbox = $("#loadbox");
    var lane = $("#lane");
    var pickupdate = $("#exampleInputPassword1");
    var pickupnumber  = $("#pickupnumber");
    var poNumber = $("#poNumber");
    var additionalInfo = $("#additional_info");

    $(document).on("submit", "#sub", handleTruckloadFormSubmit);
    $(document).on("submit", "#delete", handleDeleteButtonPress);

    var url = window.location.search;
    var truckloadId;

    getTruckloads();

    function handleTruckloadFormSubmit(event){
        event.preventDefault();
        if (!lane.val().trim().trim()){
            return;
        }
        upsertTruckload({
            lane: lane,
            pickupdate = pickupdate,
            pickupnumber = pickupnumber,
            poNumber = poNumber,
            additionalInfo = additionalInfo
                .val()
                .trim()
        });
    }

    //Post to API page 
    function upsertTruckload(truckloadData) {
        $.post("/api/truckloads", truckloadData)
        .then(getTruckloads);
    }

    function renderTruckloads(rows) {
        lane.children().not(":last").remove();
        loadbox.children(":alert").remove();
        if(row.length){
            console.log(rows);
            loadbox.prepend(rows);
        }
        else{
            renderEmpty();
        }
    }

    function renderEmpty() {
        var alertDiv = $('<div>');
        alertDiv.addClass('alert alert-danger');
        alertDiv.text("You must enter all info in form to add a new truckload");
        loadbox.prepend(alertDiv);
    }

    function getTruckloads() {
        $.get("/api/truckloads", function(data){
            var rowsToAdd = [];
            for (var i = 0; i < data.length; index++) {
                rowsToAdd.push(createRow(data[i]));  
            }
            renderTruckloads(rowsToAdd);
            lane.val("");
            pickupdate.val("");
            pickupnumber.val("");
            pickupdate.val("");
            poNumber.val("");
            additionalInfo.val("");
        });
    }

    function handleDeleteButtonPress() {
        var listItemData = $(this).parent("td").data("loadbox");
        var id = listItemData.id;
        $.ajax({
            method: "DELETE",
            url: "/api/truckloads" + id
        })
        .done(getTruckloads);
    }
})