// function foo(){
//     alert("hello world")
// }
// function data(){
//     var a=document.getElementById('par');
//     a.innerHTML="lkfjdslkjflakjflkasjflksajlfs;aja"

// }

function cal(a){
    var b=document.getElementById('in')
    b.value+=a
}
function backspace(){
  
var value = document.getElementById("in").value;
document.getElementById("in").value = value.substr(0, value.length - 1);

}
function total(){
    var a=document.getElementById('in')
    var b=document.getElementById('out')
    // b.value
    b.value=eval(a.value)
}
function clr(){
    var c=document.getElementById('in')
    var d=document.getElementById('out')
    c.value=''
    d.value="0"
}