function getDivisors(n) {
var result = [];
    if(typeof n === 'number') {
        if(n != 0) {

    for (var i = 1; i <= n; i++) {
        if(n % i == 0) {
            result.unshift(n/i);
        }
    }
return result;
} else {
    throw new Error ('parameter can\'t be a 0');
}
    } else {
        throw new Error ('parameter type is not a Number');
    } 
}
getDivisors(12);
