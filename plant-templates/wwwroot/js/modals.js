$(document).ready(function () {

    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("new-week-button");

    // Save the new week button
    var save = document.getElementById("save-new-week");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    btn.onclick = function () {
        modal.style.display = "block";
    };

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };

    save.onclick = function () {

        var newDescription = JSON.stringify({
            "weekDescription": $("#week-name").val()
        });

        // Load all weeks by default on page load       
        $.ajax({
            type: "GET",
            url: "/api/home/AddNewWeek",
            data: newDescription,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                loadAllWeeks();
            },
            failure: function (data) {
                console.log('fail');
            },
            error: function (data) {
                console.log('error');
            }
        });

    };

});