//I did this originally and it was working just using the index, but after watching the video, I saw that I had to move and alter revealPoint as well. 

//one way to do it. 
//function forEach(pointsArray, revealPoint) {
//    for (var i = 0; i < pointsArray.length; i++) {
//        revealPoint(pointsArray[i]);
//    }
//}

//or 

// fancier way to do it. Which is better? It was a little tricky because pointsArray isn't
// actually an array. It's a DOM object(not sure exactly what it's called) I had to do typeof //to find out I needed the Object prototype. 

Object.prototype.forEach = function(revealPoint) {
    for (var i = 0; i < this.length; i++) {
        revealPoint(this[i]);
    }
}