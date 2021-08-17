// var one=document.querySelector('#one');
// var two=document.querySelector('#two');
// var three=document.querySelector('#three');
// var four=document.querySelector('#four');
// var five=document.querySelector('#five');
// var six=document.querySelector('#six');
// var seven=document.querySelector('#seven');
// var eight=document.querySelector('#eight');
// var nine=document.querySelector('#nine');
// one.addEventListener("click",function () {
//     one.textContent="X";
// })
// two.addEventListener("click",function () {
//     two.textContent="X";
// })
// three.addEventListener("click",function () {
//     three.textContent="X";
// })
// four.addEventListener("click",function () {
//     four.textContent="X";
// })
// five.addEventListener("click",function () {

//     five.textContent="X";
// })
// six.addEventListener("click",function () {
//     six.textContent="X";
// })
// seven.addEventListener("click",function () {
//     seven.textContent="X";
// })
// eight.addEventListener("click",function () {
//     eight.textContent="X";
// })
// nine.addEventListener("click",function () {
//     nine.textContent="X";
// })
// one.addEventListener("dblclick",function () {
//     one.textContent="O";
// })
// two.addEventListener("dblclick",function () {
//     two.textContent="O";
// })
// three.addEventListener("dblclick",function () {
//     three.textContent="O";
// })
// four.addEventListener("dblclick",function () {
//     four.textContent="O";
// })
// five.addEventListener("dblclick",function () {

//     five.textContent="O";
// })
// six.addEventListener("dblclick",function () {
//     six.textContent="O";
// })
// seven.addEventListener("dblclick",function () {
//     seven.textContent="O";
// })
// eight.addEventListener("dblclick",function () {
//     eight.textContent="O";
// })
// nine.addEventListener("dblclick",function () {
//     nine.textContent="O";
// })

//Reset Board
var reset=document.querySelector("#btn");
var text=document.querySelectorAll("td");
function resetBoard() {
    for(var i=0;i<=text.length;i++){
        text[i].textContent=" "; 
    }
}
reset.addEventListener("click",resetBoard)

function changeMarkerOne() {
    this.textContent="X";
}
function changeMarkerTwo() {
    this.textContent="O";
}
for(var j=0;j<=text.length;j++){
    text[j].addEventListener("dblclick",changeMarkerTwo)
    text[j].addEventListener("click",changeMarkerOne)
}
