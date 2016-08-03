function foo(){
  var  a = "inside function foo";
  return a;
}
//console.log(a);
//a cant be pulled out of a function
//doent work
console.log(foo());
//will work
var name = 'eian';
function capitalize(){
  return name[0].toUpperCase() + name.slice(1);
}
var capitalizedName = capitalize();
//console.log(capitalizedName); works

var capitalize = function capitalize(str){
  return str[0].toUpperCase() + str.slice(1);

}
//console.log(capitalize('eian')); did work
//logName("eian");
function logName(name) {
//  console.log(name);
}
//logAgain("matt");
var logAgain = function(name){
//  console.log(name);
}
var name = 'adam';
function alertName(){
//  alert(name);
  var name = "eve";
//  alert(name);
}
alertName();


var h1 = document.getElementById(h1);
//console.log(h1);
//var hasClass = h1.hasAttribute('class');
//h1.setAttribute('rel', 'whatever');
//console.log(h1);

//h1.removeAttribute('rel');
//console.log(h1);
var anchors = document.querySelectorAll('ul li a')
console.log(anchors.item(1));
for (var i = 0; i < anchors.length; i++) {
var anchor = anchors.item(i);
console.log(anchor.id);


  //array[i]
}
