var pointsArray = document.getElementsByClassName('point');

function revealPoint(points) { 
     points.style.opacity = 1;
     points.style.transform = "scaleX(1) translateY(0)";
     points.style.msTransform = "scaleX(1) translateY(0)";
     points.style.WebkitTransform = "scaleX(1) translateY(0)";
}

var animatePoints = function(points) {
//    first method
    forEach(points, revealPoint);
    
//    second method
//    pointsArray.forEach(revealPoint);

 };

var moveNavBar = function() {
    var collection = document.getElementsByClassName('links-container');
    collection[0].style.opacity = 1;
    collection[0].style.transform = "scaleX(1) translateX(0)";
    collection[0].style.msTransform = "scaleX(1) translateX(0)";
    collection[0].style.WebkitTransform = "scaleX(1) translateX(0)";
    
}

 window.onload = function() {
     // this is my snazy addition to the project.
      moveNavBar();
     
      if (window.innerHeight > 950) {
         animatePoints(pointsArray);
     }
     var sellingPoints = document.getElementsByClassName('selling-points')[0];
     var scrollDistance = sellingPoints.getBoundingClientRect().top - window.innerHeight + 200;
     window.addEventListener('scroll', function(event) {
         if (document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance) {
             animatePoints(pointsArray);   
         }
     });
 }


 