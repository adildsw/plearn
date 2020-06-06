$(document).ready(function() {
  var colors = [
    "#39CCCC",
    "#3D9970",
    "#7FDBFF"
  ];

  // Setting Random Body Background Color
  var colorIdx = Math.floor(Math.random() * colors.length);
  $("body").css("background-color", colors[colorIdx]);

});
