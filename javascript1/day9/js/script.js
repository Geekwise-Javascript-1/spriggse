var myCar = {
    make: 'jeep',
    model: 'wrangler',
    year: 1997,
    color: 'gray'
}
var me = {
  name: 'Eian',
  sayName: function(){
    console.log(this.name);
  }
}

/*
var fruits =['apple','banana','peach','starfruit'];
function displayfruits(){
  console.log(fruits);
}
//displayfruits();

function addFruit(fruit) {
  fruits.push(fruit);
  displayfruits();
}
fruits.push('watermelon');
fruits[0]= 'pineapples'
console.log(fruits);
function changefruit(position, value){
  fruits[position] = value;
  displayfruits();
}
deletefruit(position){
fruits.splice(1,1);
displayfruits();
}
*/
//var fruits = ['apple','banana','peach','starfruit']
var fruitList = {
  fruits:['apple','banana','peach','starfruit'],

displayfruit: function(){
  console.log(this.fruits);


},
addFruit: function(fruit){
  this.fruits.push(fruit);
  this.displayfruit();
},



changefruit: function (position, value){
  fruits[position] = value;

},
deletefruit: function (position){
  fruits.splice(position,1);
  this.displayfruit();
}
};
