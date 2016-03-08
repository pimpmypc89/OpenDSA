.. This file is part of the OpenDSA eTextbook project. See
.. http://algoviz.org/OpenDSA for more details.
.. Copyright (c) 2012-13 by the OpenDSA Project Contributors, and
.. distributed under an MIT open source license.

.. avmetadata:: 
   :author: Ani Thomas, Logan Trost, Randy Nimmer

============================================================
MapReduce
============================================================

The MapReduce Algorithm - A Simple Slideshow
-----------------------

The following slideshow demonstrates how the mapReduce algorithm can be used to create a concordance. MapReduce is a program that takes components, separates them into smaller groups (the map step), redistributes the data based on what the user asks for (the shuffling step), then processes each group of data in parallel (the reducing step). This program is more efficient in situations with multiple threads, and is used to optimize them.

.. inlineav:: 1 ss
   :output: show


.. odsascript:: AV/Development/MapReduce/1.js

MapReduce - Interactive Slideshow
-----------------------

.. avembed:: AV/Development/cs342_uwosh2.html ss


.. odsascript:: AV/Development/cs342_uwosh1.js
