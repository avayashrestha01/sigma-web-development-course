document.title = "JavaScript DOM - Child, parents and sibling";


let cont = document.body.childNodes[1];



console.log(cont.childNodes);
console.log(cont.firstElementChild);
console.log(cont.parentElement);
console.log(cont.children);
console.log(cont.children[0]);
console.log(cont.children[1]);
console.log(cont.children[2]);
console.log(cont.children[3]);
console.log(cont.children[3].nextElementSibling);
console.log(cont.children[3].previousElementSibling);
console.log(cont.children[3].previousSibling);