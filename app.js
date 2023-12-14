let btnTranslate = document.querySelector("#btn-translate");
let txtInput = document.querySelector("#txt-input");
let outputDiv = document.querySelector("#output");


function clickHandler(){
     outputDiv.innerText =txtInput.value;
};

btnTranslate.addEventListener("click", clickHandler);