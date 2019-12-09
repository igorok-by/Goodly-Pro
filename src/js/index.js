// Main js file

$(function () {

  // LET IT SCROLL!
  let btn = $('#scrollTop');

  $(window).scroll(function() {
    $(window).scrollTop() > 300 ? btn.addClass('show') : btn.removeClass('show');
  });
  
  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $( $(this).attr('href')).offset().top
    }, 700 );
  });

  if ($(window.location.hash).length > 1) {
    $('html, body').animate({
      scrollTop: $(window.location.hash).offset().top
    }, 700);
  };

  //  CONTACT FORM
  let formContact = $("form[name=CONTACT_FORM]"),
      inputName = $('input[name=contact_name]'),
      inputEmail = $('input[name=contact_email]'),
      popupSuccess = $('.form__popup--success'),
      popupError = $('.form__popup--error'),
      mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      errorClass = 'form__wrap-input--error';

  formContact.submit(function (event) {
    event.preventDefault();

    inputName.val() ? inputName.parent().removeClass(errorClass) : inputName.focus().parent().addClass(errorClass);

    inputEmail.val().match(mailformat) ? inputEmail.parent().removeClass(errorClass) : inputEmail.focus().parent().addClass(errorClass);

    var formData = {
      'name': inputName.val(),
      'email': inputEmail.val()
    };

    if (inputEmail.val() && inputName.val()) {
      $.ajax({
        type: 'POST',
        url: 'myServerURL.php', // the url where we want to POST
        data: formData,
        dataType: 'json'
      })

      .done(function (data) {
        data.success ? popupSuccess.addClass('.form__popup--show') : popupError.addClass('.form__popup--show');
      });
    }
  });
});