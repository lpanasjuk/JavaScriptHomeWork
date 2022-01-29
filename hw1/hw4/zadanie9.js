if(typeof a != 'string' && typeof a != 'number' && typeof a != 'object') {
    throw new Error ('the type of the first parameter is not an string, number, array, object');
} else if (typeof b != 'number') {
    throw new Error ('the type of the second parameter is not a number');
} else {
//реализация метода
var res = [];
for (var i = 0; i < b; i++) {
    res.push(a);
}
}
return res;
}
//вызываем функцию
console.log(arrayFill('x',5));