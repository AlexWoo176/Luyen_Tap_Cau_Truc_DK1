function CompareNumAndZero() {
    let num = parseInt(document.getElementById("checkNum").value);
    let res = document.getElementById("result3");
    if (!isNaN(num)) {
        if (num>0){
            res.innerHTML = "<b>" + num + " > 0</b>";
        } else {
            res.innerHTML = "<b>" + num + " < 0</b>";
        }
    } else {
        res.innerHTML = "<b>Input must be number !</b>" ;
    }
}