alert("hi");
var age = prompt(" how old are you");
var year = prompt("what year were you born")
if ((age >= 18) && (year < 1998)) {
  console.log("player1");
  alert("welcome");
}else if ((age >= 18) && (year > 1998)) {
prompt("lier ");
}else if ((age <= 18) && (year < 1998)) {

}else {
  var parent = confirm("is your parent or gardian fine with you using this site");
  if (parent == true) {
    console.log("player1");
    alert("welcome");
  }else {
    prompt("good bye")
  }
}
document.write("comands are: look-up , look-down , look-foward , look-backward ,");
document.write(" turn-right , turn-left , pick-up , hint , magic , help ");
var lost = "you are lost in the woods what do you do";
var startGame = confirm("you are walking home from a long day of work you deside to take an unusual sort cut through the back alley and a blue rift sucks you into a world unknow. are you ready? ");
 var rightLoop = "you went right 4 times nothing intersting happens";
 var leftLoop = "you went left 4 times nothing intersting happens";
var badEnd = "you died";
if(startGame == true){
  var land = prompt(lost);
}
  if ((land == "look-up"  ) || (land == 1)){
alert("you see branches ");
//pick-up stick
  }
  else if  ((land == "turn-right") || (land == 2)  ){

  }

    else if  ((land == "turn-left"  ) || (land == 3)){

  }
    else if  ((land == "look-down"  ) || (land == 4)){

  }

    else if ((land == "look-foward") || (land == 5)) {

  }
    else if  ((land == "move-foward"  ) || (land == 6)){

  }


    else if  (land == "move-backward"  ){
      alert("you walk back without looking you slip and fall hitting your headon a hard object " + badEnd)
  }
    else if ((land == "look-backward") || (land == 8)) {

  }
    else if ((land == "comands?") || (land == 9)){

  }
    else if (land == "help"){
      alert("you yell for help attacting the animals in the area to a free meal. " + " " + badEnd)
  }
    else if ((land == "pick-up") || (land == 11)){

  }
    else if ((land == "hint") || (land == 12)){

  }
    else if ((land == "magic") || (land == 13)){

  }else {
    prompt("i dont understand please use words on my list of comands")
  }


//adam khoury
//list of comands:
