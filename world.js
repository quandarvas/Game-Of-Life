var intervalID;

function drawCell(x, y, alive) {
	var cl = '';
	if (alive) {
		cl = ' class="alive"'
	}
	return '<td><div' + cl + ' x=' + x + ' y=' + y + ' onclick="changeCell(this);">&nbsp;</div></td>';
}

function drawWorld() {
	var result = "<tbody>";
	var arr = getGeneration();
	for (var i = 0; i < arr.length; i++) {
		result += "<tr>";
		for (var j = 0; j < arr[i].length; j++) {
			result += drawCell(i, j, arr[i][j]);
		}
		result += "</tr>";
	}
	result += "</tbody>";
	return result;
}

function newWorld() {
	var heig = parseInt(document.getElementById("heig").value);
	var widt = parseInt(document.getElementById("widt").value);
	initGeneration(heig, widt);
	refreshWorld();
}

function refreshWorld() {
	var table = document.getElementById("world");
	table.innerHTML = drawWorld();
}

function stop() {
	clearInterval(intervalID);
}

function go() {
	stop();
	intervalID = setInterval('next()', 100);
}

function next() {
	nextStep();
	refreshWorld();
}

function random() {
	rndFill();
	refreshWorld();
}

function changeCell(elem) {
	changeGeneration(parseInt(elem.getAttribute("x")), parseInt(elem.getAttribute("y")));
	refreshWorld();
}
