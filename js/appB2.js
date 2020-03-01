function CheckAge() {
    let age = parseInt(document.getElementById("ageStudent").value);
    let res = document.getElementById("result2");
    if (!isNaN(age)) {
        if (age >=16) {
            res.innerHTML = "<b>This student is old enough to study grade 10.</b>";
        } else {
            res.innerHTML = "<b> This student is NOT old enough to study grade 10.</b>";
        }
    } else {
        res.innerHTML = "<b> Input must be a number !</b>"
    }
}