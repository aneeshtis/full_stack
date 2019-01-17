var a = 10;
var b = 15;
var c = 20;

if(a > b && a > c){
    console.log("Bigger number is: ", a);
}else if(b > a && b > c){
    console.log("Bigger number is: ", b);
}else if(c > a && c > b){
    console.log("Bigger number is: ", c);
}else{
    console.log("All number are equal and the number is ", a);
}