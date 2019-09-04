$(document).ready(function() {

  // Set the upper right box to the first letter of the tree name
  $('#tree-name').blur(function () {
    $('#first-letter-capitalized').text($('#tree-name').val().charAt(0).toUpperCase());
    $('#display-tree-name').text($('#tree-name').val());
  });

  $('#common-name').blur(function () {
      $('#display-common-name').text($('#common-name').val());
  });

  // Nativity
  $('#nativity-select').change(function() {

    var nativity = $('#nativity-select').val();

    $('#nativity').text(nativity);

    updateTreeDetails('nativity', nativity);
  });

  // Dominance
  $('#dominance-select').change(function() {

    var dominance = $('#dominance-select').val();

    $('#dominance').text(dominance);
    
    updateTreeDetails('dominance', dominance);
  });

  // Invasive
  $('#invasive-select').change(function() {

    var invasiveness = $('#invasive-select').val()

    if (document.getElementById('invasive-select').checked) {
      $('#invasiveness').text(invasiveness);
      updateTreeDetails('invasiveness', invasiveness);
    }
    else {
      $('#invasiveness').text('');
      updateTreeDetails('invasiveness', '');
    } 
  });

  var concatenatedTreeDetails = {
    'nativity': null,
    'dominance': null,
    'invasiveness': null
  };  

  function updateTreeDetails (key, value) {
    
    concatenatedTreeDetails[key] = value;

    var treeDetails = Object.keys(concatenatedTreeDetails).map(function(k){
      if (concatenatedTreeDetails[k] == null) {
        return
      }
      else {
        return concatenatedTreeDetails[k]
      }
    });

    $('#tree-details').text($.grep(treeDetails, Boolean).join(", "));
    
  }
  
});