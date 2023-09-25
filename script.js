document.addEventListener("DOMContentLoaded", function () {
  var buttons = document.querySelectorAll(".btn-active");

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      modal.style.display = "block";
    });
  });
});
var openModalButton = document.getElementById("openModalButton");
var closeModalButton = document.getElementById("closeModalButton");
var modal = document.getElementById("myModal");

openModalButton.addEventListener("click", function () {
  modal.style.display = "block";
});

closeModalButton.addEventListener("click", function () {
  modal.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var submitButton = document.getElementById("submitButton");
  var myForm = document.getElementById("myForm");
  var formError = document.getElementById("form-error");

  submitButton.addEventListener("click", function () {
    var requiredFields = myForm.querySelectorAll("[required]");

    requiredFields.forEach(function (field) {
      var errorMessage = document.getElementById(field.id + "-error");
      if (field.value.trim() === "") {
        field.style.border = "1px solid red";
        errorMessage.style.display = "block";
      } else {
        field.style.border = "1px solid #ccc";
        errorMessage.style.display = "none";
      }
    });

    var hasErrors = Array.from(requiredFields).some(function (field) {
      return field.value.trim() === "";
    });

    if (!hasErrors) {
      var successModal = document.getElementById("success-modal");
      successModal.style.display = "block";
      modal.style.display = "none";
    } else {
      formError.style.display = "block";
    }
  });
});

function closeSuccessModal() {
  var successModal = document.getElementById("success-modal");
  successModal.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
  var submitButton = document.getElementById("submitButton");
  submitButton.addEventListener("click", function () {
    if (isValid) {
      var currentModal = document.getElementById("myForm-modal");
      currentModal.style.display = "none";

      var successModal = document.getElementById("success-modal");
      successModal.style.display = "block";
    }
  });
});

var cookies = document.querySelector(".cookies");
var button_Cookie = document.querySelector(".btn-cookie-active");
button_Cookie.addEventListener("click", function () {
  cookies.style.display = "none";
});
