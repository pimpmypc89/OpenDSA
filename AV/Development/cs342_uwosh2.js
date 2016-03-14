"use strict";
/*global alert: true, ODSA */

(function ($) {
  var av;
 

function runit() {
    ODSA.AV.reset(true);

    // Validate the array values a user enters or generate an array of
    // random numbers < 100 of the size selected in the dropdown list
    // if none are provided
    //var theArray = ODSA.AV.processArrayValues(100);
    var chpts, ch1, ch2, ch3;
    // If theArray wasn't filled properly, we generate our own 
    if (!chpts) {
    
        chpts = $("#ch1").val().split(", ");
	    ch1 = chpts[0].split(" ");
	    ch2 = chpts[1].split(" ");
	    ch3 = chpts[2].split(" ");
	
    }

    av = new JSAV($('.avcontainer'));

    var arr1 = av.ds.array(ch1, {layout:"bar"});
    arr1.css(true,{"height":"30px","width":"150px"});
    var arr2 = av.ds.array(ch2, {layout:"bar"});
    arr2.css(true,{"height":"30px","width":"150px"});
    var arr3 = av.ds.array(ch3, {layout:"bar"});
    arr3.css(true,{"height":"30px","width":"150px"});
    av.umsg("Breakdown of what you entered:");
    // Note: av.displayInit() will not affect the number of slides.
    // All that it will do is affect what you get to see on the
    // initial slide.
    av.displayInit();
    // We are now starting a new slide (#2)
    av.umsg("Step 2", {preserve: true});
    av.step();
    // We are now starting a new slide (#3)
    av.umsg("");
    av.recorded();
    // If you add av.umsg after av.recorded, it will add new slides in
    // ways that you probably do not expect and probably cannot
    // control in the way that you want. As av.recorded() rewinds the
    // slideshow, the new slides would go to the beginning of the slideshow.
    // So, unless you are trying to add slides on-the-fly
    // interactively, you don't want to do this.
    // av.umsg("Text after av.recorded()");

}



function about() {
   alert("This module will visualize a MapReduce over the words you provide.");
}
  
function help() {
   alert("Help for simple array visualization");
}
  
// Initialize the arraysize dropdown list
ODSA.AV.initArraySize(10, 16, 12); // Between 10 and 16, with default at 12


// Connect action callbacks to the HTML entities
$('#about').click(about);
$('#runit').click(runit);
$('#help').click(help);
$('#reset').click(ODSA.AV.reset);
}(jQuery));
