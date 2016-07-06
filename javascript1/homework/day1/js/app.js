var mySelf = "eian";
var thingsILike = new Array("pizza", "cats", "games");
var friend = confirm("hi I'm " + mySelf +  " "+ " will you be my friend ");
console.log(friend);
document.write("i like to eat" +" "+ thingsILike[0]);
 var catman = confirm("do you have any " + thingsILike[1]);
if (catman == true) {
  var petNum = prompt('how many do you have');
  if (petNum >= 3) {
    console.log("you might have a problem");
    console.log(petNum);
  }else {
document.write('you seem normal');
  }
}else {
  document.write(' ,your lucky nothing to wory about');
}
//alert("hi");
var game = confirm("want to play a" + " " + thingsILike[2]);
