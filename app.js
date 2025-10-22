let homeCount = 0;
let oppnCount = 0;

let homeScoreEl = document.getElementById("home-score");

function homeAdd1() {
    homeCount += 1;
    homeScoreEl.textContent = homeCount;
}


function homeAdd4() {
    homeCount += 4;
    homeScoreEl.textContent = homeCount;
}


function homeAdd6() {
    homeCount += 6;
    homeScoreEl.textContent = homeCount;
}