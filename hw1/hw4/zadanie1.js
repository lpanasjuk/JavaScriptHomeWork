const arr = [1,2,3];

function forEach(arr, callback) {
	//Ваша реализация метода
	if(typeof arr === 'object') {
		if(typeof callback === 'function') {
    for (var i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    }
    } else {
    throw new Error ('the type of the second parameter is not a function'); 
}
    } else {
    throw new Error ('the type of the first parameter is not an array'); 
}
}


//вызываем функцию и передаем в нее первым аргументом - массив, вторым - функцию.
forEach(arr, function (item, i, arr) { 
     console.log(item, i, arr);
})
