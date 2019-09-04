$(document).ready(function() {

  // Set up dragon drop event listeners for images
  // Get all image drop areas
  var imageDropAreas = document.getElementsByClassName("img-drop-area");

  for (var i = 0; i < imageDropAreas.length; i++) {
    imageDropAreas[i].addEventListener("dragenter", dragenter, false);
    imageDropAreas[i].addEventListener("dragover", dragover, false);
    imageDropAreas[i].addEventListener("drop", drop, false);

    // Style the drag area when things are dragged in and out
    ;['dragenter', 'dragover'].forEach(eventName => {
      imageDropAreas[i].addEventListener(eventName, highlight, false)
    })

    ;['dragleave', 'drop'].forEach(eventName => {
      imageDropAreas[i].addEventListener(eventName, unhighlight, false)
    })

  }

  // Event-based styles for dragging in and out
  function highlight(e) {
    e.currentTarget.classList.add('highlight')
  }

  function unhighlight(e) {
    e.currentTarget.classList.remove('highlight')
  }

  // Prevent defaults
  function dragenter(e) {
    e.stopPropagation();
    e.preventDefault();
  }

  function dragover(e) {
    e.stopPropagation();
    e.preventDefault();
  }

  // Get the event and pass to file processor
  function drop(e) {
    e.stopPropagation();
    e.preventDefault();

    var dt = e.dataTransfer;  // get DataTransfer object
    var file = dt.files[0];      // get the file from the DT object

    // Get the descendant image tag adding the image URL to
    var targetImgElement = $(e.currentTarget).find('.uploaded-image');

    handleFile(file, targetImgElement);
  }

  // Handle dropped image
  function handleFile(file, targetImgElement) {

    var reader  = new FileReader();

    reader.addEventListener("load", function () {
      targetImgElement.attr("src", reader.result);
      targetImgElement.removeClass('hide-element');
    }, false);

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  // Iterate through input containers on print
  var inputContainers = document.getElementsByClassName("input-container");

  window.onbeforeprint = function() {

    // Check for un-modified boxes
    if ($('#nativity-select').val() === 'default' ||
      $('#nativity-select').val() === "") {
      alert('You forgot to select "Native", "Non-Native" or "Invasive" you turkey!');
    }

    // Check for non-modified containers
    for (var i = 0; i < inputContainers.length; i++) {
      
      var uploadedImageSrc = $(inputContainers[i]).find('.uploaded-image').attr('src');
      var uploadedImageText = $(inputContainers[i]).find('.text-entry').html();

      // Hide if empty
      if (uploadedImageSrc === "" && uploadedImageText === "") {
        $(inputContainers[i]).addClass('hide-element');
      }
            
    }

    // Remove dashed borders
    for (var i = 0; i < imageDropAreas.length; i++) {      
      $(imageDropAreas[i]).removeClass('dash-border');
    }

  };

  window.onafterprint = function() {
    
    for (var i = 0; i < imageDropAreas.length; i++) {
      $(imageDropAreas[i]).addClass('dash-border');
    }      

    for (var i = 0; i < inputContainers.length; i++) {
      $(inputContainers[i]).removeClass('hide-element');
    }
  };

});