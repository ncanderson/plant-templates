$(document).ready(function() {

  // event listener on text area
  // on focus, add highlighted to the selected elements parent

  var textAreas = document.getElementsByClassName("text-entry");

  for (var i = 0; i < textAreas.length; i++) {

//    textAreas[i].addEventListener('blur', textAreaBlur, false);
    textAreas[i].addEventListener('mouseover', textAreaHover, false);
    textAreas[i].addEventListener('mouseout', textAreaDehover, false);
    

    // // Style the drag area when things are dragged in and out
    // ;['dragenter', 'dragover'].forEach(eventName => {
    //   textAreas[i].addEventListener(eventName, highlight, false)
    // })

    // ;['dragleave', 'drop'].forEach(eventName => {
    //   textAreas[i].addEventListener(eventName, unhighlight, false)
    // })
  }

  function textAreaBlur(e) {
   
  $.each($._data($('.text-entry').get(0), 'events'), function() {
      // iterate registered handler of original
      $.each(this, function() {
        console.log(this);  
        //$('#target').bind(this.type, this.handler);
    });
  });

    $(e.currentTarget).replaceWith($('<div class="text-entry">' + e.currentTarget.value + '</div>')); 

  }

  function textAreaHover(e) {

    if ($('e.currentTarget').is('div')) {
      $(e.currentTarget).siblings('span, .edit-button').removeClass('hide-element');
    }

   // $(e.currentTarget).replaceWith('<textarea class="text-entry">' + $(e.currentTarget).text() + '</textarea>'); 
  }

  function textAreaDehover(e) {
    $(e.currentTarget).siblings('span, .edit-button').addClass('hide-element');
   // $(e.currentTarget).replaceWith('<textarea class="text-entry">' + $(e.currentTarget).text() + '</textarea>'); 
  }

});