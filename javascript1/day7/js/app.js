/*
var btn = document.getElementById('btn'),
 input1 = document.getElementById('input1'),
 ul = document.getElementById('ul');
 btn.onclick = addToList;
 function addToList(){
   var val1 = input1.value;
   if (val1 === "") {
     return '';
   }
   var adder = [];
   adder.push(val1)
   for (var i = 0; i < adder.length; i++) {
     val1 = adder[i];
   }
   ul.innerHTML = adder;
   if(adder[0] === val1){
     adder.concat(val1);
   }
 }
 <html lang="en">
 <head>
   <meta charset="UTF-8">
   <title>Document</title>
 </head>
 <body>
 <h1>list of todo's </h1>
 <label for="input1">Item:
 <input type="text" id="input1" value="yard work">
 </label><br>
 <button id="btn">add!</button><br><br>

 <ul id="ul">
   text can go here!
 </ul>
 <script src ="/Users/donaldspriggs/Desktop/spriggse/javascript1/day7/js/app.js"></script>

 </body>
 </html>
*/
 /*
 function test(){
     var sub_array = [];
     var super_array =[];
     for (var i=1;i<=3;i++){
         sub_array.push(i);
         super_array.push(sub_array);
     }
     alert(super_array);
 }
 for (var i = 1; i <= 3; i++) {
    sub_array.push(i);
    super_array.push(sub_array.concat());
}
*/

function addNewItem(list, itemText) {
  var listItem = document.createElement('li');
  var checkBox = document.createElement('input');
  checkBox.type = "checkBox";
  checkBox.onclick = itemOptions;
  var span = document.createElement('span');
  //span is the text that holds the text
  span.innerText =itemText;
  listItem.appendChild(checkBox);
  listItem.appendChild(span);
  //order of the functions check box then words
  //listItem.appendChild(checkBox);
 list.appendChild(listItem);
 }
 // user input
 var inItemText =document.getElementById("inItemText");
 inItemText.focus();
 // this pulls to it when you open the page
 // this is if you press enter
 inItemText.onkeyup = function(event){

   if(event.which == 13){
     // 13 == enter so i dont need a buttion
    var itemText = inItemText.value;
     if (!itemText || itemText == "") {
       return false;
       // if nothing is put it does nothing
     }
     addNewItem(document.getElementById("todolist"), itemText);
     // this grabs what the user put and adds all our trash in addNewItem to it
     inItemText.focus();
     //when you push out a thing it comes back to the text box
     inItemText.select();
   }
   //end of 13 = enter stuff

 }
 //clear all stuff
 var clearing = document.getElementById('clearing');

 clearing.onclick = clearArray;
 //
 function clearArray(){
  var removeAll = document.getElementById("todolist");
   while (removeAll.firstChild) {
       removeAll.removeChild(removeAll.firstChild);
     }

 }
 function itemOptions(){
   var edits = prompt('would you like to edit this');
  if(edits === null || edits=== false ){
   var finnishItem =confirm('would you like to mark this as done')
     if (finnishItem === true) {
                 // remove finished object
                 listItem === null;
     }else {
return;
   }
 }else  {
   var span = document.createElement('span');
    span.innerText = edits;            //changes the value of the item
 }

 //span.innerText = change;
 }
//what i think i have to do is figure out the value  of individual checkBox and when checked then run itemOptions
//so figure out oh to find its length
console.log("hi");
