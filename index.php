<?php include 'include/head.php'; ?>

<body>

  <?php //when i click on titleIndex, js-custom apply a cssanimation class at this main-container to zoom out letters
  ?>
  <div class="main_container" id="#main_container">

    <?php //main menu
    ?>
    <?php include 'include/menu.php'; ?>

    <?php //Video background
    ?>

    <video autoplay="autoplay" loop="true" mute="true" preload="auto" id="video_bg_index">
      <source src="video/smoke_slow1.mp4" type="video/mp4">
    </video>

    <?php //Preloader
    ?>
    <div class="preloader" id="preloader">
      <div class="spinner">
        <div class="dot1"></div>
        <div class="dot2"></div>
      </div>
    </div>

    <?php //Mouse pointer
    ?>
    <div id="pointer" class="pointer"></div>

    <?php //TitleIndex
    ?>
    <div class="title_index_container scale-in-center" id="container-title">
      <h1 class="cssanimation leScaleYIn sequence titleIndex hover-this" id="titleIndex">Alkem</h1>
    </div>

    <?php //Social icons appear only when click on titleIndex |icons from iconset feather | the two vertical lines are div's border
    ?>
    <div class="socialIcon_container" id="socialIcon_container" style="display: none;">
      <div class="vl" style="display: none;"></div>
      <div id="facebook"><a href="#"><img src="./img/icons/social/facebook.svg" alt="facebook icon" width="30"
            height="30" class="hover-this"></a>
      </div>
      <div id="twitter"><a href="#"><img src="./img/icons/social/twitter.svg" alt="twitter icon" width="30" height="30"
            class="hover-this"></a>
      </div>
      <div id="instagram"><a href="#"><img src="./img/icons/social/instagram.svg" alt="instagram icon" width="30"
            height="30" class="hover-this"></a>
      </div>
      <div class="vl2" style="display: none;"></div>

    </div>

    <?php //Arrow right appear only when click on titleIndex
    ?>
    <div class="direction_container" id="direction_container" style="display: none;">
      <div class="arrow_right hover-this">
        <a href="production.php"><img src="./img/icons/arrow-right.svg" alt="arrow-right" width="50" height="50"></a>
      </div>
    </div>

  </div>

  <?php include 'include/index-end-page.php'; ?>
</body>

</html>