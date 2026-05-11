var a = 0;


function fn() {
    a++;
    b = " times";

    document.getElementById('output').innerText = a + b;

    if (a >= 100) {
        a += 1;
    }

    if (a >= 250) {
        a += 2;
    }

    if (a >= 500) {
        a += 16;
    }

    if (a >= 5000) {
        a += 180;
    }
}