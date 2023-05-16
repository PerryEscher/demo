// Scroll And Header Start
const header = document.querySelector("header");
window.addEventListener("scroll", function(){
  if(window.scrollY > 200){
    header.classList.add("small");
  }else{
    header.classList.remove("small");
  }
});
// Scroll And Header End
// Small Width Navigation Start
const nav = document.getElementById("navigation");
function toggleNav(){
  if(nav.classList.contains("fa-bars")){
    nav.classList.remove("fa-bars");
    nav.classList.add("fa-times");
    navmenu.style.right="0";
  }else if(nav.classList.contains("fa-times")){
    nav.classList.remove("fa-times");
    nav.classList.add("fa-bars");
    navmenu.style.right="-97px";
  }else{
    console.log("Cross and Menu Icon Eror")
  }
}
// Small Width Navigation End
// About Onclick 3 toggle Start
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname){
  for(tablink of tablinks){
    tablink.classList.remove("active-link");
  }
  for( tabcontent of tabcontents){
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}
// About Onclick 3 toggle End
// Message Function Start
const scriptURL = 'https://script.google.com/macros/s/AKfycbzjovb430jTrGBEfzLEruJzEryJ7BUJaRhAtDNiOgdPPEqvie6aWZ4Oy_nSkwQYGUfGlA/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      msg.innerHTML ="Message sent successfully!"
      setTimeout(function(){
        msg.innerHTML = "" // if add here it will whow parmanent message its add blank for remove the succes message.
      },5000)
      form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})
// Message Function End