function Add() {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    let result = (n1) + (n2);

    document.getElementById("result").innerHTML = result;
}

function Sub() {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    let result = (n1) - (n2);

    document.getElementById("result").innerHTML = result;
}

function Multi() {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    let result = (n1) * (n2);

    document.getElementById("result").innerHTML = result;
}

function Devide() {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    let result = (n1) / (n2);

    document.getElementById("result").innerHTML = result;
}