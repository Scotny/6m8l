let student = document.getElementById("student");
let teacher = document.getElementById("teacher");

function Person() {
  if (student.style.backgroundColor == "rgb(255, 255, 255)") {
    student.style.background = "none";
    student.style.color = "#757575";
    teacher.style.backgroundColor = "#FFFFFF";
    teacher.style.color = "#000000";
  } else {
    teacher.style.background = "none";
    teacher.style.color = "#757575";
    student.style.backgroundColor = "#FFFFFF";
    student.style.color = "#000000";
  }
}

student.addEventListener("click", () => {
  Person();
});
teacher.addEventListener("click", () => {
  Person();
});

let password = document.getElementById("password");
let eye = document.getElementById("eye");

eye.addEventListener("click", () => {
  if (password.type == "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
});

let modme = document.getElementById("modme");
let submit = document.getElementById("submit");

localStorage.setItem("modme", "mars".trim());
localStorage.setItem("password", "2022".trim());

function Disable() {
  let modmeValue = modme.value;
  let passwordValue = password.value;

  if (modmeValue.trim() && passwordValue.trim()) {
    submit.style.cursor = "pointer";
    submit.style.backgroundColor = "#F0400F";

    if (
      modmeValue === localStorage.getItem("modme") &&
      passwordValue === localStorage.getItem("password") &&
      modmeValue.length == localStorage.getItem("modme").length &&
      passwordValue.length == localStorage.getItem("password").length
    ) {
      submit.style.cursor = "pointer";
      submit.style.backgroundColor = "#F0400F";
      submit.disabled = false;
      submit.addEventListener("click", () => {
        window.location.href = "./hackaton.html";
      });
    } else {
      submit.disabled = true;
    }
  } else {
    submit.disabled = true;
    submit.style.cursor = "not-allowed";
    submit.style.backgroundColor = "#F69E86";
  }
}

modme.addEventListener("input", () => {
  Disable();
});
password.addEventListener("input", () => {
  Disable();
});
