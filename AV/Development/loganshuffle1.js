"use strict";

$(document).ready(function () {


    JSAV.init();

    var av = new JSAV("loganshuffle1");
    var theArray = [20, 30, 44, 54, 55, 11, 78, 14, 13, 79, 12, 98];
    var arr = av.ds.array(theArray, {indexed: true});
    av.umsg("For my random shuffle algorithm, we will randomly pick the number of iterations to do the shuffle, randomly pick the number of times to swap elements per iteration for each iteration, and randomly pick the two elements to swap")
    // Note: av.displayInit() will not affect the number of slides.
    // All that it will do is affect what you get to see on the
    // initial slide.
    av.displayInit();
    // We are now starting a new slide (#2)
    av.umsg("First, we get the length of the array and compute a random number between 1 and (Array.Length -1).");
    av.step();
    // We are now starting a new slide (#3)
    arr.highlight();
    av.umsg(" In this case, Array.Length - 1 is " + (arr.size() - 1), {preserve: true});
	 av.step();
	 arr.unhighlight();
	 av.umsg("For the sake of this demonstration, a random number between 1 and " + (arr.size() - 1) + " is 3, So we do 3 iterations of swaps");
	 av.step();
	 av.umsg("Now we randomly pick the number of swaps to do for this iteration between 1 and (arr.size() - 1)/2");
	 av.step();
	 av.umsg(" For the sake of this demonstration, a random number between 1 and " + (arr.size() - 1)/2 + " is 4, So we do 4 swaps in this iteration", {preserve: true});
	 av.step();
	 av.umsg("Now we randomly pick two indices between 0 and (arr.size() - 1), and swap them. Repeat for as many swaps in this iteration");
	 av.step();
	 arr.swap(0,4);
	 arr.swap(1,8);
	 arr.swap(0,5)
	 arr.swap(6,9);
	 av.step();
	 av.umsg("Now we start the next iteration, picking another random number of swaps to do for this iteration until we've done it the random number of times, in this case 3 times");
    av.recorded();
    // If you add av.umsg after av.recorded, it will add new slides in
    // ways that you probably do not expect and probably cannot
    // control in the way that you want. As av.recorded() rewinds the
    // slideshow, the new slides would go to the beginning of the slideshow.
    // So, unless you are trying to add slides on-the-fly
    // interactively, you don't want to do this.
    // av.umsg("Text after av.recorded()");

});