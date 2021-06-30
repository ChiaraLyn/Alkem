var nomeinvio = '';
var emailinvio = '';
var messaggioinvio = '';
var privacyinvio = '';

function checkinvio() {
  if (nomeinvio == 'ok' && emailinvio == 'ok' && messaggioinvio == 'ok' && privacyinvio == 'ok') {
    document.getElementById('send').disabled = false;
    document.getElementById('send').className = 'tastoinviosi';
  } else {
    document.getElementById('send').disabled = true;
    document.getElementById('send').className = 'btn_form';
  }
} //. check for submit

//check name
function checknome() {
  var nome = document.getElementById('nome').value;

  var caratteriammessi = /^([a-zA-Z\xE0\xE8\xE9\xF9\xF2\xEC\x27]\s?)+$/;

  if (caratteriammessi.test(nome) == false || nome == '' || nome == 'undefined') {
    document.getElementById('errornome').style.display = 'block';
    document.getElementById('nome').style.borderBottom = '1px solid red';

    nomeinvio = 'notok';
    checkinvio();
  } else {
    //.if nome

    document.getElementById('errornome').style.display = 'none';
    document.getElementById('nome').style.borderBottom = '1px solid #79a16b';

    nomeinvio = 'ok';
    checkinvio();
  } //.else
} //.checknome

//check email
function checkmail() {
  var email = document.getElementById('email').value;

  var email_valid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!email_valid.test(email) || email == '' || email == 'undefined') {
    document.getElementById('errormail').style.display = 'block';
    document.getElementById('email').style.borderBottom = '1px solid red';

    emailinvio = 'notok';
    checkinvio();
  } else {
    document.getElementById('errormail').style.display = 'none';
    document.getElementById('email').style.borderBottom = '1px solid #79a16b';
    emailinvio = 'ok';
    checkinvio();
  } //.else
} //.checkmail

//check message
function checkmessaggio() {
  var messaggio = document.getElementById('messaggio').value;

  var caratteriammessi = /^[a-zA-Z0-9?$@#()'èòàìùçé!,+\-=_:.&€£*%\s]+$/;

  if (caratteriammessi.test(messaggio) == false || messaggio == '' || messaggio == 'undefined') {
    document.getElementById('errormessaggio').style.display = 'block';
    document.getElementById('messaggio').style.borderColor = 'red';

    messaggioinvio = 'notok';
    checkinvio();
  } else {
    //.if messaggio

    document.getElementById('errormessaggio').style.display = 'none';
    document.getElementById('messaggio').style.borderBottom = '1px solid #79a16b';

    messaggioinvio = 'ok';
    checkinvio();
  } //.else
} //.checkmessaggio

//check privacy
function checkprivacy() {
  var privacy = document.getElementById('box-1').value;

  var checkbox = document.getElementById('box-1').checked;
  if (checkbox == true) {
    document.getElementById('errorprivacy').style.display = 'none';
    document.getElementById('box-1').style.borderColor = '#79a16b';

    privacyinvio = 'ok';
    checkinvio();
  } else {
    //.if privacy

    document.getElementById('errorprivacy').style.display = 'block';
    document.getElementById('box-1').style.borderColor = 'red';

    privacyinvio = 'notok';
    checkinvio();
  } //.else
} //.checkprivacy
