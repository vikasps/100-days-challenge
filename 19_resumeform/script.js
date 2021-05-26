function onlyOne(radioBtn) {
  var radioBtn = document.getElementsByName("flexRadioDefault");
  radioBtn.forEach((item) => {
    if (item !== radioBtn) item.checked = false;
  });
}
