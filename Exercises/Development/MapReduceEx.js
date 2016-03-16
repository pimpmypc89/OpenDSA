/*global window */
(function() {
  "use strict";
    var my_array;
    var frequent;  
    
    var MapReduceEx = {
      
    // Initialise the exercise
      initArr: function(arr_size) {
	  var phrase3 = "the cat in the hat is very fat and it sat on a bat and now it is on the mat"
	  var phrase2 = "my saab has stopped running and the engine is now smoking from a fire that is bad"
	  var phrase = "a brown dog jumped over the white dog who caught a frisbie after chasing the cat"
	  var phrase;
	  var quickpick = Math.random();
	  if(quickpick <= 0.25)
	      phrase = phrase2;
	  if(quickpick >= 0.6)
	      phrase = phrase3;
	  var phrase_array = phrase.split(" ");
	  var i;
	  var next_val;
	  var array_str;
	  my_array = [];
	  for (i = 0; i < arr_size; i++) {
	      next_val = phrase_array[Math.floor(Math.random() * (arr_size - 0 + 1)) + 0];
	      my_array.push(next_val);
	  }
	  var modeMap = {},
          maxElements = [],
          maxCount = 1;

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
	  if(maxElements.length > 1)
	  {
	      frequent = maxElements[Math.floor(Math.random() * ((maxElements.length -1) - 0 + 1)) + 0];		
	      var insert = Math.floor(Math.random() * ((my_array.length-1) - 0 + 1) + 0);
	      var temp = my_array[insert];
	      my_array[insert] = frequent;
	      my_array.push(temp);
	  }
	  else
	      frequent = maxElements[0];
	  array_str = "[" + my_array[0] + " : 1] <br>";
	  for (i = 1; i < arr_size; i++) {
	      array_str = array_str + "[" + my_array[i] + " : 1] <br>";
	  }
	  return array_str;
      },
      
      maxValue: function() {
	  return frequent;
      }
  };
    

  window.MapReduceEx = window.MapReduceEx || MapReduceEx;
}());
