const hamburger=document.querySelector(".hamburger");
const closeMenu=document.querySelector(".close-menu");
const sidebar=document.querySelector(".sidebar");

hamburger.addEventListener("click", function(){
  hamburger.style.display="none";
  closeMenu.style.display="block";
  sidebar.style.display="block";
})
closeMenu.addEventListener("click", function(){
  hamburger.style.display="block";
  closeMenu.style.display="none";
  sidebar.style.display="none";
})