"use strict";

$(document).ready(function () {


    JSAV.init();

    var av = new JSAV("randy1");
    var theArray = [20, 30, 44, 54, 55, 11, 78, 14, 13, 79, 12, 98];
    var arr = av.ds.array(theArray, {indexed: true});
    av.umsg("Array before shuffling:");
    // Note: av.displayInit() will not affect the number of slides.
    // All that it will do is affect what you get to see on the
    // initial slide.
    av.displayInit();
    // We are now starting a new slide (#2)
    av.umsg("Shuffling...");
    var cur = theArray.length, temp, ranIndex;
    while ( 0 !== cur )
    {
        ranIndex = Math.floor( Math.random() * cur );
        cur--;
       
        temp = theArray[cur];
        theArray[cur] = theArray[ranIndex];
        theArray[ranIndex] = temp;
       
        arr.swap(cur,ranIndex);
        av.step();
    }
    // We are now starting a new slide (#3)
    av.umsg("Swapping now complete.");
    av.recorded();
    // If you add av.umsg after av.recorded, it will add new slides in
    // ways that you probably do not expect and probably cannot
    // control in the way that you want. As av.recorded() rewinds the
    // slideshow, the new slides would go to the beginning of the slideshow.
    // So, unless you are trying to add slides on-the-fly
    // interactively, you don't want to do this.
    // av.umsg("Text after av.recorded()");

});
