/*=============================================
=          Menu           =
=============================================*/
let path = window.location.pathname;

if(path!='"/projects/alkem/index.php"') {
//with attr we can override the inline style of menu_container when we're in other pages instead of intro (it is set on display none for the blurIn effect in intro)
$("#menu_container").attr("style", "display: inline-flex; position: relative");
}
/*=====  Menu  ======*/