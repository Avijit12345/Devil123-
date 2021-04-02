var a= 100;
var b= 200;


// console.log(a);
// console.log(b);

function f1(){

    console.log(a);
    console.log(b); 
    a=0;
    b=10;
}
function f2(){
  console.log (a);
  console.log (b);
}
function f3(){
    console.log (a);
    console.log (b);

}
f3()
f1();
f2();
console.log (a);
    console.log (b);