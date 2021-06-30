<?php         
  //find page name
  function curPageName() {
    $title = basename(pathinfo($_SERVER['PHP_SELF'])['basename'],".php");
    if ($title =='index') {
    $title = 'Alkem';
    }
    return $title;
  }  
?>


