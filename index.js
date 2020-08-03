// Random Number Generate 
document.querySelector(".pin-generate-btn").addEventListener('click', function () {
    let randomNumber = Math.floor(1000 + Math.random() * 9000);
    document.getElementById("generate-pin-value").value = randomNumber;

});

//Click button and get value
let allButton = document.getElementsByClassName('btn');
for (let i = 0; i < allButton.length; i++) {
    allButton[i].addEventListener("click", function () {
        let buttonValue = this.innerText;
        let submitValue = document.getElementById("submitValue").value;
        let bindvalue = submitValue + buttonValue;
        document.getElementById("submitValue").value = bindvalue;
    });
}

document.getElementById("submit").addEventListener('click', function () {

    //Submit Value
    let submitValue = document.getElementById("submitValue").value;
    let submitNumberInt = parseInt(submitValue);

    let generatePinValue = document.getElementById("generate-pin-value").value;
    let generatePinInt = parseInt(generatePinValue);

    // notfiy alert get
    let notifyOk = document.querySelector(".notify-ok");
    let notifyCross = document.querySelector(".notify-cross");
    

    let submitBtn = document.getElementById("submit");

    if (submitNumberInt === generatePinInt) {
        notifyOk.style.display = "block";
        notifyCross.style.display = "none";
    } else {
        notifyCross.style.display = "block";
        notifyOk.style.display = "none";

        // Notify try left
        let actionLeft = document.getElementById("actionLeft").innerText;
        let leftAction = parseInt(actionLeft);
        let decreaseLeft = leftAction - 1;
        document.getElementById("actionLeft").innerText = decreaseLeft;

        if (decreaseLeft == 0) {
            submitBtn.style.background = "red";
            submitBtn.style.pointerEvents = "none";
        }
    }

})

// Clear all
document.querySelector(".clear-btn").addEventListener('click', function () {
    document.getElementById("submitValue").value = "";
})

// remove one by one
document.querySelector(".btn-remove-one").addEventListener('click', function () {
    let submitValue = document.getElementById("submitValue").value;
    let removeLastItem = submitValue.slice(0, -1);
    document.getElementById("submitValue").value = removeLastItem;
})