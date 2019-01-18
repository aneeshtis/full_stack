console.log("HW1. print prime between 2 and 500");
for(var i = 2; i < 500; i++){
    var status = 0;
    for(var j = 2; j < i; j++){
        if(i % j == 0){
            status = 1;
            break;
        }
    }
    if(status == 0 && i > 2){
        console.log(i);
    }
}


console.log("HW2. check whether a num is palindrome or not");
var num = 123, rem, rev = 0;
var temp = num;
while(num > 0){
    rem = num % 10;
    rev = rev * 10 + rem;
    num = parseInt(num/10);
}
if(rev == temp){
    console.log(temp," Number is palindrome");
}
else{
    console.log(temp,"Number is not palindrome");
}