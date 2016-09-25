const verticalRows = prompt("How many rows?");

const symbolRow = function (symbol, count) {
	if (count === 0) {
		return "";
	}

	return symbol + symbolRow(symbol, count - 1);
};

const execute = function (starCount, spaceCount) {
	if (spaceCount === -1) {
		return;
	}

	console.log(symbolRow(" ", spaceCount) + symbolRow("*", starCount));
	execute(starCount + 2, spaceCount - 1);
};

const triangleStars = function (count) {
	execute(1, count - 1);
};

triangleStars(verticalRows);
