/*
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

*/
/*

// class answer
//part1
//var getNum = parseInt(prompt("type a number"));
function powerOf(numOne){
  if(!numOne){
    return NaN;
  }
  alert(numOne);
  return numOne * numOne;

}
//alert(powerOf(getNum));
//part 2
//var getStr = prompt('type a sentence');
//var res = capPeriodStr(getStr);
function capPeriodStr(str);
var upper = str.charAt(0).toUpperCase() + str.slice(1);
var lastChar = upper.length - 1;
console.log(str[lastChar]);
if(lastChar !== '.' ){
  return upper + '.';
}
return upper;
}
//alert(res);
//part 3
*/
var getStr = prompt('type a sentence');
var flipped = flipThatStr(getStr);
function flipThatStr(str){
  if (!str ) {
return '';
  }
  else if (str.length % 2 === 0) {
    var calc = math.floor(str.length /2);
    var firstHalf = str.substring(0,getStr.length/2);
    var secondHalf = str.substring(calc);
    return secondHalf + firstHalf;
  }else {




  var firstHalf = str.substring(0,getStr.length/2);
  var secondHalf = str.substring(str.length/2);
  return secondHalf + firstHalf;
}
}
alert(flipped);























//rrrr
