document.addEventListener("DOMContentLoaded", function () {
  var links = document.querySelectorAll(".nav-link");

  links.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      var targetId = this.getAttribute("href").substring(1);
      var targetElement = document.getElementById(targetId);

      var offset = targetElement.offsetTop;
      var windowHeight = window.innerHeight;
      var scrollPosition = offset - windowHeight / 2 + 280;

      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
      });
    });
  });
});

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
        document.querySelector(".navbar").style.backgroundColor = 'white';
        
      } else {
        document.querySelector(".navbar").style.backgroundColor = '#40E0D0';
        
      }
}


let btn_to_top = document.getElementById('btn-to-top');

window.onscroll = function(){
  if (scrollY >= 370) {
    btn_to_top.style.display = "block";

  } else {
    btn_to_top.style.display = "none";
  }
}
btn_to_top.onclick = function(){
    scroll({
      left:0,
      top:0,
      behavior:"smooth"
    })
}














