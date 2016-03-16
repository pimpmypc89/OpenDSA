.. This file is part of the OpenDSA eTextbook project. See
.. http://algoviz.org/OpenDSA for more details.
.. Copyright (c) 2012-13 by the OpenDSA Project Contributors, and
.. distributed under an MIT open source license.

.. avmetadata:: 
   :author: Ani Thomas, Logan Trost, Randy Nimmer

============================================================
Introduction
============================================================

MapReduce is a programming model that allows users to process data in parallel. It is a framework from hadoop that is very widely known and has been around for almost a decade. Commonly used with large amounts of data, MapReduce's ability to work in parallel can allow a program to process data faster. This program is most efficient in situations with multiple threads with large amounts of data, however it can also be used to solve simple small solutions as well.

The process of MapReduce can be separated into two basic phases: mapping and reducing. These phases are always performed in the same order and create a simple path to follow. First, the input data is mapped using a map function. This is done to create key-value pairs. After this task is performed, the key-value pairs are aggregated together in the reduce step. By reducing the data, the result can be formed.


============================================================
MapReduce Concordance Example
============================================================
Concordance Introduction
-----------------------

The following slideshow demonstrates how the mapReduce algorithm can be used to create a concordance. A concordance is the alphabetical list of all the words in a book/text. In this example we get both the concordance and the frequency in which each word is printed through the process of MapReduce. To help visually understand what MapReduce does, we have broken it up into individual steps.


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
.. avembed:: Exercises/Development/MapReduceEx.html ka

.. odsascript:: Excercises/Development/MapReduceEx.js

Sources
-----------------------
http://www.dummies.com/how-to/content/the-importance-of-mapreduce-in-hadoop.html

https://www.youtube.com/watch?v=8wjvMyc01QY
