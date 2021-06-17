$(document).ready(function (){
  var toggle = "#pink-toggle-icon";
  var toggleMenu = ".navbar-toggle-menu";
  
  $(toggle).show();
  
  $(toggle).click(function(){
    $(toggleMenu).toggle();
  });
});