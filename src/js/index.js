// Main js file

$(function () {

  let tile = $('.tile'),
      popup = $('.tile__popup'),
      openPopup = $('.tile__popup-open-js'),
      closePopup = $('.tile__popup-close'),
      classToggled = 'tile__popup--shown',
      
      popupToggle = function () {
        $(this)
          .closest(tile)
          .find(popup)
          .toggleClass(classToggled);
      };

  openPopup.on('click', popupToggle);
  closePopup.on('click', popupToggle);
});