var noOfComponents = document.querySelectorAll(".components").length;

for (var i = 0; i < noOfComponents; i++) {
    document.querySelectorAll(".components")[i].addEventListener("click", function () {
        var buttonClicked = this.innerHTML;
        console.log(buttonClicked);
        operationInput(this)
        buttonAnimation(this);
    }
    )
}

document.addEventListener("keypress", function (event) {
    let buttonForOperation;
    if (event.key == "+") buttonForOperation = add;
    else if (event.key == "-") buttonForOperation = sub;
    else if (event.key == "*") buttonForOperation = product;
    else if (event.key == "/") buttonForOperation = division;
    else if (event.key == "%") buttonForOperation = modulo;
    else if (event.key == ".") buttonForOperation = dot;
    else if (event.key == "Enter") buttonForOperation = enter;
    else {
        let key = "#_" + event.key;
        buttonForOperation = document.querySelector(key);
    }
    operationInput(buttonForOperation)
    buttonAnimation(buttonForOperation);
}
)

function operationInput(button) {
    if (button.innerHTML == "=") {
        document.querySelector("input").value = eval(document.querySelector("input").value)
    }
    else if (button.innerHTML == "C") {
        document.querySelector("input").value = null;
    }
    else {
        document.querySelector("input").value += button.innerHTML;
    }
}

function buttonAnimation(button) {
    button.classList.add("pressed");
    setTimeout(function () {
        button.classList.remove("pressed")
    }, 100);
}