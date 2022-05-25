// account 
function myfunctionacc() {
  location.href = "account.html"
}

// explore 
function myfunctionbtn() {
  location.href = "explore.html"
}
//  buy now 
function myfunctionbuynow() {
  location.href = "buynow.html"
}
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}



// function showelement(){
//   document.getElementById('show-img')
//   .style.display = "block";

// document.getElementById('btn')
//   .style.display = "none";
// }

function show() {

  /* Access image by id and change
  the display property to block*/
  document.getElementById('image')
    .style.display = "block";

  document.getElementById('btnID')
    .style.display = "none";

  // document.getElementsByClassName(".everyelement")
  // .style.display = "block";
}

function myfunction(showimg) {
  var fullimg = document.getElementById("imgBox");
  fullimg.src = showimg.src;
}


function show2() {

  /* Access image by id and change
  the display property to block*/
  document.getElementById('image2')
    .style.display = "block";

  document.getElementById('btnID2')
    .style.display = "none";

  // document.getElementsByClassName(".everyelement")
  // .style.display = "block";
}

function myfunction2(showimg) {
  var fullimg = document.getElementById("imgBox2");
  fullimg.src = showimg.src;
}


function showimg() {

  /* Access image by id and change
  the display property to block*/
  document.getElementById('imageimg')
    .style.display = "block";

  document.getElementById('btnimg')
    .style.display = "none";

  // document.getElementsByClassName(".everyelement")
  // .style.display = "block";
}

function myfunctionimg(showimg) {
  var fullimg = document.getElementById("bigimg");
  fullimg.src = imageimg.src;
}

// 1st patr 
function show3() {

  /* Access image by id and change
  the display property to block*/
  document.getElementById('image3')
    .style.display = "block";

  document.getElementById('btnID3')
    .style.display = "none";

  // document.getElementsByClassName(".everyelement")
  // .style.display = "block";
}

function myfunction3(showimg3) {
  var fullimg = document.getElementById("imgBox3");
  fullimg.src = showimg3.src;
}



// 2nd patr 
function show4() {

  /* Access image by id and change
  the display property to block*/
  document.getElementById('image4')
    .style.display = "block";

  document.getElementById('btnID4')
    .style.display = "none";

  // document.getElementsByClassName(".everyelement")
  // .style.display = "block";
}

function myfunction4(showimg4) {
  var fullimg = document.getElementById("imgBox4");
  fullimg.src = showimg4.src;
  
}




// 3rd patr 
function show5() {

  /* Access image by id and change
  the display property to block*/
  document.getElementById('image5')
    .style.display = "block";

  document.getElementById('btnID5')
    .style.display = "none";

  // document.getElementsByClassName(".everyelement")
  // .style.display = "block";
}

function myfunction5(showimg5) {
  var fullimg = document.getElementById("imgBox5");
  fullimg.src = showimg5.src;

}



// start new 


function myfunctionsmall(productsmallimg){
  var fullimg = document.getElementById("fullboximg");
  fullimg.src=productsmallimg.src;
}


// brand 
function myfunctionhnm(){
  location.href="hnm.html"
}


function myfunctionzara(){
  location.href="zara.html"
}

function myfunctionhrx(){
  location.href="hrx.html"
}


function myfunctionroadstar(){
  location.href="roadstar.html"
}



// bank 





