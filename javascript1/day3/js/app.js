
alert("hi");

var fName = prompt("what is your first name");
// this will take user input for first names
var lName = prompt("what is your last name");
// this will take input for a last name
alert(fName);
console.log(fName);
console.log(lName);
alert(lName);
// this will read off the inputs given
var user = confirm("are you " + fName + " " + lName );
// this will read of a true or fales statment
alert(user);
console.log("5" == 5);
// == is loose it says eh good enough
console.log("5" === 5);
// no loose no goose if it aint 5 it aint 5
console.log("5" != 5);
// loose its equil enough so false
console.log("5" !== 5);
// it not the same one has ("") so true
console.log(parseInt("35"));
var isItANumber = parseInt('35');
console.log(typeof isItANumber);
// 2.5. console value of the first & second number
var firstNum = parseInt(prompt("type a number"));
var secondNum = parseInt(prompt("type another number"));
// short way of writing this
alert(firstNum + secondNum);
//console.log(firstNum);
//console.log(secondNum);
// var a , b ,c ;
var a;
var b;
a = prompt("type a number");
b = prompt("type another number");
var f = "eian";
var g parseInt(g);
// will read nan curent var f and g
var c = parseInt(a);
var d = parseInt(a);

var e = c + d;
alert(e);
// long way of writing
console.log(isNaN(g));

var a = '5';
if(a === 5 ){
  alert('yes it is');
  }else {
    alert('no its not')
  }
  var age = prompt('how old are you');
  if (age < 18) {
    alert('your a young one!');
  }else if (age >= 18 && age <= 50) {
    alert("pay tax's");
  }
  else {
    alert("retire");
  }

   var male = "man";
   var female = "woman"
   var gender = prompt("are you man or woman")
   if (age >= 18 && age <= 50 && female){
     alert("hi qt");
   }
   else if (age >= 18  && male) {
     alert("hay bro");
   }else if (age < 18 && (female || male) ) {
     alert("learn to code");
   }else {
     alert("you beat me")
   }

//var color = 'green';

var color = prompt("pick a color");
switch (color) {
  case 'red':
      console.log('a ' + color + 'apple');
    break;
    case 'green':
      console.log('lush ' + color + ' grass');
  default:
      console.log('nothings left');
}
var age = prompt('what is your age');
age = parseInt(age);
var sex = prompt('what is your gender')
/*switch (age | sex) {
  case (age < 18 && age <= 50) | 'male':
    prompt('young');
    break;
    case (age )
  default:

} */

var result = age < 18 ? alert('young') : alert('old');


var userResponse = prompt('what would you like to do');
if (userResponse == true ){
  prompt("please write something");
  console.log(userResponse);
}else if (userResponse == "") {
  prompt(" i ask for a thing not a number");
  console.log(userResponse);
}
}else {
  alert('you want to ' + userResponse );
  console.log(userResponse);
}
