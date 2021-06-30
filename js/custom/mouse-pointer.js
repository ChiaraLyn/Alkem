/*=============================================
=            Mouse Pointer           =
=============================================*/

// tracking the mouse mouvement for the #pointer element
var cursor = document.getElementById('pointer');
document.addEventListener('mousemove', function (e) {
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.left = x + 'px';
  cursor.style.top = y + 'px';

})

// every element that has the hover-this class provoques the effect of the over class of the pointer
$(document).ready(function () {
  $(".hover-this").mouseover(function () {
    $('#pointer').addClass("over");
  });
  $("body *").mouseleave(function () {
    $('#pointer').removeClass("over");
  });
});
