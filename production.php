<?php include 'include/head.php'; ?>

<body style="overflow-y: auto;">

  <div class="production_main_container">

    <?php //Main menu
    ?>
    <?php include 'include/menu.php'; ?>

    <?php //Preloader
    ?>
    <div class="preloader">
      <div class="spinner">
        <div class="dot1"></div>
        <div class="dot2"></div>
      </div>
    </div>

    <?php //Mouse pointer
    ?>
    <div id="pointer" class="pointer_prod"></div>

    <?php //Scroll to Top Button
    ?>
    <button id="scrollTop" class="scrollTop hover-this floating"><i class="fas fa-1x fa-arrow-up"></i></button>


    <main>

      <?php //INTRO section
      ?>
      <?php include 'include/production/intro-section.php'; ?>

      <?php //PARALLAX section
      ?>
      <?php include 'include/production/parallax-section.php'; ?>

      <?php //ISOTOPE gallery
      ?>
      <?php include 'include/production/isotope-gallery.php'; ?>

    </main>


    <?php // TEAM section
    ?>
    <?php include 'include/production/team-description.php'; ?>


    <?php // Team CAROUSEL section
    ?>
    <?php include 'include/production/carousel.php'; ?>


    <?php // SOCIAL section
    ?>
    <?php include 'include/production/social.php'; ?>


  </div>

  <?php include 'include/cookie.php'; ?>
  <?php include 'include/production/production-end-page.php'; ?>

</body>

</html>