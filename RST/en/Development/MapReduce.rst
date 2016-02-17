.. This file is part of the OpenDSA eTextbook project. See
.. http://algoviz.org/OpenDSA for more details.
.. Copyright (c) 2012-13 by the OpenDSA Project Contributors, and
.. distributed under an MIT open source license.

.. avmetadata:: 
   :author: Randy Nimmer, Logan Trost

============================================================
Illustrate a simple slide show in an OpenDSA learning module
============================================================

Swapping array elements
-----------------------


The following slideshow demonstrates how, starting with a slideshow
like you worked with in last week's lab, you can incorporate it into a
learning module.

.. inlineav:: 1 ss
   :output: show
   
=====  =====  ======
   Inputs     Output
------------  ------
  A      B    A or B
=====  =====  ======
False  False  False
True   False  True
False  True   True
True   True   True
=====  =====  ======
.. avembed:: AV/Development/cs342_uwosh2.html ss


.. odsascript:: AV/Development/MapReduce/1.js
