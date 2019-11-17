'use strict'; 
//auto type container
(function autoTypeContainer(){ 

  var about = [
    // `Hello `,'',
    // `Ankit here`,'',
    // `I love (<3)`,'',
    'HTML -> (****) ','',
    'CSS -> (***) ','',
    'AND JS -> (***) ','',
  ]; 
  var letterCount = 0;
  var index = 0;
  var totalWords = about.length ;
  var output = document.querySelector('#intro-typing');
  var myInterval;
  var intervalTime = 200;
  
  (function autoType(){
    clearInterval(myInterval);
    var currentWord = about[index];
    var slicedCurrent = currentWord.slice(0, letterCount);
    output.innerHTML = slicedCurrent;
    //interval time management
    if(slicedCurrent.length >= about[index].length){
      intervalTime = 1000;
    }else{
      intervalTime = 200;
    }
    myInterval = setInterval(() => {
      if(slicedCurrent.length === about[index].length){
        index++;
        letterCount = 0;
        (index >= totalWords) ? index = 0 : false;
      }
      letterCount++;
      autoType();
    }, intervalTime);
  })();
})();

//sticky nav
(function stickyNav(){

  var navWrapper = document.querySelector('#main');
  var nav = document.querySelector('#nav');
  window.onscroll = function(){
    var height = navWrapper.getBoundingClientRect().top;
    if(height <= -50){
      nav.className = 'sticky';
      navWrapper.classList.add('sticky-nav-wrapper');
    }else{
      nav.className = 'nonSticky';
      navWrapper.classList.remove('sticky-nav-wrapper');
    }
  }
})();

//active nav button
(function activNavButton(){
  var links = document.querySelectorAll('.navLink');
  var colors = ['#db7070', '#43c943', '#c48e48', '#e96de3']
  var nav = document.querySelector('#nav');
  for(let i = 0; i < links.length; i++){
    (function(i){
      links[i].addEventListener('click', function(event){
        //reset every other elements
        for(let i = 0; i < links.length; i++){
          links[i].classList.remove('active');
          console.log('doing');
        }
        //change only this element
        this.classList.toggle('active');
        nav.style.borderColor = `${colors[i]}`;

      })
    })(i);
  }

})();

