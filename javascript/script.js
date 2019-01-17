
    var name = "Aneesh";// global scope if use var
    var i = 12, j = 233, c, a = 2, b = 3, x = 10, y;
    { 
        let k = 12;
        console.log(k, "Loading from Local Scope")
    }
    const z = 12099;
    let e = 12099; // only local scope if use let
    console.log(name);
    c = i + j;
    y = x++;
    console.log(c);
    console.log(a**b);
    console.log(x++);
    console.log(x--);
    console.log(z);
    console.log(e);

    if(j % 2 == 0){
        console.log("Number is even");
    }else{
        console.log("Number is odd");
    }