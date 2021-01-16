function setNewWord(array1, array2) {
    document.getElementById('word').innerHTML = getWord(array1, array2);
	restartSec();
}

function getWord(array1, array2) {
    var word1 = getRow(array1, 1);
    if (array2) {
        var word2 = getRow(array2, 1);
        return word1 + ' - ' + word2;
    }
    return word1;
}

function getRow(array, rowsCount) {
    var result = [];
    for(var i = 0; i < rowsCount; i ++)
    {
        result.push(array[getRandomInt(0, array.length)]);
    }
    return result;
}

function getRandomInt(min, max) {
    var min = Math.ceil(min);
    var max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}