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