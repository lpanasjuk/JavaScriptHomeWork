function f(n) {
    let result;

    if(typeof n === 'number') {
        result = n*n*n;
    } else {
        throw new Error ('parameter type is not a Number');
    }

    return result;
};

var result = f(3);
console.log(result);