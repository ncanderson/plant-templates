$(document).ready(function() {

    loadAllWeeks = function () {
        // Load all weeks by default on page load       
        $.ajax({
            type: "GET",
            url: "/api/home/GetAllWeeks",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                for (var i = 0; i < data.length; i++) {
                    $("#week-selector").append("<option value='" + data[i].week_id + "'>" + data[i].description + "</option>");
                }
            },
            failure: function (data) {
                console.log('fail');
            },
            error: function (data) {
                console.log('error');
            }
        })
    };

    loadAllWeeks();

});