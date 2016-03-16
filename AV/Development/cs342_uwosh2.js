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
    var chptstrs, chpts, chpt;
    chpts = [];
    // If theArray wasn't filled properly, we generate our own 
    if (!chptstrs) {
    
        if ( $("#ch1").val() == "" )
            chptstrs = "the cat in the hat, the dog in the hat, the bat in the car".split(", ");
        else
            chptstrs = $("#ch1").val().split(", ");

        for ( var i = 0; i < chptstrs.length; i++ )
        {
            chpt = chptstrs[i].split(" ");
            chpts.push( chpt );
        }
	
    }

    av = new JSAV($('.avcontainer'));

    av.umsg("Breakdown of what you entered:", {preserve: false});
    //create the array visualizations using entered chapter data.
    var chptavs = createavs( chpts, av );
    
    // Note: av.displayInit() will not affect the number of slides.
    // All that it will do is affect what you get to see on the
    // initial slide.
    av.displayInit();
    // We are now starting a new slide (#2)
    av.umsg("Each chapter is sorted:", {preserve: false});
    hideavs( chptavs );
    for ( var i = 0; i < chpts.length; i++ )
    {
        chpts[i].sort();
    }
    chptavs = createavs( chpts, av );
    av.step();
    // We are now starting a new slide (#3)
    av.umsg("Concordances are generated:");
    var concs = [];
    for ( var i = 0; i < chpts.length; i++ )
    {
        concs.push( concordance(chpts[i]) );
    }
    hideavs( chptavs );
    chptavs = createavs( concs, av );
    
    av.step();
    
    av.umsg("Then the concordances are reduced into a single concordance for the book:");
    var booka = [];
    for ( var i = 0; i < chpts.length; i++ )
    {
        booka = booka.concat( chpts[i] );
    }
    booka.sort();
    var bookc = concordance( booka );
    hideavs( chptavs );
    var conav = av.ds.array(bookc, {layout:"bar"});
    conav.css(true,{"height":"30px","width":"150px"});
    
    av.recorded();
    // If you add av.umsg after av.recorded, it will add new slides in
    // ways that you probably do not expect and probably cannot
    // control in the way that you want. As av.recorded() rewinds the
    // slideshow, the new slides would go to the beginning of the slideshow.
    // So, unless you are trying to add slides on-the-fly
    // interactively, you don't want to do this.
    // av.umsg("Text after av.recorded()");

}

function createavs( chpts, av )
{
    var chavs = [];
    for ( var i = 0; i < chpts.length; i++ )
    {
        var chav = av.ds.array(chpts[i], {layout:"bar"});
        chav.css(true,{"height":"30px","width":"150px"});
        chavs.push( chav );
    }
    return chavs;
}

function hideavs( chptavs )
{
    for ( var i = 0; i < chptavs.length; i++ )
    {
        chptavs[i].hide();
    }
}

function concordance(ch1)
{
    var count = 0;
    var ch1c = [];
    for ( var i = 0; i < ch1.length; )
    {
        for ( var j = i; j < ch1.length; j++ )
        {
            if ( ch1[i] == ch1[j] )
                count++;
            else
                break;
        }
        ch1c.push( ch1[i] + " = " + count );
        i += count;
        count = 0;
    }
    return ch1c;
} 

function about() {
   alert("This module allows you to create your own concordance by adding a sentence inside the input box. When hitting submit, the slideshow will take you through the MapReduce function.");
}
  
function help() {
   alert("Enter the words you would like to see made into a concorcance in the input box." 
				+ "	If you want to make multiple chapters, separate them with commas."
				+ " EX: The cat in the hat, The cat that has a hat");
}
  
// Initialize the arraysize dropdown list
ODSA.AV.initArraySize(10, 16, 12); // Between 10 and 16, with default at 12


// Connect action callbacks to the HTML entities
$('#about').click(about);
$('#runit').click(runit);
$('#help').click(help);
$('#reset').click(ODSA.AV.reset);
}(jQuery));
