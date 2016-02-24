"use strict";

$(document).ready(function () {


    JSAV.init();

    var av = new JSAV("1");
    
    var book = ["Ch 1", "Ch 2", "Ch 3", "Ch 4"];
    var bookav = av.ds.array(book, {layout: "bar"});
    bookav.css( true, {"width":"200px", "height":"33px"} );
    bookav.css({"font-size":"8pt"});
    
    av.umsg("This slideshow will demonstrate the use of the MapReduce through concordance." 
			+ " This concordance will be the frequency in which a word has been used within" 
			+ " a book.");
    // Note: av.displayInit() will not affect the number of slides.
    // All that it will do is affect what you get to see on the
    // initial slide.
    av.displayInit();
	//Slide 2
    av.umsg("We start with a simple book that has four chapters in it.");
	var book = ["Ch 1", "Ch 2", "Ch 3", "Ch 4"];
    var bookav = av.ds.array(book, {"layout": "vertical"});
	av.step();
    // Slide 3
	av.umsg("We start by splitting the book into each of its separate chapters to be mapped.");
	bookav.hide();	
	var ch1 = ["Ch 1"];
    var ch2 = ["Ch 2"];
	var ch3 = ["Ch 3"];
    var ch4 = ["Ch 4"];

    var ch1av = av.ds.array(ch1, {});
    var ch2av = av.ds.array(ch2, {});
	var ch3av = av.ds.array(ch3, {});
    var ch4av = av.ds.array(ch4, {});
	av.step();
	//Slide 4
    av.umsg("Each chapter is mapped to a processing node.");
	ch1av.hide();
	ch2av.hide();
	ch3av.hide();
	ch4av.hide();

    var ch1 = ["The", "cat", "in", "the", "hat"];
    var ch2 = ["The", "dog", "with", "the", "log"];
	var ch3 = ["The", "cat", "and", "the", "dog"];
    var ch4 = ["The", "big", "fat", "cat", "sat"];	

    var ch1av = av.ds.array(ch1, {});
    var ch2av = av.ds.array(ch2, {});
	var ch3av = av.ds.array(ch3, {});
    var ch4av = av.ds.array(ch4, {});
    av.step();
	//Slide 5
    av.umsg("The sections are then sorted by each section by 'mapping' them.");
	ch1av.hide();
	ch2av.hide();
	ch3av.hide();
	ch4av.hide();

    var ch1 = ["The", "1", "cat", "1", "in", "1", "the", "1", "hat", "1"];
    var ch2 = ["The", "1", "dog", "1", "with", "1", "the", "1", "log", "1"];
	var ch3 = ["The", "cat", "and", "the", "dog"];
    var ch4 = ["The", "big", "fat", "cat", "sat"];	

    var ch1av = av.ds.array(ch1, {});
    var ch2av = av.ds.array(ch2, {});
	var ch3av = av.ds.array(ch3, {});
    var ch4av = av.ds.array(ch4, {});
    av.step();	
    // Final Slide
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
