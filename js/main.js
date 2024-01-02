let goUp = document.querySelector(".goUp");
let linksDivMobile = document.querySelector(".links-mobile");
let menuBtn = document.querySelector(".menu");
let closeBtn = document.querySelector(".close");
let links = document.querySelectorAll(".mobile");
let loader = document.querySelector(".loader-container");
let dot = document.querySelector(".loader");
setInterval(()=>{
  scrollY >= 500 ? goUp.style.display = "block" : goUp.style.display = "none";
},0)

window.onload = function () {
  loader.remove()
}

goUp.addEventListener("click" , function() {
  window.scroll(0 , 0);
})

menuBtn.addEventListener("click" , function() {
  linksDivMobile.style.display = "block";
})
closeBtn.addEventListener("click" , function() {
  linksDivMobile.style.display = "none";
})
links.forEach(function(link) {
  link.addEventListener("click", function() {
    linksDivMobile.style.display = "none";
  })
})

