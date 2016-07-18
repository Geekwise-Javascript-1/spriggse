/*
function giveItToMe (){
var gotSomething = prompt('type something');
console.log(gotSomething);
console.log(typeof(gotSomethin));

if (!gotSomething) {
alert("you must type something")
giveItToMe();
//if ( (gotSomething == "") || (gotSomething == null) )
  console.log('its true');


}else {
alert('gez! its about time ');
console.log(gotSomething);
}
}

giveItToMe();

//var color = 'red, orange, yellow, green';
var myArr = [1, 2, 3];
var favFruits = ['banana','cherry','pineapple','apple','grapes'];
console.log(favFruits.length);
fruits.push('apple');
console.log(favFruits);
console.log(favFruits.length);
*/





//var fruitColors = [];
//var cherry = ['cherry','red'];
//var banana = ['banana','yellow'];
//var apple = ['apple','green'];
//fruitColors.push(cherry);
//fruitColors.push(banana);
//fruitColors.push(apple);

//console.log(fruitColors[0][0] +' '+fruitColors[1][1]);
//var fruits = ['banana','cherry','pineapple','apple','grapes'];
//var lastFruits = fruits.pop();
//console.log(lastFruits);
//console.log(fruits);
//var getFruit = fruits.slice(1,3,'grapes');
//console.log(getFruit);
//console.log(fruits);

//part1
var firstNum = parseInt(prompt('pick a number'));
var secondNum = parseInt(prompt('pick a second number'));
if (isNaN(firstNum) || isNaN(secondNum)) {
alert("need you to enter numbers")
}else {
  var nums = firstNum + secondNum;
  console.log(nums);
  var answerOne = alert(nums * nums);

}
//part2
var name = prompt('what is your name');
function titleCase(str) {
   var splitStr = str.toLowerCase().split(' ');
   for (var i = 0; i < splitStr.length; i++) {
       // You do not need to check if i is larger than splitStr length, as your for does that for you
       // Assign it back to the array
       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
   }
   // Directly return the joined string
   return splitStr.join(' ') + ".";
   //return splitStr.reverse().join(' ');
}

document.write(titleCase(name));
//part3
var atom = prompt("whats a good song?")
var splitAtom = atom.length / 2;
var songs = atom.length % 2;
if ((atom.length > 2) && isNaN(atom)) {
var flame = atom.substring(0,splitAtom);
var rain = atom.substring(splitAtom);
var clouds = rain;
console.log(clouds + flame);
}
// part 4
var firstNum = parseInt(prompt('pick a number'));
var secondNum = parseInt(prompt('pick a second number'));
var thridNum = parseInt(prompt('pick a third number'));
var fourthNum = parseInt(prompt('pick a fourth number'));
if (isNaN(firstNum) || isNaN(secondNum) || isNaN(thridNum) || isNaN(fourthNum)) {
alert("on of those is NaN")
}else {
  var nums = firstNum + secondNum + thridNum + fourthNum;
  console.log(nums);
}
