/*
	Creator: Sam Kratzer
	Date created: 5/7/2020
	Date last modified: 5/7/2020
*/

var go=document.getElementById("go");

var one=document.getElementById("q1");
var two=document.getElementById("q2");
var three=document.getElementById("q3");
var four=document.getElementById("q4");
var five=document.getElementById("q5");
var six=document.getElementById("q6");
var seven=document.getElementById("q7");
var eight=document.getElementById("q8");
var nine=document.getElementById("q9");

var text=document.getElementById("response");


go.addEventListener("click", onClick);

function onClick(){
	text.innerHTML = response(getSum());
}

function getSum(){
	var a1=parseFloat(one.value) || 0;
	var a2=parseFloat(two.value) || 0;
	var a3=parseFloat(three.value) || 0;
	var a4=parseFloat(four.value) || 0;
	var a5=parseFloat(five.value) || 0;
	var a6=parseFloat(six.value) || 0;
	var a7=parseFloat(seven.value) || 0;
	var a8=parseFloat(eight.value) || 0;
	var a9=parseFloat(nine.value) || 0;
	var sum = a1+a2+a3+a4+a5+a6+a7+a8+a9;
	return sum;
}

function response(number){
	if (number == 0){
	return "you didn't put anything in, dipshit.";
	}

	else if ((number > 0) && (number <= 25)){
	return "your score is "+number+" ... you're a bit anxious";
	}

	else if ((number > 25) && (number <= 35)){
	return "your score is "+number+" ... you're pretty anxious"; 
	}

	else if (number > 35){
	return "your score is "+number+" ... wow, you're very anxious";
	}

	return "something weird happened"
}
