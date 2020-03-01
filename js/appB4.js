function findMax() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let num3 = parseInt(document.getElementById("num3").value);
    let res = document.getElementById("result4");
    if (isNaN(num1)||isNaN(num2)||isNaN(num3)) {
        res.innerHTML = "<b>Input must be a number.</b>"
    } else {
        if (num1>num2) {
            if (num1>num3) {
                res.innerHTML = "<b>Num 1 is max number</b>"
            } else {
                res.innerHTML = "<b>Num 3 is max number</b>"
            }
        } else {
            if (num2>num3) {
                res.innerHTML = "<b>Num 2 is max number</b>"
            } else {
                res.innerHTML = "<b>Num 3 is max number</b>"
            }
        }
    }
}