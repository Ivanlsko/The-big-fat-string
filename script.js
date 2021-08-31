let theValue;
let options = document.querySelectorAll("#options > option");
let theOption = options[0].value;
let firstLetter;
let firstSpace;
let lastSpace;
let firstWord;
let theLength;
let thirdLetter;
let spaces;
let hyphens;

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
  if (theOption === "firstName1") {
    console.log("option is first name 1");
    firstLetter = theValue.slice(0, 1);
    firstLetter = firstLetter.toUpperCase();
    theValue = `${firstLetter}${theValue.substring(1)}`;
    showOutcome(theValue);
  }

  if (theOption === "fullName1") {
    console.log("option is full name 1");
    firstSpace = theValue.indexOf(" ");
    theValue = theValue.substring(0, firstSpace).trim();
    showOutcome(theValue);
  }

  if (theOption === "fullName2") {
    console.log("option is full name 2");
    firstSpace = theValue.indexOf(" ");
    theValue = theValue.substring(0, firstSpace).length;
    showOutcome(theValue);
  }
  if (theOption === "fullName3") {
    console.log("option is full name 3");
    firstSpace = theValue.indexOf(" ");
    lastSpace = theValue.lastIndexOf(" ");
    theValue = `${firstSpace + 1}, ${lastSpace - 1}, ${theValue.substring(firstSpace, lastSpace).trim()}`;
    showOutcome(theValue);
  }
  if (theOption === "fileName1") {
    console.log("option is file name 1");
    theValue = `The file is in: ${theValue.slice(-4)}`;
    showOutcome(theValue);
  }
  if (theOption === "password") {
    console.log("option is password");
    theLength = theValue.length;
    theValue = "*".repeat(theLength);
    showOutcome(theValue);
  }
  if (theOption === "anyInput1") {
    console.log("option is any input 1");
    thirdLetter = theValue.slice(2, 3);
    thirdLetter = thirdLetter.toUpperCase();
    theValue = `${theValue.substring(0, 2)}${thirdLetter}${theValue.substring(3)}`;
    showOutcome(theValue);
  }
  if (theOption === "anyInput2") {
    console.log("option is any input 2");
    spaces = theValue.indexOf(" ");
    hyphens = theValue.indexOf(",");
    makeItBig = showOutcome(theValue);
  }
}

function showOutcome() {
  document.querySelector("#output > p").innerHTML = theValue;
}
