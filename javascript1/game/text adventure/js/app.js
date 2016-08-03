var btn = document.getElementById('btn'),
 myName = document.getElementById('myName'),
 gender = document.getElementById('gender'),
 //female = document.getElementById('female'),
 myClass = document.getElementById('class'),
 gift = document.getElementById('gift'),
 level = document.getElementById('level')
 span = document.getElementById('span');
//console.log(btn);
btn.onclick = handleGoBtnClick;
function handleGoBtnClick(){

  //alert('does this work');
  //console.log(input1.value);
  //var userInput = input1.value;
  //console.log(typeof input1);
  var val1 = myName.value,
      val2 = gender.value,
      val3 = myClass.value,
      val4 = gift.value,
      val5 = level.value;
  if(val1 === ""|| val3 == "" || val4 == "" || val5 == ""){
    return '';
    //console.log('its blank');
  }
  /*
  if(male.value == true){
    male.value === "male";
    alert('boy');
  }else if (female.value == true) {
    female.value === "female";
    alert('girl');
  }else {
    alert('what')
  }
  */
var fruits =[];
fruits.push(val1, val2, val3, val4, val5);
console.log(fruits);
for (var i = 0; i < fruits.length; i++) {
  if(fruits[0] === fruits[1] || fruits[0] === fruits[2] || fruits[0] === fruits[3] || fruits[0] === fruits[4]  ){
    alert('your first input matches another');
    var change1 = prompt("please put a change for input 1");
    if (change1 === false) {
      fruits[0] = val1 +"01";
    }
    fruits[0] = change1;
  }else if (fruits[1] === fruits[0] || fruits[1] === fruits[2] || fruits[1] === fruits[3] || fruits[1] === fruits[4]) {
    alert("your second input matches another");
    var change2 = prompt("please put a change for input 2");
    if (change2 === false) {
      fruits[1] = val2 + "01";
    }
    fruits[1] = change2;
  }else if (fruits[2] === fruits[1] || fruits[2] === fruits[0] || fruits[2] === fruits[3] || fruits[2] === fruits[4]) {
    alert("your 3rd input matches another");
    var change3 = prompt("please put a change for input 3");
    if (change3 === false) {
      fruits[2] = val3 + "01";
    }
    fruits[2] = change3;
  }else if (fruits[3] === fruits[1] || fruits[3] === fruits[2] || fruits[3] === fruits[0] || fruits[3] === fruits[4]) {
    alert("your 4th input matches another");
    var change4 = prompt("please put a change for input 4");
    if (change4 === false) {
      fruits[3] = val4 + "01";
    }
    fruits[3] = change4;
  }else if (fruits[4] === fruits[1] || fruits[4] === fruits[2] || fruits[4] === fruits[3] || fruits[4] === fruits[0]) {
    alert("your 5th input matches another");
    var change5 = prompt("please put a change for input 5");
    if (change5 === false) {
      fruits[4] = val5 + "01";
    }
    fruits[4] = change5;
  }else {
    console.log(fruits);
  }

}
span.innerHTML = fruits;
var stats = {name: val1, gender: val2, Class: val3, gift: val4, level: val5 };
console.log(stats);



/*
switch () {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;

}
*/

//for (i = 0; i < cars.length; i++) {
//    text += cars[i] + "<br>";
//}
  //input1.value = 'hello javascript!';
  //alert(input1.value);
//  span.innerHTML = input2.value;
  //updateOutput(input2.value);
}
// homework
/*
5 inputs
go! buttion
onclick grab values of the 5 inputs
push into an array          ("hint") for loop
check for duplicates        "alert something"
switch()        /      if/elseif/else ---> inter.html
rose "red"; innerHTML

*//*
var a = 'Magic belongs to Jerry Harry Jerry Harry Potter and Banana Joe'.split(' ');
a = a.sort()
>>>["Banana", "Harry", "Harry", "Jerry", "Jerry", "Joe", "Magic", "Potter", "and", "belongs", "to"]
a.filter( function(v,i,o){if(i>=0 && v!==o[i-1]) return v;});
["Harry", "Jerry", "Joe", "Magic", "Potter", "and", "belongs", "to"]
*/
