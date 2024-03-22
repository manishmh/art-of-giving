document
  .getElementById("downloadLink")
  .addEventListener("click", function (event) {
    var checkbox = document.getElementById("consent");

    if (!checkbox.checked) {
      event.preventDefault();
      alert("Please agree to download the document by checking the checkbox.");
    }
  });
