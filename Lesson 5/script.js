function nice(name) {
    console.log("Hey " + name + " You are Nice!")
    console.log("Hey " + name + " You are God!")
    console.log("Hey " + name + " Your T-Shirt is Nice too!")
}

nice("Avaya")



function sum(a, b, c = 10){
    // console.log(a+b);
    return a + b + c
}


result = sum(3, 5);
result1 = sum(3, 6);
result2 = sum(1233, 345);
result3 = sum(333, 532);
result4 = sum(3, 215);




console.log("The sum of these number is: ", result);
console.log("The sum of these number is: ", result1);
console.log("The sum of these number is: ", result2);
console.log("The sum of these number is: ", result3);
console.log("The sum of these number is: ", result4);

const dob = (x)=> {
    console.log("Hey My DOB is", x)
}

dob("2010-11-12")
