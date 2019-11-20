'use strict';
window.onload = function () {

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
      'Front-End Developer'
    ];
    var typingComplete = false;
    var output = document.querySelector('#intro-typing');
    var myInterval, typedWord = '';
    var letterIndex = 0,
      wordIndex = 0;
    (function typing() {
      clearInterval(myInterval);
      let currWord = words[wordIndex];
      let currWordLen = currWord.length;
      let currLetter = currWord[letterIndex];
      typedWord += currLetter;
      myInterval = setInterval(() => {
        output.innerHTML = typedWord;

        letterIndex++;
        if (letterIndex >= currWordLen) {
          typingComplete = true;
          clearInterval(myInterval);
          return;
        } else {
          typing();
        }
        // typing();
      }, 200);
    })();

    var cursorClass = document.querySelector('.cursor')
    var cursor = setInterval(() => {
      if (typingComplete) {
        cursorClass.classList.add('cursor-fade');
      }
    }, 1000);
  })();

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


  //onscroll event
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
      (function languageAnimation() {

        let windowHeight = window.innerHeight;
        let parentDistance = parent.getBoundingClientRect().top;
        if (parentDistance <= (windowHeight / 1.4)) {
          changeClass('html-bar-value', 'html-bar-value-animate');
          changeClass('css-bar-value', 'css-bar-value-animate');
          changeClass('js-bar-value', 'js-bar-value-animate');
          changeClass('php-bar-value', 'php-bar-value-animate');
          changeClass('bootstrap-bar-value', 'bootstrap-bar-value-animate');
          changeClass('jquery-bar-value', 'jquery-bar-value-animate');
          changeClass('ui-bar-value', 'ui-bar-value-animate');
          changeClass('photoshop-bar-value', 'photoshop-bar-value-animate');


          // here animating titles
          changeClass('contact-title', 'contact-title-animate')


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
      })();

      //sticky nav
      (function stickyNav() {

        var height = navWrapper.getBoundingClientRect().top;
        if (height <= -50) {
          nav.className = 'sticky';
          navWrapper.classList.add('sticky-nav-wrapper');
        } else {
          nav.className = 'nonSticky';
          navWrapper.classList.remove('sticky-nav-wrapper');
        }
      })();


    }

    //function for intro view my work button(using changeClass())
    var viewMyWork = document.querySelector('.button');
    let buttonHoverd = true;
    $('#viewWork').mouseover(function(){
      if(buttonHoverd){
        viewMyWork.classList.add('button-hovered')
      }
    })

 
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


  (function mobile() {
    //menu button
    //click menuButton to expand menu
    var navLinks = document.querySelectorAll('.navLink-wrapper');
    $('#menuButton').click(function () {
      for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].classList.toggle('navLink-wrapper-visible');
      }
    })

    //click any menu item it will shut down the menu
    for(let i = 0; i < navLinks.length; i++){
      (function executeThis(i){
        $(navLinks[i]).click(function (){
          for (let i = 0; i < navLinks.length; i++) {
            navLinks[i].classList.toggle('navLink-wrapper-visible');
          }
        })
      })(i);
    }
  })();
}