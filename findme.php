<?php include 'include/head.php'; ?>

<body style="overflow-y: auto;">
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
  <div id="pointer" class="pointer_find"></div>

  <?php //Scroll to Top Button
  ?>
  <button id="scrollTop" class="scrollTop hover-this"><i class="fas fa-1x fa-arrow-up"></i></button>

  <?php //Main content
  ?>

  <?php //Logo and Form section
  ?>
  <section class="find_logo_section">
    <?php //Left side
    ?>
    <div class="container-fluid">
      <div class="find_logo_left"></div>

      <div class="row first_row">
        <div class="col-12 col-sm-12 col-md-12 col-lg-6">

          <div class="title_find_left noselect">
            <h1>Alkem</h1>
            <h2>Art Gallery</h2>
          </div>

          <div class="img_find_container">
            <div class="img_find img_find_left1"></div>
            <div class="img_find img_find_left2"></div>
            <div class="img_find img_find_left3"></div>
          </div>
        </div>

        <?php //Right side
        ?>
        <?php //Form
        ?>
        <div class="col-12 col-sm-12 col-md-12 col-lg-6">

          <div class="contact-form">

            <div class="input-fields">
              <legend>Contact Alkem</legend>
              <form action="" method="post" id="form" onsubmit="return false;">

                <input type="text" class="input" name="nome" id="nome" placeholder="Name" onKeyup="checknome()">
                <div class="error" id="errornome">Only letters are allowed</div>

                <input type="email" class="input" email="email" id="email" placeholder="Email" required
                  onKeyup="checkmail()">
                <div class="error" id="errormail">Please, check your email</div>

                <div class="privacy">
                  <div class="check_div">
                    <div class="form-check chickyboxes">
                      <input type="checkbox" id="box-1" name="checkbox" required onChange="checkprivacy()">
                      <label for="box-1">I accept Privacy Terms</label>
                      <div class="error" id="errorprivacy">Please, accept privacy</div>
                    </div>
                  </div>
                </div>

            </div>

            <div class="msg">
              <textarea placeholder="Message" id="messaggio" name="messaggio" onKeyup="checkmessaggio()"></textarea>
              <div class="error" id="errormessaggio">No special characters allowed</div>

              <button class="btn btn_form hover-this" name="submit" id="send" value="Contattaci" disabled="disabled"
                onclick="sweetalert();">Send</button>
            </div>

            </form>

          </div>
        </div>

      </div>

    </div>
  </section>

  <section id="footer">
    <div class="container">
      <div class="row">

        <div class="col-12-col-sm-12 col-md-4 col-lg-4" id="address">
          <address>
            <h4>Alkem Gallery</h4>
            <h6>Main Liver Str., 156</h6>
            <p>Liverpool</p>
          </address>
        </div>

        <div class="col-12-col-sm-12 col-md-4 col-lg-4">
          <div id="contacts">
            <div class="phone">
              <i class="fas fa-phone"></i><a href="tel:+44 54545 45 48" class="hover-this">+44 54545 45 48</a>
            </div>
            <div class="email">
              <i class="fas fa-envelope"></i><a href="mailto:alkem@alkem.com" class="hover-this">alkem@alkem.com</a>
            </div>
            <div class="social">
              <div id="facebook">
                <a href="#">
                  <img src="./img/icons/social/facebook.svg" alt="facebook icon" width="30"
                  height="30" class="hover-this">
                </a>
              </div>
              <div id="twitter">
                <a href="#">
                  <img src="./img/icons/social/twitter.svg" alt="twitter icon" width="30" height="30"
                  class="hover-this">
                </a>
              </div>
              <div id="instagram">
                <a href="#">
                  <img src="./img/icons/social/instagram.svg" alt="instagram icon" width="30"
                    height="30" class="hover-this">
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12-col-sm-12 col-md-4 col-lg-4">
          <div id="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d938091.8006635836!2d-4.120889713355091!3d53.44910054303899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487adf8a647060b7%3A0x42dc046f3f176e01!2sLiverpool%2C%20Regno%20Unito!5e0!3m2!1sit!2sit!4v1602184519603!5m2!1sit!2sit" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
          </div>
        </div>

      </div>
    </div>
  </section>


  <?php include 'include/cookie.php'; ?>
  <?php include 'include/find/find-end-page.php'; ?>

</body>

</html>