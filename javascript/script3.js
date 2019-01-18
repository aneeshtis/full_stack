
//1. Print even
var i = 1;
while(i <= 100){
    if(i % 2 == 0){
        //console.log(i);
    }
    i++;
}

//2. Program to reverse a number
var num = 123, rem, temp = 0;
while(num > 0){
    rem = num % 10;
    temp = temp * 10 + rem;
    num = parseInt(num/10);
}
//console.log(temp);

//3. Print using for loop
for(var i = 1; i < 101; i++){
    if(i % 2 != 0){
        //console.log(i);
    }
}

//4. Nested for loop eg:-
for(var i = 1; i < 10; i++){
    //console.log(i);
    for(var j = 11; j < 13; j++){
        //console.log(j);
    }
}

//5. function eg1:-
function display(){
    console.log("I am a function");
}
//display();

//6. function eg2:-
function display(data1, data2){
    console.log(data1);
    console.log(data2);
}
var data1 = "Function with argumnent.";
var data2 = "Argumnents supported 2.";
display(data1, data2);

//7. function to add 2 number
function sum(n1, n2){
    console.log("Sum = ",n1 + n2);
}
var num1 = 120;
var num2 = 150;
sum(num1, num2);

//8. function to find big among 3
function big(a, b, c){
    if(a > b && a > c){
        console.log("Bigger number is: ", a);
    }else if(b > a && b > c){
        console.log("Bigger number is: ", b);
    }else if(c > a && c > b){
        console.log("Bigger number is: ", c);
    }else if(a == b == c){
        console.log("All number are equal and the number is ", a);
    }
}
var num1 = 120;
var num2 = 140;
var num3 = 150;
big(num1, num2, num3);

//9. continue and break;
for(var i = 0; i < 10; i++){
    if(i == 5){
        continue;
    }
    if(i == 7){
        break;
    }
    console.log(i);
}

