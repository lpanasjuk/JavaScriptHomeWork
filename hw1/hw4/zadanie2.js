const arr = [1,2,3];

function filter(arr, callback) {
    //Ваша реализация метода
    if(typeof arr === 'object') {
        if(typeof callback === 'function') {
    var res = [];
    for (var i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
        res.push(arr[i]);
     }
    }
    } else {
    throw new Error ('the type of the second parameter is not a function'); 
}
    } else {
    throw new Error ('the type of the first parameter is not an array'); 
} return res;
}

//вызываем функцию и передаем в нее первым аргументом - массив, вторым - функцию.
var result = filter(arr, function(item, i, arr) { 
    return item > 1;
})
console.log(result);