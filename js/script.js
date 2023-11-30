const bookBtn = document.querySelector(".book-btn");
const cancelBtn = document.querySelector(".cancel-btn");

function validateForm() {
  const name = document.querySelector(".name");
  const lastName = document.querySelector(".lastname");
  const email = document.querySelector(".email");
  const date = document.querySelector(".date");
  const time = document.querySelector(".time");
  const service = document.querySelector(".form-select");

  if (
    name.value != "" &&
    lastName.value != "" &&
    email.value != "" &&
    date.value != "" &&
    time.value != "" &&
    service.value != ""
  ) {
    alert("Appointment made!");
    document.querySelector(".form").reset();
  } else {
    alert("No empty fields, please.");
  }
}

bookBtn.addEventListener("click", validateForm);

function cancelAppointment() {
  document.querySelector(".form").reset();
}

cancelBtn.addEventListener("click", cancelAppointment);
