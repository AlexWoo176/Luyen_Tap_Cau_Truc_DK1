function Pay() {
    let tax = parseInt(document.getElementById("tax").value);
    let amount = parseInt(document.getElementById("amountNum").value);
    let res = document.getElementById("result7");
    if (isNaN(tax)==true || isNaN(amount)==true) {
        res.innerHTML = "<b>Input must be a number !</b>";
    } else {
        res.innerHTML = "<b>Total must be pay :</b>" + tax*amount;
    }
}