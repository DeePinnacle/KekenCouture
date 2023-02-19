// preloader hide effect


let preLoader = document.querySelector('.preloader-container');
let loaderBar = document.querySelector('.inner-loader');
let btnToggle = document.getElementById('btn-toggle');
let myNavBar = document.querySelector('.my-nav');
let width = 1;

let intervalId = setInterval(() => {
    if(width >= 100){
        clearInterval(intervalId)
        preLoader.style.display = "none";
    }else{
        width++;
        loaderBar.style.width = width + '%';
    }
}, 100);

btnToggle.addEventListener('click', function(){
    myNavBar.classList.toggle('navbar-toggle');
})
// window.addEventListener('click', function(){
//     myNavBar.classList.remove('navbar-toggle');
// })

//readmore settings

let readMoreBtn = document.querySelectorAll('.read-more');
let hiddenContent = document.querySelectorAll('.hidden-content');
let hiddenContentOne = document.querySelector('.hidden-content-1');
let hiddenContentTwo = document.querySelector('.hidden-content-2');
let hiddenContentThree = document.querySelector('.hidden-content-3');
let hiddenContentFour = document.querySelector('.hidden-content-4');
let hiddenContentFive = document.querySelector('.hidden-content-5');
let hiddenContentSix = document.querySelector('.hidden-content-6');
let hiddenContentSev = document.querySelector('.hidden-content-7');
let hiddenContentEight = document.querySelector('.hidden-content-8');
let showContent = Array.from(hiddenContent);

readMoreBtn.forEach(function(btn){
    btn.addEventListener("click", (e)=>{
        // showContent.forEach((show)=>{
        //     if(e.target.id === "btn-1"){
        //         hiddenContentOne.classList.toggle("show-content"); 
        //         console.log(hiddenContentOne);            
        //     }
        //     // show.classList.toggle("show-content");
        //     // console.log(show);
        // })
        if(e.target.id === "btn-1"){
            hiddenContentOne.classList.toggle("show-content");
            readMoreBtn[0].innerHTML = "Show less";
        }
        if(e.target.id === "btn-2"){
            hiddenContentTwo.classList.toggle("show-content");
            readMoreBtn[1].innerHTML = "Show less";
        }
        if(e.target.id === "btn-3"){
            hiddenContentThree.classList.toggle("show-content");
            readMoreBtn[2].innerHTML = "Show less";
        }
        if(e.target.id === "btn-4"){
            hiddenContentFour.classList.toggle("show-content");
            readMoreBtn[3].innerHTML = "Show less";
        }
        if(e.target.id === "btn-5"){
            hiddenContentFive.classList.toggle("show-content");
            readMoreBtn[4].innerHTML = "Show less";
        }
        if(e.target.id === "btn-6"){
            hiddenContentSix.classList.toggle("show-content");
            readMoreBtn[5].innerHTML = "Show less";
        }
        if(e.target.id === "btn-7"){
            hiddenContentSev.classList.toggle("show-content");
            readMoreBtn[6].innerHTML = "Show less";
        }
        if(e.target.id === "btn-8"){
            hiddenContentEight.classList.toggle("show-content");
            readMoreBtn[7].innerHTML = "Show less";
        }
    })
})


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay: true, 
    autoplayTimeout:5000,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:false,
            loop:false
        }
    }
})