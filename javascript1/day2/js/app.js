
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

// lynda.com
// free with libery card
var meme = new Array("me-mes", "me me ", "jif","gif");
var girls = new Array("diana", "maddy", "gio", "haley");
var me = girls.concat(meme);
console.log(me)
var dad = new Array();
dad[0] = "hi";
dad[1] = "i like bauhaus";
var hat = dad.concat(me);
console.log(hat);
var movieGoods = new Array("pokemon", "idk","romancing the stone")
var string = movieGoods.join();
girls.push("arin","jarid");
girls.sort();
console.log(girls);
girls.reverse();
console.log(girls);
dad[3] ="wat";
var person = ["John", "Doe", 46];
person.pop();
person.push("jimy jamms")
console.log(person);
var funFinn = new Array("dill","milk","ribs","sause");
funFinn.pop();
for (i =0;i<funFinn.length;i++){
  document.write(funFinn[i] + "<br/>")
}
