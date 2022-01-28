const arr = [1,2,3];

function every(arr, callback) {
    //Ваша реализация метода
    if(typeof arr === 'object') {
        if(typeof callback === 'function') {
for (var i = 0; i < arr.length; i++) {
        if (!callback(arr[i], i, arr)) {
      return false;
    }
    }
    } else {
    throw new Error ('the type of the second parameter is not a function'); 
}
    } else {
    throw new Error ('the type of the first parameter is not an array'); 
} return true;
}

//вызываем функцию и передаем в нее первым аргументом - массив, вторым - функцию.
var result = every(arr, function(item, i, arr) { 
    return item > 0;
})
console.log(result);
