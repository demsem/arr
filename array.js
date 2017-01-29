// JavaScript Document
'use strict';
var arr = new Array (10); 
var min = 1;
var max = 100;

for (var i=0;i<10;i++){
 	arr[i]=randomInteger(min,max);
}
	
function randomInteger(min,max) {
 	var rand = min - 0.5 + Math.random() * (max - min + 1);
 	rand = Math.round(rand);
 	return rand;
 }
 
alert (GetSumm(arr));
 
function GetSumm(arr){
	var result = new Array (0);
	var Total = new Array (0);
	result = arr.reduce(function(sum, current){
		Total.push(sum);
		return sum + current;
	});
	
	Total.push(result);
	return Total;
}