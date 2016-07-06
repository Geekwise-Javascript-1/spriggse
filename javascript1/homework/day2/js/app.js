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
  if ((lost == "look-up"  ) || (lost == 1)){

  }
  else if  ((lost == "turn-right") || (lost == 2)  ){

  }

    else if  ((lost == "turn-left"  ) || (lost == 3)){

  }
    else if  ((lost == "look-down"  ) || (lost == 4)){

  }

    else if ((lost == "look-foward") || (lost == 5)) {

  }
    else if  ((lost == "move-foward"  ) || (lost == 6)){

  }


    else if  (lost == "move-backward"  ){
      alert("you walk back without looking you slip and fall hitting your headon a hard object " + badEnd)
  }
    else if ((lost == "look-backward") || (lost == 8)) {

  }
    else if ((lost == "comands?") || (lost == 9)){

  }
    else if (lost == "help"){
      alert("you yell for help attacting the animals in the area to a free meal. " + " " + badEnd)
  }
    else if ((lost == "pick-up") || (lost == 11)){

  }
    else if ((lost == "hint") || (lost == 12)){

  }
    else if ((lost == "magic") || (lost == 13)){

  }else {
    prompt("i dont understand please use words on my list of comands")
  }


//adam khoury
//list of comands:
