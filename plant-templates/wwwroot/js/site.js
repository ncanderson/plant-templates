$(document).ready(function() {

    // Load all weeks by default on page load       
    $.ajax({  
        type: "GET",  
        url: "/api/home/GetAllWeeks",
        contentType: "application/json; charset=utf-8",  
        dataType: "json",  
        success: function (data) {  
            console.log(data);
        },
        failure: function (data) {  
            console.log('fail');
        },
        error: function (data) {
            console.log('error');
        }
    });

});