/*global window */
(function() {
  "use strict";
    var my_array;
    var frequent;  
    
    var MapReduceEx = {
      
    // Initialise the exercise
      initArr: function(arr_size) {
	  //some generic phrases
	  var phrase3 = "the cat in the hat is very fat and it sat on a bat and now it is on the mat with a rat under his pat"
	  var phrase2 = "my saab has stopped running and the engine is now smoking from a fire that is bad for insurance"
	  var phrase1 = "a brown dog jumped over the white dog who caught a frisbie after chasing the cat under a bird"
	  var phrase = phrase1;
	  var quickpick = Math.random();
	  if(quickpick <= 0.25)	//"randomly" decides which phrase to use
	      phrase = phrase2;
	  if(quickpick >= 0.6)
	      phrase = phrase3;
	  var phrase_array = phrase.split(" "); //turns phrase into word array
	  var next_val;
	  var array_str = " "; //initialize output string
	  my_array = [];	
	  for (var i = 0; i < arr_size; i++) { //make a random array of words from the phrase
	      next_val = phrase_array[Math.floor(Math.random() * (arr_size - 0 + 1)) + 0];
	      my_array.push(next_val);
	  }
	  var modeMap = {}; //This while loop finds the word that appears the most. If there is a tie, all are included
          var maxElements = []; 
          var maxCount = 1;

    	  for(var i = 0; i < my_array.length; i++)
    	  {
              var element = my_array[i];
              if (modeMap[element] == null)
                  modeMap[element] = 1;
              else
                  modeMap[element]++;
              if (modeMap[element] > maxCount)
              {
                  maxElements = [element];
            	  maxCount = modeMap[element];
              }
              else if (modeMap[element] == maxCount)
              {
	          maxElements.push(element);
           	  maxCount = modeMap[element];
              }
    	  }
	  if(maxElements.length > 1) //break the tie so there is only one answer
	  {
	      frequent = maxElements[Math.floor(Math.random() * ((maxElements.length -1) - 0 + 1)) + 0];		
	      var insert = Math.floor(Math.random() * ((my_array.length-1) - 0 + 1) + 0);
	      var temp = my_array[insert];
	      my_array[insert] = frequent; //We're picking a random tied answer to be the real answer, grabbing a random place
	      my_array.push(temp);	//to shove it in and putting what was there at the end
	  }
	  else
	      frequent = maxElements[0]; //otherwise nothing to tie break, that's the answer
	
	  var my_array2 = [];
	  var numToSplit = my_array.length/2;
	  for(var s = 0; s < numToSplit; s++) //Hokey way of splitting the array in two since slice wasn't working
	  {
	      my_array2.push(my_array.pop());
	  }
	  my_array.sort(); //sort the two "chapter" arrays
	  my_array2.sort();
	  var inputArray = [];
	  inputArray.push(my_array);
	  inputArray.push(my_array2);
	  for(var j = 0; j < inputArray.length; j++)
	  {
	      var their_array = inputArray[j];
	      var keys = [];
	      var cMap = {};
	      for(var k = 0; k < their_array.length; k++) //Create a Map and tally up all the words
	      {
	          var element = their_array[k];
	          if(cMap[element] == null)
	          {
	              cMap[element] = 1;
	 	      keys.push(element);
	          }
	          else
		      cMap[element]++;
	      }
	      for (var i = 0; i < keys.length; i++) { //Generate the output for the chapter
	          array_str = array_str + "[" + keys[i] + " : " + cMap[keys[i]] +"] <br> ";
	      }
		  array_str = array_str + "<br> ";
	  }
	  
	  return array_str;
      },

      
      maxValue: function() {
	  return frequent;
      }
  };
    

  window.MapReduceEx = window.MapReduceEx || MapReduceEx;
}());
