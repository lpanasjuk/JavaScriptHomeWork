function f() {
    var result = 0;
    for (var i = 0; i < arguments.length; i++) {
        if(typeof arguments[i] === 'number') {
    result += arguments[i];
        } else {
            throw new Error ('parameter type is not a Number');
        } 
    }
    return result;
    }
    f(1,2,3);