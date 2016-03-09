.. This file is part of the OpenDSA eTextbook project. See
.. http://algoviz.org/OpenDSA for more details.
.. Copyright (c) 2012-13 by the OpenDSA Project Contributors, and
.. distributed under an MIT open source license.

.. avmetadata:: 
   :author: Ani Thomas, Logan Trost, Randy Nimmer

============================================================
Introduction
============================================================

Testing Testing 123

============================================================
MapReduce Concordance Example
============================================================
Concordance Introduction
-----------------------

The following slideshow demonstrates how the mapReduce algorithm can be used to create a concordance. MapReduce is a program that takes components, separates them into smaller groups (the map step), redistributes the data based on what the user asks for (the shuffling step), then processes each group of data in parallel (the reducing step). This program is more efficient in situations with multiple threads, and is used to optimize them.


Simple Slideshow Example
-----------------------

.. inlineav:: 1 ss
   :output: show


.. odsascript:: AV/Development/MapReduce/1.js


Interactive Example
-----------------------

.. avembed:: AV/Development/cs342_uwosh2.html ss


.. odsascript:: AV/Development/cs342_uwosh2.js



Excercises
-----------------------
.. avembed:: Exercises/Development/MapReduceEX.html ka

.. odsascript:: Excercises/Development/MapReduceEX.js
