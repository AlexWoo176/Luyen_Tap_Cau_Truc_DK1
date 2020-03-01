function CheckAdivB() {
    let a = parseInt(document.getElementById("a"). value);
    let b = parseInt(document.getElementById("b"). value);
    let res = document.getElementById("result1");
    if (isNaN(a)==true || isNaN(b)==true) {
        res.innerHTML = "<b> Input must be a number ! </b>";
    } else {
        if (a%b == 0) {
            res.innerHTML = "<b> A chia hết cho B.</b>";
        } else {
            res.innerHTML = "<b> A không chia hết cho B.</b>"
        }
    }
}


// function CheckAdivB() {
//     let a = parseInt(document.getElementById("a").value);
//     let b = parseInt(document.getElementById("b").value);
//     let res = document.getElementById("result1");
//     if (isNaN(a)==true || isNaN(b)==true) {
//         res.innerHTML = "<b>Input must be a number !</b>";
//     } else {
//         if (a%b == 0) {
//             res.innerHTML = "<b> a is divisible by b.</b>";
//         } else {
//             res.innerHTML = "<b> a is NOT divisible by b.</b>";
//         }
//     }
// }