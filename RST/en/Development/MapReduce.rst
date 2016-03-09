.. This file is part of the OpenDSA eTextbook project. See
.. http://algoviz.org/OpenDSA for more details.
.. Copyright (c) 2012-13 by the OpenDSA Project Contributors, and
.. distributed under an MIT open source license.

.. avmetadata:: 
   :author: Ani Thomas, Logan Trost, Randy Nimmer

============================================================
Introduction
============================================================

MapReduce is a program that allows users to process data in parallel. It is a framework from hadoop that is very widely known and has been around for almost a decade. Commonly used with large amounts of data, MapReduce's ability to work in parallel allows the optimization of problems. This program is more efficient in situations with multiple threads with larger amounts of data, however it can also be used to solve simple small solutions as well.

The process of MapReduce can be separated into two basic phases: mapping and reducing. These phases are always performed in the same order and create a simple path to follow. First, the input data is mapped using a map function. This is done to create key-value pairs. After this task is performed, the key-value pairs are aggregated together in the reduce step. By reducing the data, the result can be formed.

MapReduce 

============================================================
MapReduce Concordance Example
============================================================
Concordance Introduction
-----------------------

The following slideshow demonstrates how the mapReduce algorithm can be used to create a concordance. 


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

<<<<<<< HEAD
.. odsascript:: Excercises/Development/AniExcercise1.js

Sources
-----------------------
http://www.dummies.com/how-to/content/the-importance-of-mapreduce-in-hadoop.html
https://www.youtube.com/watch?v=8wjvMyc01QY
=======
.. odsascript:: Excercises/Development/MapReduceEx.js
>>>>>>> 294018875cca57d5ef92a0a3c47d740c4c7b3431
