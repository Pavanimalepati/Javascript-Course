// .checked = property that determines the checked state of an HTML checkbox or radio button element.

const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterBtn = document.getElementById("masterBtn");
const payPalBtn = document.getElementById("payPalBtn");
const myResult = document.getElementById("myResult");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function(){
    if(myCheckBox.checked){
        subResult.textContent = `you are subscribed!`;
    }
    else{
subResult.textContent = `you are  not subscribed!`;
    }
if(visaBtn.checked){
paymentResult.textContent = `you are paying with visa`;
}
else if(masterBtn.checked){
paymentResult.textContent = `you are paying with masterCard`;
}
else if(payPalBtn.checked){
paymentResult.textContent = `you are paying with payPal`;
}
else{
    paymentResult.textContent = `you must select a payment type`;
}
}