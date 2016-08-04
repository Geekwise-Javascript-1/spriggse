//var element1 = document.getElementsByTagName('div')[0],
//element2 = document.getElementsByTagName('ul')[0],
//element3 = document.getElementsByTagName('li')[0];
function foo(e){
  // event = e
  console.log(e.target);
  //console.log(e);
  // console.log(this);

}
//bubbling up
//element1.addEventListener('click',foo, false);
//element2.addEventListener('click',foo, false);
//element3.addEventListener('click',foo, false);


//capturing down
//element1.addEventListener('click',foo, true);
//element2.addEventListener('click',foo, true);
//element3.addEventListener('click',foo, true);
var input = document.getElementsByTagName('input')[0],
 btn = document.getElementsByTagName('')[0],
  ul= document.getElementsByTagName('')[0];

var li;
// this rewrites everything you rigth 1 item
// var li = document.createElement('li');

btn.addEventListener('click', getItem);
ul.addEventListener('click',deleteItem);

function getItem(){
  //console.log( capturetext(input) );
  createItem( capturetext(input))
}

  function capturetext(item){
    return item.value;
  }

  function createElement(){
    li = document.createElement('li');
    li.textContent = txt;
    ul.appendChild(li);
  }

function thisItem(e){
  console.log(this);
  console.log(e);
  console.log(e.target);
  console.log(e.currentTarget);
  return e.target
}

function deleteItem(e){
 e.target.remove()
}
