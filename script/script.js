'use strict';
window.onload = function () {
  //check if element is in viewport [CLOSURE- JUST EXPERIMENTING]
  // function inViewport(parentId, elementId, animation = false){

  //   var parent = document.querySelector(`#${parentId}`);
  //   var element = document.querySelector(`#${elementId}`);

  //   //what classname you want to change
  //   //padClass necessery if padding true
  //   if(!animation){

  //     return function(activateDistance, ifClassName, elseClassName, padding = false, padClass){

  //       window.onscroll = function(){
  //         var height = parent.getBoundingClientRect().top;
  //         if(height <= activateDistance){
  //           element.className = `${ifClassName}`;
  //           if(padding){
  //             parent.classList.add(`${padClass}`);
  //           }
  //         }else{
  //           element.className = `${elseClassName}`;
  //           if(padding){
  //             parent.classList.remove(`${padClass}`)
  //           }
  //         }
  //       }
  //     }
  //   }
  // }


  //auto type container
  (function autoTypeContainer() {

    // var about = [
    var words = [
      // `Hello `,'',
      // `Ankit here`,'',
      // `I love (<3)`,'',
      // 'HTML (****) ','',
      // 'CSS (***) ','',
      // 'AND JS (***) ','',
      'Front end Developer'
    ];
    var output = document.querySelector('#intro-typing');
    var myInterval, typedWord = '';
    var letterIndex = 0,
      wordIndex = 0;
    (function typing() {
      clearInterval(myInterval);
      let currentWord = words[wordIndex];
      let currentLetter = currentWord[letterIndex];
      typedWord += currentLetter;
      myInterval = setInterval(() => {
        output.innerHTML = typedWord;

        letterIndex++;
        // typing();
      }, 300);
    })();
    // var letterCount = 0;
    // var index = 0;
    // var totalWords = about.length ;
    // var output = document.querySelector('#intro-typing');
    // var myInterval;
    // var intervalTime = 200;

    // (function autoType(){
    //   clearInterval(myInterval);
    //   var currentWord = about[index];
    //   var slicedCurrent = currentWord.slice(0, letterCount);
    //   output.innerHTML = slicedCurrent;
    //   //interval time management
    //   if(slicedCurrent.length >= about[index].length){
    //     intervalTime = 1000;
    //   }else{
    //     intervalTime = 200;
    //   }
    //   myInterval = setInterval(() => {
    //     if(slicedCurrent.length === about[index].length){
    //       index++;
    //       letterCount = 0;
    //       (index >= totalWords) ? index = 0 : false;
    //     }
    //     letterCount++;
    //     autoType();
    //   }, intervalTime);
    // })();
  })();

  //sticky nav
  // (function stickyNav(){

  //   //viewport closure
  //   // var stickyNav = inViewport('main', 'nav');
  //   // stickyNav(-100, 'sticky', 'nonsticky', true, 'sticky-nav-wrapper');
  //   //upper code is same as below commented code

  //   // var navWrapper = document.querySelector('#main');
  //   // var nav = document.querySelector('#nav');
  //   // window.onscroll = function(){
  //   //   var height = navWrapper.getBoundingClientRect().top;
  //   //   if(height <= -100){
  //   //     nav.className = 'sticky';
  //   //     navWrapper.classList.add('sticky-nav-wrapper');
  //   //   }else{
  //   //     nav.className = 'nonSticky';
  //   //     navWrapper.classList.remove('sticky-nav-wrapper');
  //   //   }
  //   // }
  //   // 
  // })();

  //active nav button
  (function activNavButton() {
    var links = document.querySelectorAll('.navLink');
    var colors = ['#db7070', '#43c943', '#c48e48', '#e96de3']
    var nav = document.querySelector('#nav');
    for (let i = 0; i < links.length; i++) {
      (function (i) {
        links[i].addEventListener('click', function (event) {
          //reset every other elements
          for (let i = 0; i < links.length; i++) {
            links[i].classList.remove('active');
          }
          //change only this element
          this.classList.toggle('active');
          nav.style.borderColor = `${colors[i]}`;

        })
      })(i);
    }

  })();

  (function onscrollAll() {
    //sticky nav variables
    var navWrapper = document.querySelector('#main');
    var nav = document.querySelector('#nav');
    //language animation function
    function changeClass(element, updateTo) {
      var element = document.querySelector(`.${element}`);
      element.classList.add(updateTo);
    }

    var parent = document.querySelector('.bar-wrapper');
    window.onscroll = function () {

      //languages animation
      let windowHeight = window.innerHeight;
      let parentDistance = parent.getBoundingClientRect().top;
      if (parentDistance <= (windowHeight / 2)) {
        changeClass('html-bar-value', 'html-bar-value-animate');
        changeClass('css-bar-value', 'css-bar-value-animate');
        changeClass('js-bar-value', 'js-bar-value-animate');
        changeClass('php-bar-value', 'php-bar-value-animate');
        changeClass('bootstrap-bar-value', 'bootstrap-bar-value-animate');
        changeClass('jquery-bar-value', 'jquery-bar-value-animate');
        changeClass('ui-bar-value', 'ui-bar-value-animate');
        changeClass('photoshop-bar-value', 'photoshop-bar-value-animate');
        // changeClass('title-value-wrapper', 'title-value-wrapper-animate');
        //title value wrappers -> tvWrappers
        var languages = ['html', 'css', 'js', 'php', 'bootstrap', 'jquery', 'ui', 'photoshop'];
        var tvWrappers = document.querySelectorAll('.title-value-wrapper');
        // for(let i = 0; i < tvWrappers.length; i++){
        //   tvWrappers[i].classList.add('title-value-wrapper-animate');
        // }
        for (let i in languages) {
          tvWrappers[i].classList.add(`${languages[i]}-value-wrapper-animate`)
        }
      }

      //sticky nav
      var height = navWrapper.getBoundingClientRect().top;
      if (height <= -50) {
        nav.className = 'sticky';
        navWrapper.classList.add('sticky-nav-wrapper');
      } else {
        nav.className = 'nonSticky';
        navWrapper.classList.remove('sticky-nav-wrapper');
      }
    }
  })();


  (function linkScroll() {

    //using jquery 
    function scroll(nowId, toId, duration = 500, extraMargin) {
      $(`#${nowId}`).click(function () {
        $(document).ready(function () {
          $('html, body').animate({
            scrollTop: $(`#${toId}`).offset().top
          }, duration)
        })
      })
    }

    scroll('home', 'HOME', );
    scroll('about', 'ABOUT', );
    // scroll('resume', 'RESUME', 500, -500);
    scroll('viewWork', 'ABOUT', 1000);
    scroll('contact', 'CONTACT', );

  })();
}