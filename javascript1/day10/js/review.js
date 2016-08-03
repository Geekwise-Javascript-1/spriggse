var btn = document.getElementById("btn");
//alert('hi');
//var run = prompt('what is your number');
btn.onclick = run;
//btn.onclick = clearArray;
function run(){
  var run = prompt('what is your number');
  console.log(runing);
}
  var button = document.createElement('button');
button.innerHTML = "Do Something";
button.onclick = run;
var body = document.getElementsByTagName("body")[0];
body.appendChild(button);
button.addEventListener ("click", function() {
  var runs = prompt('what is your number');
  console.log(runs);
});
//class answer
var btn = document.createElement('button');
btn.textContent = 'click me.';
document.body.appendChild(btn);
btn.onclick = getnumber;
