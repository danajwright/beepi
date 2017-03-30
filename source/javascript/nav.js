$(document).ready(function() {

  $('#drop-nav-expand').click(function(e) {
    $('#nav-dropdown').slideToggle('fast');
    e.preventDefault();
  });

  $('.nav-dropdown-item').click(function(e) {
    $('#nav-dropdown').slideToggle('fast');
    e.preventDefault();
  });


});