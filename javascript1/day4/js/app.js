/*
var firstNum = parseInt(prompt('pick a number'));
var secondNum = parseInt(prompt('pick a second number'));
if (isNaN(firstNum) || isNaN(secondNum)) {
alert("need you to enter numbers")
}else {
  console.log(firstNum * secondNum);
  console.log(firstNum / secondNum);

}
*/
/*
var myString = "red, green, yellow, blue, ";
console.log(myString.lastIndexOf("blue"));

console.log(myString.slice(11, 18));
var randNum = (Math.random();
//var randNum = Math.floor(Math.random() * 11);

console.log(randNum);
var multi = randNum * 11;
var random =Math.floor(multi);
*/
//console.log(Math.round(4.5));
 //var theDate = new Date();
 //var daysOfTheWeek = ['sun','mon','tue','wed','thu','fri','sat']
 //console.log(theDate.getFullYear());
//console.log(daysOfTheWeek[theDate.getDay()]);
//var x = 123;
//console.log(x.toString());


//function helloWorld(num){
//  console.log("hello World " + num);
//}
//helloWorld(5);
var name = prompt('what is your name');
/*
function Myname(){
 var name = prompt('what is your name');
 var low = name.toLowerCase();
 var run= low.toUpperCase();
 var cat =run.charAt(0);
 var man = name.slice(1);
 alert( cat + man);

}


Myname();
*/
function titleCase(str) {
   var splitStr = str.toLowerCase().split(' ');
   for (var i = 0; i < splitStr.length; i++) {
       // You do not need to check if i is larger than splitStr length, as your for does that for you
       // Assign it back to the array
       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
   }
   // Directly return the joined string
   return splitStr.join(' ');
   //return splitStr.reverse().join(' ');
}

document.write(titleCase(name));

//document.write(titleCase(name);
