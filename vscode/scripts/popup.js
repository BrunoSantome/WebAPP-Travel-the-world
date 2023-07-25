function popupOpen() {
    document.getElementById("popup-menu").style.width = "30%";
}

function popupClose() {
    document.getElementById("popup-menu").style.width = "0%";
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
  closeRegister();
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function openRegister() {
  document.getElementById("myRegistration").style.display = "block";
  closeForm();
}

function closeRegister() {
  document.getElementById("myRegistration").style.display = "none";
}

