/*function openForm() {
    document.getElementById("myForm").style.display = "block";
}
  
function closeForm() {
document.getElementById("myForm").style.display = "none";
}*/

function newAccount() {
    location.href = "/SignUp";
}

var movieCounter = 0;
sugMovies();

function sugMovies() {
  var i;
  var slides = document.getElementsByClassName("sugMovieSlide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  movieCounter++;
  if (movieCounter > slides.length) {movieCounter = 1}    

  //slides[movieCounter-1].style.display = "block";  
  setTimeout(sugMovies, 2000);
}