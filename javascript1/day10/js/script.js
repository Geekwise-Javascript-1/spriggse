var btns = document.querySelectorAll('button');
var a = document.querySelector('a');
for(var i = 0; i < btns.length; i++){
    btns[i].addEventListener('click', changeColor);
    //function(){document.body.style.backgroundColor = this.id;});
}
a.addEventListener('click',removeColor);
function changeColor(){
  document.body.style.backgroundColor = this.id;
}
function removeColor(){
  var ranNum =Math.floor( Math.random() * 3);
  console.log(ranNum);
  btns[ranNum].removeEventlisterer('click',function(){});
}

//function getData(){
//    alert(this.dataset.response);
//}
//
//var anchor = document.querySelector('a');
//
//anchor.addEventListener('click', function(){
//    alert("I've been clicked!!!");
//});
//
//anchor.addEventListener('mouseenter', function(){
//    this.style.color = 'magenta';
//});
//
//anchor.addEventListener('mouseout', function(){
//    this.style.color = 'blue';
//});
