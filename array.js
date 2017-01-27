// JavaScript Document
'use strict';
var arr = new Array (10); 
var min = 1;
var max = 100;
for (var i=0;i<10;i++){
	arr[i]=randomInteger(min,max);
	alert ("namber"+"  "+ i+"  "+ arr[i]);
}	

alert (arr[arr.length-1] + " end");	  

	function randomInteger(min,max) {
		var rand = min - 0.5 + Math.random() * (max - min + 1);
		rand = Math.round(rand);
		return rand;
	  }
	  
  