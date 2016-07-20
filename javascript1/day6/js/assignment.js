var btn = document.getElementById('btn'),
 input1 = document.getElementById('input1'),
 input2 = document.getElementById('input2'),
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
      val2 = input2.value;
  if(val1 === ""|| val2 === ""){
    return '';
    //console.log('its blank');
  }

  input1.value = 'hello javascript!';
  alert(input1.value);
  span.innerHTML = input2.value;
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

*/
