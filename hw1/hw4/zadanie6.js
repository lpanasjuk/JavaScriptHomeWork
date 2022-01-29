const arr = [1,2,3];
const acc = 0;
function reduceRight(arr, callback, acc) {

    //реализация метода
    if(typeof arr !== 'object') {
throw new Error ('the type of the first parameter is not an array'); 
    }


    if(typeof callback !== 'function') {
throw new Error ('the type of the second parameter is not a function'); 
    }

if(typeof acc == 'string' || typeof acc == 'number') {


    var res = acc;
    for (var i = arr.length-1; i >= 0; i--) {
        res = callback(res, arr[i], i, arr);
    }
} else {
throw new Error ('the type of the third parameter is not a string or a number'); 
    }

return res;
}

//вызываем функцию и передаем в нее первым аргументом - массив, вторым - функцию.
var sum = reduceRight(arr, function(acc, item, i, arr) {
    return acc + item;
}, acc);
console.log(sum);