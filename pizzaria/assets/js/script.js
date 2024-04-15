// window.alert('Funcionou'); 
// comentarios de linhas no javascript

// window - objeto window faz referencia a janela externa do navegador
// document - referencia ao conteudo html da minha pagina

//document.getElementsByName('referente ao atributo name do elemento')
//document.getElementsByTagName('referente ao nome da tag do elemento')
//document.getElementById('id do elemento html')

// inicio - metodo para fixar o header ao rolar o scroll 
window.onscroll = function() {this.stickyFunction()};

let header = document.getElementById('header');

let sticky = header.offsetTop;

function stickyFunction() {
    if(window.pageYOffset > sticky) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
}

//fim sticky

//menu toggle 
function menuOpen() {
    let menuArea = document.getElementById('menu-area');
    if(menuArea.classList.contains('menu-opened')) {
        menuArea.classList.remove('menu-opened');
    } else {
        menuArea.classList.add('menu-opened');
    }
}
// fim menu toggle


/* slide show */
var totalSlides = document.getElementsByClassName("slide--area").length;
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}


function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide--area");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

function goNext() {
    slideIndex++;
    if(slideIndex > (totalSlides)) {
        slideIndex = 1;
    }
    showSlides(slideIndex);
}

/* rodar automatico*/
setInterval(goNext, 2000);