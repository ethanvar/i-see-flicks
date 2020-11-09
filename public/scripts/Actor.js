var movieCounter = 0;
knownFor();

function knownFor() {
  var i;
  var slides = document.getElementsByClassName("movieSlide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  movieCounter++;
  if (movieCounter > slides.length) {movieCounter = 1}    

  slides[movieCounter-1].style.display = "block";  
  setTimeout(knownFor, 2000);
}
/*
let count;

function init(){
    count = 0;
    console.log("init Loaded!");     // for debugging purposes
    let myButton = document.getElementById("btn");
    myButton.onclick = buttonClicked;  // do not add brackets: buttonClicked();
    let myText = document.getElementById("textbox");
    myText.onblur = validate;          // again, don't do: validate();
}

function validate(){
    console.log("validate Loaded!");  // lets first see that everything works...
    let myText = document.getElementById("textbox");
    if(myText.value.length < 3){
        alert("You need to enter at least 3 characters");
    }
}

function buttonClicked(){
    count++;
    let x = document.getElementById("maincontent");
    x.innerHTML = "You clicked the button " + count + " times";
}
*/