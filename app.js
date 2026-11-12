"use strict";

const num1 = document.getElementById("numero1");
const num2 = document.getElementById("numero2");

const error = document.getElementById("error");
const resultado = document.getElementById("resultado");

if(num1 === null || num2 === null || num1 === "" || num2 === ""){
    error.textContent = "Entradas erroneas, no pongas campos vacios";
}
else{
    if(!isFinite(num1) ){
    error.textContent = "Entradas erroneas, no pongas campos vacios";
}
}