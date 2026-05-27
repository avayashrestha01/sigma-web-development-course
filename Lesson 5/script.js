let det = {
    name: 'Avaya Shrestha',
    age: 16,
    role: null
}

for (const key in det){
    const elem = det[key];


    console.log(key + " " + elem)
    document.body.innerText = key + " " + elem
}