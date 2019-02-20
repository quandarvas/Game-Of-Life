var map = [];

function initGeneration(heig, widt) {    
    if (heig < 3 || widt < 3){
        alert("Поле слишком меленкое");
        return;
    }
    map = [];
    for (var i = 0; i < widt; i++) {
        map[i] = [];
        for (var j = 0; j < heig; j++) {
            map[i][j] = false;
        }
    }
}

function getGeneration() {
    return map;
}

function changeGeneration(x, y) {
    map[x][y] = !map[x][y];
}

function rndFill() {
    for (var i = 0; i < map.length; i++) {
        for (var j = 0; j < map[i].length; j++) {
            map[i][j] = Math.random() > 0.6;
        }
    }
}

function nextStep() {
    var newMap = [];
    for (var i = 0; i < map.length; i++) {
        newMap[i] = [];
        for (var j = 0; j < map[i].length; j++) {
            count = getNumberLivingCells(i, j);
            if (map[i][j] === true) {
                if (count > 3 || count < 2) {
                    newMap[i][j] = false;
                }
                else {
                    newMap[i][j] = true;
                }
            }
            else {
                if (count === 3) {
                    newMap[i][j] = true;
                }
                else {
                    newMap[i][j] = false;
                }
            }
        }
    }
    map = newMap;
}

function getNumberLivingCells(x, y) {

    var count = 0;
    for (var i = -1; i < 2; i++) {
        var x1 = x + i === -1 ? map.length - 1 : x + i === map.length ? 0 : x + i;
        for (var j = -1; j < 2; j++) {
            var y1 = y + j === -1 ? map[0].length - 1 : y + j === map[0].length ? 0 : y + j;
            if (map[x1][y1] === true && !(i == 0 && j == 0)) {
                count++;
            }
        }
    }
    return count;
}