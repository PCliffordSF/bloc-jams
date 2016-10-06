var pointsArray = document.getElementsByClassName('point');

var animatePoints = function() {
    
   var revealPoint = function() {
         $(this).css({
             opacity: 1,
             transform: 'scaleX(1) translateY(0)'
         });
     };
    
     $.each($('.point'), revealPoint);

 };

var moveNavBar = function() {
    var collection = document.getElementsByClassName('links-container');
    collection[0].style.opacity = 1;
    collection[0].style.transform = "scaleX(1) translateX(0)";
    collection[0].style.msTransform = "scaleX(1) translateX(0)";
    collection[0].style.WebkitTransform = "scaleX(1) translateX(0)";
    
}

 $(window).load(function() {
     // this is my snazy addition to the project.

     
     if ($(window).height() > 950) {
         animatePoints();
     }
    var scrollDistance = $('.selling-points').offset().top - $(window).height() + 200;
      $(window).scroll(function(event) {
        if ($(window).scrollTop() >= scrollDistance) {
             animatePoints();
         }    
     });
     
     moveNavBar();
 });


 