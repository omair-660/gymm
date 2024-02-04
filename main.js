let hum = document.getElementById("hum");
let links = document.getElementById("links");

let bensh = document.getElementById("bensh");
let benshI = document.getElementById("benshI");

let ketfI = document.getElementById("ketfI");
let ketf = document.getElementById("ketf");

let dahrI = document.getElementById("dahrI");
let dahr = document.getElementById("dahr");

let deraI = document.getElementById("deraI");
let dera = document.getElementById("dera");

let close = document.getElementById("close");
let close2 = document.getElementById("close2");
let close3 = document.getElementById("close3");
let close4 = document.getElementById("close4");


hum.onclick = function () {
  hum.classList.toggle("open");
  links.classList.toggle("tra");
}

benshI.onclick = function () {
  bensh.classList.add("traa");
}

ketfI.onclick = function () {
  ketf.classList.add("traa");
}

dahrI.onclick = function () {
  dahr.classList.add("traa");
}

deraI.onclick = function () {
  dera.classList.add("traa");
}

close.onclick = function () {
  bensh.classList.remove("traa");
}

close2.onclick = function () {
  ketf.classList.remove("traa");
}

close3.onclick = function () {
  dahr.classList.remove("traa");
}

close4.onclick = function () {
  dera.classList.remove("traa");
}

let scroll = document.getElementById("scroll");

window.onscroll = function(){
  if(scrollY >= 200){
    scroll.classList.add("scr");
    scroll.classList.remove("scroll");
  }
  else {
    scroll.classList.remove("scr");
    scroll.classList.add("scroll");

  }
}
