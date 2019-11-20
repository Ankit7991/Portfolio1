'use strict';
window.onload = function () {

  //contact me 
  // view my work animation
  (function basicActions(){

    $('#contact-me-button').click(function(){
      var email = $('.input-email').val();
      var name = $('.input-name').val();
      var textarea = $('.input-textarea').val();
      console.log(email, name, textarea)
      if(email && name && textarea){
        alert('Something went wrong.')
      }else{
        alert('Please fill proper Email, Name, and detail. Thank you.')
      }
    });
    
    
  })();
    
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
    var colors = ['','#db7070', '#43c943', '#c48e48', '#e96de3']
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
  //sticky nav 
  // popup titles of section 
  //language graph animation
  (function onscrollAll() {
    //sticky nav variables
    var navWrapper = document.querySelector('#main');
    var nav = document.querySelector('#nav');


    //language animation function
    function adRemClass(element, updateTo, add = true) {
      var element = document.querySelector(`.${element}`);
      (add)? element.classList.add(updateTo) : element.classList.remove(updateTo);
    }

    var languages = ['html', 'css', 'js', 'php', 'bootstrap', 'jquery', 'ui', 'photoshop'];

    let windowHeight = window.innerHeight;
    function getCondition(classname, height){
      var myParentDistance = document.querySelector(`.${classname}`).getBoundingClientRect().top;
      (height === 'top') ? height = -99999999 : (height === 'middle') ? height = 2 : (height === 'bottom') ? height = 1 : (height === 'lowerHalf') ? height = 1.3 : false;
      return (myParentDistance <= (windowHeight / height));
      
    }

    window.onscroll = function () {
      //languages animation
      (function languageAnimation() {


        //positions: top, middle, bottom, lowerHalf

        if (getCondition('bar-wrapper', 'middle') && !getCondition('bar-wrapper', 'top')) {
          console.log()
          for(let i = 0; i < languages.length; i++){
            adRemClass(`${languages[i]}-bar-value`, `${languages[i]}-bar-value-animated`,);
          }
          //title value wrappers -> tvWrappers
          var tvWrappers = document.querySelectorAll('.title-value-wrapper');
          for (let i in languages) {
            tvWrappers[i].classList.add(`${languages[i]}-value-wrapper-animate`)
          }
        }else if(getCondition('bar-wrapper-end', 'top')){
          
          for(let i = 0; i < languages.length; i++){
            adRemClass(`${languages[i]}-bar-value`, `${languages[i]}-bar-value-animated`, false);
          }

          //title value wrappers -> tvWrappers
          var tvWrappers = document.querySelectorAll('.title-value-wrapper');
          for (let i in languages) {
            tvWrappers[i].classList.remove(`${languages[i]}-value-wrapper-animate`)
          }
          // console.log('le');
        }
        else if(getCondition('bar-wrapper', '')){
          console.log('lex');
        }



        //positions: top, middle, bottom, lowerHalf


        let titles = ['contact'];
        //add remove class of title based on their distance from top of window
        function doNRemoveAnimation(name){
          if (getCondition(`${name}-title`, 'lowerHalf') && !getCondition(`${name}-title`, 'top')){
            // here animating titles
            adRemClass(`${name}-title`, `${name}-title-animate`);
          }else if(getCondition(`${name}-title`, 'top')){
            adRemClass(`${name}-title`, `${name}-title-animate`, false);
          }
        }
        for(let i = 0; i < titles.length; i++){
          doNRemoveAnimation(titles[i]);
        }

        // if (getCondition('contact-title', 1.4) && !getCondition('contact-title', -999999999)){
        //   // here animating titles
        //   adRemClass('contact-title', 'contact-title-animate');
        // }else if(getCondition('contact-title', -9999999999)){
        //   adRemClass('contact-title', 'contact-title-animate', false);
        // }



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

  })();

  //smoothe scroll
  //removing animation onclick
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
    scroll('contact', 'CONTACT', );
    
    //function for intro view my work button(using changeClass())
    var buttonHoverd = true, myTimeout;
    $('#viewWork').click(function(){
      if(buttonHoverd){
        document.querySelector('.button').classList.add('button-animated')
        myTimeout = setTimeout(function(){
          $(document).ready(function () {
            $('html, body').animate({
              scrollTop: $(`#ABOUT`).offset().top
            }, 1500)
          });
          clearTimeout(myTimeout);

        }, 1500)
      }
    })

    //removing animation onclick
    $('#home').click(function(){
      document.querySelector('.button').classList.remove('button-animated');
    })

  })();

  //animations for mobile view 
  //like hide nav or expand
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