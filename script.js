let theValue;
let options = document.querySelectorAll("#options > option");
let theOption = options[0].value;

document.querySelector("#submitBut").addEventListener("click", (e) => {
  e.preventDefault();
  theValue = document.querySelector("#theInput > #input").value;
  makeTheMethod();
});

options.forEach((e) => {
  e.addEventListener("click", () => {
    console.log(e);
    theOption = e.value;
  });
});

function makeTheMethod() {
  console.log("I am connected");
}
