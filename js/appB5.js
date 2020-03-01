function calRank() {
    let diligentMark = parseInt(document.getElementById("diligent").value);
    let midTermMark = parseInt(document.getElementById("mid-term-mark").value);
    let finalTermMark = parseInt(document.getElementById("final-term-mark").value);
    let res = document.getElementById("result5");
    if (isNaN(diligentMark)||isNaN(midTermMark)||isNaN(finalTermMark)) {
        res.innerHTML = "<b>Input must be a number</b>"
    } else if ( diligentMark > 10 || diligentMark < 0
        || midTermMark > 10 || midTermMark < 0
        || finalTermMark > 10 || finalTermMark < 0 ) {
        res.innerHTML = "<b>Input must be in 0 --> 10</b>"
    } else {
        let Rank = ((diligentMark)*2 + (midTermMark)*2 + (finalTermMark)*6)/10;
        if ( Rank >= 8 ) {
            res.innerHTML = "<b>Rank: Excellent. </b>"
        } else if ( Rank < 8 && Rank >= 6.5) {
            res.innerHTML = "<b>Rank: Good. </b>"
        } else if ( Rank <6.5 && Rank >= 5) {
            res.innerHTML = "<b>Rank: Average.</b>"
        } else {
            res.innerHTML = "<b>Rank: Weak.</b>"
        }
    }
}