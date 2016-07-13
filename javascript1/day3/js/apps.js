
alert("hi");

var userfun = prompt('what would you like to do');
var trimmedUser = userfun.trim();
console.log(userfun);
if (trimmedUser === "") {
  prompt("please talk");
  console.log('you make me cry')
}else {
  alert( userfun + " then do that");
  console.log(trimmedUser);
  console.log(userfun);
}
