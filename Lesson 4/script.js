console.log('Loop Tutorial!')

let a = 1;

for (let i = 0; i < 10; i++) {
    console.log(a + i);
}

let det = {
    name: "Avaya Shrestha",
    role: "Student",
    company: null
}

for (const key in det){
    const element = det[key];
    console.log(key + ' : ' + element)
}

for (const element of object) {
    
}