var firstName = prompt("what is your first name" );
console.log(firstName);
var lastName = prompt("what is your last name" );
alert(lastName);
var answer = confirm("you are" +" "+ firstName + " " + lastName );
alert(answer);

var today = confirm("are you happy today");
console.log(today);
var food = prompt("what did you eat today")

if (today == true) {
  document.write("that must be why your happy");
  alert("i love"+ " " + food )

}
else {
    document.write("that must be why your grumpy");
    alert("maybe the" +" "+ food + " "+ "was bad" )

}
var joke =confirm(" do you want to hear a joke ")
if (joke == true) {
alert("sorry i dont have one")
}
else {

    alert("well your in luck i dont got one ")
  }
var pet = confirm("do you have a pet");

if (pet == true) {
 var petType = prompt("what kind of pet do you have");
 console.log(petType);
}
else {
  var petType = prompt("what kind of pet would you want");
  console.log(petType);

  }
