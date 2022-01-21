function f(a, b, c) {
    var result = 0;
        if(typeof a === 'number' && typeof b === 'number' && typeof c === 'number') {
    
    result = (a - b)/c;
    
        } else {
            throw new Error ('parameter type is not a Number');
        } 
    return result;
    }
    f('s',9,3);