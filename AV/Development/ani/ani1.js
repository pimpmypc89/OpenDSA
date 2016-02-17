"use strict";

$(document).ready(function () {


    JSAV.init();

    var av = new JSAV("ani1");
    var theArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var arr = av.ds.array(theArray, {indexed: true});
    av.umsg("We are going to randomize an array. This is done using the shuffle function.");
    // Note: av.displayInit() will not affect the number of slides.
    // All that it will do is affect what you get to see on the
    // initial slide.
    av.displayInit();
    // We are now starting a new slide (#2)
    av.umsg("...Shuffling", {preserve: true});
	var i = theArray.length;
	var temp, randomIndex;
	while (i !== 0){
		randomIndex = Math.floor(Math.random() * i);
		i--;
		
		temp = theArray[i];
		theArray[i] = theArray[randomIndex];
		theArray[randomIndex] = temp;
		arr.swap(i, randomIndex);
		av.step();
	}
    // We are now starting a new slide (#3)
    av.umsg("Complete Shuffling!");
    av.recorded();
    // If you add av.umsg after av.recorded, it will add new slides in
    // ways that you probably do not expect and probably cannot
    // control in the way that you want. As av.recorded() rewinds the
    // slideshow, the new slides would go to the beginning of the slideshow.
    // So, unless you are trying to add slides on-the-fly
    // interactively, you don't want to do this.
    // av.umsg("Text after av.recorded()");
});
