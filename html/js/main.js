var startTime;
var unitImgDom;
var archImgDom;
var techImgDom;
var unitNameDom;
var archNameDom;
var techNameDom;
var isAlreadyStart = false;

function runTimer(data) {
    let nowTime = Date.now();
    let subtime = nowTime - startTime;

    let m = Math.floor(subtime / 60000);
    let s = Math.floor(subtime % 60000 / 1000);

    m = ('0' + m).slice(-2);
    s = ('0' + s).slice(-2);

    let serchBuildTime = m + ':' + s;
    let dom = document.getElementById("timervalue");

    dom.innerText = serchBuildTime;

    for (let i = 0; i < data.length; i++) {
        if (serchBuildTime === data[i].time) {
            unitImgDom.src = data[i].unitImg;
            archImgDom.src = data[i].archImg;
            techImgDom.src = data[i].techImg;
            unitNameDom.innerText = data[i].unitName;
            archNameDom.innerText = data[i].archName;
            techNameDom.innerText = data[i].techName;
        }
    }
    setTimeout(runTimer, 100, data);
}

function timerStart(race) {
    if (isAlreadyStart) {
        location.reload();
    }
    unitImgDom = document.getElementById("now-complete-unit-img");
    archImgDom = document.getElementById("now-complete-arch-img");
    techImgDom = document.getElementById("now-complete-tech-img");
    unitNameDom = document.getElementById("now-complete-unit-name");
    archNameDom = document.getElementById("now-complete-arch-name");
    techNameDom = document.getElementById("now-complete-tech-name");
    unitImgDom.src = "";
    archImgDom.src = "";
    techImgDom.src = "";
    unitNameDom.innerText = "";
    archNameDom.innerText = "";
    techNameDom.innerText = "";
    let classd = "#" + race + "-start"
    $(classd).css("opacity", "0.1");
    $(classd).css("filter", "alpha(opacity=10)");
    $(classd).fadeTo("middle", 1.0);
    startTime = Date.now();
    isAlreadyStart = true;
    switch (race) {
        case "Terran":
            runTimer(Terran);
            break;
        case "Zerg":
            runTimer(Zerg);
            break;
        case "Protoss":
            runTimer(Protoss);
            break;
        default:
    }
}
