let theValue;

document.querySelector("#submitBut").addEventListener("click", (e) => {
  e.preventDefault();
  theValue = document.querySelector("#theInput > #input").value;
});
