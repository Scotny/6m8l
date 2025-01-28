let out = document.getElementById("out");

out.addEventListener("click", () => {
  let target = prompt(
    "Enter 1 to open in a new window\nEnter 2 to open in the same window:"
  );
  if (target == 1) {
    window.open("index.html");
  } else if (target == 2) {
    window.location.href = "index.html";
  }
});
