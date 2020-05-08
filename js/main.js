/*
	Creator: Sam Kratzer
	Date created: 6/19/2019
	Date last modified: 6/19/2019
*/

var go=document.getElementById("go");

var two=document.getElementById("d2");
var four=document.getElementById("d4");
var six=document.getElementById("d6");
var eight=document.getElementById("d8");
var ten=document.getElementById("d10");
var twelve=document.getElementById("d12");
var twenty=document.getElementById("d20");
var hundred=document.getElementById("d100");

var modifier=document.getElementById("modifier");
var advantage=document.getElementById("advantage");

go.addEventListener("click", onClick);

function onClick(){
	console.log("click has occurred");
	alert(roll());
}

function roll(){
	console.log(advantage.value);
	if (advantage.value == "none"){
		return rollAllDice();
	}

	else if (advantage.value == "advantage"){
		var i = rollAllDice();
		var j = rollAllDice();
		if (i>j) return i;
		else return j;
	}

	else if (advantage.value == "disadvantage"){
		var i = rollAllDice();
		var j = rollAllDice();
		if (i<j) return i;
		else return j;
	}

	else alert("unknown error occurred");
}

function rollAllDice(){
	var d2=parseFloat(two.value) || 0;
	var d4=parseFloat(four.value) || 0;
	var d6=parseFloat(six.value) || 0;
	var d8=parseFloat(eight.value) || 0;
	var d10=parseFloat(ten.value) || 0;
	var d12=parseFloat(twelve.value) || 0;
	var d20=parseFloat(twenty.value) || 0;
	var d100=parseFloat(hundred.value) || 0;

	var mod = parseFloat(modifier.value) || 0;

	var a = rollDice(d2, 2);
	var b = rollDice(d4, 4);
	var c = rollDice(d6, 6);
	var d = rollDice(d8, 8);
	var e = rollDice(d10, 10);
	var f = rollDice(d12, 12);
	var g = rollDice(d20, 20);
	var h = rollDice(d100, 100);

	var sum = a+b+c+d+e+f+g+h+mod;
	return sum;
}

function rollDice(numDice, numSides){
	var total=0
	for (i=0; i<numDice; i++) total+=(Math.floor(Math.random()*numSides)+1);
	return total;
}