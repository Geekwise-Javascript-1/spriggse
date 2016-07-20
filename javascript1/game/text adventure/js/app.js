var btn = document.getElementById('btn'),
 input1 = document.getElementById('input1'),
 input2 = document.getElementById('input2'),
 teat = document.getElementById('test'),
 input3 = document.getElementById('input3'),
 input4 = document.getElementById('input4'),
 input5 = document.getElementById('input5')
 span = document.getElementById('span');
//console.log(btn);
btn.onclick = handleGoBtnClick;
function handleGoBtnClick(){

  //alert('does this work');
  //console.log(input1.value);
  //var userInput = input1.value;
  console.log(typeof input1);
  var val1 = input1.value,
      val2 = test.value,
      val3 = input3.value,
      val4 = input4.value,
      val5 = input5.value;
  if(val1 === ""|| val3 == "" || val4 == "" || val5 == ""){
    return '';
    //console.log('its blank');
  }
var fruits =[];
fruits.push(val1, val2, val3, val4, val5);
console.log(fruits);
for (var i = 0; i < fruits.length; i++) {
  if(fruits[0] === fruits[1]  || fruits[0] === fruits[3] || fruits[0] === fruits[4]  ){
    alert('your first input matches another');
    var change1 = prompt("please put a change for input 1");
    if (change1 === false) {
      fruits[0] = val1 +"01";
    }
    fruits[0] = change1;
  }else if (fruits[1] === fruits[0]  || fruits[1] === fruits[3] || fruits[1] === fruits[4]) {
    alert("your second input matches another");
    var change2 = prompt("please put a change for input 2");
    if (change2 === false) {
      fruits[1] = val2 + "01";
    }
    fruits[1] = change2;

  }else if (fruits[3] === fruits[1]  || fruits[3] === fruits[0] || fruits[3] === fruits[4]) {
    alert("your 4th input matches another");
    var change4 = prompt("please put a change for input 4");
    if (change4 === false) {
      fruits[3] = val4 + "01";
    }
    fruits[3] = change4;
  }else if (fruits[4] === fruits[1]  || fruits[4] === fruits[3] || fruits[4] === fruits[0]) {
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
