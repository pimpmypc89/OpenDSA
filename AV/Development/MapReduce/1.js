"use strict";

$(document).ready(function () {


    JSAV.init();

    var av = new JSAV("1");
    
    var book = ["Ch 1", "Ch 2", "Ch 3", "Ch 4"];
    var bookav = av.ds.array(book, {"layout": "vertical"});
    bookav.css({"font-size":"8pt"});
    av.umsg("Chapters before mapping:");
    // Note: av.displayInit() will not affect the number of slides.
    // All that it will do is affect what you get to see on the
    // initial slide.
    av.displayInit();
    // We are now starting a new slide (#2)
    av.umsg("Each chapter is mapped to a processing node.");
    bookav.hide();
    var ch1 = ["The", "Cat", "in", "Hat"];
    var ch2 = ["The", "Dog", "in", "Hat"];
    var ch1av = av.ds.array(ch1, {});
    var ch2av = av.ds.array(ch2, {});
    av.step();
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
