function f(arr) {
    if(typeof arr != 'object') {
        throw new Error ('parameter type should be an array');

    } else if (arr.length == 0) {
        throw new Error ('parameter can\'t be an empty');
    } else {
    console.log(arr.splice(0, 1));
    
    if (arr.length != 0) {
        f(arr);
    }
}
}