// Open Currency Popup
document
  .getElementById("open-currency-popup")
  .addEventListener("click", function () {
    document.getElementById("currency-popup").classList.remove("hidden");
  });
// Open language Popup
document
  .getElementById("open-language-popup")
  .addEventListener("click", function () {
    document.getElementById("language-popup").classList.remove("hidden");
  });

// Close Currency Popupes useing x
document
  .getElementById("close-currency-popup")
  .addEventListener("click", function () {
    document.getElementById("currency-popup").classList.add("hidden");
  });
// Close language Popupes useing x
document
  .getElementById("close-language-popup")
  .addEventListener("click", function () {
    document.getElementById("language-popup").classList.add("hidden");
  });

// Open menuIcon
document.getElementById("menuIcon").addEventListener("click", function () {
  document.getElementById("details").classList.add("d-flex");
});

// JavaScript to display the modal when the button is clicked
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn-for-all-servs");
var span = document.getElementsByClassName("close-all-servs")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};
