$(document).ready(function() {

    console.log('on init');

    $.ajax({
        type: "POST",
        url: "../FeedGeneratorService.svc/JSON/Session",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(data),
        dataType: "json",
        processData: true,
        success: function (data, textStatus, xhr) {
            if (data.isUser) {
                $("#loginContainer").hide();
                $("#root").show();
                $(".hiddenButton").show();
            }
            else {
                DevExpress.ui.dialog.alert('Username or Password are incorrect, please try again', 'Invalid Credentials');
            }
        },
        error: function (xhr) {
        }
    });

});