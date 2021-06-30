/*=============================================
=            Index            =
=============================================*/

//to use the JQuery fadeIn effect i have to add the non-minified version of JQuery 3.5.0

//select the "Alkem" title
let titleIndex = document.querySelector('.titleIndex');

//add and remove hover effect on titleIndex
titleIndex.addEventListener('mouseover', function HoverTitleIndex() {
  titleIndex.style.color = '#808284';
  //titleIndex.style.color = '#fdf2b5'; ->sepia
});

titleIndex.addEventListener('mouseout', function destroyHover() {
  titleIndex.style.color = '#f3f3f3';
});

//WHIT THIS EVENTLISTENER:
// when click on "Alkem" h1 title this happens:
// 1. background video blur out |
// 2. "alkem" text goes away with cssanimation effect letter by letter |
// 3. menu appears with blur In effect |
// 4. arrow-right appears with blur In effect |
// 5. social-icons appear with blur In effect |
// 6. the two vertical lines near social icons appear with blur in effect |
// 7. a setTimeout function do other things:

titleIndex.addEventListener('click', function clickOnTitle() {
  $('#video_bg_index').addClass('cssanimation blurOut');
  $('.main_container').addClass('cssanimation leZoomOutRight sequence');
  $('#menu_container, #socialIcon_container, #direction_container, .vl, .vl2').addClass('cssanimation blurIn').fadeIn('4000');

  titleIndex.removeEventListener('click', clickOnTitle);

  //WITH THIS SETIMEOUT FUNCTION:
  // 7-1. new video appears with blurIn for "explore" page and it flows in removing the blur out |
  // 7-2. effect of the previous video |
  // 7-3. "explore" text appears with blur effect |
  // 7-4. add at h1 "explore" text an anchor to the production.php page |

  setTimeout(function() {
    $('#video_bg_index').removeClass('cssanimation blurOut');

    $('#video_bg_index').addClass('cssanimation blurIn').attr('src', 'video/smoke_ground.mp4');

    $('#titleIndex').addClass('cssanimation blurIn');

    $('#titleIndex').text('explore').fadeIn('slow').wrapInner('<a href="production.php" style="text-decoration: none; color: #fff2aa;"></a>');
  }, 2000);
});
