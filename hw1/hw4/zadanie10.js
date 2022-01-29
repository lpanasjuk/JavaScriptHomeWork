const arr = [3,2,1];
function reverse(arr) {
if(typeof arr != 'object') {
        throw new Error ('parameter type should be an array');

    } else if (arr.length == 0) {
        throw new Error ('parameter can\'t be an empty');
    } else {
    //реализация метода
    var res = [];
    for (var i = arr.length-1; i >= 0; i--) {
        res.push(arr[i]);
    }
}
return res;
}
//вызываем функцию и передаем в нее массив 
console.log(reverse(arr));