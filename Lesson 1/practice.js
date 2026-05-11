var a = 0;


function fn() {
    a ++;

    document.getElementById('output').innerText = a;
}


function changeStyle(){
    let box = document.getElementById("output");

    output.style.color = yellow;
    output.style.scale = 1.1;
}

document.getElementById("clickme").onclick = changeStyle();