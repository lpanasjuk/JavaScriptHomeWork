function isPositive(n) {
    var result;
    if(typeof n === 'number') {
    if(n > 0) {
        result = true;
} else {
    result = false;
}
} else {
    throw new Error ('parameter type is not a Number');
}
return result;
}

function resArr(arr) {
    var arr2 = [];
    for (var i = 0; i < arr.length; i++) {
        if(isPositive(arr[i])) {
            arr2.push(arr[i]);

        }
} return arr2;
}
var arr = [1, 2, -4, 3, -9, -1, 7];
resArr(arr);