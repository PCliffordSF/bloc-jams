
var animatePoints = function() {

     var points = document.getElementsByClassName('point');
//     var sellingPoints = document.getElementsByClassName('selling-points');
     for (var i = 0; i < points.length; i++) {
         revealPoint(i);
     }

    function revealPoint(index) {
//         if (index === 0) {
//             sellingPoints[index].classList += ' hack';
//             console.log(sellingPoints[index].classList)
//         };
        
         points[index].style.opacity = 1;
         points[index].style.transform = "scaleX(1) translateY(0)";
         points[index].style.msTransform = "scaleX(1) translateY(0)";
         points[index].style.WebkitTransform = "scaleX(1) translateY(0)";
    }

 };

var moveNavBar = function() {
    var collection = document.getElementsByClassName('links-container');
    collection[0].style.opacity = 1;
    collection[0].style.transform = "scaleX(1) translateX(0)";
    collection[0].style.msTransform = "scaleX(1) translateX(0)";
    collection[0].style.WebkitTransform = "scaleX(1) translateX(0)";
    
}

animatePoints();
moveNavBar();