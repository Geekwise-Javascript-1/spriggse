
var goBtn = document.getElementById('goBtn'),
 dupOut = document.getElementById('dupOut'),
 fn = document.getElementById('firstName'),
 form = document.getElementById('form');
goBtn.onclick = getInputs;



function getInputs(){
 var formArr = [],
     formLen = form.elements.length;
 for(var i = 0; i < formLen; i++){
   formArr.push(form.elements[i].value);
 }
   checkForDups(formArr);
}

function checkForDups(arr){
 var sortArr = arr.slice().sort(),
   dupsArr = [];

 for( var i=0; i < arr.length; i++){
   if( sortArr[i + 1] == sortArr[i]){
   dupsArr.push(sortArr[i]);
 }
 }
 console.log(arr);
 console.log(sortArr);
 console.log(dupsArr);
 outputDups(dupsArr);

}



function outputDups(arr){
 dupOut.innerHTML = arr.join(', ');
}
