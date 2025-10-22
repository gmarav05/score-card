let homeCount = 0;
let oppnCount = 0;

let homeScoreEl = document.getElementById("home-score");

let oppnScoreEl = document.getElementById("oppn-score");

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



function oppAdd1() {
    oppnCount += 1;
    oppnScoreEl.textContent = oppnCount;
}


function oppAdd4() {
    oppnCount += 4;
    oppnScoreEl.textContent = oppnCount;
}


function oppAdd6() {
    oppnCount += 6;
    oppnScoreEl.textContent = oppnCount;
}