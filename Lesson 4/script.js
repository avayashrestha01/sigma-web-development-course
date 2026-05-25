console.log('Loop Tutorial!')

function line(){
    let gap = 0;
    
    while (gap<1){
        console.log("")
        gap++;
    }
}

line()

let a = 1;

for (let i = 0; i < 10; i++) {
    console.log(a + i);
}

line()

let det = {
    name: "Avaya Shrestha",
    role: "Student",
    company: null
}

for (const key in det){
    const element = det[key];
    console.log(key + ' : ' + element)
}

line()

for (const char of "Avaya") {
    console.log(char)
}

line()

let i = 6;

while (i<8) {
    console.log(i++);
}