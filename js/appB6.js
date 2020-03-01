function benefit() {
    let sales = parseInt(document.getElementById("sales").value);
    let amount = parseInt(document.getElementById("amount").value);
    let res = document.getElementById("result6");
    if (isNaN(sales)==true || isNaN(amount)==true) {
        res.innerHTML = "<b>Input must be a number !</b>";
    } else {
        if (sales> amount) {
            res.innerHTML = "<b>Benefit equal 30% sales :</b>" + sales * 0.3 +"<b>VND</b>";
        } else {
            res.innerHTML = "<b>Benfit equal 10% sales :</b>" + sales * 0.1 +"<b>VND</b>";
        }
    }
}