var toggle = document.getElementsByClassName('toggle-collapse')[0];
var navbar = document.getElementsByClassName('navbar')[0];

toggle.addEventListener("click", function() {
    navbar.classList.toggle('responsive');

});

var nav = document.getElementsByClassName('navbar')[0];
var st = nav.offsetTop;

window.addEventListener("scroll", function() {
    if (window.pageYOffset > st) {
        nav.classList.add('sticky');
        nav.classList.add('nav-ani');
        document.getElementsByClassName('nav-brand')[0].classList.add('line');
        var links = document.getElementsByClassName('nav-link');
        for (var i = 0; i < links.length; i++) {
            links[i].classList.add('line');
        }
        document.getElementById('collapse').classList.add('line');


    } else {
        nav.classList.remove('sticky');
        nav.classList.remove('nav-ani');
        document.getElementsByClassName('nav-brand')[0].classList.remove('line');
        var links = document.getElementsByClassName('nav-link');
        for (var i = 0; i < links.length; i++) {
            links[i].classList.remove('line');
        }
        document.getElementById('collapse').classList.remove('line');
    }


});


function scrollAppear(){
    var aboutText = document.querySelector('.about-txt');
    var height = aboutText.getBoundingClientRect().top;
    var screenPosition = window.innerHeight/1.3;

    if(height<screenPosition){
        aboutText.classList.add("about-text-active");
    }
   
   var about2Text = document.querySelector('.about2-txt');
    var height = about2Text.getBoundingClientRect().top;
    var screenPosition = window.innerHeight/1.3;

    if(height<screenPosition){
        about2Text.classList.add("about2-text-active");
    }


    var abtimg = document.querySelector('#abt-img');
    var height = abtimg.getBoundingClientRect().top;
    var screenPosition = window.innerHeight/1.3;

    if(height<screenPosition){
        abtimg.classList.add("img1-active");
    }



    var abt2img = document.querySelector('#abt2-img');
    var height = abt2img.getBoundingClientRect().top;
    var screenPosition = window.innerHeight/1.3;

    if(height<screenPosition){
        abt2img.classList.add("img2-active");
    }


    var left = document.querySelector('.left');
    var height = left.getBoundingClientRect().top;
    var screenPosition = window.innerHeight/1.3;

    if(height<screenPosition){
        left.classList.add("left-active");
    }

    var center = document.querySelector('.center');
    var height = center.getBoundingClientRect().top;
    var screenPosition = window.innerHeight/1.3;

    if(height<screenPosition){
        center.classList.add("center-active");
    }


    var right = document.querySelector('.right');
    var height = right.getBoundingClientRect().top;
    var screenPosition = window.innerHeight/1.3;

    if(height<screenPosition){
        right.classList.add("right-active");
    }
   }

   

window.addEventListener('scroll', scrollAppear);