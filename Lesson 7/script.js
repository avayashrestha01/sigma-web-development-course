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











