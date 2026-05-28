let arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arr);
console.log(arr.length);
console.log(arr[0]);
console.log(arr[2]);
console.log(arr[4]);

// arr[0] = 566; (Array are Changable and string are not)
// console.log(arr); // output: [566, 2, 3, ..., 7]


// let a = "Avaya"; (String are not changable)
// a[0] = "b";
// console.log(a); // output: Avaya


console.log(typeof(arr));
console.log(arr.toString());
console.log(arr.join(" and "));

// arr = arr.toString();
// console.log(arr);


a = [1, 2, 3, 4, 5, 6];

console.log(a.pop());
console.log(a.shift());

a.push(7);
console.log(a);
a.push("Avaya");
console.log(a);


a.unshift("YO");
console.log(a);
// Shift is opposite of pop and unshift is opposite of push

let a1 = [1, 2, 3];
let a2 = [4, 5, 6];
let a3 = [7, 8, 9];

console.log(a1.concat(a2, a3)); // Dont change existing array

a.splice(1, 3, 10, 20, 30); // remove 2nd to 4rd element and add other 10 20 and 30 element
console.log(a);

let num = [1, 2, 3, 4];
console.log(num);

console.log(num.slice(2));
console.log(num.slice(1, 3));



let looop = [1, 3, 1000, 2, 6, 7, 67, 4];


// for (let index = 0; index < looop.length; index++) {
//     const element = looop[index];
//     console.log(element);
// }


// looop.forEach((value, index, arr)=>{
//     console.log(value, index, arr);
// })

const objj = {
    l = 1,
    z = 2,
    x = 3
}







