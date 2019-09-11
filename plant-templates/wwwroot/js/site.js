$(document).ready(function() {

    // Load all weeks by default on page load       
    $.ajax({  
        type: "GET",  
        url: "/api/home",
        contentType: "application/json; charset=utf-8",  
        dataType: "json",  
        success: function () {  
            console.log('here');
            console.log('are we serious?');
        },
        failure: function (data) {  
            console.log('fail');
        },
        error: function (data) {
            console.log('error');
        }
    });

});